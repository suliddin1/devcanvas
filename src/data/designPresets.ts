import type { DesignPreset } from "../types";

export type DecorativeStyle =
  | "grid"
  | "minimal"
  | "glass"
  | "warm"
  | "scan"
  | "brutal"
  | "editorial"
  | "blueprint"
  | "aurora";

export type DesignPresetConfig = {
  label: string;
  description: string;
  bestFor: string;
  mode: "dark" | "light";
  background: string;
  accent: string;
  accentText: string;
  accentSoft: string;
  text: string;
  muted: string;
  card: string;
  cardStrong: string;
  border: string;
  shadow: string;
  button: string;
  buttonText: string;
  secondaryButton: string;
  radius: string;
  sectionGap: string;
  heroClass: string;
  headingClass: string;
  cardClass: string;
  skillClass: string;
  projectClass: string;
  decorative: DecorativeStyle;
  dots: string[];
};

export const DEFAULT_DESIGN_PRESET: DesignPreset = "midnight-indie";

export const designPresetOrder: DesignPreset[] = [
  "midnight-indie",
  "graphite-pro",
  "emerald-founder",
  "violet-glass",
  "sunset-studio",
  "arctic-minimal",
  "cyber-portfolio",
  "brutalist-dev",
  "editorial-serif",
  "soft-clay",
  "blueprint-grid",
  "aurora-dark",
];

export const designPresets: Record<DesignPreset, DesignPresetConfig> = {
  "midnight-indie": {
    label: "Midnight Indie",
    description: "Dark, polished, indie hacker energy.",
    bestFor: "SaaS builders",
    mode: "dark",
    background:
      "radial-gradient(circle at 18% 10%, rgba(79, 70, 229, 0.34), transparent 30%), radial-gradient(circle at 84% 14%, rgba(6, 182, 212, 0.22), transparent 28%), linear-gradient(135deg, #06070d 0%, #090b12 50%, #020617 100%)",
    accent: "#67e8f9",
    accentText: "#155e75",
    accentSoft: "rgba(103, 232, 249, 0.14)",
    text: "#f8fafc",
    muted: "#94a3b8",
    card: "rgba(15, 23, 42, 0.72)",
    cardStrong: "rgba(15, 23, 42, 0.88)",
    border: "rgba(255, 255, 255, 0.12)",
    shadow: "0 24px 80px rgba(0,0,0,0.34)",
    button: "#67e8f9",
    buttonText: "#06222b",
    secondaryButton: "rgba(255,255,255,0.06)",
    radius: "20px",
    sectionGap: "44px",
    heroClass: "items-start text-left",
    headingClass: "font-extrabold",
    cardClass: "backdrop-blur-xl",
    skillClass: "rounded-full",
    projectClass: "border",
    decorative: "grid",
    dots: ["#6366f1", "#06b6d4", "#a5b4fc"],
  },
  "graphite-pro": {
    label: "Graphite Pro",
    description: "Minimal, serious, monochrome polish.",
    bestFor: "Full-stack engineers",
    mode: "dark",
    background:
      "linear-gradient(180deg, #0a0a0a 0%, #171717 48%, #0a0a0a 100%)",
    accent: "#f5f5f5",
    accentText: "#262626",
    accentSoft: "rgba(245, 245, 245, 0.10)",
    text: "#fafafa",
    muted: "#a3a3a3",
    card: "rgba(23, 23, 23, 0.84)",
    cardStrong: "rgba(10, 10, 10, 0.92)",
    border: "rgba(255,255,255,0.14)",
    shadow: "0 18px 50px rgba(0,0,0,0.22)",
    button: "#f5f5f5",
    buttonText: "#171717",
    secondaryButton: "rgba(255,255,255,0.045)",
    radius: "10px",
    sectionGap: "36px",
    heroClass: "items-start text-left",
    headingClass: "font-extrabold",
    cardClass: "shadow-none",
    skillClass: "rounded-md uppercase",
    projectClass: "border",
    decorative: "minimal",
    dots: ["#fafafa", "#a3a3a3", "#525252"],
  },
  "emerald-founder": {
    label: "Emerald Founder",
    description: "Confident startup product-builder mood.",
    bestFor: "Startup builders",
    mode: "dark",
    background:
      "radial-gradient(circle at 18% 12%, rgba(16, 185, 129, 0.30), transparent 32%), linear-gradient(135deg, #021c16 0%, #052e25 45%, #06130f 100%)",
    accent: "#34d399",
    accentText: "#047857",
    accentSoft: "rgba(52, 211, 153, 0.14)",
    text: "#ecfdf5",
    muted: "#a7f3d0",
    card: "rgba(6, 78, 59, 0.44)",
    cardStrong: "rgba(4, 47, 46, 0.82)",
    border: "rgba(167, 243, 208, 0.20)",
    shadow: "0 26px 80px rgba(2, 44, 34, 0.42)",
    button: "#34d399",
    buttonText: "#032018",
    secondaryButton: "rgba(167,243,208,0.08)",
    radius: "18px",
    sectionGap: "46px",
    heroClass: "items-start text-left",
    headingClass: "font-extrabold",
    cardClass: "backdrop-blur-xl",
    skillClass: "rounded-full",
    projectClass: "border-l-4",
    decorative: "glass",
    dots: ["#34d399", "#2dd4bf", "#bbf7d0"],
  },
  "violet-glass": {
    label: "Violet Glass",
    description: "Creative, frosted, Framer-like finish.",
    bestFor: "UI engineers",
    mode: "dark",
    background:
      "radial-gradient(circle at 24% 8%, rgba(124, 58, 237, 0.36), transparent 31%), radial-gradient(circle at 82% 18%, rgba(236, 72, 153, 0.20), transparent 28%), linear-gradient(135deg, #14091f 0%, #1f1140 48%, #09070f 100%)",
    accent: "#c4b5fd",
    accentText: "#6d28d9",
    accentSoft: "rgba(196, 181, 253, 0.14)",
    text: "#faf5ff",
    muted: "#ddd6fe",
    card: "rgba(46, 16, 101, 0.44)",
    cardStrong: "rgba(30, 18, 68, 0.82)",
    border: "rgba(221, 214, 254, 0.18)",
    shadow: "0 26px 90px rgba(76, 29, 149, 0.36)",
    button: "linear-gradient(135deg, #c4b5fd, #f0abfc)",
    buttonText: "#240a3d",
    secondaryButton: "rgba(255,255,255,0.07)",
    radius: "24px",
    sectionGap: "48px",
    heroClass: "items-center text-center",
    headingClass: "font-extrabold",
    cardClass: "backdrop-blur-2xl",
    skillClass: "rounded-full",
    projectClass: "border",
    decorative: "glass",
    dots: ["#8b5cf6", "#ec4899", "#c4b5fd"],
  },
  "sunset-studio": {
    label: "Sunset Studio",
    description: "Warm designer-developer studio energy.",
    bestFor: "Freelance developers",
    mode: "light",
    background:
      "linear-gradient(135deg, #fff7ed 0%, #ffe4e6 42%, #111827 100%)",
    accent: "#fb7185",
    accentText: "#be123c",
    accentSoft: "rgba(251, 113, 133, 0.16)",
    text: "#1f2937",
    muted: "#6b4f4f",
    card: "rgba(255, 247, 237, 0.84)",
    cardStrong: "rgba(255, 255, 255, 0.92)",
    border: "rgba(127, 29, 29, 0.14)",
    shadow: "0 24px 70px rgba(190, 18, 60, 0.18)",
    button: "linear-gradient(135deg, #fb7185, #f97316)",
    buttonText: "#fff7ed",
    secondaryButton: "rgba(255,255,255,0.66)",
    radius: "28px",
    sectionGap: "50px",
    heroClass: "items-start text-left",
    headingClass: "font-extrabold",
    cardClass: "shadow-lg",
    skillClass: "rounded-full",
    projectClass: "border",
    decorative: "warm",
    dots: ["#fb7185", "#f97316", "#fed7aa"],
  },
  "arctic-minimal": {
    label: "Arctic Minimal",
    description: "Clean, bright, crisp Apple-like calm.",
    bestFor: "Professional CVs",
    mode: "light",
    background:
      "linear-gradient(180deg, #ffffff 0%, #f1f5f9 55%, #e0f2fe 100%)",
    accent: "#2563eb",
    accentText: "#1d4ed8",
    accentSoft: "rgba(37, 99, 235, 0.10)",
    text: "#0f172a",
    muted: "#64748b",
    card: "rgba(255, 255, 255, 0.90)",
    cardStrong: "#ffffff",
    border: "rgba(15, 23, 42, 0.10)",
    shadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
    button: "#2563eb",
    buttonText: "#ffffff",
    secondaryButton: "rgba(255,255,255,0.82)",
    radius: "16px",
    sectionGap: "54px",
    heroClass: "items-start text-left",
    headingClass: "font-extrabold",
    cardClass: "shadow-sm",
    skillClass: "rounded-full",
    projectClass: "border",
    decorative: "minimal",
    dots: ["#ffffff", "#bfdbfe", "#2563eb"],
  },
  "cyber-portfolio": {
    label: "Cyber Portfolio",
    description: "Technical, electric, futuristic restraint.",
    bestFor: "Developer tools",
    mode: "dark",
    background:
      "linear-gradient(135deg, #020617 0%, #071a2f 52%, #020617 100%)",
    accent: "#22d3ee",
    accentText: "#0891b2",
    accentSoft: "rgba(34, 211, 238, 0.13)",
    text: "#ecfeff",
    muted: "#8bd5e6",
    card: "rgba(8, 47, 73, 0.40)",
    cardStrong: "rgba(12, 74, 110, 0.52)",
    border: "rgba(34, 211, 238, 0.28)",
    shadow: "0 0 44px rgba(34, 211, 238, 0.10)",
    button: "#22d3ee",
    buttonText: "#02131a",
    secondaryButton: "rgba(34,211,238,0.08)",
    radius: "6px",
    sectionGap: "40px",
    heroClass: "items-start text-left",
    headingClass: "font-extrabold uppercase",
    cardClass: "shadow-none",
    skillClass: "rounded-sm uppercase",
    projectClass: "border",
    decorative: "scan",
    dots: ["#22d3ee", "#38bdf8", "#0f172a"],
  },
  "brutalist-dev": {
    label: "Brutalist Dev",
    description: "Bold, raw, anti-template confidence.",
    bestFor: "Distinctive demos",
    mode: "light",
    background: "linear-gradient(180deg, #f8fafc 0%, #e5e5e5 100%)",
    accent: "#111827",
    accentText: "#111827",
    accentSoft: "rgba(17, 24, 39, 0.08)",
    text: "#09090b",
    muted: "#3f3f46",
    card: "#ffffff",
    cardStrong: "#fefce8",
    border: "#09090b",
    shadow: "8px 8px 0 rgba(9, 9, 11, 0.95)",
    button: "#09090b",
    buttonText: "#ffffff",
    secondaryButton: "#ffffff",
    radius: "2px",
    sectionGap: "38px",
    heroClass: "items-start text-left",
    headingClass: "font-extrabold uppercase",
    cardClass: "shadow-none",
    skillClass: "rounded-none uppercase",
    projectClass: "border-2",
    decorative: "brutal",
    dots: ["#09090b", "#ffffff", "#facc15"],
  },
  "editorial-serif": {
    label: "Editorial Serif",
    description: "Magazine-like personal brand polish.",
    bestFor: "Case studies",
    mode: "light",
    background:
      "linear-gradient(180deg, #fbfaf7 0%, #f1eee7 54%, #e7ded0 100%)",
    accent: "#9f1239",
    accentText: "#9f1239",
    accentSoft: "rgba(159, 18, 57, 0.10)",
    text: "#1c1917",
    muted: "#78716c",
    card: "rgba(255, 255, 255, 0.72)",
    cardStrong: "rgba(251, 250, 247, 0.94)",
    border: "rgba(28, 25, 23, 0.16)",
    shadow: "0 20px 60px rgba(68, 64, 60, 0.12)",
    button: "#9f1239",
    buttonText: "#fff7ed",
    secondaryButton: "rgba(255,255,255,0.62)",
    radius: "8px",
    sectionGap: "58px",
    heroClass: "items-start text-left",
    headingClass: "font-serif font-bold",
    cardClass: "shadow-none",
    skillClass: "rounded-full",
    projectClass: "border-t",
    decorative: "editorial",
    dots: ["#9f1239", "#78716c", "#f5f5f4"],
  },
  "soft-clay": {
    label: "Soft Clay",
    description: "Friendly, warm, polished student style.",
    bestFor: "Junior developers",
    mode: "light",
    background:
      "linear-gradient(145deg, #fff7ed 0%, #f5dfd0 48%, #d6b6a4 100%)",
    accent: "#c2410c",
    accentText: "#9a3412",
    accentSoft: "rgba(194, 65, 12, 0.12)",
    text: "#2f241f",
    muted: "#7c5f52",
    card: "rgba(255, 251, 235, 0.72)",
    cardStrong: "rgba(255, 247, 237, 0.88)",
    border: "rgba(124, 69, 42, 0.15)",
    shadow: "0 22px 58px rgba(124, 69, 42, 0.16)",
    button: "#c2410c",
    buttonText: "#fff7ed",
    secondaryButton: "rgba(255,255,255,0.52)",
    radius: "24px",
    sectionGap: "48px",
    heroClass: "items-center text-center",
    headingClass: "font-extrabold",
    cardClass: "shadow-md",
    skillClass: "rounded-full",
    projectClass: "border",
    decorative: "warm",
    dots: ["#c2410c", "#fdba74", "#fff7ed"],
  },
  "blueprint-grid": {
    label: "Blueprint Grid",
    description: "Technical architect and systems feel.",
    bestFor: "System designers",
    mode: "dark",
    background:
      "linear-gradient(135deg, #071a33 0%, #0b2a4a 48%, #020617 100%)",
    accent: "#60a5fa",
    accentText: "#1d4ed8",
    accentSoft: "rgba(96, 165, 250, 0.13)",
    text: "#eff6ff",
    muted: "#bfdbfe",
    card: "rgba(15, 23, 42, 0.56)",
    cardStrong: "rgba(15, 23, 42, 0.78)",
    border: "rgba(147, 197, 253, 0.26)",
    shadow: "0 22px 60px rgba(15, 23, 42, 0.28)",
    button: "#60a5fa",
    buttonText: "#061b33",
    secondaryButton: "rgba(147,197,253,0.08)",
    radius: "4px",
    sectionGap: "42px",
    heroClass: "items-start text-left",
    headingClass: "font-extrabold",
    cardClass: "shadow-none",
    skillClass: "rounded-sm uppercase",
    projectClass: "border",
    decorative: "blueprint",
    dots: ["#60a5fa", "#bfdbfe", "#1e3a8a"],
  },
  "aurora-dark": {
    label: "Aurora Dark",
    description: "Premium dark portfolio with aurora depth.",
    bestFor: "Impressive demos",
    mode: "dark",
    background:
      "linear-gradient(125deg, rgba(16, 185, 129, 0.28), transparent 28%), linear-gradient(220deg, rgba(59, 130, 246, 0.22), transparent 32%), linear-gradient(315deg, rgba(168, 85, 247, 0.22), transparent 30%), #050816",
    accent: "#a7f3d0",
    accentText: "#047857",
    accentSoft: "rgba(167, 243, 208, 0.13)",
    text: "#f8fafc",
    muted: "#cbd5e1",
    card: "rgba(15, 23, 42, 0.62)",
    cardStrong: "rgba(2, 6, 23, 0.76)",
    border: "rgba(255, 255, 255, 0.14)",
    shadow: "0 28px 90px rgba(15, 23, 42, 0.46)",
    button: "linear-gradient(135deg, #a7f3d0, #93c5fd)",
    buttonText: "#052e2b",
    secondaryButton: "rgba(255,255,255,0.07)",
    radius: "22px",
    sectionGap: "50px",
    heroClass: "items-center text-center",
    headingClass: "font-extrabold",
    cardClass: "backdrop-blur-xl",
    skillClass: "rounded-full",
    projectClass: "border",
    decorative: "aurora",
    dots: ["#a7f3d0", "#93c5fd", "#c4b5fd"],
  },
};

const legacyThemeMap: Record<string, DesignPreset> = {
  midnight: "midnight-indie",
  graphite: "graphite-pro",
  emerald: "emerald-founder",
  violet: "violet-glass",
};

export function resolveDesignPreset(value: unknown, legacyTheme?: unknown): DesignPreset {
  if (typeof value === "string" && value in designPresets) {
    return value as DesignPreset;
  }

  if (typeof legacyTheme === "string" && legacyTheme in legacyThemeMap) {
    return legacyThemeMap[legacyTheme];
  }

  return DEFAULT_DESIGN_PRESET;
}
