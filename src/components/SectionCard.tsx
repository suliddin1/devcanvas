import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionCard({ title, description, children }: SectionCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="min-w-0 rounded-lg border border-white/10 bg-neutral-950/50 p-4 shadow-soft backdrop-blur-xl"
    >
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-neutral-50">{title}</h2>
        {description ? (
          <p className="mt-1 text-xs leading-5 text-neutral-500">{description}</p>
        ) : null}
      </div>
      <div className="grid gap-3">{children}</div>
    </motion.section>
  );
}
