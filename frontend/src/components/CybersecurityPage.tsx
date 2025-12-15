import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Clock, FileCheck, Key, Server, Cloud, Activity, Zap } from "lucide-react";
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

export function CybersecurityPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white">
        <ImageWithFallback
          src="/cybersecurity-page-hero.jpg"
          alt="Cybersecurity"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#921bb2] opacity-40"></div>
        <div className="relative w-full flex flex-col gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-24 text-white">
          <p className="uppercase tracking-[0.4em] text-xs sm:text-sm">
            Cybersecurity
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-normal relative group max-w-[95vw] sm:max-w-[80vw]">
            <span className="relative z-10 text-white tracking-tight">
              Ihr Unternehmen sicher schützen
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h1>
          <p className="max-w-5xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed 2xl:text-2xl">
            Wir schützen Ihr Unternehmen vor Cyber-Bedrohungen mit proaktiven Sicherheitsmaßnahmen, kontinuierlichem Monitoring und schneller Incident Response. Unsere Experten sorgen dafür, dass Ihre IT-Infrastruktur sicher bleibt und alle Compliance-Anforderungen erfüllt werden.
          </p>
          <a
            href="#/kontakt"
            className="mt-3 sm:mt-4 w-fit rounded-full bg-white px-8 sm:px-10 py-4 sm:py-5 text-[#921bb2] font-semibold text-base sm:text-lg btn-animated"
          >
            Kostenlose Beratung
          </a>
        </div>
      </section>

      {/* Herausforderungen */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-center mb-10 sm:mb-14 md:mb-16 relative inline-block group whitespace-normal break-words max-w-[95vw] sm:max-w-[90vw] mx-auto px-2">
            <span className="relative z-10 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent tracking-tight break-words">
              Herausforderungen im Cybersecurity-Bereich
            </span>
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#921bb2] to-[#cd20b2] group-hover:w-40 transition-all duration-500"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#921bb2]/0 via-[#cd20b2]/10 to-[#921bb2]/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-slate-200 hover:border-[#921bb2] transition-all duration-500 shadow-sm hover:shadow-xl card-animated stagger-item overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#921bb2]/5 to-[#cd20b2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-[#921bb2] transition-colors duration-300 bg-gradient-to-r from-slate-900 via-[#921bb2] to-slate-900 bg-clip-text text-transparent leading-snug">{challenge.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300 2xl:text-xl">{challenge.description}</p>
                </div>
                
                {/* Animated bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#921bb2] to-[#cd20b2] text-white relative overflow-hidden">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-4 sm:mb-6 relative inline-block group whitespace-normal break-words max-w-[95vw] sm:max-w-[90vw] mx-auto px-2">
              <span className="relative z-10 text-white tracking-tight">
                Vorteile mit Cybersecurity
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
              <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 items-center mb-10 sm:mb-14 md:mb-16">
            {/* Left Side - Image */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl order-2 lg:order-1 h-64 sm:h-80 md:h-96 lg:h-[480px] shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
                alt="Cybersecurity Benefits"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#921bb2]/20 to-transparent"></div>
            </div>
            
            {/* Right Side - Text Box */}
            <div className="space-y-5 sm:space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border-2 border-white/30 shadow-lg">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-white break-words leading-snug">
                  Warum Cybersecurity?
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4 sm:mb-5 md:mb-6 2xl:text-2xl break-words">
                  Cyber-Bedrohungen werden immer komplexer und häufiger. Wir schützen Ihr Unternehmen mit modernsten Sicherheitstechnologien, kontinuierlichem Monitoring und erfahrenen Security-Experten. So können Sie sich auf Ihr Kerngeschäft konzentrieren, während wir Ihre digitale Infrastruktur absichern.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm md:text-base 2xl:text-xl break-words">24/7 Security Monitoring und Threat Detection</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm md:text-base 2xl:text-xl break-words">Schnelle Incident Response bei Sicherheitsvorfällen</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm md:text-base 2xl:text-xl break-words">Compliance-Sicherstellung nach DSGVO, ISO 27001 und mehr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-500 shadow-lg hover:shadow-xl card-animated stagger-item overflow-hidden"
                >
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4 sm:mb-5 md:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Title and Description */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-white transition-colors duration-300 break-words leading-snug">
                      {advantage.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed transition-colors duration-300 2xl:text-xl break-words">
                      {advantage.description}
                    </p>
                  </div>

                  {/* Animated bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Was beinhaltet Cybersecurity */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-snug mb-10 sm:mb-14 md:mb-16 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent whitespace-normal break-words max-w-[95vw] sm:max-w-[90vw] mx-auto px-2">
            Das beinhaltet Cybersecurity
          </h2>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Security Monitoring",
                description: "Kontinuierliche Überwachung Ihrer IT-Infrastruktur mit SIEM-Lösungen und Echtzeit-Threat Detection.",
                icon: Eye
              },
              {
                title: "Vulnerability Management",
                description: "Regelmäßige Schwachstellenanalysen und Patch-Management für alle Systeme und Anwendungen.",
                icon: Shield
              },
              {
                title: "Penetration Testing",
                description: "Professionelle Sicherheitstests identifizieren Schwachstellen, bevor Angreifer sie ausnutzen.",
                icon: Lock
              },
              {
                title: "Incident Response",
                description: "Schnelle Reaktion auf Sicherheitsvorfälle mit definierten Prozessen und erfahrenen Security-Experten.",
                icon: AlertTriangle
              },
              {
                title: "Security Awareness",
                description: "Schulungen und Sensibilisierung Ihrer Mitarbeitenden für sichere Arbeitsweisen und Phishing-Erkennung.",
                icon: Key
              },
              {
                title: "Compliance & Audit",
                description: "Unterstützung bei DSGVO, ISO 27001, BSI-Grundschutz und branchenspezifischen Compliance-Anforderungen.",
                icon: FileCheck
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-slate-200 hover:border-[#921bb2] transition-all duration-500 shadow-sm hover:shadow-xl card-animated stagger-item overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#921bb2]/5 to-[#cd20b2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4 sm:mb-5 md:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Title and Description */}
                    <h3 className="font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 group-hover:text-[#921bb2] transition-colors duration-300 bg-gradient-to-r from-slate-900 via-[#921bb2] to-slate-900 bg-clip-text text-transparent break-words leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 2xl:text-xl break-words">
                      {service.description}
                    </p>
                  </div>

                  {/* Animated bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Module */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#921bb2] to-[#cd20b2] text-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-center mb-4 sm:mb-5 md:mb-6 text-white relative inline-block group whitespace-normal break-words max-w-[95vw] sm:max-w-[90vw] mx-auto px-2">
            <span className="relative z-10 text-white tracking-tight break-words">
              Die Cybersecurity-Module
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <p className="text-center text-white/90 text-base sm:text-lg mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto leading-relaxed 2xl:text-2xl px-2">
            Expertise, Verantwortung und Steuerung aus einer Hand – modular kombinierbar.
          </p>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceModules.map((card, index) => (
              <article
                key={card.title}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10 border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-500 shadow-lg hover:shadow-xl card-animated stagger-item overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                    >
                      <card.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Title and Description */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white transition-colors duration-300 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed transition-colors duration-300 2xl:text-xl">
                    {card.description}
                  </p>
                </div>

                {/* Animated bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experten-Beratung */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block group leading-snug">
                <span className="relative z-10 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent tracking-tight">
                  Experten-Beratung von XMB Group AG
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed 2xl:text-2xl">
                Unsere Security-Experten unterstützen Sie bei der Entwicklung einer umfassenden Cybersecurity-Strategie, die zu Ihren Unternehmenszielen passt:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#921bb2] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base md:text-lg 2xl:text-xl">Security-Assessment & Risikoanalyse</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#921bb2] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base md:text-lg 2xl:text-xl">Cybersecurity-Strategie & Roadmap-Entwicklung</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#921bb2] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base md:text-lg 2xl:text-xl">Compliance-Beratung & Audit-Vorbereitung</span>
                </li>
              </ul>
              <a
                href="#/kontakt"
                className="inline-block rounded-full bg-[#921bb2] px-8 sm:px-10 py-4 sm:py-5 text-white font-semibold text-base sm:text-lg btn-animated"
              >
                Beratung anfordern
              </a>
            </div>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl h-64 sm:h-80 md:h-96 lg:h-[460px] order-2 lg:order-2">
              <ImageWithFallback
                src="cybersecurity-page-beratung.jpg"
                alt="Expert Consulting"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#921bb2] to-[#cd20b2] py-16 sm:py-20 text-white">
        <div className="w-full flex flex-col gap-5 sm:gap-6 text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block group max-w-[95vw] sm:max-w-[80vw] mx-auto px-2 leading-snug">
            <span className="relative z-10 text-white tracking-tight">
              Bereit, Ihr Unternehmen zu schützen?
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed 2xl:text-2xl px-2">
            Wir entwickeln ein maßgeschneidertes Cybersecurity-Konzept für Ihr Unternehmen – inklusive kontinuierlichem Monitoring, schneller Incident Response und Compliance-Sicherstellung.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            <a
              href="#/kontakt"
              className="rounded-full bg-white px-8 sm:px-10 py-4 sm:py-5 text-[#921bb2] font-semibold text-base sm:text-lg btn-animated"
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

