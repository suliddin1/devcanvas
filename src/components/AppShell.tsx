import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AppShellProps = {
  editor: ReactNode;
  preview: ReactNode;
};

export function AppShell({ editor, preview }: AppShellProps) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="app-shell mx-auto grid min-h-screen w-full min-w-0 max-w-[1680px] grid-cols-[minmax(0,1fr)] gap-5 overflow-x-hidden px-4 py-5 sm:px-5 lg:grid-cols-[440px_minmax(0,1fr)]"
    >
      {editor}
      {preview}
    </motion.main>
  );
}
