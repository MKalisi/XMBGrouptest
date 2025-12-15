import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, CheckCircle, Clock, Users, Shield } from "lucide-react";

export function FuerUnsereKundenPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden text-white">
        <ImageWithFallback
          src="fuer-unsere-kunden-hero.jpg"
          alt="Für unsere Kunden"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#921bb2] opacity-40"></div>
        <div className="relative w-full flex flex-col gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-24">
          <a
            href="#/personalverleih"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white font-semibold hover:bg-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl mb-4 w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Zurück zu IT Contracting</span>
          </a>
          <p className="uppercase tracking-[0.4em] text-xs sm:text-sm">Für unsere Kunden</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-normal relative group max-w-[95vw] sm:max-w-[80vw]">
            <span className="relative z-10 text-white tracking-tight">
              Qualifizierte IT-Fachkräfte für Ihr Projekt
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h1>
          <p className="max-w-5xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed 2xl:text-2xl">
            Sie benötigen Spezialisten für Ihr IT-Projekt? Wir vermitteln Ihnen sorgfältig ausgewählte Fachkräfte, die präzise zu Ihren Anforderungen passen und Ihr Team zuverlässig unterstützen.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent leading-snug">Unser Service für Sie</h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed 2xl:text-2xl">
                Als Ihr IT-Contracting-Partner übernehmen wir die gesamte Abwicklung der Personalvermittlung. Wir klären den Bedarf, identifizieren passende Kandidaten und kümmern uns um alle organisatorischen Schritte – bis zur erfolgreichen Einsatzplanung.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed 2xl:text-2xl">
                Unser Talent-Pool umfasst eine breite Auswahl erfahrener IT-Spezialisten, darunter Softwareentwickler, Cloud-Engineers, Projektmanager und Experten aus vielen weiteren Bereichen. Alle Profile werden fortlaufend geprüft und aktuell gehalten, damit Sie jederzeit die richtige Unterstützung erhalten.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:min-h-[400px] overflow-hidden rounded-2xl sm:rounded-3xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="IT Team"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#921bb2] to-[#cd20b2] px-4 sm:px-6 py-16 sm:py-20 text-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 sm:mb-14 md:mb-16 text-center relative inline-block group max-w-[95vw] sm:max-w-[90vw] mx-auto px-2 leading-snug">
            <span className="relative z-10 text-white tracking-tight">
              Ihre Vorteile
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-500 shadow-lg hover:shadow-xl card-animated stagger-item overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white transition-colors duration-300 leading-snug">Schnelle Vermittlung</h3>
                <p className="text-white/90 text-sm sm:text-base transition-colors duration-300 2xl:text-xl">
                  Wir liefern innerhalb kurzer Zeit passende Kandidaten – strukturiert, abgestimmt und mit aussagekräftigen Profilen.
                </p>
              </div>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
            </div>
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-500 shadow-lg hover:shadow-xl card-animated stagger-item overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white transition-colors duration-300 leading-snug">Geprüfte Qualität</h3>
                <p className="text-white/90 text-sm sm:text-base transition-colors duration-300 2xl:text-xl">
                  Alle Fachkräfte werden hinsichtlich Qualifikation, Erfahrung und Eignung sorgfältig bewertet.
                </p>
              </div>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
            </div>
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-500 shadow-lg hover:shadow-xl card-animated stagger-item overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white transition-colors duration-300 leading-snug">Breites Portfolio</h3>
                <p className="text-white/90 text-sm sm:text-base transition-colors duration-300 2xl:text-xl">
                  Von Entwicklern über Engineers bis hin zu Projektleitern – wir decken alle wesentlichen IT-Bereiche ab.
                </p>
              </div>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
            </div>
            <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-500 shadow-lg hover:shadow-xl card-animated stagger-item overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-white transition-colors duration-300 leading-snug">Compliance & Rechtssicherheit</h3>
                <p className="text-white/90 text-sm sm:text-base transition-colors duration-300 2xl:text-xl">
                  Wir übernehmen die gesamte Vertragsabwicklung und sorgen für klare, regelkonforme Prozesse.
                </p>
              </div>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-white py-16 sm:py-20">
        <div className="w-full flex flex-col gap-5 sm:gap-6 text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block group max-w-[95vw] sm:max-w-[90vw] mx-auto px-2 leading-snug">
            <span className="relative z-10 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent tracking-tight">
              Bereit für neue Fachkräfte?
            </span>
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#921bb2] to-[#cd20b2] group-hover:w-40 transition-all duration-500"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#921bb2]/0 via-[#cd20b2]/10 to-[#921bb2]/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl text-slate-700 2xl:text-2xl px-2">
            Kontaktieren Sie uns – gemeinsam finden wir die passenden IT-Spezialisten für Ihr Projekt.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            <a
              href="#/kontakt"
              className="rounded-full bg-gradient-to-r from-[#921bb2] to-[#cd20b2] px-8 sm:px-10 py-4 sm:py-5 text-white font-semibold text-base sm:text-lg btn-animated"
            >
              Jetzt Bedarf melden
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

