"use client";

import { motion } from "framer-motion";
import { Shield, Users, Code, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const services = [
  {
    title: "IT Contracting",
    description: "Hochqualifizierte IT-Experten für Ihre Projekte. Wir stellen Ihnen erfahrene Fachkräfte zur Verfügung, die nahtlos in Ihr Team integriert werden und sofort produktiv sind.",
    href: "/services/contracting",
    icon: Users,
    gradient: "blue" as const,
  },
  {
    title: "Cyber Security",
    description: "Umfassender Schutz für Ihre digitalen Assets. Von Penetrationstests über Security Audits bis hin zu kontinuierlichem Monitoring — wir sichern Ihre IT-Infrastruktur.",
    href: "/services/security",
    icon: Shield,
    gradient: "purple" as const,
  },
  {
    title: "Software Development",
    description: "Massgeschneiderte Softwarelösungen für Ihr Unternehmen. Wir entwickeln Web-Applikationen, Mobile Apps und Enterprise-Software nach höchsten Qualitätsstandards.",
    href: "/services/software",
    icon: Code,
    gradient: "pink" as const,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 overflow-hidden">
        <FloatingShapes />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-xmb-purple/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-xmb-blue/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-xmb-gray mb-6">
              Unsere Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Services die <span className="gradient-text">Mehrwert</span> schaffen
            </h1>
            <p className="text-lg md:text-xl text-xmb-gray leading-relaxed">
              Drei Kernbereiche, ein Ziel: Ihr Erfolg. Wir bieten umfassende 
              IT-Dienstleistungen, die perfekt auf Ihre geschäftlichen 
              Anforderungen abgestimmt sind.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </Section>

      <Section className="bg-white/[0.01]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              badge="Unser Ansatz"
              title="Partnerschaft auf Augenhöhe"
              description="Wir verstehen uns nicht als Dienstleister, sondern als strategischer Partner. Gemeinsam entwickeln wir Lösungen, die Ihr Unternehmen voranbringen."
              align="left"
            />
            <ul className="space-y-4">
              {[
                "Individuelle Beratung und Analyse",
                "Transparente Kommunikation",
                "Agile Projektmethodik",
                "Langfristige Betreuung",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-xmb-gray"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-xmb-blue to-xmb-purple flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-xmb-blue/20 via-xmb-purple/20 to-xmb-pink/20 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-xmb-blue/20 flex items-center justify-center">
                    <span className="text-2xl font-bold gradient-text">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Analyse</h3>
                    <p className="text-sm text-xmb-gray">Verstehen Ihrer Anforderungen</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-xmb-purple/20 flex items-center justify-center">
                    <span className="text-2xl font-bold gradient-text">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Strategie</h3>
                    <p className="text-sm text-xmb-gray">Entwicklung der optimalen Lösung</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-xmb-pink/20 flex items-center justify-center">
                    <span className="text-2xl font-bold gradient-text">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Umsetzung</h3>
                    <p className="text-sm text-xmb-gray">Implementierung mit Präzision</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="glass rounded-3xl p-12 md:p-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Welcher Service passt zu Ihnen?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xmb-gray text-lg mb-8 max-w-xl mx-auto"
          >
            Lassen Sie uns gemeinsam herausfinden, wie wir Sie am besten unterstützen können.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button href="/contact" size="lg">
              Jetzt Beratung anfragen
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

