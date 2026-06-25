import { Code2, Github, Globe2, Linkedin, Mail, MapPin, UserRound } from "lucide-react";
import type { DesignPreset, Experience, PortfolioData, Project } from "../types";
import { ActionBar } from "./ActionBar";
import { DesignPresetSelector } from "./DesignPresetSelector";
import { ExperienceEditor } from "./ExperienceEditor";
import { ProjectEditor } from "./ProjectEditor";
import { SectionCard } from "./SectionCard";
import { SkillEditor } from "./SkillEditor";
import { TextArea } from "./TextArea";
import { TextInput } from "./TextInput";

type EditorPanelProps = {
  data: PortfolioData;
  onFieldChange: <K extends keyof PortfolioData>(key: K, value: PortfolioData[K]) => void;
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (skill: string) => void;
  onAddProject: () => void;
  onRemoveProject: (id: string) => void;
  onUpdateProject: (id: string, patch: Partial<Project>) => void;
  onAddExperience: () => void;
  onRemoveExperience: (id: string) => void;
  onUpdateExperience: (id: string, patch: Partial<Experience>) => void;
  onReset: () => void;
  onCopyJson: () => void;
  onExportHtml: () => void;
  onPrint: () => void;
  onRandomizeDesign: () => void;
};

export function EditorPanel({
  data,
  onFieldChange,
  onAddSkill,
  onRemoveSkill,
  onAddProject,
  onRemoveProject,
  onUpdateProject,
  onAddExperience,
  onRemoveExperience,
  onUpdateExperience,
  onReset,
  onCopyJson,
  onExportHtml,
  onPrint,
  onRandomizeDesign,
}: EditorPanelProps) {
  return (
    <aside className="editor-panel min-w-0 lg:sticky lg:top-5 lg:h-[calc(100vh-40px)] lg:overflow-y-auto">
      <div className="mb-5 rounded-lg border border-white/10 bg-neutral-950/60 p-5 shadow-soft backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-300 text-neutral-950">
            <Code2 className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-normal text-neutral-50">
              DevCanvas
            </h1>
            <p className="text-sm text-neutral-500">Build a portfolio without code.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <SectionCard title="Identity">
          <TextInput
            label="Full name"
            value={data.name}
            onChange={(value) => onFieldChange("name", value)}
            placeholder="Your name"
            icon={UserRound}
          />
          <TextInput
            label="Role / headline"
            value={data.role}
            onChange={(value) => onFieldChange("role", value)}
            placeholder="Frontend Developer"
          />
          <TextInput
            label="Location"
            value={data.location}
            onChange={(value) => onFieldChange("location", value)}
            placeholder="City, country"
            icon={MapPin}
          />
          <TextInput
            label="Email"
            value={data.email}
            onChange={(value) => onFieldChange("email", value)}
            placeholder="you@example.com"
            icon={Mail}
            type="email"
          />
          <TextArea
            label="Bio"
            value={data.bio}
            onChange={(value) => onFieldChange("bio", value)}
            placeholder="A concise intro"
          />
        </SectionCard>

        <SectionCard title="Social links">
          <TextInput
            label="GitHub URL"
            value={data.github}
            onChange={(value) => onFieldChange("github", value)}
            placeholder="https://github.com/you"
            icon={Github}
          />
          <TextInput
            label="LinkedIn URL"
            value={data.linkedin}
            onChange={(value) => onFieldChange("linkedin", value)}
            placeholder="https://linkedin.com/in/you"
            icon={Linkedin}
          />
          <TextInput
            label="Personal website URL"
            value={data.website}
            onChange={(value) => onFieldChange("website", value)}
            placeholder="https://your-site.com"
            icon={Globe2}
          />
        </SectionCard>

        <SectionCard title="Skills">
          <SkillEditor skills={data.skills} onAdd={onAddSkill} onRemove={onRemoveSkill} />
        </SectionCard>

        <SectionCard title="Projects">
          <ProjectEditor
            projects={data.projects}
            onAdd={onAddProject}
            onRemove={onRemoveProject}
            onUpdate={onUpdateProject}
          />
        </SectionCard>

        <SectionCard title="Experience">
          <ExperienceEditor
            experience={data.experience}
            onAdd={onAddExperience}
            onRemove={onRemoveExperience}
            onUpdate={onUpdateExperience}
          />
        </SectionCard>

        <SectionCard
          title="Design Preset"
          description="Pick a visual style. Each preset changes layout mood, cards, accents, and background."
        >
          <DesignPresetSelector
            value={data.designPreset}
            onChange={(preset: DesignPreset) => onFieldChange("designPreset", preset)}
            onRandomize={onRandomizeDesign}
          />
        </SectionCard>

        <SectionCard title="Actions">
          <ActionBar
            onReset={onReset}
            onCopyJson={onCopyJson}
            onExportHtml={onExportHtml}
            onPrint={onPrint}
          />
        </SectionCard>
      </div>
    </aside>
  );
}
