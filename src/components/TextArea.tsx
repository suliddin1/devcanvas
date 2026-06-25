import { useId } from "react";

type TextAreaProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
};

export function TextArea({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
}: TextAreaProps) {
  const generatedId = useId();
  const id = `${label.toLowerCase().replace(/\s+/g, "-")}-${generatedId}`;

  return (
    <label className="grid gap-2 text-sm font-medium text-neutral-200" htmlFor={id}>
      {label}
      <textarea
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full min-w-0 resize-y rounded-lg border border-white/10 bg-white/[0.045] px-3 py-3 text-sm leading-6 text-neutral-50 outline-none transition placeholder:text-neutral-600 focus:border-cyan-300/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-300/15"
      />
    </label>
  );
}
