export type ThemeName = "midnight" | "graphite" | "emerald" | "violet";

export type DesignPreset =
  | "midnight-indie"
  | "graphite-pro"
  | "emerald-founder"
  | "violet-glass"
  | "sunset-studio"
  | "arctic-minimal"
  | "cyber-portfolio"
  | "brutalist-dev"
  | "editorial-serif"
  | "soft-clay"
  | "blueprint-grid"
  | "aurora-dark";

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string;
  link: string;
  featured: boolean;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
};

export type PortfolioData = {
  name: string;
  role: string;
  location: string;
  email: string;
  bio: string;
  github: string;
  linkedin: string;
  website: string;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  designPreset: DesignPreset;
  theme: ThemeName;
  previewMode: "dark" | "light";
};
