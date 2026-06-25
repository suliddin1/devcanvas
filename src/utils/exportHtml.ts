import { designPresets } from "../data/designPresets";
import type { PortfolioData } from "../types";
import { getGmailComposeUrl, normalizeEmail } from "./contactLinks";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function linkButton(label: string, href: string) {
  if (!href) {
    return "";
  }

  return `<a class="button secondary" href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${label}</a>`;
}

function gmailButton(className: string, label: string, email: string) {
  const gmailComposeUrl = getGmailComposeUrl(email);

  if (!gmailComposeUrl) {
    return "";
  }

  return `<a class="${className}" href="${escapeHtml(gmailComposeUrl)}" target="_blank" rel="noreferrer" title="Open Gmail compose" aria-label="Open Gmail compose">${label}</a>`;
}

function decorativeCss(decorative: string) {
  const styles: Record<string, string> = {
    grid:
      "body::before{background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:36px 36px;opacity:.46;}",
    minimal:
      ".page::before{content:'';display:block;height:1px;background:var(--border);margin-bottom:42px;}",
    glass:
      "body::before{background:radial-gradient(circle at 50% 0%,rgba(255,255,255,.15),transparent 34%);opacity:.8;}",
    warm:
      "body::before{background:linear-gradient(120deg,rgba(255,255,255,.32),transparent 44%);opacity:.8;}",
    scan:
      "body::before{background-image:linear-gradient(rgba(34,211,238,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,.08) 1px,transparent 1px);background-size:24px 24px;opacity:.6;}",
    brutal:
      ".page::before{content:'';display:block;height:10px;background:var(--text);margin-bottom:34px;}",
    editorial:
      ".page::before{content:'Selected Work';display:block;border-bottom:1px solid var(--border);padding-bottom:16px;margin-bottom:42px;color:var(--muted);font-size:12px;text-transform:uppercase;font-weight:800;}",
    blueprint:
      "body::before{background-image:linear-gradient(rgba(147,197,253,.11) 1px,transparent 1px),linear-gradient(90deg,rgba(147,197,253,.11) 1px,transparent 1px);background-size:30px 30px;opacity:.7;}",
    aurora:
      "body::before{background:linear-gradient(90deg,rgba(16,185,129,.12),rgba(59,130,246,.1),rgba(168,85,247,.12));opacity:.8;}",
  };

  return styles[decorative] ?? "";
}

export function buildPortfolioHtml(data: PortfolioData) {
  const preset = designPresets[data.designPreset];
  const isLight = data.previewMode === "light";
  const text = isLight ? "#111827" : preset.text;
  const muted = isLight ? "#475569" : preset.muted;
  const card = isLight ? "rgba(255,255,255,0.86)" : preset.card;
  const cardStrong = isLight ? "rgba(255,255,255,0.94)" : preset.cardStrong;
  const border = isLight ? "rgba(15,23,42,0.12)" : preset.border;
  const isEditorial = data.designPreset === "editorial-serif";
  const isBrutal = data.designPreset === "brutalist-dev";
  const isCentered =
    data.designPreset === "violet-glass" ||
    data.designPreset === "soft-clay" ||
    data.designPreset === "aurora-dark";
  const isSingleColumnProjects = isEditorial;
  const email = normalizeEmail(data.email);
  const skills = data.skills
    .map((skill) => `<span class="pill">${escapeHtml(skill)}</span>`)
    .join("");
  const projects = data.projects
    .map(
      (project) => `
        <article class="card project ${project.featured ? "is-featured" : ""}">
          <div class="project-heading">
            <h3>${escapeHtml(project.title)}</h3>
            ${project.featured ? '<span class="featured">Featured</span>' : ""}
          </div>
          <p>${escapeHtml(project.description)}</p>
          <span class="tech">${escapeHtml(project.tech)}</span>
          ${project.link ? `<a class="inline-link" href="${escapeHtml(project.link)}" target="_blank" rel="noreferrer">View project</a>` : ""}
        </article>
      `,
    )
    .join("");
  const experience = data.experience
    .map(
      (item) => `
        <article class="timeline-item">
          <span>${escapeHtml(item.period)}</span>
          <h3>${escapeHtml(item.role)}</h3>
          <strong>${escapeHtml(item.company)}</strong>
          <p>${escapeHtml(item.description)}</p>
        </article>
      `,
    )
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(data.name)} - Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      color-scheme: ${isLight ? "light" : "dark"};
      --text: ${text};
      --muted: ${muted};
      --card: ${card};
      --card-strong: ${cardStrong};
      --border: ${border};
      --accent: ${preset.accent};
      --accent-text: ${preset.accentText};
      --accent-soft: ${preset.accentSoft};
      --button: ${preset.button};
      --button-text: ${preset.buttonText};
      --secondary-button: ${preset.secondaryButton};
      --radius: ${preset.radius};
      --shadow: ${preset.shadow};
      --section-gap: ${preset.sectionGap};
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: Inter, system-ui, sans-serif;
      color: var(--text);
      background: ${preset.background};
      line-height: 1.6;
    }
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }
    ${decorativeCss(preset.decorative)}
    a { color: inherit; text-decoration: none; }
    .page {
      position: relative;
      z-index: 1;
      width: min(1120px, calc(100% - 32px));
      margin: 0 auto;
      padding: 72px 0;
    }
    .hero {
      min-height: 58vh;
      display: grid;
      align-content: center;
      justify-items: ${isCentered ? "center" : "start"};
      text-align: ${isCentered ? "center" : "left"};
      gap: 26px;
      margin-bottom: var(--section-gap);
    }
    .badge, .pill, .featured {
      width: fit-content;
      border: 1px solid var(--border);
      background: var(--accent-soft);
      border-radius: ${preset.skillClass.includes("rounded-none") ? "0" : preset.radius};
      padding: 8px 12px;
      color: ${isLight ? "var(--accent-text)" : "var(--accent)"};
      font-weight: 800;
      font-size: 13px;
      ${preset.skillClass.includes("uppercase") ? "text-transform: uppercase;" : ""}
    }
    h1 {
      margin: 0;
      max-width: 900px;
      font-size: clamp(42px, 8vw, 92px);
      line-height: 0.95;
      letter-spacing: 0;
      font-weight: 800;
      ${isEditorial ? "font-family: 'Playfair Display', Georgia, serif;" : ""}
      ${preset.headingClass.includes("uppercase") ? "text-transform: uppercase;" : ""}
    }
    h2 {
      margin: 0 0 20px;
      font-size: ${isEditorial ? "34px" : "30px"};
      letter-spacing: 0;
      ${isEditorial ? "font-family: 'Playfair Display', Georgia, serif;" : ""}
      ${preset.headingClass.includes("uppercase") ? "text-transform: uppercase;" : ""}
    }
    h3 {
      margin: 0;
      font-size: ${isEditorial ? "24px" : "20px"};
      letter-spacing: 0;
      ${isEditorial ? "font-family: 'Playfair Display', Georgia, serif;" : ""}
    }
    .role { color: var(--accent); font-size: clamp(24px, 3vw, 38px); font-weight: 800; }
    .bio { max-width: 720px; color: var(--muted); font-size: 20px; }
    .meta, .actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: ${isCentered ? "center" : "flex-start"}; }
    .meta { color: var(--muted); }
    .button, .email-button {
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 12px 16px;
      font-weight: 800;
    }
    .button.primary, .email-button {
      border-color: transparent;
      background: var(--button);
      color: var(--button-text);
      ${isBrutal ? "box-shadow: var(--shadow);" : ""}
    }
    .button.secondary { background: var(--secondary-button); }
    section { margin-top: 0; margin-bottom: var(--section-gap); }
    .stats, .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
    .grid { grid-template-columns: repeat(${isSingleColumnProjects ? "1" : "2"}, 1fr); }
    .card {
      border: ${isBrutal ? "2px" : "1px"} solid var(--border);
      background: var(--card);
      border-radius: var(--radius);
      padding: 22px;
      box-shadow: var(--shadow);
      backdrop-filter: blur(18px);
    }
    .project.is-featured { border-color: var(--accent); background: var(--card-strong); }
    .stat strong { display: block; font-size: 28px; }
    .stat span, p, .tech, .timeline-item span { color: var(--muted); }
    .skill-list { display: flex; flex-wrap: wrap; gap: 10px; }
    .project-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .tech { display: block; margin-top: 18px; font-weight: 800; text-transform: uppercase; font-size: 12px; }
    .inline-link { display: inline-block; margin-top: 16px; color: ${isLight ? "var(--accent-text)" : "var(--accent)"}; font-weight: 800; }
    .timeline { display: grid; gap: 16px; }
    .timeline-item { border-left: 2px solid var(--accent); padding-left: 18px; }
    .timeline-item strong { display: block; color: var(--accent); }
    .contact { display: grid; gap: 14px; text-align: center; background: var(--card-strong); }
    .contact .actions { justify-content: center; }
    @media (max-width: 760px) {
      .page { width: min(100% - 24px, 1120px); padding: 40px 0; }
      .stats, .grid { grid-template-columns: 1fr; }
      .bio { font-size: 17px; }
      h1 { font-size: clamp(40px, 15vw, 64px); }
    }
  </style>
</head>
<body>
  <main class="page">
    <section class="hero">
      <span class="badge">Available for frontend projects</span>
      <div>
        <h1>${escapeHtml(data.name)}</h1>
        <p class="role">${escapeHtml(data.role)}</p>
      </div>
      <p class="bio">${escapeHtml(data.bio)}</p>
      <div class="meta">
        <span>${escapeHtml(data.location)}</span>
        ${email ? `<span>${escapeHtml(email)}</span>` : ""}
      </div>
      <div class="actions">
        ${linkButton("GitHub", data.github)}
        ${linkButton("LinkedIn", data.linkedin)}
        ${linkButton("Website", data.website)}
        ${gmailButton("button primary", "Email", data.email)}
      </div>
    </section>
    <section class="stats">
      <div class="card stat"><strong>5+</strong><span>Projects</span></div>
      <div class="card stat"><strong>Modern</strong><span>UI</span></div>
      <div class="card stat"><strong>Client-ready</strong><span>Delivery</span></div>
    </section>
    <section>
      <h2>Skills</h2>
      <div class="skill-list">${skills}</div>
    </section>
    <section>
      <h2>Featured Projects</h2>
      <div class="grid">${projects}</div>
    </section>
    <section>
      <h2>Experience</h2>
      <div class="timeline">${experience}</div>
    </section>
    <section class="card contact">
      <h2>Let's build something refined.</h2>
      <p>Reach out for frontend projects, product interfaces, and polished portfolio work.</p>
      <div class="actions">
        ${gmailButton("email-button", `Email ${escapeHtml(data.name)}`, data.email)}
        ${linkButton("GitHub", data.github)}
        ${linkButton("LinkedIn", data.linkedin)}
      </div>
    </section>
  </main>
</body>
</html>`;
}

export function downloadPortfolioHtml(data: PortfolioData) {
  const html = buildPortfolioHtml(data);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "portfolio.html";
  anchor.click();
  URL.revokeObjectURL(url);
}
