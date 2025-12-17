import { Footer } from './Footer';

export function DatenschutzPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 py-20 md:py-24 text-center text-white bg-gradient-to-br from-[#921bb2] to-[#cd20b2]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-3 sm:space-y-4">
          <p className="uppercase tracking-[0.4em] text-xs sm:text-sm">Rechtliches</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="relative z-10 text-white tracking-tight">Datenschutzerklärung</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
            Informationen zum Schutz Ihrer persönlichen Daten
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-4xl px-2 sm:px-4 md:px-8">
          <div className="space-y-10">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">1. Allgemeines</h2>
              <p className="text-slate-700 leading-relaxed">
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten 
                Ihre Daten daher ausschliesslich auf Grundlage der gesetzlichen Bestimmungen 
                (DSG, DSGVO). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten 
                Aspekte der Datenverarbeitung im Rahmen unserer Website.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">2. Verantwortliche Stelle</h2>
              <p className="text-slate-700 leading-relaxed">
                XMB Group AG<br />
                Eichengasse 3<br />
                4702 Oensingen<br />
                Schweiz<br /><br />
                E-Mail: info@xmb-group.ch<br />
                Telefon: +41 44 000 00 00
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">3. Erhebung und Verarbeitung von Daten</h2>
              <p className="text-slate-700 leading-relaxed">
                Beim Besuch unserer Website werden automatisch technische Informationen erfasst, 
                die Ihr Browser an unseren Server übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-slate-700">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                <li>Inhalt der Anforderung (konkrete Seite)</li>
                <li>Zugriffsstatus/HTTP-Statuscode</li>
                <li>Jeweils übertragene Datenmenge</li>
                <li>Browsertyp und -version</li>
                <li>Betriebssystem</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">4. Cookies</h2>
              <p className="text-slate-700 leading-relaxed">
                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Browser 
                automatisch erstellt und die auf Ihrem Endgerät gespeichert werden. Cookies richten 
                auf Ihrem Endgerät keinen Schaden an und enthalten keine Viren.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                Wir verwenden folgende Arten von Cookies:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-slate-700">
                <li><strong className="text-slate-900">Technisch notwendige Cookies:</strong> Diese sind erforderlich, damit Sie durch die Seiten navigieren und wesentliche Funktionen nutzen können.</li>
                <li><strong className="text-slate-900">Analyse-Cookies:</strong> Mit Ihrer Zustimmung setzen wir Cookies ein, um die Nutzung unserer Website zu analysieren.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">5. Kontaktformular</h2>
              <p className="text-slate-700 leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">6. Ihre Rechte</h2>
              <p className="text-slate-700 leading-relaxed">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten 
                personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der 
                Datenverarbeitung. Sie haben ausserdem das Recht auf Berichtigung, Löschung oder 
                Einschränkung der Verarbeitung dieser Daten.
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit 
                an uns wenden.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">7. Datensicherheit</h2>
              <p className="text-slate-700 leading-relaxed">
                Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren 
                (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, 
                die von Ihrem Browser unterstützt wird.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <h2 className="text-xl font-bold text-[#921bb2] mb-4">8. Änderungen</h2>
              <p className="text-slate-700 leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
                in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die 
                neue Datenschutzerklärung.
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
