import { Copy, Download, Printer, RotateCcw } from "lucide-react";

type ActionBarProps = {
  onReset: () => void;
  onCopyJson: () => void;
  onExportHtml: () => void;
  onPrint: () => void;
};

export function ActionBar({
  onReset,
  onCopyJson,
  onExportHtml,
  onPrint,
}: ActionBarProps) {
  const actions = [
    { label: "Reset demo data", icon: RotateCcw, onClick: onReset },
    { label: "Copy JSON", icon: Copy, onClick: onCopyJson },
    { label: "Export HTML", icon: Download, onClick: onExportHtml },
    { label: "Print / Save PDF", icon: Printer, onClick: onPrint },
  ];

  return (
    <div className="action-bar grid gap-2">
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          onClick={action.onClick}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-3 text-sm font-semibold text-neutral-100 transition hover:-translate-y-0.5 hover:bg-white/[0.09] focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
        >
          <action.icon className="h-4 w-4" />
          {action.label}
        </button>
      ))}
    </div>
  );
}
