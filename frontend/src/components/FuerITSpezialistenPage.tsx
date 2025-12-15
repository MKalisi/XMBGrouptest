import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Briefcase, TrendingUp, Heart, Star, Target, Handshake, FileText, UserCheck } from "lucide-react";

export function FuerITSpezialistenPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden text-white">
        <ImageWithFallback
          src="fuer-it-spezialisten-hero.jpg"
          alt="Für IT-Spezialisten"
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
          <p className="uppercase tracking-[0.4em] text-xs sm:text-sm">Für IT-Spezialisten</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-normal relative group max-w-[95vw] sm:max-w-[80vw]">
            <span className="relative z-10 text-white tracking-tight">
              Werden Sie Teil unseres Talent-Pools
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h1>
          <p className="max-w-5xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed 2xl:text-2xl">
            Sie sind IT-Spezialist und möchten Ihre Fähigkeiten in anspruchsvollen Projekten einsetzen? Als Teil unseres Talent-Pools erhalten Sie Zugang zu einem Netzwerk, das auf Verlässlichkeit, fachliche Qualität und langfristige Zusammenarbeit setzt. Wir vermitteln Ihnen Einsätze, die Ihre Expertise zur Geltung bringen und Ihnen eine stabile berufliche Perspektive eröffnen.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
            <div className="relative h-64 sm:h-80 md:h-96 lg:min-h-[400px] overflow-hidden rounded-2xl sm:rounded-3xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                alt="IT Specialist"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent leading-snug">Ihre Karriere mit der XMB Group AG</h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed 2xl:text-2xl">
                Als Zusammenschluss erfahrener Unternehmen verbinden wir tiefes Know-how aus Recruiting, Softwareentwicklung und Cybersecurity. Dieses Fundament ermöglicht es uns, IT-Fachkräfte gezielt und umsichtig mit passenden Projekten zu verbinden.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed 2xl:text-2xl">
                Wir arbeiten mit Unternehmen zusammen, die klare Strukturen, sorgfältige Planung und solide Arbeitsweisen schätzen. Genau dort platzieren wir Spezialisten, deren Fähigkeiten einen echten Mehrwert schaffen. Ob Entwicklung, Engineering, Projektunterstützung oder Beratung – wir achten darauf, dass Aufgaben und Profile wirklich zueinander passen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prozess Abschnitt */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#921bb2] to-[#cd20b2] text-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 sm:mb-16 md:mb-20 text-center text-white max-w-[95vw] sm:max-w-[90vw] mx-auto px-2 leading-snug">
            Während des gesamten Prozesses stehen wir Ihnen zur Seite
          </h2>
          
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 mb-10 sm:mb-14 md:mb-16">
            {[
              {
                text: "Wir klären Ihre Anforderungen und beruflichen Ziele.",
                number: "01",
                icon: Target
              },
              {
                text: "Wir vermitteln Projekte, die Ihrer Erfahrung entsprechen.",
                number: "02",
                icon: Handshake
              },
              {
                text: "Wir übernehmen die Vertragsabwicklung und Organisation.",
                number: "03",
                icon: FileText
              },
              {
                text: "Wir sind Ihr fester Ansprechpartner, auch während des Einsatzes.",
                number: "04",
                icon: UserCheck
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-500 shadow-lg hover:shadow-xl card-animated stagger-item overflow-hidden"
                >
                  <div className="relative z-10">
                    {/* Icon and Number */}
                    <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <span className="text-white font-bold text-base sm:text-lg md:text-xl transition-colors duration-300">
                          {item.number}
                        </span>
                      </div>
                    </div>
                    
                    {/* Text */}
                    <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed transition-colors duration-300 2xl:text-xl">
                      {item.text}
                    </p>
                  </div>

                  {/* Animated bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
                </div>
              );
            })}
          </div>

          <div className="text-center max-w-5xl mx-auto px-2">
            <div className="inline-block px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/30">
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed 2xl:text-2xl">
                So schaffen wir eine Zusammenarbeit, die nicht nur fachlich überzeugt, sondern auch menschlich Bestand hat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 py-16 sm:py-20">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 sm:mb-14 md:mb-16 text-center relative inline-block group max-w-[95vw] sm:max-w-[90vw] mx-auto px-2 leading-snug">
            <span className="relative z-10 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent tracking-tight">
              Ihre Vorteile
            </span>
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#921bb2] to-[#cd20b2] group-hover:w-24 transition-all duration-500"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#921bb2]/0 via-[#cd20b2]/10 to-[#921bb2]/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-slate-200 hover:border-[#921bb2] transition-all duration-500 shadow-sm hover:shadow-xl card-animated stagger-item overflow-hidden">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#921bb2]/5 to-[#cd20b2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words group-hover:text-[#921bb2] transition-colors duration-300 bg-gradient-to-r from-slate-900 via-[#921bb2] to-slate-900 bg-clip-text text-transparent leading-snug">Spannende Projekte</h3>
                <p className="text-slate-600 text-sm sm:text-base group-hover:text-slate-700 transition-colors duration-300 2xl:text-xl break-words">
                  Sie erhalten Zugang zu ausgewählten Einsätzen bei Unternehmen, die auf zuverlässige IT-Expertise angewiesen sind. Wir achten darauf, dass Projekte fachlich anspruchsvoll und zugleich klar strukturiert sind.
                </p>
              </div>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
            </div>
            <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-slate-200 hover:border-[#921bb2] transition-all duration-500 shadow-sm hover:shadow-xl card-animated stagger-item overflow-hidden">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#921bb2]/5 to-[#cd20b2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words group-hover:text-[#921bb2] transition-colors duration-300 bg-gradient-to-r from-slate-900 via-[#921bb2] to-slate-900 bg-clip-text text-transparent leading-snug">Karriereentwicklung</h3>
                <p className="text-slate-600 text-sm sm:text-base group-hover:text-slate-700 transition-colors duration-300 2xl:text-xl break-words">
                  Wir unterstützen Sie dabei, Ihre berufliche Entwicklung bewusst voranzutreiben – mit Projekten, die Ihren Fähigkeiten entsprechen und Ihr Profil nachhaltig stärken.
                </p>
              </div>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
            </div>
            <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-slate-200 hover:border-[#921bb2] transition-all duration-500 shadow-sm hover:shadow-xl card-animated stagger-item overflow-hidden">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#921bb2]/5 to-[#cd20b2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words group-hover:text-[#921bb2] transition-colors duration-300 bg-gradient-to-r from-slate-900 via-[#921bb2] to-slate-900 bg-clip-text text-transparent leading-snug">Persönliche Betreuung</h3>
                <p className="text-slate-600 text-sm sm:text-base group-hover:text-slate-700 transition-colors duration-300 2xl:text-xl break-words">
                  Bei uns haben Sie feste Ansprechpartner, die Ihre Situation kennen und Sie während des gesamten Einsatzes begleiten. Wir stehen für Transparenz, klare Kommunikation und zügige Abläufe.
                </p>
              </div>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
            </div>
            <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border-2 border-slate-200 hover:border-[#921bb2] transition-all duration-500 shadow-sm hover:shadow-xl card-animated stagger-item overflow-hidden">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#921bb2]/5 to-[#cd20b2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 break-words group-hover:text-[#921bb2] transition-colors duration-300 bg-gradient-to-r from-slate-900 via-[#921bb2] to-slate-900 bg-clip-text text-transparent leading-snug">Flexible Gestaltung</h3>
                <p className="text-slate-600 text-sm sm:text-base group-hover:text-slate-700 transition-colors duration-300 2xl:text-xl break-words">
                  Ob kurzfristige Einsätze oder langfristige Projektaufträge – wir bieten Ihnen verschiedene Modelle, die sich an Ihre Lebenssituation und Ihre beruflichen Ziele anpassen.
                </p>
              </div>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl sm:rounded-b-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-gradient-to-br from-[#921bb2] to-[#cd20b2] py-16 sm:py-20 text-white">
        <div className="w-full flex flex-col gap-5 sm:gap-6 text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block group max-w-[95vw] sm:max-w-[80vw] mx-auto px-2 leading-snug">
            <span className="relative z-10 text-white tracking-tight">
              Interessiert?
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl text-white/90 2xl:text-2xl px-2">
            Werden Sie Teil unseres Talent-Pools und entdecken Sie Projekte, die zu Ihrer beruflichen Ausrichtung und Ihrer Expertise passen. Wir freuen uns darauf, Sie kennenzulernen und gemeinsam die nächsten Schritte zu planen.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            <a
              href="#/kontakt"
              className="rounded-full bg-white px-8 sm:px-10 py-4 sm:py-5 text-[#921bb2] font-semibold text-base sm:text-lg btn-animated"
            >
              Jetzt bewerben
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

