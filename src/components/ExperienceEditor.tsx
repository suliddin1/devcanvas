import { Plus, Trash2 } from "lucide-react";
import type { Experience } from "../types";
import { TextArea } from "./TextArea";
import { TextInput } from "./TextInput";

type ExperienceEditorProps = {
  experience: Experience[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, patch: Partial<Experience>) => void;
};

export function ExperienceEditor({
  experience,
  onAdd,
  onRemove,
  onUpdate,
}: ExperienceEditorProps) {
  return (
    <div className="grid gap-3">
      {experience.map((item, index) => (
        <article
          key={item.id}
          className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3"
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xs font-semibold uppercase text-neutral-500">
              Experience {index + 1}
            </h3>
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              aria-label={`Remove ${item.role || "experience"}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-neutral-400 transition hover:bg-red-500/10 hover:text-red-200 focus:outline-none focus:ring-2 focus:ring-red-300/30"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          <TextInput
            label="Company / organization"
            value={item.company}
            onChange={(value) => onUpdate(item.id, { company: value })}
            placeholder="Company"
          />
          <TextInput
            label="Role"
            value={item.role}
            onChange={(value) => onUpdate(item.id, { role: value })}
            placeholder="Frontend Developer"
          />
          <TextInput
            label="Period"
            value={item.period}
            onChange={(value) => onUpdate(item.id, { period: value })}
            placeholder="2025 - Present"
          />
          <TextArea
            label="Experience description"
            value={item.description}
            onChange={(value) => onUpdate(item.id, { description: value })}
            rows={3}
            placeholder="What did you build?"
          />
        </article>
      ))}

      <button
        type="button"
        onClick={onAdd}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] text-sm font-semibold text-neutral-100 transition hover:-translate-y-0.5 hover:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
      >
        <Plus className="h-4 w-4" />
        Add experience
      </button>
    </div>
  );
}
