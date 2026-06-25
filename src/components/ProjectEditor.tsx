import { Plus, Star, Trash2 } from "lucide-react";
import type { Project } from "../types";
import { TextArea } from "./TextArea";
import { TextInput } from "./TextInput";

type ProjectEditorProps = {
  projects: Project[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, patch: Partial<Project>) => void;
};

export function ProjectEditor({
  projects,
  onAdd,
  onRemove,
  onUpdate,
}: ProjectEditorProps) {
  return (
    <div className="grid gap-3">
      {projects.map((project, index) => (
        <article
          key={project.id}
          className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3"
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xs font-semibold uppercase text-neutral-500">
              Project {index + 1}
            </h3>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onUpdate(project.id, { featured: !project.featured })}
                className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2 text-xs font-semibold text-neutral-300 transition hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
              >
                <Star
                  className="h-3.5 w-3.5"
                  fill={project.featured ? "currentColor" : "none"}
                />
                Featured
              </button>
              <button
                type="button"
                onClick={() => onRemove(project.id)}
                aria-label={`Remove ${project.title || "project"}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-neutral-400 transition hover:bg-red-500/10 hover:text-red-200 focus:outline-none focus:ring-2 focus:ring-red-300/30"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          <TextInput
            label="Title"
            value={project.title}
            onChange={(value) => onUpdate(project.id, { title: value })}
            placeholder="Project title"
          />
          <TextArea
            label="Description"
            value={project.description}
            onChange={(value) => onUpdate(project.id, { description: value })}
            rows={3}
            placeholder="What does it do?"
          />
          <TextInput
            label="Tech stack"
            value={project.tech}
            onChange={(value) => onUpdate(project.id, { tech: value })}
            placeholder="React, TypeScript"
          />
          <TextInput
            label="Project link"
            value={project.link}
            onChange={(value) => onUpdate(project.id, { link: value })}
            placeholder="https://"
          />
        </article>
      ))}

      <button
        type="button"
        onClick={onAdd}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] text-sm font-semibold text-neutral-100 transition hover:-translate-y-0.5 hover:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
      >
        <Plus className="h-4 w-4" />
        Add project
      </button>
    </div>
  );
}
