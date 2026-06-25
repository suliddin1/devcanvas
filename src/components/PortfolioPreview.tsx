import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { designPresets } from "../data/designPresets";
import type { PortfolioData } from "../types";
import { cn } from "../utils/cn";
import { getGmailComposeUrl, normalizeEmail } from "../utils/contactLinks";

type PortfolioPreviewProps = {
  data: PortfolioData;
};

function safeHref(value: string) {
  return value.trim() || undefined;
}

function cssBackground(value: string, fallback: string) {
  return value.startsWith("linear-gradient") || value.startsWith("radial-gradient")
    ? value
    : fallback;
}

function decorativeClass(name: string) {
  const classes: Record<string, string> = {
    grid:
      "before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] before:bg-[size:36px_36px] before:opacity-50",
    minimal:
      "before:absolute before:inset-x-8 before:top-8 before:h-px before:bg-current before:opacity-10",
    glass:
      "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.16),transparent_34%)] before:opacity-80",
    warm:
      "before:absolute before:inset-0 before:bg-[linear-gradient(120deg,rgba(255,255,255,0.36),transparent_42%)] before:opacity-80",
    scan:
      "before:absolute before:inset-0 before:bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] before:bg-[size:24px_24px] before:opacity-50",
    brutal:
      "before:absolute before:inset-x-5 before:top-5 before:h-2 before:bg-current before:opacity-100",
    editorial:
      "before:absolute before:inset-x-8 before:top-10 before:h-px before:bg-current before:opacity-20",
    blueprint:
      "before:absolute before:inset-0 before:bg-[linear-gradient(rgba(147,197,253,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.11)_1px,transparent_1px)] before:bg-[size:30px_30px] before:opacity-70",
    aurora:
      "before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(16,185,129,0.12),rgba(59,130,246,0.10),rgba(168,85,247,0.12))] before:opacity-80",
  };

  return classes[name] ?? "";
}

export function PortfolioPreview({ data }: PortfolioPreviewProps) {
  const preset = designPresets[data.designPreset];
  const isLight = data.previewMode === "light";
  const text = isLight ? "#111827" : preset.text;
  const muted = isLight ? "#475569" : preset.muted;
  const card = isLight ? "rgba(255,255,255,0.82)" : preset.card;
  const cardStrong = isLight ? "rgba(255,255,255,0.94)" : preset.cardStrong;
  const border = isLight ? "rgba(15,23,42,0.12)" : preset.border;
  const pageBg = isLight
    ? cssBackground(preset.background, "#f8fafc")
    : preset.background;
  const featuredProjects = [...data.projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured),
  );
  const buttonBackground = preset.button;
  const isCenteredHero = preset.heroClass.includes("text-center");
  const isBrutal = data.designPreset === "brutalist-dev";
  const isEditorial = data.designPreset === "editorial-serif";
  const isCyber =
    data.designPreset === "cyber-portfolio" || data.designPreset === "blueprint-grid";
  const email = normalizeEmail(data.email);
  const gmailComposeUrl = getGmailComposeUrl(data.email);

  return (
    <div
      className={cn(
        "portfolio-print relative min-h-full overflow-hidden rounded-b-lg px-5 py-6 sm:px-8 sm:py-8",
        decorativeClass(preset.decorative),
      )}
      style={{
        color: text,
        background: pageBg,
      }}
    >
      <div className="relative z-10">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className={cn(
            "grid gap-6 py-7 sm:py-10",
            preset.heroClass,
            isCenteredHero ? "justify-items-center" : "",
          )}
          style={{ marginBottom: preset.sectionGap }}
        >
          <div
            className="inline-flex w-fit items-center gap-2 border px-3 py-1.5 text-xs font-bold"
            style={{
              borderColor: border,
              borderRadius: preset.radius,
              background: preset.accentSoft,
              color: muted,
            }}
          >
            <BadgeCheck className="h-3.5 w-3.5" style={{ color: preset.accent }} />
            <span>Available for frontend projects</span>
          </div>

          <div className="grid gap-4">
            <h1
              className={cn(
                "max-w-4xl text-5xl leading-none tracking-normal sm:text-6xl lg:text-7xl",
                preset.headingClass,
              )}
            >
              {data.name}
            </h1>
            <p
              className={cn(
                "max-w-3xl text-2xl font-bold leading-tight tracking-normal sm:text-3xl",
                isEditorial ? "font-serif" : "",
              )}
              style={{ color: preset.accent }}
            >
              {data.role}
            </p>
            <p
              className="max-w-2xl text-base leading-7 sm:text-lg"
              style={{ color: muted }}
            >
              {data.bio}
            </p>
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center gap-3 text-sm",
              isCenteredHero ? "justify-center" : "",
            )}
            style={{ color: muted }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {data.location}
            </span>
            {email ? (
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {email}
              </span>
            ) : null}
          </div>

          <div className={cn("flex flex-wrap gap-2", isCenteredHero ? "justify-center" : "")}>
            {data.github ? (
              <a
                href={safeHref(data.github)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5"
                style={{
                  borderColor: border,
                  borderRadius: preset.radius,
                  background: preset.secondaryButton,
                }}
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            ) : null}
            {data.linkedin ? (
              <a
                href={safeHref(data.linkedin)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5"
                style={{
                  borderColor: border,
                  borderRadius: preset.radius,
                  background: preset.secondaryButton,
                }}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            ) : null}
            {gmailComposeUrl ? (
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                title="Open Gmail compose"
                aria-label="Open Gmail compose"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5"
                style={{
                  borderRadius: preset.radius,
                  background: buttonBackground,
                  color: preset.buttonText,
                  boxShadow: isBrutal ? preset.shadow : "none",
                }}
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            ) : null}
          </div>
        </motion.section>

        <section
          className="grid grid-cols-1 gap-3 sm:grid-cols-3"
          style={{ marginBottom: preset.sectionGap }}
        >
          {[
            ["5+", "Projects"],
            ["Modern", "UI"],
            ["Client-ready", "Delivery"],
          ].map(([stat, label]) => (
            <motion.article
              key={label}
              whileHover={{ y: -3 }}
              className={cn("border p-4", preset.cardClass)}
              style={{
                borderColor: border,
                borderRadius: preset.radius,
                background: card,
                boxShadow: preset.shadow,
              }}
            >
              <strong className="block text-2xl">{stat}</strong>
              <span className="text-sm font-semibold" style={{ color: muted }}>
                {label}
              </span>
            </motion.article>
          ))}
        </section>

        <section style={{ marginBottom: preset.sectionGap }}>
          <h2
            className={cn(
              "text-xl font-bold tracking-normal",
              isEditorial ? "font-serif text-2xl" : "",
              isCyber ? "uppercase" : "",
            )}
          >
            Skills
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className={cn("border px-3 py-1.5 text-xs font-bold", preset.skillClass)}
                style={{
                  borderColor: border,
                  background: preset.accentSoft,
                  color: isLight ? preset.accentText : preset.accent,
                  borderRadius: preset.skillClass.includes("rounded-none")
                    ? "0"
                    : undefined,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: preset.sectionGap }}>
          <h2
            className={cn(
              "text-xl font-bold tracking-normal",
              isEditorial ? "font-serif text-2xl" : "",
              isCyber ? "uppercase" : "",
            )}
          >
            Featured Projects
          </h2>
          <div
            className={cn(
              "mt-4 grid grid-cols-1 gap-3",
              isEditorial ? "lg:grid-cols-1" : "lg:grid-cols-2",
            )}
          >
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: isBrutal ? -1 : -4 }}
                className={cn("p-5", preset.cardClass, preset.projectClass)}
                style={{
                  borderColor: project.featured ? preset.accent : border,
                  borderRadius: preset.projectClass.includes("border-t")
                    ? "0"
                    : preset.radius,
                  background: project.featured ? cardStrong : card,
                  boxShadow: isBrutal ? preset.shadow : preset.shadow,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className={cn(
                      "text-lg font-bold tracking-normal",
                      isEditorial ? "font-serif text-2xl" : "",
                    )}
                  >
                    {project.title}
                  </h3>
                  {project.featured ? (
                    <span
                      className={cn(
                        "px-2.5 py-1 text-[11px] font-extrabold uppercase",
                        preset.skillClass,
                      )}
                      style={{
                        background: preset.accentSoft,
                        color: isLight ? preset.accentText : preset.accent,
                      }}
                    >
                      Featured
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-6" style={{ color: muted }}>
                  {project.description}
                </p>
                <p
                  className="mt-4 text-xs font-bold uppercase"
                  style={{ color: muted }}
                >
                  {project.tech}
                </p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold"
                    style={{ color: isLight ? preset.accentText : preset.accent }}
                  >
                    View project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </motion.article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: preset.sectionGap }}>
          <h2
            className={cn(
              "text-xl font-bold tracking-normal",
              isEditorial ? "font-serif text-2xl" : "",
              isCyber ? "uppercase" : "",
            )}
          >
            Experience
          </h2>
          <div className="mt-5 grid gap-4">
            {data.experience.map((item) => (
              <article key={item.id} className="relative pl-5">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 h-full w-px"
                  style={{ background: preset.accent }}
                />
                <span className="text-xs font-bold uppercase" style={{ color: muted }}>
                  {item.period}
                </span>
                <h3 className="mt-1 text-lg font-bold tracking-normal">{item.role}</h3>
                <p className="font-semibold" style={{ color: preset.accent }}>
                  {item.company}
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6" style={{ color: muted }}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className={cn("border p-6 text-center", preset.cardClass)}
          style={{
            borderColor: border,
            borderRadius: preset.radius,
            background: cardStrong,
            boxShadow: preset.shadow,
          }}
        >
          <h2
            className={cn(
              "text-2xl font-extrabold tracking-normal",
              isEditorial ? "font-serif text-3xl" : "",
            )}
          >
            Let&apos;s build something refined.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6" style={{ color: muted }}>
            Reach out for frontend projects, product interfaces, and polished portfolio work.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {gmailComposeUrl ? (
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noreferrer"
                title="Open Gmail compose"
                aria-label="Open Gmail compose"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold"
                style={{
                  borderRadius: preset.radius,
                  background: buttonBackground,
                  color: preset.buttonText,
                }}
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            ) : null}
            {data.website ? (
              <a
                href={data.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border px-4 py-2 text-sm font-bold"
                style={{
                  borderColor: border,
                  borderRadius: preset.radius,
                  background: preset.secondaryButton,
                }}
              >
                <Globe2 className="h-4 w-4" />
                Website
              </a>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}
