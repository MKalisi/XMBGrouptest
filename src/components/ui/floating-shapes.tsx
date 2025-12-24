"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-96 h-96 rounded-full border border-white/[0.03]"
        style={{ top: "10%", right: "5%" }}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      
      <motion.div
        className="absolute w-64 h-64 rounded-full border border-xmb-purple/10"
        style={{ bottom: "20%", left: "10%" }}
        animate={{
          rotate: -360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 45, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute w-4 h-4 rounded-full bg-xmb-blue/30"
        style={{ top: "30%", left: "20%" }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-3 h-3 rounded-full bg-xmb-pink/30"
        style={{ top: "60%", right: "25%" }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="absolute w-2 h-2 rounded-full bg-xmb-purple/40"
        style={{ top: "45%", left: "45%" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}

