import { useId } from "react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: ComponentType<LucideProps>;
  type?: string;
};

export function TextInput({
  label,
  value,
  onChange,
  placeholder,
  icon: Icon,
  type = "text",
}: TextInputProps) {
  const generatedId = useId();
  const id = `${label.toLowerCase().replace(/\s+/g, "-")}-${generatedId}`;

  return (
    <label className="grid gap-2 text-sm font-medium text-neutral-200" htmlFor={id}>
      {label}
      <span className="relative">
        {Icon ? (
          <Icon
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
          />
        ) : null}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="h-11 w-full min-w-0 rounded-lg border border-white/10 bg-white/[0.045] px-3 text-sm text-neutral-50 outline-none transition placeholder:text-neutral-600 focus:border-cyan-300/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan-300/15"
          style={{ paddingLeft: Icon ? 38 : undefined }}
        />
      </span>
    </label>
  );
}
