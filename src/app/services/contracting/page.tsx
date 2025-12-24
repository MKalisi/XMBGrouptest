"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight, CheckCircle, Clock, Target, Handshake, Building, Briefcase, UserCheck, RefreshCw } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { FloatingShapes } from "@/components/ui/floating-shapes";

const benefits = [
  {
    title: "Schnelle Verfügbarkeit",
    description: "Unsere Experten sind kurzfristig einsatzbereit und integrieren sich nahtlos in Ihr Team.",
    icon: Clock,
  },
  {
    title: "Passgenauer Match",
    description: "Wir finden den richtigen Spezialisten für Ihre spezifischen Anforderungen.",
    icon: Target,
  },
  {
    title: "Flexible Modelle",
    description: "Von Einzelprojekten bis zur langfristigen Zusammenarbeit — wir passen uns an.",
    icon: RefreshCw,
  },
  {
    title: "Schweizer Netzwerk",
    description: "Zugang zu einem Pool erstklassiger IT-Fachkräfte in der Schweiz.",
    icon: Building,
  },
];

const roles = [
  "Software Engineers",
  "DevOps Specialists",
  "Cloud Architects",
  "Data Scientists",
  "Project Managers",
  "Security Experts",
  "Business Analysts",
  "UX/UI Designers",
];

export default function ContractingPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 overflow-hidden">
        <FloatingShapes />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-xmb-blue/30 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-xmb-blue/20 flex items-center justify-center">
                <Users className="w-7 h-7 text-xmb-blue" />
              </div>
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-xmb-blue/10 border border-xmb-blue/20 text-xmb-blue">
                IT Contracting
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              IT-Experten für <span className="gradient-text">Ihr Team</span>
            </h1>
            <p className="text-lg md:text-xl text-xmb-gray leading-relaxed mb-8">
              Verstärken Sie Ihr Team mit hochqualifizierten IT-Spezialisten. 
              Wir vermitteln erfahrene Fachkräfte, die sofort produktiv sind 
              und Ihre Projekte zum Erfolg führen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Experten anfragen
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
          title="IT Contracting"
          tagline="Hochqualifizierte IT-Experten für Ihre Projekte"
          description="Verstärken Sie Ihr Team mit erfahrenen Fachkräften, die sofort produktiv sind und Ihre Projekte zum Erfolg führen. Wir vermitteln passgenaue IT-Spezialisten aus unserem Schweizer Netzwerk."
        />
        <FeatureGrid features={benefits} columns={4} />
      </Section>

      <Section className="bg-white/[0.01]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              badge="Expertise"
              title="Rollen die wir besetzen"
              description="Unser Netzwerk umfasst Experten aus allen Bereichen der IT."
              align="left"
            />
            <div className="grid grid-cols-2 gap-3">
              {roles.map((role, index) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2 text-sm text-xmb-gray"
                >
                  <CheckCircle className="w-4 h-4 text-xmb-blue shrink-0" />
                  {role}
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
            <div className="absolute inset-0 bg-xmb-blue/20 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-8 md:p-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-xmb-blue/20 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-xmb-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Anforderungsanalyse</h3>
                  <p className="text-sm text-xmb-gray">Wir verstehen Ihre Bedürfnisse und definieren das ideale Profil.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-xmb-blue/20 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5 text-xmb-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Kandidatenauswahl</h3>
                  <p className="text-sm text-xmb-gray">Sorgfältige Vorauswahl aus unserem Experten-Netzwerk.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-xmb-blue/20 flex items-center justify-center shrink-0">
                  <Handshake className="w-5 h-5 text-xmb-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Erfolgreiche Integration</h3>
                  <p className="text-sm text-xmb-gray">Begleitung während der Einarbeitung und laufende Betreuung.</p>
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
            Benötigen Sie IT-Verstärkung?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xmb-gray text-lg mb-8 max-w-xl mx-auto"
          >
            Teilen Sie uns Ihre Anforderungen mit und wir finden den passenden Experten für Ihr Team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button href="/contact" size="lg">
              Unverbindlich anfragen
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

