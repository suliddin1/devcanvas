import { demoData } from "../data/demoData";
import { resolveDesignPreset } from "../data/designPresets";
import type { PortfolioData } from "../types";

export const STORAGE_KEY = "devcanvas-portfolio-data";

export function loadData(): PortfolioData {
  if (typeof window === "undefined") {
    return demoData;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return demoData;
    }

    const parsed = JSON.parse(stored) as Partial<PortfolioData>;
    return {
      ...demoData,
      ...parsed,
      designPreset: resolveDesignPreset(parsed.designPreset, parsed.theme),
    } as PortfolioData;
  } catch {
    return demoData;
  }
}

export function saveData(data: PortfolioData) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function createId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now().toString(36)}`;
}
