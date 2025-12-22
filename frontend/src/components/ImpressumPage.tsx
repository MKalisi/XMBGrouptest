import { Footer } from './Footer';

export function ImpressumPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#B84DD4] to-[#FDF5FA] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center text-white">
          <p className="uppercase tracking-wider text-sm text-white/80 font-medium mb-4">Rechtliches</p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Impressum
          </h1>
          <p className="text-white/90">
            Angaben gemäss Schweizer Recht
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="space-y-8">
            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Angaben gemäss Art. 3 UWG</h2>
              <address className="text-slate-600 not-italic" style={{ lineHeight: '1.7' }}>
                XMB Group AG<br />
                Eichengasse 3<br />
                4702 Oensingen<br />
                Schweiz
              </address>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Kontakt</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Telefon: +41 44 000 00 00<br />
                E-Mail: info@xmb-group.ch
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Handelsregister</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Eingetragen im Handelsregister des Kantons Solothurn<br />
                UID: CHE-XXX.XXX.XXX
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Mehrwertsteuernummer</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                CHE-XXX.XXX.XXX MWST
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Vertretungsberechtigte Personen</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Geschäftsführung: Xavier M. Bosshard
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Haftungsausschluss</h2>
              <p className="text-slate-600 mb-3" style={{ lineHeight: '1.7' }}>
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, 
                Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
              </p>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, 
                welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten 
                Informationen entstanden sind, werden ausgeschlossen.
              </p>
            </article>

            <article>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Urheberrechte</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien 
                auf der Website gehören ausschliesslich der XMB Group AG oder den speziell genannten 
                Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche 
                Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </article>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
