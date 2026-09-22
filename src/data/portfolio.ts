export const profile = {
  fullName: "Maxkee Sisomsouk",
  firstName: "Maxkee",
  job: "Full Stack Developer",
  tagline:
    "I design and ship mobile apps and web platforms — from idea to production.",
  location: "Vientiane, Laos",
  github: "https://github.com/Maxdevlao",
  whatsapp: "https://wa.me/8562058756644",
  whatsappDisplay: "+856 20 5875 6644",
  email: "maxkeedev@gmail.com",
};

export const stacks = [
  {
    label: "Mobile",
    description: "Cross-platform apps for iOS and Android",
    items: [
      { name: "Flutter", icon: "flutter" },
      { name: "React Native", icon: "reactnative" },
    ],
  },
  {
    label: "Frontend",
    description: "Modern web interfaces and SPAs",
    items: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "Vue.js", icon: "vue" },
    ],
  },
  {
    label: "Backend",
    description: "APIs and services on Node.js",
    items: [
      { name: "Express", icon: "express" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Prisma", icon: "prisma" },
    ],
  },
  {
    label: "Database",
    description: "Relational and realtime data stores",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    label: "Language",
    description: "Programming languages and frameworks",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Dart", icon: "dart" },
      { name: "PHP", icon: "php" },
    ],
  },
  {
    label: "UI Frameworks",
    description: "UI frameworks and libraries",
    items: [
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Material UI", icon: "materialui" },
      { name: "Ant Design", icon: "antdesign" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    label: "Tools",
    description: "Development tools",
    items: [
      { name: "VS Code", icon: "vscode" },
      { name: "Cursor", icon: "cursor" },
      { name: "Postman", icon: "postman" },
      { name: "Bruno", icon: "bruno" },
      { name: "Figma", icon: "figma" },
      { name: "Asana", icon: "asana" },
      { name: "Microsft Teams", icon: "microsoftteams" },
      { name: "Slack", icon: "slack" },
      { name: "ClickUp", icon: "clickup" },
      { name: "Jira", icon: "jira" },
    ],  
  },
  {
    label: "AI tools",
    description: "AI-powered tools",
    items: [
      { name: "OpenAI", icon: "openai" },
      { name: "ChatGPT", icon: "openai" },
      { name: "Claude", icon: "claude" },
      { name: "Gemini", icon: "gemini" },
    ],
  },
  {
    label: "Technologies/Tools",
    description: "Technologies and tools used in the projects",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitLab", icon: "gitlab" },
      { name: "Docker", icon: "docker" },
      { name: "Socket.io", icon: "socketio" },
      { name: "Firebase", icon: "firebase" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "CI/CD", icon: "cicd" },
      { name: "AWS", icon: "aws" },
      { name: "Azure", icon: "azure" },
    ],
  },
] as const;

export const projects = [
  {
    name: "Hyundai E&C E-commerce",
    type: "Web",
    note: "E-commerce experience for Hyundai E&C",
  },
  {
    name: "Integrated Rental Car Platform",
    type: "App & Web",
    note: "End-to-end vehicle rental system",
  },
  {
    name: "UNI Markethub",
    type: "App & Web",
    note: "Marketplace for buyers and sellers",
  },
  {
    name: "Lao Scratch Lottery",
    type: "App & Web",
    note: "Digital lottery experience for Lao users",
  },
  {
    name: "Reddify",
    type: "Web",
    note: "Web platform product",
  },
  {
    name: "TR3 & TRPRO",
    type: "App & Web",
    note: "Cross-platform product suite",
  },

  {
    name: "Football Stadium Booking",
    type: "App & Web",
    note: "Stadium scheduling and booking",
  },
];

export const experience = [
  {
    period: "2024 — Present",
    role: "Full Stack Developer",
    place: "ALC (Auton Lao Company)",
    details: [
      "Building and shipping full stack products across mobile and web.",
      "Develop and maintain full-stack web and mobile applications for business platforms.",
      "Develop backend services and REST APIs using Node.js, Express.js, Prisma, and PostgreSQL.",
      "Design database structures and business logic for complex applications.",
      "Integrate third-party services including Firebase, payment services, external APIs, and social platforms.",
      "Troubleshoot production issues involving APIs, networking, authentication, mobile builds, and server configuration.",
      "Participate in system architecture and technical decision-making for new features and platforms."
    ],
    href: "https://auton.kr/",
  },
  {
    period: "2022 — 2024",
    role: "Frontend Developer & Software tester",
    place: "Comet Digital Agency",
    details: [
      "Worked as a software tester and frontend developer across multiple projects.",
      "Build cross-platform mobile apps with Flutter",
      "Developed web interfaces and integrated frontend applications with backend APIs.",
      "Performed functional testing, regression testing, and bug verification.",
      "Identified and reported software defects and collaborated with developers to resolve issues.",
      "Tested application behavior across different environments and devices.",
      "Created and executed test cases and reproduced application issues.",
      "Collaborated with developers and team members to improve application quality and user experience.",
      "Write unit tests and integration tests for the frontend applications.",
    ],
    href: "https://comet.la/",
  },
  {
    period: "2022",
    role: "Data annotation",
    place: "Deepvisions",
    details: [
      "Worked on an image detection and machine learning project.",
      "Worked with machine learning and AI technologies to implement image recognition/detection functionality.",
      "Developed and integrated machine learning models for image analysis and object detection.",
      "Performed data annotation and labeling tasks to train and improve machine learning models.",
    ],
    href: "https://www.deepvisions.co.kr/",
  },
];

export const education = [
  {
    period: "2018 — 2022",
    role: "Website Development",
    place: "University of Laos (Bachelor degree)",
    detail: "Studied and practiced web development while at university.",
    href: null,
  },
  {
    period: "2018 — 2021",
    role: "Business English",
    place: "LaoVieng College",
    detail: "Completed Business English studies alongside technical work.",
    href: null,
  },
  {
    period: "2015 — 2018",
    role: "High School",
    place: "Naxaythong High School",
    detail: "Completed high school studies in Naxaythong High School.",
    href: null,
  }
] as const;
