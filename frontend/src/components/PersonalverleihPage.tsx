import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PersonalverleihPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden text-white">
        <ImageWithFallback
          src="/it-contracting-page-hero.jpg"
          alt="Consulting team"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#921bb2] opacity-40"></div>
        <div className="relative w-full flex flex-col gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-24">
          <p className="uppercase tracking-[0.4em] text-white/80 text-xs sm:text-sm">
            IT Contracting
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-normal relative group max-w-[95vw] sm:max-w-[80vw]">
            <span className="relative z-10 text-white tracking-tight">
              Qualifiziertes Personal für Ihr IT-Projekt
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h1>
          <p className="max-w-5xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed 2xl:text-2xl">
            Wir stellen Unternehmen sorgfältig ausgewählte IT-Fachkräfte zur Verfügung – von der Rekrutierung über die Vertragsabwicklung bis hin zur Einsatzplanung. Unser Ziel ist es, Projekte verlässlich zu unterstützen und stabile Ergebnisse zu sichern.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-3 sm:mt-4">
            <a
              href="#/kontakt"
              className="rounded-full border-2 border-white px-8 sm:px-10 py-4 sm:py-5 text-center text-base sm:text-lg font-semibold btn-animated hover:bg-white hover:text-[#921bb2]"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      {/* Einführung zum Dienst */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="space-y-5 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 whitespace-normal relative inline-block group max-w-[95vw] sm:max-w-[90vw] px-2 leading-snug">
              <span className="relative z-10 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent tracking-tight">
              IT Contracting – Ihr Partner für qualifizierte IT-Fachkräfte
              </span>
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#921bb2] to-[#cd20b2] group-hover:w-40 transition-all duration-500"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#921bb2]/0 via-[#cd20b2]/10 to-[#921bb2]/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed 2xl:text-2xl">
              Als vereintes Unternehmen bündeln wir unsere Stärken in Recruiting, Softwareentwicklung und Cybersecurity. Dadurch können wir IT-Spezialisten und Projektteams präzise und bedarfsgerecht zusammenbringen. Wir kennen die Anforderungen moderner IT-Landschaften ebenso wie die Bedeutung klarer, zuverlässiger Abläufe.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed 2xl:text-2xl">
              Unser IT-Contracting-Service umfasst den gesamten Prozess: Bedarfsklärung, Rekrutierung, Vertragswesen und Einsatzplanung. So können Sie sich vollständig auf Ihre Kernaufgaben konzentrieren, während wir für die passenden Talente sorgen.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 bg-gradient-to-br from-[#921bb2] to-[#cd20b2] text-white lg:flex-row">
        <div className="relative flex-1 overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl h-64 sm:h-80 md:h-96 lg:aspect-auto lg:min-h-[500px]">
          <ImageWithFallback
            src="it-contracting-page-section.jpg"
            alt="Team"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 sm:gap-5 md:gap-6">
          <p className="uppercase tracking-[0.3em] text-white/80 font-semibold text-xs sm:text-sm">Expertise</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white break-words leading-snug">Talente, die Projekte voranbringen</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed 2xl:text-2xl break-words">
            Mit einem breiten Netzwerk an erfahrenen IT-Spezialisten decken wir sämtliche Bereiche von IT-Transformation, Softwareentwicklung und technischer Projektunterstützung ab.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed 2xl:text-2xl break-words">
            Alle Profile werden sorgfältig ausgewählt und geprüft. Wir arbeiten mit klaren Skill-Matrizen und einem strukturierten Auswahlverfahren, damit Ihnen nur passende Fachkräfte vorgestellt werden – direkt einsatzbereit und zuverlässig.
          </p>
        </div>
      </section>

      {/* Services Buttons */}
      <section className="bg-white px-4 sm:px-6 py-12 sm:py-16">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <a
              href="#/personalverleih/fuer-unsere-kunden"
              className="group relative rounded-2xl sm:rounded-3xl bg-white border-2 border-slate-200 p-5 sm:p-6 md:p-8 lg:p-12 card-animated"
            >
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 break-words group-hover:text-[#921bb2] transition-colors bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent leading-snug">
                  Für unsere Kunden
                </h3>
                <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed 2xl:text-2xl break-words">
                  Sie benötigen qualifizierte IT-Fachkräfte für ein laufendes oder bevorstehendes Projekt? Wir unterstützen Sie dabei, die richtigen Spezialisten zu finden und sorgen für eine transparente, sichere und effiziente Besetzung.
                </p>
                <div className="mt-4 sm:mt-6 flex items-center gap-2 text-[#921bb2] font-semibold text-sm sm:text-base">
                  <span>Mehr erfahren</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            <a
              href="#/personalverleih/fuer-it-spezialisten"
              className="group relative rounded-2xl sm:rounded-3xl bg-white border-2 border-slate-200 p-5 sm:p-6 md:p-8 lg:p-12 card-animated"
            >
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 break-words group-hover:text-[#921bb2] transition-colors bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent leading-snug">
                  Für IT-Spezialisten
                </h3>
                <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed 2xl:text-2xl break-words">
                  Sie sind IT-Fachkraft und suchen neue Projekte? Wir bieten Ihnen Zugang zu spannenden Einsatzmöglichkeiten und begleiten Sie vom ersten Gespräch bis zum Projekteinsatz – klar strukturiert und persönlich.
                </p>
                <div className="mt-4 sm:mt-6 flex items-center gap-2 text-[#921bb2] font-semibold text-sm sm:text-base">
                  <span>Mehr erfahren</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SOFORT STARTEN – Call to Action */}
      <section className="bg-gradient-to-br from-[#921bb2] to-[#cd20b2] py-16 sm:py-20 text-white">
        <div className="w-full flex flex-col gap-5 sm:gap-6 text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block group max-w-[95vw] sm:max-w-[80vw] mx-auto px-2 leading-snug">
            <span className="relative z-10 text-white tracking-tight">
              Bereit für eine neue Fachkraft?
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl text-white/90 2xl:text-2xl px-2">
            Wir analysieren Ihren Bedarf, schlagen passende Profile vor und begleiten den gesamten Einsatz – zuverlässig, transparent und persönlich.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            <a
              href="#/kontakt"
              className="rounded-full bg-white px-8 sm:px-10 py-4 sm:py-5 text-[#921bb2] font-semibold text-base sm:text-lg btn-animated"
            >
              Termin vereinbaren
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

