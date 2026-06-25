import { Plus, X } from "lucide-react";
import { useState } from "react";

type SkillEditorProps = {
  skills: string[];
  onAdd: (skill: string) => void;
  onRemove: (skill: string) => void;
};

export function SkillEditor({ skills, onAdd, onRemove }: SkillEditorProps) {
  const [draft, setDraft] = useState("");

  function submitSkill() {
    const value = draft.trim();
    if (!value) {
      return;
    }

    onAdd(value);
    setDraft("");
  }

  return (
    <div className="grid gap-3">
      <label className="grid gap-2 text-sm font-medium text-neutral-200" htmlFor="skill">
        Skill
        <div className="flex gap-2">
          <input
            id="skill"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                submitSkill();
              }
            }}
            placeholder="Add a skill"
            className="h-11 min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.045] px-3 text-sm text-neutral-50 outline-none transition placeholder:text-neutral-600 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15"
          />
          <button
            type="button"
            onClick={submitSkill}
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-3 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/15 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>
      </label>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-neutral-200"
          >
            {skill}
            <button
              type="button"
              onClick={() => onRemove(skill)}
              aria-label={`Remove ${skill}`}
              title={`Remove ${skill}`}
              className="inline-flex h-5 w-5 items-center justify-center rounded-full text-neutral-500 transition hover:bg-white/10 hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
