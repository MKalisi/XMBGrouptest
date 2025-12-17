import { Footer } from './Footer';

export function ImpressumPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 py-20 md:py-24 text-center text-white bg-gradient-to-br from-[#921bb2] to-[#cd20b2]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-3 sm:space-y-4">
          <p className="uppercase tracking-[0.4em] text-xs sm:text-sm">Rechtliches</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="relative z-10 text-white tracking-tight">Impressum</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
            Angaben gemäss Schweizer Recht
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-4xl px-2 sm:px-4 md:px-8">
          <div className="space-y-10">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">Angaben gemäss Art. 3 UWG</h2>
              <p className="text-slate-700 leading-relaxed">
                XMB Group AG<br />
                Eichengasse 3<br />
                4702 Oensingen<br />
                Schweiz
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">Kontakt</h2>
              <p className="text-slate-700 leading-relaxed">
                Telefon: +41 44 000 00 00<br />
                E-Mail: info@xmb-group.ch
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">Handelsregister</h2>
              <p className="text-slate-700 leading-relaxed">
                Eingetragen im Handelsregister des Kantons Solothurn<br />
                UID: CHE-XXX.XXX.XXX
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">Mehrwertsteuernummer</h2>
              <p className="text-slate-700 leading-relaxed">
                CHE-XXX.XXX.XXX MWST
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">Vertretungsberechtigte Personen</h2>
              <p className="text-slate-700 leading-relaxed">
                Geschäftsführung: Xavier M. Bosshard
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">Haftungsausschluss</h2>
              <p className="text-slate-700 leading-relaxed">
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, 
                Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, 
                welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten 
                Informationen entstanden sind, werden ausgeschlossen.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">Urheberrechte</h2>
              <p className="text-slate-700 leading-relaxed">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien 
                auf der Website gehören ausschliesslich der XMB Group AG oder den speziell genannten 
                Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche 
                Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
