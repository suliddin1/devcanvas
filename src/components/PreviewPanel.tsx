import { Moon, Sun } from "lucide-react";
import { designPresets } from "../data/designPresets";
import type { PortfolioData } from "../types";
import { PortfolioPreview } from "./PortfolioPreview";

type PreviewPanelProps = {
  data: PortfolioData;
  onPreviewModeChange: (mode: PortfolioData["previewMode"]) => void;
};

export function PreviewPanel({ data, onPreviewModeChange }: PreviewPanelProps) {
  const isDark = data.previewMode === "dark";
  const preset = designPresets[data.designPreset];

  return (
    <section className="preview-panel min-w-0 lg:sticky lg:top-5 lg:h-[calc(100vh-40px)]">
      <div className="preview-toolbar mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-cyan-200/80">
            Preview · {preset.label}
          </p>
          <h2 className="mt-1 text-xl font-bold tracking-normal text-neutral-50">
            Portfolio page
          </h2>
        </div>
        <div className="inline-flex rounded-lg border border-white/10 bg-white/[0.05] p-1">
          <button
            type="button"
            onClick={() => onPreviewModeChange("dark")}
            className="inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
            aria-pressed={isDark}
            style={{
              background: isDark ? "rgba(255,255,255,0.12)" : "transparent",
              color: isDark ? "#fafafa" : "#a3a3a3",
            }}
          >
            <Moon className="h-4 w-4" />
            Dark
          </button>
          <button
            type="button"
            onClick={() => onPreviewModeChange("light")}
            className="inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
            aria-pressed={!isDark}
            style={{
              background: !isDark ? "rgba(255,255,255,0.92)" : "transparent",
              color: !isDark ? "#111827" : "#a3a3a3",
            }}
          >
            <Sun className="h-4 w-4" />
            Light
          </button>
        </div>
      </div>

      <div className="preview-frame overflow-hidden rounded-lg border border-white/[0.12] bg-neutral-950/70 shadow-frame backdrop-blur-xl lg:h-[calc(100%-72px)] lg:overflow-y-auto">
        <div className="app-chrome flex h-11 items-center justify-between border-b border-white/10 bg-white/[0.04] px-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="hidden rounded-full border border-white/10 bg-black/20 px-4 py-1 text-xs font-medium text-neutral-500 sm:block">
            devcanvas.preview
          </div>
          <div className="w-14" />
        </div>
        <PortfolioPreview data={data} />
      </div>
    </section>
  );
}
