import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Briefcase, TrendingUp, Heart, Star, Target, Handshake, FileText, UserCheck } from "lucide-react";

export function FuerITSpezialistenPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="bg-[#5E3B83] py-16 md:py-20 text-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <a
            href="#/personalverleih"
            className="inline-flex items-center gap-2 text-black/80 hover:text-black text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zu IT Contracting</span>
          </a>
          <p className="uppercase tracking-wider text-sm text-black/80 font-medium mb-4">Für IT-Spezialisten</p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 text-black">
              Werden Sie Teil unseres Talent-Pools
          </h1>
          <p className="text-black/90" style={{ lineHeight: '1.7' }}>
            Sie sind IT-Spezialist und möchten Ihre Fähigkeiten in anspruchsvollen Projekten einsetzen? Als Teil unseres Talent-Pools erhalten Sie Zugang zu einem Netzwerk, das auf Verlässlichkeit, fachliche Qualität und langfristige Zusammenarbeit setzt. Wir vermitteln Ihnen Einsätze, die Ihre Expertise zur Geltung bringen und Ihnen eine stabile berufliche Perspektive eröffnen.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
            <div className="relative h-64 sm:h-80 md:h-96 lg:min-h-[400px] overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                alt="IT Specialist"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Ihre Karriere mit der XMB Group AG</h2>
              <div className="space-y-4" style={{ lineHeight: '1.7' }}>
                <p className="text-slate-600">
                Als Zusammenschluss erfahrener Unternehmen verbinden wir tiefes Know-how aus Recruiting, Softwareentwicklung und Cybersecurity. Dieses Fundament ermöglicht es uns, IT-Fachkräfte gezielt und umsichtig mit passenden Projekten zu verbinden.
              </p>
                <p className="text-slate-600">
                Wir arbeiten mit Unternehmen zusammen, die klare Strukturen, sorgfältige Planung und solide Arbeitsweisen schätzen. Genau dort platzieren wir Spezialisten, deren Fähigkeiten einen echten Mehrwert schaffen. Ob Entwicklung, Engineering, Projektunterstützung oder Beratung – wir achten darauf, dass Aufgaben und Profile wirklich zueinander passen.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prozess Abschnitt */}
      <section className="py-12 lg:py-16 bg-[#5E3B83] text-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-white">
            Während des gesamten Prozesses stehen wir Ihnen zur Seite
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 mb-8">
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
                  className="bg-white/10 rounded-lg p-5 border border-white/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                          {item.number}
                        </span>
                      </div>
                    </div>
                  <p className="text-white/90 text-sm" style={{ lineHeight: '1.7' }}>
                      {item.text}
                    </p>
                </div>
              );
            })}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-white/90" style={{ lineHeight: '1.7' }}>
                So schaffen wir eine Zusammenarbeit, die nicht nur fachlich überzeugt, sondern auch menschlich Bestand hat.
              </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-slate-900">
              Ihre Vorteile
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Spannende Projekte</h3>
              <p className="text-slate-600 text-sm" style={{ lineHeight: '1.7' }}>
                Sie erhalten Zugang zu ausgewählten Einsätzen bei Unternehmen, die auf zuverlässige IT-Expertise angewiesen sind. Wir achten darauf, dass Projekte fachlich anspruchsvoll und zugleich klar strukturiert sind.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Karriereentwicklung</h3>
              <p className="text-slate-600 text-sm" style={{ lineHeight: '1.7' }}>
                Wir unterstützen Sie dabei, Ihre berufliche Entwicklung bewusst voranzutreiben – mit Projekten, die Ihren Fähigkeiten entsprechen und Ihr Profil nachhaltig stärken.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Persönliche Betreuung</h3>
              <p className="text-slate-600 text-sm" style={{ lineHeight: '1.7' }}>
                Bei uns haben Sie feste Ansprechpartner, die Ihre Situation kennen und Sie während des gesamten Einsatzes begleiten. Wir stehen für Transparenz, klare Kommunikation und zügige Abläufe.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] flex items-center justify-center mb-4">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">Flexible Gestaltung</h3>
              <p className="text-slate-600 text-sm" style={{ lineHeight: '1.7' }}>
                Ob kurzfristige Einsätze oder langfristige Projektaufträge – wir bieten Ihnen verschiedene Modelle, die sich an Ihre Lebenssituation und Ihre beruflichen Ziele anpassen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-gradient-to-b from-[#B84DD4] to-[#FDF5FA] py-12 lg:py-16 text-black">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
              Interessiert?
          </h2>
          <p className="text-black/80 mb-6" style={{ lineHeight: '1.7' }}>
            Werden Sie Teil unseres Talent-Pools und entdecken Sie Projekte, die zu Ihrer beruflichen Ausrichtung und Ihrer Expertise passen. Wir freuen uns darauf, Sie kennenzulernen und gemeinsam die nächsten Schritte zu planen.
          </p>
            <a
              href="#/kontakt"
            className="inline-block px-6 py-3 bg-white text-[#921bb2] font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
            Kontakt aufnehmen
            </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

