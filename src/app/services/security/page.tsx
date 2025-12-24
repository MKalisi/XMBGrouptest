"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight, Lock, Eye, AlertTriangle, FileCheck, Server, ShieldCheck, Radar, KeyRound } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const services = [
  {
    title: "Penetration Testing",
    description: "Identifizierung von Schwachstellen durch simulierte Angriffe auf Ihre Systeme.",
    icon: Radar,
  },
  {
    title: "Security Audits",
    description: "Umfassende Überprüfung Ihrer IT-Infrastruktur und Sicherheitsrichtlinien.",
    icon: FileCheck,
  },
  {
    title: "Incident Response",
    description: "Schnelle und professionelle Reaktion bei Sicherheitsvorfällen.",
    icon: AlertTriangle,
  },
  {
    title: "Compliance Beratung",
    description: "Unterstützung bei der Einhaltung von DSGVO, ISO 27001 und anderen Standards.",
    icon: ShieldCheck,
  },
];

const protectionAreas = [
  { name: "Netzwerksicherheit", icon: Server },
  { name: "Endpoint Protection", icon: Lock },
  { name: "Identity Management", icon: KeyRound },
  { name: "Threat Monitoring", icon: Eye },
];

export default function SecurityPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 overflow-hidden">
        <FloatingShapes />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-xmb-purple/30 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-xmb-purple/20 flex items-center justify-center">
                <Shield className="w-7 h-7 text-xmb-purple" />
              </div>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-xmb-purple/10 border border-xmb-purple/20 text-xmb-purple">
                Cyber Security
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Schutz für Ihre <span className="gradient-text">digitale Welt</span>
            </h1>
            <p className="text-lg md:text-xl text-xmb-gray leading-relaxed mb-8">
              In einer vernetzten Welt ist Sicherheit kein Luxus, sondern eine 
              Notwendigkeit. Wir schützen Ihre IT-Infrastruktur mit modernsten 
              Methoden und proaktiven Strategien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Security Assessment
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
          badge="Unsere Leistungen"
          title="Umfassende Sicherheitslösungen"
          description="Wir bieten ein breites Spektrum an Cyber-Security-Dienstleistungen für Unternehmen jeder Grösse."
        />
        <FeatureGrid features={services} columns={4} />
      </Section>

      <Section className="bg-white/[0.01]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-xmb-purple/20 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                {protectionAreas.map((area, index) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-xmb-purple/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <area.icon className="w-6 h-6 text-xmb-purple" />
                    </div>
                    <h3 className="text-sm font-medium text-white">{area.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              badge="Schutzbereiche"
              title="360° Sicherheit"
              description="Wir decken alle kritischen Bereiche Ihrer IT-Infrastruktur ab und gewährleisten einen ganzheitlichen Schutz."
              align="left"
            />
            <ul className="space-y-4">
              {[
                "Identifikation und Analyse von Bedrohungen",
                "Implementierung von Sicherheitsmassnahmen",
                "Kontinuierliches Monitoring und Alerting",
                "Regelmässige Security-Updates und Patches",
                "Mitarbeiterschulungen und Awareness",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-xmb-gray"
                >
                  <ShieldCheck className="w-5 h-5 text-xmb-purple shrink-0 mt-0.5" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
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
              Ist Ihre IT wirklich sicher?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xmb-gray text-lg mb-8 max-w-xl mx-auto"
            >
              Lassen Sie uns gemeinsam Ihre Sicherheitslage analysieren und 
              potenzielle Schwachstellen identifizieren.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button href="/contact" size="lg">
                Kostenloses Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}

