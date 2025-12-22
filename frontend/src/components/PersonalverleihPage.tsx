import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { VideoHero } from "./VideoHero";
import { JobLoop } from "./JobLoop";

export function PersonalverleihPage() {
  return (
    <div className="bg-white text-slate-900">
      <VideoHero
        videoSrc="/videos/it-contracting-hero.mp4"
        subtitle="IT Contracting"
        title="Qualifiziertes Personal für Ihr IT-Projekt"
        description="Wir stellen Unternehmen sorgfältig ausgewählte IT-Fachkräfte zur Verfügung – von der Rekrutierung über die Vertragsabwicklung bis zur Einsatzplanung."
        ctaText="Kontakt aufnehmen"
        ctaLink="#/kontakt"
      />

      {/* Einführung */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
            Ihr Partner für qualifizierte IT-Fachkräfte
            </h2>
          <div className="space-y-4 text-slate-600" style={{ lineHeight: '1.7' }}>
            <p>
              Als vereintes Unternehmen bündeln wir unsere Stärken in Recruiting, Softwareentwicklung und Cybersecurity. Dadurch können wir IT-Spezialisten und Projektteams präzise und bedarfsgerecht zusammenbringen.
            </p>
            <p>
              Unser IT-Contracting-Service umfasst den gesamten Prozess: Bedarfsklärung, Rekrutierung, Vertragswesen und Einsatzplanung. So können Sie sich vollständig auf Ihre Kernaufgaben konzentrieren.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gradient-to-b from-[#B84DD4] to-[#FDF5FA] text-black">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative overflow-hidden rounded-lg h-64 lg:h-80">
          <ImageWithFallback
            src="it-contracting-page-section.jpg"
            alt="Team"
                className="h-full w-full object-cover"
          />
        </div>
            <div className="space-y-4">
              <p className="uppercase tracking-wider text-sm text-black/80 font-medium">Expertise</p>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-black">Talente, die Projekte voranbringen</h2>
              <div className="space-y-4 text-black/90" style={{ lineHeight: '1.7' }}>
                <p>
            Mit einem breiten Netzwerk an erfahrenen IT-Spezialisten decken wir sämtliche Bereiche von IT-Transformation, Softwareentwicklung und technischer Projektunterstützung ab.
          </p>
                <p>
                  Alle Profile werden sorgfältig ausgewählt und geprüft. Wir arbeiten mit klaren Skill-Matrizen und einem strukturierten Auswahlverfahren.
          </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Buttons */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="#/personalverleih/fuer-unsere-kunden"
              className="group bg-white border border-slate-200 hover:border-[#921bb2] rounded-lg p-6 transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#921bb2] mb-3">
                  Für unsere Kunden
                </h3>
              <p className="text-slate-600 text-sm mb-4" style={{ lineHeight: '1.7' }}>
                Sie benötigen qualifizierte IT-Fachkräfte für ein Projekt? Wir unterstützen Sie dabei, die richtigen Spezialisten zu finden.
                </p>
              <span className="text-[#921bb2] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Mehr erfahren
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
              </span>
            </a>

            <a
              href="#/personalverleih/fuer-it-spezialisten"
              className="group bg-white border border-slate-200 hover:border-[#921bb2] rounded-lg p-6 transition-colors"
            >
              <h3 className="text-xl font-semibold text-[#921bb2] mb-3">
                  Für IT-Spezialisten
                </h3>
              <p className="text-slate-600 text-sm mb-4" style={{ lineHeight: '1.7' }}>
                Sie sind IT-Fachkraft und suchen neue Projekte? Wir bieten Ihnen Zugang zu spannenden Einsatzmöglichkeiten.
                </p>
              <span className="text-[#921bb2] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Mehr erfahren
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Offene Jobs Bereich */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              Offene Jobs
          </h2>
            <p className="max-w-3xl mx-auto text-slate-600" style={{ lineHeight: '1.7' }}>
              Aktuelle Stellenausschreibungen für IT-Spezialisten. Werden Sie Teil unseres Teams oder finden Sie den passenden Kandidaten für Ihr Projekt.
            </p>
          </div>

          {/* Job-Loop */}
          <JobLoop
            jobs={[
              {
                id: 'senior-fullstack-entwickler',
                title: 'Senior Full-Stack Entwickler',
                type: 'Vollzeit',
                location: 'Zürich / Remote',
                startDate: 'Ab sofort',
                description: 'Wir suchen einen erfahrenen Full-Stack Entwickler für spannende Projekte im Bereich Cloud-native Anwendungen.',
                href: '#/jobs/senior-fullstack-entwickler',
              },
              {
                id: 'cloud-engineer',
                title: 'Cloud Engineer (AWS/Azure)',
                type: 'Teilzeit',
                location: 'Bern / Hybrid',
                startDate: 'Ab Januar 2025',
                description: 'Verstärken Sie unser Team als Cloud Engineer mit Fokus auf moderne Cloud-Infrastrukturen und DevOps-Praktiken.',
                href: '#/jobs/cloud-engineer',
              },
              {
                id: 'it-projektmanager',
                title: 'IT-Projektmanager',
                type: 'Vollzeit',
                location: 'Basel / Remote',
                startDate: 'Ab sofort',
                description: 'Verantworten Sie komplexe IT-Projekte und führen Sie agile Teams erfolgreich zum Ziel.',
                href: '#/jobs/it-projektmanager',
              },
            ]}
            speed={30}
            direction="left"
            gap={24}
            pauseOnHover={true}
            cardWidth={380}
          />

          {/* Mehr anzeigen Button */}
          <div className="text-center mt-8">
            <a
              href="#/personalverleih/fuer-unsere-kunden"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#CB7CDF] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              <span>Mehr anzeigen</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-[#B84DD4] to-[#FDF5FA] py-12 lg:py-16 text-black">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Bereit für eine neue Fachkraft?
          </h2>
          <p className="text-white/90 mb-6" style={{ lineHeight: '1.7' }}>
            Wir analysieren Ihren Bedarf, schlagen passende Profile vor und begleiten den gesamten Einsatz.
          </p>
          <a
            href="#/kontakt"
            className="inline-block px-6 py-3 bg-white text-[#921bb2] font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Termin vereinbaren
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

