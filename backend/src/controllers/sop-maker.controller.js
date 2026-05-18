const { GROQ_API_KEY, GROQ_MODEL } = require('../config/env');
const sopMakerStore = require('../models/sop-maker.store');

const GENERATION_SYSTEM_PROMPT = `
You are an Expert Career Coach and Executive Resume Writer.
Your goal is to synthesize the provided input data into a crisp, high-impact professional summary and highlight reel of the user's skills, talents, and achievements.

CRITICAL CONSTRAINTS:
- TONE: Professional, confident, and action-oriented.
- BREVITY: Eliminate all fluff and cliché buzzwords (e.g., "team player", "hard worker").
- FOCUS: Emphasize quantifiable achievements, unique talents, and core competencies.
- FORMAT: Return clean plain text only. Do not use markdown symbols such as #, ###, **, or ***. Use simple section labels and hyphen bullets.
`.trim();

const REVIEW_SYSTEM_PROMPT = `
You are a strict Recruiter and ATS (Applicant Tracking System) Expert.
Review the provided professional profile/summary for impact, clarity, and keyword optimization.
Return concise actionable feedback grouped under: Strengths, Weak Words to Remove, Missing Metrics, and Suggested Improvements.
`.trim();

function cleanField(value, maxLength = 2500) {
  return String(value || '').trim().slice(0, maxLength);
}

function normalizeFormData(body) {
  return {
    processName: cleanField(body.processName, 180),
    department: cleanField(body.department, 180),
    goal: cleanField(body.goal, 1000),
    audience: cleanField(body.audience, 800),
    roles: cleanField(body.roles, 1200),
    tools: cleanField(body.tools, 1200),
    steps: cleanField(body.steps, 2500),
    standards: cleanField(body.standards, 1000),
    risks: cleanField(body.risks, 1200),
  };
}

function buildGenerationPrompt(formData) {
  return `
Create a crisp, executive-level professional summary and highlight reel using the following raw candidate data. 
(Note: Extract the relevant skills, experience, and achievements from these fields, regardless of the field names).

Raw Candidate Data:
- Name / Primary Title: ${formData.processName}
- Target Industry / Dept: ${formData.department || 'Not specified'}
- Career Goal: ${formData.goal || 'Not specified'}
- Target Audience/Recruiters: ${formData.audience || 'Not specified'}
- Roles Held / Experience: ${formData.roles || 'Not specified'}
- Tools & Core Skills: ${formData.tools || 'Not specified'}
- Key Workflow / Actions Taken: ${formData.steps || 'Not specified'}
- Standards / Achievements: ${formData.standards || 'Not specified'}
- Challenges Overcome: ${formData.risks || 'Not specified'}

Include these sections strictly in this format:

Professional Profile Summary

Executive Summary
[Write a tightly crafted, 3-to-4 sentence paragraph. Hook the reader immediately with the candidate's core identity, years of experience, primary domain expertise, and unique value.]

Core Competencies & Talents
- [Skill Category 1]: [List 3-4 specific skills based on the tools/roles data]
- [Skill Category 2]: [List 3-4 specific skills]
- [Skill Category 3]: [List 3-4 specific skills]

Key Achievements & Highlights
- [Punchy bullet point starting with a strong action verb, highlighting a major achievement or action. Include metrics if provided.]
- [Punchy bullet point starting with a strong action verb.]
- [Punchy bullet point starting with a strong action verb.]
`.trim();
}

function buildReviewPrompt(content) {
  return `
Review this professional profile summary and suggest improvements to make it more attractive to top-tier recruiters:

${content}
`.trim();
}

function splitList(value) {
  return cleanField(value)
    .split(/[,;\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatList(items, fallback) {
  return items.length ? items.slice(0, 4).join(', ') : fallback;
}

function buildLocalSummary(formData) {
  const name = formData.processName;
  const field = formData.department || 'their target field';
  const goal = formData.goal || 'advance into a stronger academic or professional opportunity';
  const audience = formData.audience || 'admissions teams and recruiters';
  const experiences = splitList(formData.roles);
  const skills = splitList(formData.tools);
  const projects = splitList(formData.steps);
  const achievements = splitList(formData.standards);
  const challenges = splitList(formData.risks);

  return `
Professional Profile Summary

Executive Summary
${name} is a focused candidate building a profile in ${field}, with experience across ${formatList(experiences, 'academic, project, and applied learning settings')}. Their goal is to ${goal}, presenting a clear fit for ${audience}. They bring strengths in ${formatList(skills, 'problem solving, communication, research, and execution')}, supported by practical work such as ${formatList(projects, 'coursework, independent projects, and hands-on initiatives')}. Their profile shows resilience through ${formatList(challenges, 'overcoming constraints and solving problems with discipline')}.

Core Competencies & Talents
- Technical & Analytical Strengths: ${formatList(skills, 'research, analysis, digital tools, structured problem solving')}
- Experience & Execution: ${formatList(experiences, 'academic work, project ownership, collaboration, responsibility')}
- Growth & Impact: ${formatList(achievements, 'measurable progress, consistent learning, initiative, outcome focus')}

Key Achievements & Highlights
- Advanced a career direction in ${field} with a clear focus on ${goal}.
- Applied ${formatList(skills, 'core academic and professional skills')} through ${formatList(projects, 'relevant projects and practical work')}.
- Demonstrated resilience by addressing ${formatList(challenges, 'challenges, constraints, and learning gaps')} while continuing to build a stronger candidate profile.
`.trim();
}

function buildLocalReview(content) {
  const hasMetrics = /\d/.test(content);

  return `
# Strengths
- Clear structure with a professional summary, competencies, and achievement-focused bullets.
- Good starting point for a resume-based SOP summary.

# Weak Words to Remove
- Remove generic claims unless they are backed by proof.
- Replace broad phrasing with specific skills, tools, projects, and outcomes.

# Missing Metrics
- ${hasMetrics ? 'Some metrics are present. Add more context around what changed and why it mattered.' : 'Add numbers such as GPA, project results, ranking, users served, scores, timelines, or measurable improvements.'}

# Suggested Improvements
- Add 1-2 concrete projects with tools used and results achieved.
- Make the opening sentence state the target program, role, or industry clearly.
- Turn each highlight into an action-result bullet.
`.trim();
}

function createGroqBody({ system, userMessage, stream }) {
  return {
    model: GROQ_MODEL,
    max_tokens: 1500,
    temperature: 0.25,
    stream,
    messages: [
      {
        role: 'system',
        content: system,
      },
      {
        role: 'user',
        content: userMessage,
      },
    ],
  };
}

async function callGroq({ system, userMessage }) {
  if (!GROQ_API_KEY) {
    return buildLocalReview(userMessage);
  }

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify(createGroqBody({ system, userMessage, stream: false })),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    const err = new Error(payload?.error?.message || 'Groq could not complete the request.');
    err.status = response.status;
    throw err;
  }

  return payload?.choices?.[0]?.message?.content?.trim() || '';
}

function writeSse(res, event, data) {
  res.write(`event: ${event}\n`);
  res.write(`data: ${JSON.stringify(data)}\n\n`);
}

async function generateSop(req, res, next) {
  try {
    const formData = normalizeFormData(req.body);

    if (!formData.processName) {
      return res.status(400).json({ message: 'Name or primary title is required.' });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders?.();

    if (!GROQ_API_KEY) {
      writeSse(res, 'chunk', { text: buildLocalSummary(formData) });
      writeSse(res, 'done', { ok: true, fallback: true });
      return res.end();
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify(
        createGroqBody({
          system: GENERATION_SYSTEM_PROMPT,
          userMessage: buildGenerationPrompt(formData),
          stream: true,
        })
      ),
    });

    if (!response.ok || !response.body) {
      const payload = await response.json().catch(() => ({}));
      writeSse(res, 'error', {
        message: payload?.error?.message || 'Groq could not generate the resume summary.',
      });
      return res.end();
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      const eventBlocks = buffer.split('\n\n');
      buffer = eventBlocks.pop() || '';

      for (const block of eventBlocks) {
        const dataLine = block.split('\n').find((line) => line.startsWith('data: '));

        if (!dataLine) {
          continue;
        }

        const data = dataLine.slice(6);

        if (data === '[DONE]') {
          writeSse(res, 'done', { ok: true });
          continue;
        }

        let payload;
        try {
          payload = JSON.parse(data);
        } catch (err) {
          continue;
        }

        const text = payload?.choices?.[0]?.delta?.content;

        if (text) {
          writeSse(res, 'chunk', { text });
        }

        if (payload?.choices?.[0]?.finish_reason) {
          writeSse(res, 'done', { ok: true });
        }
      }
    }

    writeSse(res, 'done', { ok: true });
    return res.end();
  } catch (err) {
    return next(err);
  }
}

async function reviewSop(req, res, next) {
  try {
    const content = cleanField(req.body.content, 12000);

    if (!content) {
      return res.status(400).json({ message: 'Resume summary content is required for review.' });
    }

    const review = await callGroq({
      system: REVIEW_SYSTEM_PROMPT,
      userMessage: buildReviewPrompt(content),
    });

    return res.json({ review });
  } catch (err) {
    return next(err);
  }
}

async function submitToCommunity(req, res, next) {
  try {
    const formData = normalizeFormData(req.body.formData || {});
    const content = cleanField(req.body.content, 20000);
    const aiReview = cleanField(req.body.aiReview, 12000);

    if (!formData.processName || !content) {
      return res.status(400).json({ message: 'Name and resume summary content are required.' });
    }

    const submission = await sopMakerStore.createSubmission({
      author: req.user.sub,
      title: formData.processName,
      department: formData.department,
      formData,
      content,
      aiReview,
    });

    const populated = await submission.populate('author', 'name email');
    return res.status(201).json({ submission: populated });
  } catch (err) {
    return next(err);
  }
}

async function listCommunitySubmissions(req, res, next) {
  try {
    const submissions = await sopMakerStore.listSubmissions();
    return res.json({ submissions });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  generateSop,
  listCommunitySubmissions,
  reviewSop,
  submitToCommunity,
};
