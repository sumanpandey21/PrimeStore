"use client";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function LoadingOverlay({ show, text = "Loading..." }) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-lg">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
        <p className="text-gray-700">{text}</p>
      </div>
    </motion.div>
  );
}
