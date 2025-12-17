import { Shield, Lock, Eye, AlertTriangle, CheckCircle, FileCheck, Key, Zap } from "lucide-react";
import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const challenges = [
  {
    title: "Steigende Cyber-Bedrohungen",
    description: "Ransomware, Phishing und gezielte Angriffe nehmen kontinuierlich zu und werden immer raffinierter."
  },
  {
    title: "Komplexe Compliance-Anforderungen",
    description: "DSGVO, ISO 27001 und branchenspezifische Vorgaben erfordern umfassendes Know-how und kontinuierliche Anpassung."
  },
  {
    title: "Fehlende Security-Expertise",
    description: "Internes Security-Know-how ist oft begrenzt, während Bedrohungen 24/7 Aufmerksamkeit erfordern."
  },
  {
    title: "Schwachstellen in der Infrastruktur",
    description: "Ungepatchte Systeme, schwache Passwörter und ungeschützte Endpunkte bieten Angreifern Einfallstore."
  }
];

const advantages = [
  {
    title: "Proaktiver Schutz",
    description: "Kontinuierliche Überwachung und frühzeitige Erkennung von Bedrohungen schützen Ihr Unternehmen.",
    icon: Shield
  },
  {
    title: "Compliance sicherstellen",
    description: "Wir sorgen für die Einhaltung aller relevanten Sicherheitsstandards und regulatorischen Vorgaben.",
    icon: FileCheck
  },
  {
    title: "Schnelle Reaktion",
    description: "24/7 Incident Response und schnelle Reaktion auf Sicherheitsvorfälle minimieren Schäden.",
    icon: Zap
  },
  {
    title: "Expertenwissen",
    description: "Zugang zu spezialisiertem Security-Know-how ohne eigene Ressourcen aufzubauen.",
    icon: Key
  }
];

const serviceModules = [
  {
    title: "Security Monitoring & SIEM",
    description: "Rund-um-die-Uhr Überwachung Ihrer IT-Infrastruktur mit modernen SIEM-Lösungen und Threat Intelligence.",
    icon: Eye,
    accent: "#921bb2",
  },
  {
    title: "Penetration Testing",
    description: "Regelmäßige Sicherheitstests identifizieren Schwachstellen, bevor Angreifer sie ausnutzen können.",
    icon: Lock,
    accent: "#921bb2",
  },
  {
    title: "Incident Response",
    description: "Schnelle Reaktion auf Sicherheitsvorfälle mit definierten Prozessen und erfahrenen Experten.",
    icon: AlertTriangle,
    accent: "#cd20b2",
  },
  {
    title: "Security Assessment",
    description: "Umfassende Analyse Ihrer Sicherheitslage und Entwicklung maßgeschneiderter Schutzstrategien.",
    icon: FileCheck,
    accent: "#921bb2",
  },
  {
    title: "Compliance & Audit",
    description: "Unterstützung bei der Einhaltung von DSGVO, ISO 27001 und branchenspezifischen Standards.",
    icon: Shield,
    accent: "#cd20b2",
  },
];

import { VideoHero } from "./VideoHero";

export function CybersecurityPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <VideoHero
        videoSrc="/videos/cybersecurity-hero.mp4"
        subtitle="Cybersecurity"
        title="Ihr Unternehmen sicher schützen"
        description="Wir schützen Ihr Unternehmen vor Cyber-Bedrohungen mit proaktiven Sicherheitsmaßnahmen, kontinuierlichem Monitoring und schneller Incident Response."
        ctaText="Beratung anfragen"
        ctaLink="#/kontakt"
      />

      {/* Herausforderungen */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 text-center">
            Herausforderungen im Cybersecurity-Bereich
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="bg-white rounded-lg border border-slate-200 p-5"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{challenge.title}</h3>
                <p className="text-slate-600 text-sm" style={{ lineHeight: '1.7' }}>{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#921bb2] to-[#cd20b2] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Ihre Vorteile
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => {
              const IconComponent = advantage.icon;
              return (
                <div key={advantage.title} className="bg-white/10 rounded-lg p-5 border border-white/20">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{advantage.title}</h3>
                  <p className="text-white/80 text-sm" style={{ lineHeight: '1.7' }}>{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Was beinhaltet Cybersecurity */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 text-center">
            Unsere Leistungen
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceModules.map((card) => (
              <div key={card.title} className="bg-white rounded-lg border border-slate-200 p-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm" style={{ lineHeight: '1.7' }}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experten-Beratung */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                Experten-Beratung
              </h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Unsere Security-Experten unterstützen Sie bei der Entwicklung einer Cybersecurity-Strategie:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#921bb2] flex-shrink-0" />
                  <span className="text-slate-700">Security-Assessment & Risikoanalyse</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#921bb2] flex-shrink-0" />
                  <span className="text-slate-700">Strategie & Roadmap-Entwicklung</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#921bb2] flex-shrink-0" />
                  <span className="text-slate-700">Compliance-Beratung & Audit-Vorbereitung</span>
                </li>
              </ul>
              <a
                href="#/kontakt"
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#921bb2] to-[#cd20b2] text-white font-medium rounded-lg hover:opacity-90 transition-opacity mt-4"
              >
                Beratung anfragen
              </a>
            </div>
            <div className="relative overflow-hidden rounded-lg h-64 lg:h-80">
              <ImageWithFallback
                src="cybersecurity-page-beratung.jpg"
                alt="Expert Consulting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-[#921bb2] to-[#cd20b2] text-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Bereit, Ihr Unternehmen zu schützen?
          </h2>
          <p className="text-white/90 mb-6" style={{ lineHeight: '1.7' }}>
            Wir entwickeln ein maßgeschneidertes Cybersecurity-Konzept für Ihr Unternehmen.
          </p>
          <a
            href="#/kontakt"
            className="inline-block px-6 py-3 bg-white text-[#921bb2] font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

