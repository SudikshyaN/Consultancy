const universityStore = require('../models/university.store');
const userStore = require('../models/user.store');

function normalize(value) {
  return String(value || '').trim().toLowerCase();
}

function normalizeCountry(value) {
  const country = normalize(value);
  const aliases = {
    america: 'USA',
    india: 'India',
    uk: 'UK',
    'u.k.': 'UK',
    'united kingdom': 'UK',
    us: 'USA',
    'u.s.': 'USA',
    usa: 'USA',
    'united states': 'USA',
    'united states of america': 'USA',
  };

  return aliases[country] || String(value || '').trim();
}

function buildUniversityPayload(body) {
  return {
    ...body,
    country: normalizeCountry(body.country),
  };
}

function parseScore(value) {
  const score = Number.parseFloat(String(value || '').replace(/[^\d.]/g, ''));

  return Number.isFinite(score) ? score : null;
}

function includesAny(source = [], targets = []) {
  const normalizedSource = (source || []).map(normalize).filter(Boolean);
  const normalizedTargets = (targets || []).map(normalize).filter(Boolean);

  return normalizedTargets.some((target) =>
    normalizedSource.some((item) => item.includes(target) || target.includes(item))
  );
}

function getDegreeTerms(degree) {
  const normalizedDegree = normalize(degree);
  const terms = [normalizedDegree];

  if (/\b(bachelor|undergraduate|bsc|bs|ba|bba|beng|be|bit|bca)\b/.test(normalizedDegree)) {
    terms.push('bachelor', 'undergraduate');
  }

  if (/\b(master|graduate|msc|ms|ma|mba|meng)\b/.test(normalizedDegree)) {
    terms.push('master', 'graduate');
  }

  if (/\b(plus two|\+2|high school|secondary)\b/.test(normalizedDegree)) {
    terms.push('high school', 'secondary');
  }

  return terms.filter(Boolean);
}

function meetsMinimum(candidateScore, minimum) {
  return minimum === undefined || minimum === null || candidateScore === null || candidateScore >= minimum;
}

function programMatchesProfile(program, profile) {
  const studyFields = profile.studyFields || [];
  const programFields = program.fields || [];
  const programDegrees = program.degrees || [];
  const interestMatch = studyFields.length === 0 || includesAny(programFields, studyFields);
  const degreeMatch = !profile.degree || programDegrees.length === 0 || includesAny(programDegrees, getDegreeTerms(profile.degree));
  const gpa = parseScore(profile.gpa);
  const ielts = parseScore(profile.ielts);
  const toefl = parseScore(profile.toefl);
  const gmat = parseScore(profile.gmat);
  const academicMatch =
    meetsMinimum(gpa, program.minGpa) &&
    meetsMinimum(ielts, program.minIelts) &&
    meetsMinimum(toefl, program.minToefl) &&
    meetsMinimum(gmat, program.minGmat);

  return {
    matches: interestMatch && degreeMatch && academicMatch,
    matchedOn: {
      interests: interestMatch,
      degree: degreeMatch,
      academics: academicMatch,
    },
  };
}

function scoreUniversity(university, profile) {
  const matchingPrograms = university.programs
    .map((program) => {
      const result = programMatchesProfile(program, profile);

      return result.matches
        ? {
            name: program.name,
            fields: program.fields,
            matchedOn: result.matchedOn,
          }
        : null;
    })
    .filter(Boolean);

  return {
    matches: matchingPrograms.length > 0,
    matchingPrograms,
    score: matchingPrograms.length,
  };
}

async function getRecommendedUniversities(req, res, next) {
  try {
    const country = normalizeCountry(req.query.country || '');
    const user = await userStore.findById(req.user.sub);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const profile = user.profile || {};
    const universities = await universityStore.findByCountry(country);
    const recommendedUniversities = universities
      .map((university) => {
        const match = scoreUniversity(university.toObject({ versionKey: false }), profile);

        return match.matches
          ? {
              id: university.id,
              name: university.name,
              country: university.country,
              city: university.city,
              website: university.website,
              tuitionRange: university.tuitionRange,
              tags: university.tags,
              matchingPrograms: match.matchingPrograms,
              matchScore: match.score,
            }
          : null;
      })
      .filter(Boolean)
      .sort((a, b) => b.matchScore - a.matchScore || a.name.localeCompare(b.name));

    return res.json({
      country: country || 'ALL',
      profileChecked: {
        studyFields: profile.studyFields || [],
        degree: profile.degree || '',
        gpa: profile.gpa || '',
        ielts: profile.ielts || '',
        toefl: profile.toefl || '',
        gmat: profile.gmat || '',
      },
      universities: recommendedUniversities,
    });
  } catch (err) {
    return next(err);
  }
}

async function listUniversities(req, res, next) {
  try {
    const country = normalizeCountry(req.query.country || '');
    const universities = await universityStore.findAll(country);

    return res.json({ country: country || 'ALL', universities });
  } catch (err) {
    return next(err);
  }
}

async function createUniversity(req, res, next) {
  try {
    const university = await universityStore.create(buildUniversityPayload(req.body));

    return res.status(201).json({ message: 'University created', university });
  } catch (err) {
    return next(err);
  }
}

async function updateUniversity(req, res, next) {
  try {
    const university = await universityStore.update(req.params.id, buildUniversityPayload(req.body));

    if (!university) {
      return res.status(404).json({ message: 'University not found' });
    }

    return res.json({ message: 'University updated', university });
  } catch (err) {
    return next(err);
  }
}

async function deleteUniversity(req, res, next) {
  try {
    const university = await universityStore.remove(req.params.id);

    if (!university) {
      return res.status(404).json({ message: 'University not found' });
    }

    return res.json({ message: 'University deleted' });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createUniversity,
  deleteUniversity,
  getRecommendedUniversities,
  listUniversities,
  updateUniversity,
};
