const userStore = require('../models/user.store');
const wishlistStore = require('../models/wishlist.store');

const PROFILE_FIELDS = [
  'dob',
  'phone',
  'nationality',
  'city',
  'about',
  'degree',
  'gpa',
  'university',
  'graduationYear',
  'studyFields',
  'preferredCountries',
  'intakeYear',
];

function hasValue(value) {
  return Array.isArray(value) ? value.length > 0 : Boolean(value);
}

function getProfileCompletion(user) {
  const profile = user.profile || {};
  const completedFields = PROFILE_FIELDS.filter((field) => hasValue(profile[field])).length;

  return Math.round((completedFields / PROFILE_FIELDS.length) * 100);
}

async function buildJourney(user) {
  const profileCompletion = getProfileCompletion(user);
  const savedUniversities = user.savedUniversities || [];
  const savedDestinationsCount = await wishlistStore.countByUser(user.id);
  const applications = user.applications || [];
  const preferredCountries = user.profile?.preferredCountries || [];
  const savedCount = savedUniversities.length + savedDestinationsCount;
  const hasExplored = savedCount > 0 || preferredCountries.length > 0;
  const hasApplied = applications.some((application) =>
    ['applied', 'under-review', 'accepted', 'rejected', 'visa-ready'].includes(application.status)
  );
  const visaReady = applications.some((application) =>
    ['accepted', 'visa-ready'].includes(application.status)
  );

  const steps = [
    {
      key: 'profile',
      label: 'Complete profile',
      route: '/dashboard/profile',
      complete: profileCompletion >= 70,
      meta: `${profileCompletion}% complete`,
    },
    {
      key: 'explore',
      label: 'Explore & save unis',
      route: '/dashboard/wishlist',
      complete: hasExplored,
      meta: `${savedCount} saved`,
    },
    {
      key: 'apply',
      label: 'Apply',
      route: '/dashboard/main',
      complete: hasApplied,
      meta: `${applications.length} application${applications.length === 1 ? '' : 's'}`,
    },
    {
      key: 'visa',
      label: 'Visa & travel',
      route: '/dashboard/main',
      complete: visaReady,
      meta: visaReady ? 'Ready for visa prep' : 'Unlocks after acceptance',
    },
  ];

  const activeIndex = Math.max(steps.findIndex((step) => !step.complete), 0);

  return {
    activeIndex,
    steps: steps.map((step, index) => ({
      ...step,
      state: step.complete ? 'complete' : index === activeIndex ? 'active' : 'upcoming',
      number: index + 1,
    })),
  };
}

async function getOverview(req, res, next) {
  try {
    const user = await userStore.findById(req.user.sub);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      greetingName: user.name || user.email,
      journey: await buildJourney(user),
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getOverview,
};
