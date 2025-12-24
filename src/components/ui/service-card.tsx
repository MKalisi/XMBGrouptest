"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  index?: number;
  gradient?: "blue" | "purple" | "pink";
}

const gradients = {
  blue: "from-xmb-blue/20 to-transparent",
  purple: "from-xmb-purple/20 to-transparent",
  pink: "from-xmb-pink/20 to-transparent",
};

const glows = {
  blue: "group-hover:shadow-[0_0_40px_rgba(54,47,204,0.3)]",
  purple: "group-hover:shadow-[0_0_40px_rgba(146,27,178,0.3)]",
  pink: "group-hover:shadow-[0_0_40px_rgba(205,32,178,0.3)]",
};

const iconColors = {
  blue: "text-xmb-blue",
  purple: "text-xmb-purple",
  pink: "text-xmb-pink",
};

export function ServiceCard({ 
  title, 
  description, 
  href, 
  icon: Icon, 
  index = 0,
  gradient = "purple" 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="block group h-full">
        <div
          className={cn(
            "relative h-full p-8 rounded-2xl transition-all duration-500",
            "bg-white/[0.02] border border-white/[0.05]",
            "hover:bg-white/[0.04] hover:border-white/10",
            "hover:-translate-y-2",
            glows[gradient]
          )}
        >
          <div className={cn(
            "absolute top-0 left-0 right-0 h-px",
            "bg-gradient-to-r from-transparent via-white/20 to-transparent",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          )} />

          <div className={cn(
            "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            "bg-gradient-to-b",
            gradients[gradient]
          )} />

          <div className="relative">
            <div className={cn(
              "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
              "bg-white/5 border border-white/10",
              "group-hover:scale-110 transition-transform duration-500"
            )}>
              <Icon className={cn("w-7 h-7", iconColors[gradient])} />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white group-hover:gradient-text transition-all duration-300">
              {title}
            </h3>

            <p className="text-xmb-gray text-sm leading-relaxed mb-6">
              {description}
            </p>

            <div className="flex items-center gap-2 text-sm font-medium text-xmb-gray group-hover:text-white transition-colors">
              <span>Mehr erfahren</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

