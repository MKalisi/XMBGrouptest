import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const contactChannels = [
  {
    label: "E-Mail",
    value: "info@xmb-group.ch",
    hint: "Antwort innerhalb eines Werktags",
    icon: (
      <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 6l8 6 8-6M4 6v12h16V6"
        />
      </svg>
    ),
  },
  {
    label: "Telefon",
    value: "+41 44 000 00 00",
    hint: "Mo–Fr 08:00–18:00",
    icon: (
      <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3l2 6-3 2a16 16 0 007 7l2-3 6 2v3a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: "Adresse",
    value: "Eichengasse 3, 4702 Oensingen",
    hint: "Besuche nach Terminvereinbarung",
    icon: (
      <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 11c1.105 0 2-.9 2-2s-.895-2-2-2-2 .9-2 2 .895 2 2 2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9c0 5-7 11-7 11S5 14 5 9a7 7 0 1114 0z"
        />
      </svg>
    ),
  },
];

export function KontaktPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative overflow-hidden text-white">
        <ImageWithFallback
          src="contact-us-hero.jpg"
          alt="Kontakt und Kommunikation"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#921bb2]/60"></div>
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-20 text-center">
          <p className="uppercase tracking-wider text-sm text-white/80 font-medium mb-4">Kontakt</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
            Bereit für Ihr nächstes Vorhaben?
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto mb-8" style={{ lineHeight: '1.7' }}>
            Wir beraten persönlich und koordinieren das passende Team für Ihr Projekt.
          </p>
          <a
            href="mailto:info@xmb-group.ch"
            className="inline-block px-6 py-3 bg-white text-[#921bb2] font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            E-Mail schreiben
          </a>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Kontaktinformationen */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
                Kontaktinformationen
              </h2>
              <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                Erreichen Sie uns per E-Mail, Telefon oder besuchen Sie uns vor Ort.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactChannels.map((channel) => (
                <div key={channel.label} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center flex-shrink-0 text-white">
                    {channel.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-0.5">{channel.label}</p>
                    <p className="font-medium text-slate-900">{channel.value}</p>
                    <p className="text-sm text-slate-500 mt-1">{channel.hint}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-sm text-slate-500 mb-1">Öffnungszeiten</p>
              <p className="font-medium text-slate-900">Montag – Freitag, 08:00 – 18:00 Uhr</p>
            </div>
          </div>

          {/* Kontaktformular */}
          <div className="bg-white rounded-lg border border-slate-200 p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Schreiben Sie uns</h3>
            <p className="text-slate-600 text-sm mb-6">Wir melden uns schnellstmöglich bei Ihnen.</p>
            
            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">
                    Name <span className="text-[#921bb2]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                    placeholder="Vor- und Nachname"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">
                    E-Mail <span className="text-[#921bb2]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                    placeholder="name@firma.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">
                    Telefon <span className="text-slate-400 text-xs font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                    placeholder="+41 XX XXX XX XX"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">
                    Firma <span className="text-slate-400 text-xs font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                    placeholder="Unternehmensname"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-slate-700">
                  Betreff <span className="text-[#921bb2]">*</span>
                </label>
                <select 
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                >
                  <option value="">Bitte wählen</option>
                  <option>Allgemeine Anfrage</option>
                  <option>IT Contracting</option>
                  <option>Cybersecurity</option>
                  <option>Softwareentwicklung</option>
                  <option>Partnerschaft</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-slate-700">
                  Nachricht <span className="text-[#921bb2]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 resize-none focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#921bb2] to-[#cd20b2] px-6 py-3 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Nachricht senden
              </button>
              <p className="text-xs text-slate-500 text-center">
                Mit dem Absenden stimmen Sie unserer <a href="#/datenschutz" className="underline hover:text-[#921bb2]">Datenschutzerklärung</a> zu.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <div className="aspect-[16/9] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2706.7061896011965!2d7.711772612290987!3d47.28099771028456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791d36ecda12f25%3A0xc7ca674e9d073569!2sEichengasse%203%2C%204702%20Oensingen!5e0!3m2!1sde!2sch!4v1764335987238!5m2!1sde!2sch"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="XMB Group AG Standort"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
