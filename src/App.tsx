import { useEffect, useState } from "react";
import { AppShell } from "./components/AppShell";
import { EditorPanel } from "./components/EditorPanel";
import { PreviewPanel } from "./components/PreviewPanel";
import { Toast } from "./components/Toast";
import { demoData } from "./data/demoData";
import { designPresetOrder } from "./data/designPresets";
import type { DesignPreset, Experience, PortfolioData, Project } from "./types";
import { downloadPortfolioHtml } from "./utils/exportHtml";
import { createId, loadData, saveData } from "./utils/storage";

function newProject(): Project {
  return {
    id: createId("project"),
    title: "New Project",
    description: "A refined project with a clear product story and polished interface.",
    tech: "React, TypeScript, Tailwind CSS",
    link: "",
    featured: false,
  };
}

function newExperience(): Experience {
  return {
    id: createId("experience"),
    company: "Organization",
    role: "Frontend Developer",
    period: "2026 - Present",
    description: "Designed and shipped user-facing interfaces with React and TypeScript.",
  };
}

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => loadData());
  const [toast, setToast] = useState("");

  useEffect(() => {
    saveData(data);
  }, [data]);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeoutId = window.setTimeout(() => setToast(""), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  function showToast(message: string) {
    setToast(message);
  }

  function updateField<K extends keyof PortfolioData>(key: K, value: PortfolioData[K]) {
    setData((current) => ({ ...current, [key]: value }));
  }

  function addSkill(skill: string) {
    setData((current) => {
      if (current.skills.some((item) => item.toLowerCase() === skill.toLowerCase())) {
        return current;
      }

      return { ...current, skills: [...current.skills, skill] };
    });
  }

  function removeSkill(skill: string) {
    setData((current) => ({
      ...current,
      skills: current.skills.filter((item) => item !== skill),
    }));
  }

  function addProject() {
    setData((current) => ({
      ...current,
      projects: [...current.projects, newProject()],
    }));
  }

  function removeProject(id: string) {
    setData((current) => ({
      ...current,
      projects: current.projects.filter((project) => project.id !== id),
    }));
  }

  function updateProject(id: string, patch: Partial<Project>) {
    setData((current) => ({
      ...current,
      projects: current.projects.map((project) =>
        project.id === id ? { ...project, ...patch } : project,
      ),
    }));
  }

  function addExperience() {
    setData((current) => ({
      ...current,
      experience: [...current.experience, newExperience()],
    }));
  }

  function removeExperience(id: string) {
    setData((current) => ({
      ...current,
      experience: current.experience.filter((item) => item.id !== id),
    }));
  }

  function updateExperience(id: string, patch: Partial<Experience>) {
    setData((current) => ({
      ...current,
      experience: current.experience.map((item) =>
        item.id === id ? { ...item, ...patch } : item,
      ),
    }));
  }

  function resetDemoData() {
    setData(demoData);
    showToast("Demo data restored");
  }

  function randomizeDesign() {
    setData((current) => {
      const options = designPresetOrder.filter(
        (preset) => preset !== current.designPreset,
      );
      const nextPreset =
        options[Math.floor(Math.random() * options.length)] ??
        ("midnight-indie" satisfies DesignPreset);

      return { ...current, designPreset: nextPreset };
    });
    showToast("Design preset randomized");
  }

  async function copyJson() {
    const payload = JSON.stringify(data, null, 2);

    try {
      await navigator.clipboard.writeText(payload);
      showToast("Portfolio JSON copied");
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = payload;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showToast("Portfolio JSON copied");
    }
  }

  function exportHtml() {
    downloadPortfolioHtml(data);
    showToast("portfolio.html downloaded");
  }

  function printPortfolio() {
    window.print();
  }

  return (
    <>
      <AppShell
        editor={
          <EditorPanel
            data={data}
            onFieldChange={updateField}
            onAddSkill={addSkill}
            onRemoveSkill={removeSkill}
            onAddProject={addProject}
            onRemoveProject={removeProject}
            onUpdateProject={updateProject}
            onAddExperience={addExperience}
            onRemoveExperience={removeExperience}
            onUpdateExperience={updateExperience}
            onReset={resetDemoData}
            onCopyJson={copyJson}
            onExportHtml={exportHtml}
            onPrint={printPortfolio}
            onRandomizeDesign={randomizeDesign}
          />
        }
        preview={
          <PreviewPanel
            data={data}
            onPreviewModeChange={(mode) => updateField("previewMode", mode)}
          />
        }
      />
      <Toast message={toast} />
    </>
  );
}
