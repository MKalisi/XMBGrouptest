import { Footer } from './Footer';

export function DatenschutzPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center text-white">
          <p className="uppercase tracking-wider text-sm text-white/80 font-medium mb-4">Rechtliches</p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-white/90">
            Informationen zum Schutz Ihrer persönlichen Daten
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="space-y-8">
            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">1. Allgemeines</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten 
                Ihre Daten daher ausschliesslich auf Grundlage der gesetzlichen Bestimmungen 
                (DSG, DSGVO). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten 
                Aspekte der Datenverarbeitung im Rahmen unserer Website.
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">2. Verantwortliche Stelle</h2>
              <address className="text-slate-600 not-italic" style={{ lineHeight: '1.7' }}>
                XMB Group AG<br />
                Eichengasse 3<br />
                4702 Oensingen<br />
                Schweiz<br /><br />
                E-Mail: info@xmb-group.ch<br />
                Telefon: +41 44 000 00 00
              </address>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">3. Erhebung und Verarbeitung von Daten</h2>
              <p className="text-slate-600 mb-4" style={{ lineHeight: '1.7' }}>
                Beim Besuch unserer Website werden automatisch technische Informationen erfasst, 
                die Ihr Browser an unseren Server übermittelt:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600" style={{ lineHeight: '1.7' }}>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Inhalt der Anforderung (konkrete Seite)</li>
                <li>Zugriffsstatus/HTTP-Statuscode</li>
                <li>Übertragene Datenmenge</li>
                <li>Browsertyp und -version</li>
                <li>Betriebssystem</li>
              </ul>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">4. Cookies</h2>
              <p className="text-slate-600 mb-4" style={{ lineHeight: '1.7' }}>
                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Browser 
                automatisch erstellt und die auf Ihrem Endgerät gespeichert werden. Cookies richten 
                auf Ihrem Endgerät keinen Schaden an und enthalten keine Viren.
              </p>
              <p className="text-slate-600 mb-3" style={{ lineHeight: '1.7' }}>
                Wir verwenden folgende Arten von Cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600" style={{ lineHeight: '1.7' }}>
                <li><span className="font-medium text-slate-800">Technisch notwendige Cookies:</span> Erforderlich für die Navigation und wesentliche Funktionen.</li>
                <li><span className="font-medium text-slate-800">Analyse-Cookies:</span> Mit Ihrer Zustimmung analysieren wir die Nutzung unserer Website.</li>
              </ul>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">5. Kontaktformular</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">6. Ihre Rechte</h2>
              <p className="text-slate-600 mb-3" style={{ lineHeight: '1.7' }}>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten 
                personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der 
                Datenverarbeitung. Sie haben ausserdem das Recht auf Berichtigung, Löschung oder 
                Einschränkung der Verarbeitung dieser Daten.
              </p>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit 
                an uns wenden.
              </p>
            </article>

            <article className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">7. Datensicherheit</h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren 
                (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, 
                die von Ihrem Browser unterstützt wird.
              </p>
            </article>

            <article>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">8. Änderungen</h2>
              <p className="text-slate-600 mb-4" style={{ lineHeight: '1.7' }}>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
                in der Datenschutzerklärung umzusetzen.
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
