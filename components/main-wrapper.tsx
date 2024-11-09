"use client";

import { motion, AnimatePresence } from 'framer-motion';

export function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}