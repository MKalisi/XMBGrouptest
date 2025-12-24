"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn("py-24 px-6", className)}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  tagline?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ badge, title, tagline, description, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", align === "center" && "text-center")}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 text-xmb-purple border border-white/10 mb-4"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      {tagline && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={cn(
            "mt-6 text-xl md:text-2xl text-white leading-relaxed font-medium",
            align === "center" && "max-w-3xl mx-auto"
          )}
        >
          {tagline}
        </motion.p>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: tagline ? 0.2 : 0.2 }}
          className={cn(
            tagline ? "mt-6" : "mt-4",
            "text-lg text-xmb-gray leading-relaxed",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

