import type { PortfolioData } from "../types";

export const demoData: PortfolioData = {
  name: "Ayan Mammadov",
  role: "Frontend Developer",
  location: "Baku, Azerbaijan",
  email: "ayan.dev@example.com",
  bio: "I design and build polished web interfaces with React, TypeScript, and careful attention to interaction details.",
  github: "https://github.com/ayan-dev",
  linkedin: "https://www.linkedin.com/in/ayan-dev",
  website: "https://ayan.dev",
  skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "UI Engineering"],
  projects: [
    {
      id: "project-devcanvas",
      title: "DevCanvas",
      description:
        "A browser-based portfolio builder with live preview and static HTML export.",
      tech: "React, TypeScript, Tailwind CSS",
      link: "https://devcanvas.example.com",
      featured: true,
    },
    {
      id: "project-codeverse",
      title: "CodeVerse Compiler UI",
      description:
        "A polished interface concept for running and testing code directly in the browser.",
      tech: "Next.js, TypeScript, Judge0",
      link: "",
      featured: false,
    },
    {
      id: "project-study-planner",
      title: "Study Planner",
      description:
        "A focused study planning tool for students to organize exams and weekly goals.",
      tech: "React, LocalStorage, Tailwind CSS",
      link: "",
      featured: false,
    },
  ],
  experience: [
    {
      id: "experience-freelance",
      company: "Freelance / Student Projects",
      role: "Frontend Developer",
      period: "2025 - Present",
      description:
        "Building small web products, landing pages, and portfolio interfaces with React and TypeScript.",
    },
  ],
  designPreset: "midnight-indie",
  theme: "midnight",
  previewMode: "dark",
};
