"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function AuroraBackground({ className, children }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-xmb-darker" />
        
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-xmb-blue/30 animate-aurora"
          style={{ top: "10%", left: "20%", filter: "blur(120px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-xmb-purple/40 animate-aurora"
          style={{ 
            top: "30%", 
            right: "10%", 
            filter: "blur(100px)",
            animationDelay: "-5s"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
        />
        
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-xmb-pink/30 animate-aurora"
          style={{ 
            bottom: "0%", 
            left: "40%", 
            filter: "blur(110px)",
            animationDelay: "-10s"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
        />

        <div className="absolute inset-0 bg-xmb-darker/50 backdrop-blur-[1px]" />
        
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>
      
      <div className="relative z-10">{children}</div>
    </div>
  );
}

