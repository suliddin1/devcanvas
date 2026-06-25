import { motion } from "framer-motion";
import { Check, Shuffle } from "lucide-react";
import {
  designPresetOrder,
  designPresets,
} from "../data/designPresets";
import type { DesignPreset } from "../types";

type DesignPresetSelectorProps = {
  value: DesignPreset;
  onChange: (preset: DesignPreset) => void;
  onRandomize: () => void;
};

export function DesignPresetSelector({
  value,
  onChange,
  onRandomize,
}: DesignPresetSelectorProps) {
  return (
    <div className="grid gap-3">
      <div className="flex items-start justify-between gap-3">
        <p className="text-xs leading-5 text-neutral-500">
          Choose a visual direction for your portfolio.
        </p>
        <button
          type="button"
          onClick={onRandomize}
          className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] px-2.5 text-xs font-semibold text-neutral-200 transition hover:-translate-y-0.5 hover:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
        >
          <Shuffle className="h-3.5 w-3.5" />
          Random
        </button>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {designPresetOrder.map((presetName) => {
          const preset = designPresets[presetName];
          const selected = value === presetName;

          return (
            <motion.button
              key={presetName}
              type="button"
              onClick={() => onChange(presetName)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
              className="rounded-lg border p-3 text-left transition focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
              style={{
                borderColor: selected ? preset.accent : "rgba(255,255,255,0.10)",
                background: selected ? preset.accentSoft : "rgba(255,255,255,0.04)",
              }}
            >
              <span className="flex items-start justify-between gap-2">
                <span>
                  <span className="block text-sm font-semibold text-neutral-100">
                    {preset.label}
                  </span>
                  <span className="mt-1 block text-[11px] leading-4 text-neutral-500">
                    {preset.description}
                  </span>
                </span>
                {selected ? (
                  <Check className="h-4 w-4 shrink-0" style={{ color: preset.accent }} />
                ) : null}
              </span>

              <span className="mt-3 flex items-center justify-between gap-3">
                <span className="flex gap-1.5">
                  {preset.dots.map((dot) => (
                    <span
                      key={dot}
                      className="h-3 w-3 rounded-full border border-white/20"
                      style={{ backgroundColor: dot }}
                    />
                  ))}
                </span>
                <span className="text-[10px] font-semibold uppercase text-neutral-500">
                  {preset.bestFor}
                </span>
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
