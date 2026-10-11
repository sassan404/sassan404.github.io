// Static CV content, normalised into tables so a skill can be joined back to
// the projects and roles that use it. No runtime store: everything below is
// resolved once at build time and baked into the exported HTML.
//
// The join tables are typed with the slug unions of the tables they reference,
// so a typo'd slug is a compile error rather than a silently empty page.

export const profile = {
  name: "Hasan Ismail",
  location: "Beirut, Lebanon",
  phone: "+961 81 498 774",
  email: "hasan.ism.404@gmail.com",
  linkedin: "https://www.linkedin.com/in/hasan-ismail",
  linkedinLabel: "linkedin.com/in/hasan-ismail",
  github: "https://github.com/sassan404",
  githubLabel: "github.com/sassan404",
};

export const education = [
  {
    degree: "Master's Degree in Telecom, Network and Security",
    schools:
      "Lebanese University, Faculty of Engineering and University of Saint Joseph",
    period: "September 2020 – September 2021",
  },
  {
    degree: "Engineering Degree in Computer and Communications",
    schools: "Lebanese University, Faculty of Engineering",
    period: "October 2014 – July 2020",
  },
];

export const languages = [
  { language: "Arabic", level: "Native or bilingual" },
  { language: "English", level: "Full professional proficiency" },
  { language: "French", level: "Elementary proficiency" },
];

// ponytail: issuer/period are optional because the CCNA entries are listed on
// LinkedIn without them. Fill them in and drop the `?`.
export const certifications = [
  {
    name: "Java (Intermediate)",
    issuer: "HackerRank",
    period: "September 2020",
  },
  { name: "CCNA 1 & 2", issuer: "", period: "" },
  { name: "CCNA Security", issuer: "", period: "" },
] as const satisfies readonly {
  name: string;
  issuer?: string;
  period?: string;
}[];

export const certLabel = (cert: (typeof certifications)[number]) =>
  [cert.name, cert.issuer, cert.period].filter(Boolean).join(", ");

export const skillGroups = [
  { slug: "programming", label: "Programming" },
  { slug: "databases", label: "Databases" },
  { slug: "tools", label: "Tools" },
  { slug: "ways-of-working", label: "Ways of working" },
] as const;

type GroupSlug = (typeof skillGroups)[number]["slug"];

type Skill = { slug: string; name: string; group: GroupSlug };

export const skills = [
  { slug: "javascript", name: "JavaScript", group: "programming" },
  { slug: "typescript", name: "TypeScript", group: "programming" },
  { slug: "angular", name: "Angular", group: "programming" },
  { slug: "angularjs", name: "AngularJS", group: "programming" },
  { slug: "nextjs", name: "Next.js", group: "programming" },
  { slug: "nodejs", name: "Node.js", group: "programming" },
  { slug: "java", name: "Java", group: "programming" },
  { slug: "spring-boot", name: "Spring Boot", group: "programming" },
  { slug: "scala", name: "Scala", group: "programming" },
  { slug: "machine-learning", name: "Machine Learning", group: "programming" },
  { slug: "d3js", name: "D3.js", group: "programming" },
  { slug: "cytoscapejs", name: "CytoscapeJS", group: "programming" },
  { slug: "sql", name: "SQL", group: "databases" },
  { slug: "postgresql", name: "PostgreSQL", group: "databases" },
  {
    slug: "firebase-realtime-db",
    name: "Firebase Realtime DB",
    group: "databases",
  },
  { slug: "mongodb", name: "MongoDB", group: "databases" },
  { slug: "firebase", name: "Firebase", group: "tools" },
  { slug: "google-cloud-platform", name: "Google Cloud Platform", group: "tools" },
  { slug: "aws", name: "AWS", group: "tools" },
  { slug: "vercel", name: "Vercel", group: "tools" },
  { slug: "clerk", name: "Clerk", group: "tools" },
  { slug: "docker", name: "Docker", group: "tools" },
  { slug: "android", name: "Android", group: "tools" },
  { slug: "android-studio", name: "Android Studio", group: "tools" },
  { slug: "postman", name: "Postman", group: "tools" },
  { slug: "git", name: "Git", group: "tools" },
  { slug: "github", name: "GitHub", group: "tools" },
  { slug: "gitlab", name: "GitLab", group: "tools" },
  { slug: "bitbucket", name: "Bitbucket", group: "tools" },
  { slug: "jira", name: "Jira", group: "tools" },
  { slug: "confluence", name: "Confluence", group: "tools" },
  { slug: "agile", name: "Agile", group: "ways-of-working" },
  { slug: "unit-testing", name: "Unit testing", group: "ways-of-working" },
  { slug: "problem-solving", name: "Problem solving", group: "ways-of-working" },
  { slug: "teamwork", name: "Teamwork", group: "ways-of-working" },
] as const satisfies readonly Skill[];

type SkillSlug = (typeof skills)[number]["slug"];

type Role = {
  slug: string;
  role: string;
  company: string;
  place: string;
  period: string;
  points: readonly string[];
};

export const experience = [
  {
    slug: "chou-force",
    role: "Freelance Software Developer",
    company: "Chou Force International",
    place: "Remote",
    period: "March 2025 – now",
    points: [
      "Full stack web development using Next.js",
      "Used services from AWS, Vercel and Clerk",
      "Took part in refactoring existing features and planning new ones",
    ],
  },
  {
    slug: "n-side",
    role: "Software Developer",
    company: "N-Side",
    place: "Louvain-la-Neuve",
    period: "March 2022 – September 2024",
    points: [
      "Full stack web development using Scala/Java and JavaScript/TypeScript",
      "Coordinated with my team and across different teams in an Agile environment",
      "Used Jira and Confluence for documentation, task management and project planning",
      "Conducted code reviews and managed CI/CD pipelines using GitLab",
      "Participated in deployment campaigns on an AWS infrastructure",
      "Owned important features including tests, simulations, database migrations and backend",
      "Built a mindset for unit testing and continuous integration",
    ],
  },
  {
    slug: "octalysis-prime",
    role: "Freelance Software Developer",
    company: "Octalysis Prime",
    place: "Remote",
    period: "November 2021 – February 2022",
    points: [
      "Performed a few developments using AngularJS and NodeJS",
      "Collaborated on important feature updates, including animating the background of the home view and adding user facing functionalities",
    ],
  },
  {
    slug: "troyes-iot",
    role: "IoT Research Intern",
    company: "University of Technology of Troyes",
    place: "Troyes, France",
    period: "March 2021 – September 2021",
    points: [
      "Built an IoT model to help assess the health state of the elderly",
      "Applied security methods such as encryption, hashing and authentication",
      "Used machine learning algorithms (supervised and reinforcement learning) to analyze sensor data",
    ],
  },
  {
    slug: "troyes-se",
    role: "Software Engineering Intern",
    company: "University of Technology of Troyes",
    place: "Troyes, France",
    period: "March 2020 – September 2020",
    points: [
      "Built a prototype to connect medical sensors with doctors",
      "Used Java, Spring Boot, Angular, Android Studio and Google Cloud Platform",
    ],
  },
  {
    slug: "intertech",
    role: "Software Development Intern",
    company: "Intertech Group",
    place: "Beirut, Lebanon",
    period: "June 2018 – December 2018",
    points: [
      "Developed with native JavaScript and libraries, mainly CytoscapeJS and D3.js",
      "Solved mainly front-end tasks in a team with back-end Java developers",
    ],
  },
] as const satisfies readonly Role[];

type RoleSlug = (typeof experience)[number]["slug"];

type Project = { slug: string; name: string; copy: string; href?: string };

export const projects = [
  {
    slug: "lingue-clash",
    name: "Lingue Clash",
    copy: "A game to practice languages with friends. Angular on the frontend, Firebase for backend, database and hosting.",
    href: "https://lingue-clash--word-clash-2aa96.europe-west4.hosted.app/",
  },
  {
    slug: "prayer-helper",
    name: "Prayer Helper",
    copy: "A mobile app to help me with my daily prayers. Built with Android Studio and Java, published on Google Play.",
  },
  {
    slug: "portfolio-website",
    name: "Portfolio Website",
    copy: "This site: responsive pages, accessible navigation and static export to GitHub Pages.",
  },
] as const satisfies readonly Project[];

type ProjectSlug = (typeof projects)[number]["slug"];

const projectSkills = [
  { project: "lingue-clash", skill: "angular" },
  { project: "lingue-clash", skill: "firebase" },
  { project: "prayer-helper", skill: "java" },
  { project: "prayer-helper", skill: "android" },
  { project: "portfolio-website", skill: "nextjs" },
  { project: "portfolio-website", skill: "typescript" },
] as const satisfies readonly { project: ProjectSlug; skill: SkillSlug }[];

const roleSkills = [
  { experience: "chou-force", skill: "nextjs" },
  { experience: "chou-force", skill: "aws" },
  { experience: "chou-force", skill: "vercel" },
  { experience: "chou-force", skill: "clerk" },
  { experience: "n-side", skill: "scala" },
  { experience: "n-side", skill: "java" },
  { experience: "n-side", skill: "javascript" },
  { experience: "n-side", skill: "typescript" },
  { experience: "n-side", skill: "agile" },
  { experience: "n-side", skill: "jira" },
  { experience: "n-side", skill: "confluence" },
  { experience: "n-side", skill: "gitlab" },
  { experience: "n-side", skill: "aws" },
  { experience: "n-side", skill: "unit-testing" },
  { experience: "octalysis-prime", skill: "angularjs" },
  { experience: "octalysis-prime", skill: "nodejs" },
  { experience: "troyes-iot", skill: "machine-learning" },
  { experience: "troyes-se", skill: "java" },
  { experience: "troyes-se", skill: "spring-boot" },
  { experience: "troyes-se", skill: "angular" },
  { experience: "troyes-se", skill: "android-studio" },
  { experience: "troyes-se", skill: "google-cloud-platform" },
  { experience: "intertech", skill: "javascript" },
  { experience: "intertech", skill: "cytoscapejs" },
  { experience: "intertech", skill: "d3js" },
] as const satisfies readonly { experience: RoleSlug; skill: SkillSlug }[];

// ---- selectors -------------------------------------------------------------

const bySlug = <T extends { slug: string }>(rows: readonly T[]) =>
  new Map(rows.map((row) => [row.slug, row] as const));

const groupBy = <T>(rows: readonly T[], key: (row: T) => string) => {
  const out = new Map<string, T[]>();
  for (const row of rows) {
    const bucket = out.get(key(row));
    if (bucket) bucket.push(row);
    else out.set(key(row), [row]);
  }
  return out;
};

const skillIndex: Map<string, Skill> = bySlug(skills);
const groupIndex: Map<string, (typeof skillGroups)[number]> = bySlug(skillGroups);
const projectIndex: Map<string, Project> = bySlug(projects);
const roleIndex: Map<string, Role> = bySlug(experience);

const skillsOfProject = groupBy(projectSkills, (row) => row.project);
const skillsOfRole = groupBy(roleSkills, (row) => row.experience);
const projectsOfSkill = groupBy(projectSkills, (row) => row.skill);
const rolesOfSkill = groupBy(roleSkills, (row) => row.skill);

// the slug unions above guarantee every join row resolves
const lookupSkills = (rows: readonly { skill: SkillSlug }[] | undefined) =>
  (rows ?? []).map((row) => skillIndex.get(row.skill)!);

export const skillsByGroup: {
  slug: string;
  label: string;
  skills: readonly Skill[];
}[] = skillGroups.map((group) => ({
  ...group,
  skills: skills.filter((skill) => skill.group === group.slug),
}));

export const projectsWithSkills: (Project & { skills: readonly Skill[] })[] =
  projects.map((project) => ({
    ...project,
    skills: lookupSkills(skillsOfProject.get(project.slug)),
  }));

export const experienceWithSkills: (Role & { skills: readonly Skill[] })[] =
  experience.map((role) => ({
    ...role,
    skills: lookupSkills(skillsOfRole.get(role.slug)),
  }));

export const skillSlugs = skills.map((skill) => skill.slug);

export const skillDetail = (slug: string) => {
  const skill = skillIndex.get(slug);
  if (!skill) return null;

  return {
    skill,
    group: groupIndex.get(skill.group)!,
    projects: (projectsOfSkill.get(skill.slug) ?? []).map(
      (row) => projectIndex.get(row.project)!,
    ),
    experience: (rolesOfSkill.get(skill.slug) ?? []).map(
      (row) => roleIndex.get(row.experience)!,
    ),
  };
};