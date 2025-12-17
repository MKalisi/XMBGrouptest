import { Footer } from './Footer';

export function AGBPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 py-20 md:py-24 text-center text-white bg-gradient-to-br from-[#921bb2] to-[#cd20b2]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-3 sm:space-y-4">
          <p className="uppercase tracking-[0.4em] text-xs sm:text-sm">Rechtliches</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="relative z-10 text-white tracking-tight">Allgemeine Geschäftsbedingungen</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
            Unsere Vertragsbedingungen im Überblick
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-4xl px-2 sm:px-4 md:px-8">
          <div className="space-y-10">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">1. Geltungsbereich</h2>
              <p className="text-slate-700 leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen 
                zwischen der XMB Group AG und ihren Kunden. Abweichende Bedingungen des Kunden 
                werden nicht anerkannt, es sei denn, die XMB Group AG stimmt ihrer Geltung 
                ausdrücklich schriftlich zu.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">2. Leistungen</h2>
              <p className="text-slate-700 leading-relaxed">
                Die XMB Group AG erbringt Dienstleistungen in den Bereichen IT Contracting, 
                Cybersecurity und Softwareentwicklung. Art und Umfang der Leistungen ergeben 
                sich aus dem jeweiligen Vertrag bzw. der Auftragsbestätigung.
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                Die XMB Group AG ist berechtigt, sich zur Erfüllung ihrer vertraglichen 
                Verpflichtungen Dritter zu bedienen.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">3. Vertragsschluss</h2>
              <p className="text-slate-700 leading-relaxed">
                Angebote der XMB Group AG sind freibleibend und unverbindlich. Ein Vertrag 
                kommt erst durch schriftliche Auftragsbestätigung oder durch Beginn der 
                Leistungserbringung zustande.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">4. Preise und Zahlungsbedingungen</h2>
              <p className="text-slate-700 leading-relaxed">
                Es gelten die im Angebot oder Vertrag vereinbarten Preise. Alle Preise verstehen 
                sich in Schweizer Franken (CHF) und zuzüglich der gesetzlichen Mehrwertsteuer.
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                Rechnungen sind innerhalb von 30 Tagen nach Rechnungsdatum ohne Abzug zahlbar, 
                sofern nicht anders vereinbart.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">5. Mitwirkungspflichten des Kunden</h2>
              <p className="text-slate-700 leading-relaxed">
                Der Kunde stellt alle für die Leistungserbringung erforderlichen Informationen, 
                Unterlagen und Zugänge rechtzeitig und vollständig zur Verfügung. Verzögerungen, 
                die auf mangelnde Mitwirkung zurückzuführen sind, gehen nicht zu Lasten der 
                XMB Group AG.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">6. Geheimhaltung</h2>
              <p className="text-slate-700 leading-relaxed">
                Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erhaltenen 
                vertraulichen Informationen geheim zu halten und nur für die vereinbarten 
                Zwecke zu verwenden. Diese Verpflichtung gilt auch nach Beendigung des 
                Vertragsverhältnisses.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">7. Haftung</h2>
              <p className="text-slate-700 leading-relaxed">
                Die XMB Group AG haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. 
                Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit gesetzlich 
                zulässig. Die Haftung ist in jedem Fall auf den Auftragswert begrenzt.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">8. Geistiges Eigentum</h2>
              <p className="text-slate-700 leading-relaxed">
                Alle Rechte an Arbeitsergebnissen gehen erst nach vollständiger Bezahlung auf 
                den Kunden über, sofern vertraglich nichts anderes vereinbart ist. 
                Vorbestehende Rechte der XMB Group AG bleiben in jedem Fall bei dieser.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">9. Kündigung</h2>
              <p className="text-slate-700 leading-relaxed">
                Dauerschuldverhältnisse können von beiden Parteien mit einer Frist von 
                3 Monaten zum Monatsende gekündigt werden, sofern vertraglich nichts 
                anderes vereinbart ist. Das Recht zur ausserordentlichen Kündigung aus 
                wichtigem Grund bleibt unberührt.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">10. Schlussbestimmungen</h2>
              <p className="text-slate-700 leading-relaxed">
                Es gilt Schweizer Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand 
                ist Oensingen, Schweiz. Sollten einzelne Bestimmungen dieser AGB unwirksam 
                sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
              <p className="text-sm text-slate-500 mt-6">
                Stand: Dezember 2025
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
