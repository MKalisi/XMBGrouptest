"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Code, CheckCircle, Zap, Clock, Award, Radar, FileCheck, AlertTriangle, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import { HeroSwiper } from "@/components/ui/hero-swiper";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { Stats } from "@/components/ui/stats";
import { FeatureGrid } from "@/components/ui/feature-grid";

const heroSlides = [
  {
    number: "01",
    title: "IT Contracting",
    description: "Hochqualifizierte IT-Experten für Ihre Projekte. Flexible Personalverstärkung mit Schweizer Präzision und sofortiger Produktivität.",
    href: "/services/contracting",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80",
    gradient: "blue" as const,
  },
  {
    number: "02",
    title: "Cyber Security",
    description: "Umfassender Schutz für Ihre digitalen Assets. Proaktive Sicherheitsstrategien, Compliance und kontinuierliches Monitoring.",
    href: "/services/security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&h=1080&fit=crop&q=80",
    gradient: "purple" as const,
  },
  {
    number: "03",
    title: "Software Development",
    description: "Massgeschneiderte Softwarelösungen für Ihr Unternehmen. Von der Idee bis zur Implementierung mit höchster Qualität.",
    href: "/services/software",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&q=80",
    gradient: "pink" as const,
  },
];

const services = [
  {
    title: "IT Contracting",
    description: "Hochqualifizierte IT-Experten für Ihre Projekte. Flexible Personalverstärkung mit Schweizer Präzision.",
    href: "/services/contracting",
    icon: Users,
    gradient: "blue" as const,
  },
  {
    title: "Cyber Security",
    description: "Umfassender Schutz für Ihre digitalen Assets. Proaktive Sicherheitsstrategien und Compliance.",
    href: "/services/security",
    icon: Shield,
    gradient: "purple" as const,
  },
  {
    title: "Software Development",
    description: "Massgeschneiderte Softwarelösungen für Ihr Unternehmen. Von der Idee bis zur Implementierung.",
    href: "/services/software",
    icon: Code,
    gradient: "pink" as const,
  },
];

const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "200+", label: "Projekte" },
  { value: "50+", label: "Experten" },
  { value: "98%", label: "Kundenzufriedenheit" },
];

const features = [
  {
    title: "Schweizer Qualität",
    description: "Höchste Standards und Präzision in jedem Projekt.",
    icon: Award,
  },
  {
    title: "Schnelle Reaktion",
    description: "Flexible Teams, die sich Ihren Bedürfnissen anpassen.",
    icon: Zap,
  },
  {
    title: "Zuverlässigkeit",
    description: "Termingerechte Lieferung und transparente Kommunikation.",
    icon: Clock,
  },
  {
    title: "Nachweislicher Erfolg",
    description: "Bewährte Lösungen mit messbaren Ergebnissen.",
    icon: CheckCircle,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSwiper slides={heroSlides} />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Bild links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1200&fit=crop&q=80"
                alt="IT Contracting"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text rechts */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              IT Contracting geplant?
            </h2>
            
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-6">
              XMB begleitet Ihre Transformation und macht Ihr Unternehmen <span className="gradient-text">digital frisch</span>.
            </p>
            
            <p className="text-lg text-xmb-gray leading-relaxed mb-6">
              Wir begleiten KMUs, Grossunternehmen und öffentliche Verwaltungen in der digitalen Transformation. Haben Sie Bedarf an Expertise oder fehlt Ihren Projektmitarbeitenden ganz einfach die Zeit? Wir unterstützen Sie zielgerichtet und verleihen Ihrem Vorhaben neuen Schwung!
            </p>
            
            <p className="text-lg text-xmb-gray leading-relaxed mb-8">
              Seit 2008 engagiert für die Digitalisierung von Unternehmen in der ganzen Schweiz: Unsere Consultants aus den Bereichen Informatik und Betriebsökonomie prägen unsere Erfolgsstory.
            </p>
            
            <Button href="/services/contracting" size="lg">
              Über IT Contracting
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Titel */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 text-center"
          >
            Cybersecurity.
          </motion.h2>
          
          {/* Einleitungsatz */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-12 text-center"
          >
            Ihr braucht <span className="gradient-text">Sicherheit</span> im Unternehmen.
          </motion.p>
          
          {/* 4 Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-xmb-blue/10 flex items-center justify-center shrink-0">
                <Radar className="w-6 h-6 text-xmb-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Penetration Testing</h3>
                <p className="text-base text-xmb-gray leading-relaxed">
                  Wir sind Ihre Spezialist:innen in der Identifikation von Schwachstellen durch simulierte Angriffe auf Ihre Systeme.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-xmb-purple/10 flex items-center justify-center shrink-0">
                <FileCheck className="w-6 h-6 text-xmb-purple" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Security Audits</h3>
                <p className="text-base text-xmb-gray leading-relaxed">
                  Wir begleiten Sie bei umfassenden Überprüfungen Ihrer IT-Infrastruktur und Sicherheitsrichtlinien.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-xmb-pink/10 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6 text-xmb-pink" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Incident Response</h3>
                <p className="text-base text-xmb-gray leading-relaxed">
                  Wir setzen unsere Expertise als Incident Response Spezialisten und in der Cloud-Sicherheit für Sie ein.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-xmb-blue/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-xmb-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Compliance Beratung</h3>
                <p className="text-base text-xmb-gray leading-relaxed">
                  Wir beraten Sie auf strategischer Ebene in den Themen Transformation, Digitalisierung und Compliance.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <Button href="/services/security" size="lg">
              Zum Angebot
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </Section>

      <Section className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Linke Spalte - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-xmb-darker p-12 md:p-16 lg:p-20 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Solide <span className="gradient-text">Software</span> für eine stabile digitale Zukunft
            </h2>
            
            <p className="text-lg text-xmb-gray leading-relaxed mb-6">
              Wir entwickeln Software, die sich an bewährten Abläufen orientiert und Unternehmen zuverlässig unterstützt. Unsere Lösungen fügen sich sauber in bestehende Strukturen ein.
            </p>
            
            <p className="text-lg text-xmb-gray leading-relaxed mb-8">
              Mit technischer Kompetenz sorgen wir dafür, dass Digitalisierung zur nachhaltigen Weiterentwicklung Ihrer Arbeitswelt wird.
            </p>
            
            <Button href="/services/software" size="lg">
              Mehr erfahren
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Rechte Spalte - Software-Lösungen */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-xmb-darker p-12 md:p-16 lg:p-20 flex flex-col justify-center space-y-4"
          >
            {[
              { title: "Coremlis", description: "CRM Software für automatisiertes Kundenmanagement." },
              { title: "Depotix", description: "Depot- und Portfolio-Management mit Echtzeit-Transparenz." },
              { title: "Real Estate Software", description: "Plattform für Immobilienverwaltung, Mietermanagement und Finanzen." },
              { title: "iAuto", description: "Automotive Management für Flotten, Werkstatt und Verkauf." },
              { title: "XMB-Education", description: "E-Learning und Campus-Management für Bildungseinrichtungen." }
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="flex items-center justify-between gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
              >
                <div className="flex-1">
                  <h3 className="text-base font-bold text-xmb-purple mb-1">{solution.title}</h3>
                  <p className="text-sm text-xmb-gray leading-relaxed">{solution.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-xmb-gray group-hover:text-white transition-colors shrink-0" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-xmb-blue/10 via-xmb-purple/10 to-xmb-pink/10 blur-3xl" />
        </div>
        <div className="relative glass rounded-3xl p-12 md:p-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Bereit für Ihr nächstes Projekt?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xmb-gray text-lg mb-8 max-w-xl mx-auto"
          >
            Lassen Sie uns gemeinsam Ihre IT-Herausforderungen meistern. 
            Kontaktieren Sie uns für eine unverbindliche Beratung.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button href="/contact" size="lg">
              Kostenlose Beratung
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
