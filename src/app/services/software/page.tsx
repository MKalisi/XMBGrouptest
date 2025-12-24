"use client";

import { motion } from "framer-motion";
import { Code, ArrowRight, Smartphone, Globe, Database, Cloud, Layers, Cpu, GitBranch, Rocket } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const services = [
  {
    title: "Web Applications",
    description: "Moderne, skalierbare Web-Applikationen mit React, Next.js und anderen führenden Technologien.",
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description: "Native und Cross-Platform Apps für iOS und Android mit erstklassiger User Experience.",
    icon: Smartphone,
  },
  {
    title: "Enterprise Software",
    description: "Massgeschneiderte Unternehmenslösungen für komplexe Geschäftsprozesse.",
    icon: Database,
  },
  {
    title: "Cloud Solutions",
    description: "Cloud-native Architekturen und Migration bestehender Systeme in die Cloud.",
    icon: Cloud,
  },
];

const technologies = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "Node.js / .NET", category: "Backend" },
  { name: "PostgreSQL / MongoDB", category: "Database" },
  { name: "AWS / Azure", category: "Cloud" },
  { name: "Docker / Kubernetes", category: "DevOps" },
  { name: "TypeScript", category: "Language" },
];

export default function SoftwarePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 overflow-hidden">
        <FloatingShapes />
        <div className="absolute inset-0">
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-xmb-pink/30 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-xmb-pink/20 flex items-center justify-center">
                <Code className="w-7 h-7 text-xmb-pink" />
              </div>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-xmb-pink/10 border border-xmb-pink/20 text-xmb-pink">
                Software Development
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Software die <span className="gradient-text">begeistert</span>
            </h1>
            <p className="text-lg md:text-xl text-xmb-gray leading-relaxed mb-8">
              Von der ersten Idee bis zum fertigen Produkt — wir entwickeln 
              massgeschneiderte Softwarelösungen, die Ihre Geschäftsprozesse 
              optimieren und Ihre Kunden begeistern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Projekt starten
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Alle Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Section>
        <SectionHeader
          badge="Entwicklung"
          title="Was wir entwickeln"
          description="Moderne Softwarelösungen für jede Anforderung — von der Web-App bis zur Enterprise-Plattform."
        />
        <FeatureGrid features={services} columns={4} />
      </Section>

      <Section className="bg-white/[0.01]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              badge="Technologien"
              title="Moderne Tech Stacks"
              description="Wir setzen auf bewährte und zukunftssichere Technologien für nachhaltige Lösungen."
              align="left"
            />
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-xmb-pink/30 transition-colors"
                >
                  <p className="text-xs text-xmb-gray mb-1">{tech.category}</p>
                  <p className="text-sm font-medium text-white">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-xmb-pink/20 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-8 md:p-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-xmb-pink/20 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-xmb-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Discovery & Design</h3>
                  <p className="text-sm text-xmb-gray">Anforderungsanalyse, UX-Design und technische Architektur.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-xmb-pink/20 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-xmb-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Agile Entwicklung</h3>
                  <p className="text-sm text-xmb-gray">Iterative Entwicklung mit regelmässigen Releases und Feedback.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-xmb-pink/20 flex items-center justify-center shrink-0">
                  <GitBranch className="w-5 h-5 text-xmb-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Quality Assurance</h3>
                  <p className="text-sm text-xmb-gray">Umfassende Tests und Code Reviews für höchste Qualität.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-xmb-pink/20 flex items-center justify-center shrink-0">
                  <Rocket className="w-5 h-5 text-xmb-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Deployment & Support</h3>
                  <p className="text-sm text-xmb-gray">CI/CD Pipelines und langfristige Wartung.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-xmb-purple/10 to-xmb-pink/10" />
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Haben Sie eine Idee?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xmb-gray text-lg mb-8 max-w-xl mx-auto"
            >
              Lassen Sie uns gemeinsam Ihre Vision in eine leistungsstarke 
              Software verwandeln.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button href="/contact" size="lg">
                Projekt besprechen
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}

