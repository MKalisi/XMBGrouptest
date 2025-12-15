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
      <section className="relative overflow-hidden text-white">
        <ImageWithFallback
          src="/softwareentwicklung-page-hero.jpg"
          alt="Softwareentwicklung"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#cd20b2] via-[#921bb2] to-[#921bb2] opacity-40"></div>
        <div className="relative w-full flex flex-col gap-5 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative group max-w-[95vw] sm:max-w-[80vw]">
            <span className="relative z-10 text-white tracking-tight">
              Software-Entwicklung – Lösungen, die heute überzeugen und morgen bestehen
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h1>
          <p className="max-w-5xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed 2xl:text-2xl">
            Wir entwickeln individuelle Software, die sich an Ihren Geschäftsanforderungen orientiert und sich zuverlässig in bestehende Strukturen einfügt. Unser Team nutzt moderne Technologien mit dem Ziel, Anwendungen zu schaffen, die langlebig, flexibel erweiterbar und für zukünftige Entwicklungen bestens gerüstet sind.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4">
            <a
              href="#/kontakt"
              className="rounded-full bg-white px-8 sm:px-10 py-4 sm:py-5 text-[#921bb2] font-semibold text-base sm:text-lg btn-animated"
            >
              Kostenlose Beratung
            </a>
          </div>
        </div>
      </section>

      {/* Warum individuelle Softwareentwicklung */}
      <section className="px-6 py-20 bg-white">
        <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-8 sm:mb-10 relative inline-block group whitespace-normal break-words max-w-[90vw] sm:max-w-[24ch] px-2 sm:px-0">
            <span className="relative z-10 block bg-gradient-to-r from-slate-900 via-[#921bb2] to-slate-900 bg-clip-text text-transparent tracking-tight break-words">
              Warum individuelle Softwareentwicklung?
            </span>
            <span className="absolute -bottom-4 left-0 w-0 h-0.5 bg-gradient-to-r from-[#921bb2] to-[#cd20b2] group-hover:w-40 transition-all duration-500"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#921bb2]/0 via-[#cd20b2]/10 to-[#921bb2]/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed 2xl:text-2xl break-words">
            <p>
              Jedes Unternehmen ist einzigartig – und das sollte auch die Software sein, die es nutzt. 
              Standardlösungen stoßen oft an Grenzen, wenn es darum geht, spezifische Geschäftsprozesse 
              optimal zu unterstützen. Mit maßgeschneiderter Softwareentwicklung schaffen wir Lösungen, 
              die effizient, skalierbar und perfekt auf Ihre Anforderungen abgestimmt sind.
            </p>
            <p>
              Unsere Expertise reicht von modernen Web- und Mobile-Anwendungen über leistungsfähige 
              Backend-Architekturen bis hin zur nahtlosen Systemintegration – stets mit einem klaren 
              Fokus auf Performance, Sicherheit und Zukunftsfähigkeit.
            </p>
          </div>
        </div>
      </section>

      {/* Leistungsspektrum */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-[#921bb2] to-[#cd20b2] text-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-16 relative inline-block group max-w-[95vw] sm:max-w-[90vw] px-2 leading-snug">
            <span className="relative z-10 text-white tracking-tight">
              Leistungsspektrum
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {serviceSpectrum.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <article
                  key={index}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-500 shadow-lg hover:shadow-xl card-animated stagger-item overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white transition-colors duration-300 leading-snug">{service.title}</h3>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed transition-colors duration-300 2xl:text-xl">{service.description}</p>
                  </div>
                  
                  {/* Animated bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vorgehensweise */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-16 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent max-w-[95vw] sm:max-w-[90vw] px-2 mx-auto">
            Vorgehensweise
          </h2>
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-6 sm:space-y-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl bg-slate-50 p-4 sm:p-5 md:p-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#921bb2] text-white flex items-center justify-center text-lg sm:text-xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-slate-900 via-[#921bb2] to-slate-900 bg-clip-text text-transparent leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed 2xl:text-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-64 sm:h-80 md:h-full min-h-[280px] md:min-h-[420px] overflow-hidden rounded-3xl">
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
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-[#921bb2] to-[#cd20b2] text-white">
        <div className="w-full px-2 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5 sm:mb-6 text-white leading-snug max-w-[95vw] sm:max-w-[80vw] mx-auto px-1">
            Unsere Software-Lösungen
          </h2>
          <p className="text-center text-white/90 text-base sm:text-lg mb-10 sm:mb-16 max-w-4xl mx-auto 2xl:text-2xl px-2">
            Entdecken Sie unsere bewährten Software-Tools, die bereits erfolgreich in verschiedenen Branchen eingesetzt werden.
          </p>
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/30 p-5 sm:p-7 md:p-8 shadow-lg"
          >
            <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center">
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex-shrink-0 mx-auto lg:mx-0"
                style={{ backgroundColor: tools[activeIndex].color }}
              />
              <div className="flex-1 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {tools[activeIndex].title}
                  </h3>
                  {tools[activeIndex].badge && (
                    <span className="rounded-full border border-white/30 px-3 py-1 text-xs sm:text-sm text-white/80 w-fit">
                      {tools[activeIndex].badge}
                    </span>
                  )}
                </div>
                <p className="text-white/90 text-base sm:text-lg md:text-xl 2xl:text-2xl">
                  {tools[activeIndex].description}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <a
                    href={`#/tools/${tools[activeIndex].id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 sm:px-8 py-3.5 sm:py-4 text-[#921bb2] font-semibold text-base sm:text-lg btn-animated"
                  >
                    Mehr erfahren
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="#/kontakt"
                    className="rounded-full border-2 border-white/30 px-7 sm:px-8 py-3.5 sm:py-4 text-white font-semibold text-base sm:text-lg btn-animated hover:border-white/50 hover:bg-white/10"
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
                      className={`h-2 rounded-full transition-all ${
                        activeIndex === index
                          ? "w-10 bg-white"
                          : "w-4 bg-white/30"
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
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-5 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent leading-snug">
                Von Idee zu Produkt
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed 2xl:text-2xl">
                Wir begleiten Sie von der ersten Idee bis zum erfolgreichen Produkt-Launch. 
                Mit agilen Methoden, modernen Technologien und einem klaren Fokus auf Ihre 
                Geschäftsziele entwickeln wir Software, die wirklich funktioniert.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#921bb2] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base md:text-lg 2xl:text-xl">
                    Strategische Produktentwicklung mit klarem Fokus auf Business Value
                  </span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#921bb2] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base md:text-lg 2xl:text-xl">
                    Agile Entwicklung mit kurzen Feedback-Zyklen
                  </span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#921bb2] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base md:text-lg 2xl:text-xl">
                    Skalierbare Architekturen für zukünftiges Wachstum
                  </span>
                </li>
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#921bb2] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base md:text-lg 2xl:text-xl">
                    Professioneller Launch und kontinuierliche Weiterentwicklung
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 sm:h-80 md:h-full min-h-[280px] md:min-h-[400px] overflow-hidden rounded-3xl">
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
      <section className="bg-gradient-to-br from-[#cd20b2] to-[#921bb2] py-16 sm:py-20 text-white">
        <div className="w-full flex flex-col gap-5 sm:gap-6 text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block group leading-snug max-w-[95vw] sm:max-w-[80vw] mx-auto px-1">
            <span className="relative z-10 text-white tracking-tight">
              Bereit für Ihre individuelle Softwarelösung?
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl text-white/90 2xl:text-2xl px-2">
            Lassen Sie uns gemeinsam Ihre Idee in eine erfolgreiche Softwarelösung verwandeln. 
            Wir entwickeln maßgeschneiderte Anwendungen, die genau zu Ihren Anforderungen passen.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            <a
              href="#/kontakt"
              className="rounded-full bg-white px-8 sm:px-10 py-4 sm:py-5 text-[#cd20b2] font-semibold text-base sm:text-lg btn-animated"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

