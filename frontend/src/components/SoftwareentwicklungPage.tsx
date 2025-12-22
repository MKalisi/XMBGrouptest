import { useEffect, useState } from "react";
import { Code2, Smartphone, Database, ArrowUp, CheckCircle, ArrowRight } from "lucide-react";
import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const tools = [
  {
    id: "coremlis",
    title: "Coremlis",
    description: "CRM Software für automatisiertes Kundenmanagement.",
    color: "#cd20b2",
    badge: null,
  },
  {
    id: "depotix",
    title: "Depotix",
    description: "Depot Management mit Echtzeit-Transparenz.",
    color: "#cd20b2",
    badge: null,
  },
  {
    id: "realestate",
    title: "Real Estate Software",
    description: "Suite für Immobilienverwaltung und Reporting.",
    color: "#cd20b2",
    badge: null,
  },
  {
    id: "iauto",
    title: "iAuto",
    description: "Automotive Management Plattform inkl. Werkstatt.",
    color: "#921bb2",
    badge: "Powered by XMB",
  },
  {
    id: "education",
    title: "XMB-Education",
    description: "E-Learning Plattform für moderne Bildung.",
    color: "#921bb2",
    badge: "Powered by XMB",
  },
];

const serviceSpectrum = [
  {
    title: "Individuelle Web- und Mobile-Anwendungen",
    description: "Wir entwickeln skalierbare Plattformen und mobile Apps, die exakt auf Ihre Prozesse und Ziele zugeschnitten sind.",
    icon: Smartphone,
  },
  {
    title: "Backend- und API-Entwicklung",
    description: "Mithilfe unserer Expertise in modernen Technologien realisieren wir performante Schnittstellen, die sich nahtlos in Ihre Systemlandschaft einfügen.",
    icon: Code2,
  },
  {
    title: "Datenbankdesign und -integration",
    description: "Wir konzipieren effiziente Datenbankarchitekturen und sorgen für einen reibungslosen Datenfluss zwischen Ihren Systemen.",
    icon: Database,
  },
  {
    title: "Modernisierung bestehender Anwendungen",
    description: "Wir analysieren Altsysteme, führen gezielte Refactorings durch oder migrieren in eine aktuelle Microservice-Architektur.",
    icon: ArrowUp,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Anforderungsanalyse",
    description: "Wir identifizieren gemeinsam mit Ihnen alle relevanten Anforderungen und Prozesse."
  },
  {
    number: "02",
    title: "Konzeption und Architektur",
    description: "Passend zu Ihren Zielen definieren wir eine zukunftssichere Architektur, basierend auf modernen Technologien."
  },
  {
    number: "03",
    title: "Iterative Entwicklung",
    description: "In agilen Sprints entstehen rasch funktionsfähige Prototypen, die wir fortlaufend abstimmen und optimieren."
  },
  {
    number: "04",
    title: "Qualitätssicherung",
    description: "Durch automatisierte Tests, Code Reviews und CI/CD-Prozesse garantieren wir einen stabilen und wartbaren Code."
  },
  {
    number: "05",
    title: "Rollout und Betrieb",
    description: "Wir begleiten Sie bei der Livegang und übernehmen bei Bedarf die Wartung sowie Weiterentwicklung."
  },
];

import { VideoHero } from "./VideoHero";

export function SoftwareentwicklungPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tools.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <VideoHero
        videoSrc="/videos/softwareentwicklung-hero.mp4"
        subtitle="Softwareentwicklung"
        title="Lösungen, die heute überzeugen und morgen bestehen"
        description="Wir entwickeln individuelle Software, die sich an Ihren Geschäftsanforderungen orientiert und sich zuverlässig in bestehende Strukturen einfügt."
        ctaText="Projekt anfragen"
        ctaLink="#/kontakt"
      />

      {/* Warum individuelle Softwareentwicklung */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
              Warum individuelle Softwareentwicklung?
          </h2>
          <div className="space-y-4 text-slate-600" style={{ lineHeight: '1.7' }}>
            <p>
              Jedes Unternehmen ist einzigartig – und das sollte auch die Software sein. 
              Mit maßgeschneiderter Softwareentwicklung schaffen wir Lösungen, 
              die effizient, skalierbar und auf Ihre Anforderungen abgestimmt sind.
            </p>
            <p>
              Unsere Expertise reicht von modernen Web- und Mobile-Anwendungen über leistungsfähige 
              Backend-Architekturen bis zur nahtlosen Systemintegration.
            </p>
          </div>
        </div>
      </section>

      {/* Leistungsspektrum */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-[#B84DD4] to-[#FDF5FA] text-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-black">
              Leistungsspektrum
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {serviceSpectrum.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white/30 rounded-lg p-5 border border-black/20">
                  <div className="w-10 h-10 rounded-lg bg-black/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">{service.title}</h3>
                  <p className="text-black/80 text-sm" style={{ lineHeight: '1.7' }}>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vorgehensweise */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 text-center mb-8">
            Unsere Vorgehensweise
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4 bg-slate-50 rounded-lg p-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600 text-sm" style={{ lineHeight: '1.7' }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Development Process"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Software-Lösungen */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-[#B84DD4] to-[#FDF5FA] text-black">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2 text-black">
            Unsere Software-Lösungen
          </h2>
          <p className="text-center text-black/80 mb-8">
            Bewährte Tools für verschiedene Branchen
          </p>
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="bg-white/30 rounded-lg border border-black/20 p-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div
                className="w-16 h-16 rounded-lg flex-shrink-0"
                style={{ backgroundColor: tools[activeIndex].color }}
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-black mb-2">
                    {tools[activeIndex].title}
                  </h3>
                <p className="text-black/80 mb-4" style={{ lineHeight: '1.7' }}>
                  {tools[activeIndex].description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`#/tools/${tools[activeIndex].id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#921bb2] font-medium rounded-lg hover:bg-white/90 transition-colors text-sm"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#/kontakt"
                    className="px-5 py-2.5 border border-black/30 text-black font-medium rounded-lg hover:bg-black/10 transition-colors text-sm"
                  >
                    Demo anfragen
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-4">
                  {tools.map((_, index) => (
                    <button
                      key={_.id}
                      aria-label={`Slide ${index + 1}`}
                      onClick={() => setActiveIndex(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeIndex === index ? "w-8 bg-black" : "w-3 bg-black/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Von Idee zu Produkt */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
                Von Idee zu Produkt
              </h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Wir begleiten Sie von der ersten Idee bis zum erfolgreichen Produkt-Launch. 
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#921bb2] flex-shrink-0" />
                  <span className="text-slate-700">Strategische Produktentwicklung</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#921bb2] flex-shrink-0" />
                  <span className="text-slate-700">Agile Entwicklung mit kurzen Feedback-Zyklen</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#921bb2] flex-shrink-0" />
                  <span className="text-slate-700">Skalierbare Architekturen</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#921bb2] flex-shrink-0" />
                  <span className="text-slate-700">Professioneller Launch und Weiterentwicklung</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 lg:h-80 overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="From Idea to Product"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-[#B84DD4] to-[#FDF5FA] text-black">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
              Bereit für Ihre individuelle Softwarelösung?
          </h2>
          <p className="text-black/80 mb-6" style={{ lineHeight: '1.7' }}>
            Lassen Sie uns gemeinsam Ihre Idee in eine erfolgreiche Softwarelösung verwandeln. 
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

