import { Footer } from './Footer';

export function AGBPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-[#5E3B83] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center text-white">
          <p className="uppercase tracking-wider text-sm text-white/80 font-medium mb-4">Rechtliches</p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-white/90">
            Unsere Vertragsbedingungen im Überblick
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="space-y-8">
            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">1. Geltungsbereich</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen 
                zwischen der XMB Group AG und ihren Kunden. Abweichende Bedingungen des Kunden 
                werden nicht anerkannt, es sei denn, die XMB Group AG stimmt ihrer Geltung 
                ausdrücklich schriftlich zu.
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">2. Leistungen</h2>
              <p className="text-slate-600 mb-3" style={{ lineHeight: '1.7' }}>
                Die XMB Group AG erbringt Dienstleistungen in den Bereichen IT Contracting, 
                Cybersecurity und Softwareentwicklung. Art und Umfang der Leistungen ergeben 
                sich aus dem jeweiligen Vertrag bzw. der Auftragsbestätigung.
              </p>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Die XMB Group AG ist berechtigt, sich zur Erfüllung ihrer vertraglichen 
                Verpflichtungen Dritter zu bedienen.
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">3. Vertragsschluss</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Angebote der XMB Group AG sind freibleibend und unverbindlich. Ein Vertrag 
                kommt erst durch schriftliche Auftragsbestätigung oder durch Beginn der 
                Leistungserbringung zustande.
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">4. Preise und Zahlungsbedingungen</h2>
              <p className="text-slate-600 mb-3" style={{ lineHeight: '1.7' }}>
                Es gelten die im Angebot oder Vertrag vereinbarten Preise. Alle Preise verstehen 
                sich in Schweizer Franken (CHF) und zuzüglich der gesetzlichen Mehrwertsteuer.
              </p>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Rechnungen sind innerhalb von 30 Tagen nach Rechnungsdatum ohne Abzug zahlbar, 
                sofern nicht anders vereinbart.
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">5. Mitwirkungspflichten des Kunden</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Der Kunde stellt alle für die Leistungserbringung erforderlichen Informationen, 
                Unterlagen und Zugänge rechtzeitig und vollständig zur Verfügung. Verzögerungen, 
                die auf mangelnde Mitwirkung zurückzuführen sind, gehen nicht zu Lasten der 
                XMB Group AG.
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">6. Geheimhaltung</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erhaltenen 
                vertraulichen Informationen geheim zu halten und nur für die vereinbarten 
                Zwecke zu verwenden. Diese Verpflichtung gilt auch nach Beendigung des 
                Vertragsverhältnisses.
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">7. Haftung</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Die XMB Group AG haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. 
                Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit gesetzlich 
                zulässig. Die Haftung ist in jedem Fall auf den Auftragswert begrenzt.
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">8. Geistiges Eigentum</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Alle Rechte an Arbeitsergebnissen gehen erst nach vollständiger Bezahlung auf 
                den Kunden über, sofern vertraglich nichts anderes vereinbart ist. 
                Vorbestehende Rechte der XMB Group AG bleiben in jedem Fall bei dieser.
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">9. Kündigung</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Dauerschuldverhältnisse können von beiden Parteien mit einer Frist von 
                3 Monaten zum Monatsende gekündigt werden, sofern vertraglich nichts 
                anderes vereinbart ist. Das Recht zur ausserordentlichen Kündigung aus 
                wichtigem Grund bleibt unberührt.
              </p>
            </article>

            <article>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">10. Schlussbestimmungen</h2>
              <p className="text-slate-600 mb-4" style={{ lineHeight: '1.7' }}>
                Es gilt Schweizer Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand 
                ist Oensingen, Schweiz. Sollten einzelne Bestimmungen dieser AGB unwirksam 
                sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
              <p className="text-sm text-slate-500">
                Stand: Dezember 2025
              </p>
            </article>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
