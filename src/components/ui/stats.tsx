"use client";

import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-xmb-gray">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

