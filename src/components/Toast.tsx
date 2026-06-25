import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type ToastProps = {
  message: string;
};

export function Toast({ message }: ToastProps) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-lg border border-emerald-300/25 bg-neutral-950/90 px-4 py-3 text-sm font-semibold text-emerald-100 shadow-frame backdrop-blur-xl"
        >
          <CheckCircle2 className="h-4 w-4" />
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
