export function normalizeEmail(email: string): string {
  return email.trim().replace(/^mailto:/i, "").trim();
}

export function getGmailComposeUrl(email: string): string {
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedEmail) {
    return "";
  }

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(normalizedEmail)}`;
}

export function getMailtoUrl(email: string): string {
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedEmail) {
    return "";
  }

  return `mailto:${encodeURIComponent(normalizedEmail)}`;
}
