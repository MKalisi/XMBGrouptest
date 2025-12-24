"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Heart, Target, Users, MapPin, Building, Sparkles } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Stats } from "@/components/ui/stats";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const values = [
  {
    title: "Exzellenz",
    description: "Wir streben in allem was wir tun nach höchster Qualität. Mittelmässigkeit ist keine Option.",
    icon: Award,
  },
  {
    title: "Integrität",
    description: "Ehrlichkeit und Transparenz bilden das Fundament unserer Geschäftsbeziehungen.",
    icon: Heart,
  },
  {
    title: "Innovation",
    description: "Wir bleiben neugierig und offen für neue Technologien und Methoden.",
    icon: Sparkles,
  },
  {
    title: "Partnerschaft",
    description: "Der Erfolg unserer Kunden ist unser Erfolg. Wir denken langfristig.",
    icon: Users,
  },
];

const stats = [
  { value: "2010", label: "Gegründet" },
  { value: "Zürich", label: "Hauptsitz" },
  { value: "50+", label: "Mitarbeitende" },
  { value: "100%", label: "Swiss Made" },
];

export default function CompanyPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 overflow-hidden">
        <FloatingShapes />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-xmb-blue/20 via-xmb-purple/20 to-xmb-pink/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-xmb-gray mb-6">
              <Building className="w-4 h-4" />
              Über XMB Group AG
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              IT-Exzellenz <span className="gradient-text">aus der Schweiz</span>
            </h1>
            <p className="text-lg md:text-xl text-xmb-gray leading-relaxed">
              Seit 2010 unterstützen wir Unternehmen dabei, ihre digitale 
              Transformation erfolgreich zu gestalten. Mit Schweizer Präzision 
              und Leidenschaft für Technologie.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-white/[0.01]">
        <div className="glass rounded-3xl p-12 md:p-16">
          <Stats stats={stats} />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              badge="Unsere Geschichte"
              title="Von der Vision zur Realität"
              align="left"
            />
            <div className="space-y-6 text-xmb-gray leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                XMB Group AG wurde 2010 in Zürich gegründet mit dem Ziel, 
                Schweizer Unternehmen erstklassige IT-Dienstleistungen anzubieten. 
                Was als kleine Beratungsfirma begann, ist heute ein etablierter 
                IT-Partner für Unternehmen aller Grössen.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Unser Team besteht aus erfahrenen IT-Experten, die ihre 
                Leidenschaft für Technologie mit Schweizer Werten wie 
                Präzision, Zuverlässigkeit und Qualität verbinden.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Wir sind stolz darauf, langfristige Partnerschaften mit 
                unseren Kunden aufzubauen und sie auf ihrem Weg in die 
                digitale Zukunft zu begleiten.
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-xmb-blue/20 via-xmb-purple/20 to-xmb-pink/20 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-xmb-blue via-xmb-purple to-xmb-pink flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Zürich, Schweiz</h3>
                  <p className="text-xmb-gray">Unser Hauptsitz</p>
                </div>
              </div>
              <p className="text-xmb-gray leading-relaxed">
                Im Herzen der Schweizer Wirtschaft gelegen, sind wir 
                bestens vernetzt mit der lokalen Tech-Szene und haben 
                Zugang zu den besten Talenten der Region.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white/[0.01]">
        <SectionHeader
          badge="Unsere Werte"
          title="Wofür wir stehen"
          description="Diese Grundsätze leiten unser tägliches Handeln und definieren, wer wir als Unternehmen sind."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-xmb-blue/20 via-xmb-purple/20 to-xmb-pink/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-xmb-purple" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-xmb-gray leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-xmb-purple/20 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-8 md:p-12">
              <Target className="w-12 h-12 text-xmb-purple mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Unsere Mission</h3>
              <p className="text-xmb-gray leading-relaxed">
                Wir ermöglichen Schweizer Unternehmen, das volle Potenzial 
                moderner Technologien auszuschöpfen. Durch erstklassige 
                IT-Dienstleistungen, transparente Kommunikation und echte 
                Partnerschaft schaffen wir nachhaltigen Mehrwert.
              </p>
            </div>
          </motion.div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              badge="Mission & Vision"
              title="Gemeinsam in die Zukunft"
              description="Technologie verändert die Welt — wir helfen Ihnen, diese Veränderung aktiv zu gestalten."
              align="left"
            />
            <ul className="space-y-4">
              {[
                "Nachhaltige Digitalisierung fördern",
                "Schweizer Wirtschaft stärken",
                "Innovation zugänglich machen",
                "Langfristige Partnerschaften aufbauen",
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
        </div>
      </Section>

      <Section className="bg-white/[0.01]">
        <div className="glass rounded-3xl p-12 md:p-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Lernen Sie uns kennen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xmb-gray text-lg mb-8 max-w-xl mx-auto"
          >
            Haben Sie Fragen oder möchten Sie mehr über XMB Group erfahren? 
            Wir freuen uns auf den Austausch.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button href="/contact" size="lg">
              Kontakt aufnehmen
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

