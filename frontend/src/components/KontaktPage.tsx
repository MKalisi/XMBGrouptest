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
      <section className="relative overflow-hidden px-4 sm:px-6 py-20 md:py-24 text-center text-white">
        <ImageWithFallback
          src="contact-us-hero.jpg"
          alt="Kontakt und Kommunikation"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#921bb2] opacity-40"></div>
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-3 sm:space-y-4">
          <p className="uppercase tracking-[0.4em] text-xs sm:text-sm">Kontakt</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-normal relative group max-w-[95vw] sm:max-w-[80vw] mx-auto">
            <span className="relative z-10 text-white tracking-tight">
              Bereit um Ihr nächstes Vorhaben gemeinsam anzugehen?
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-4xl mx-auto 2xl:text-2xl">
            Wir beraten persönlich und koordinieren das passende Team für Ihr
            Vorhaben.
          </p>
          <a
            href="mailto:info@xmb-group.ch"
            className="inline-flex rounded-full border-2 border-white px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg font-semibold btn-animated hover:bg-white hover:text-[#921bb2] mt-4 sm:mt-6"
          >
            Direkt schreiben
          </a>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="w-full grid gap-10 sm:gap-12 items-start lg:grid-cols-2 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          {/* Kontaktinformationen */}
          <div className="space-y-5 sm:space-y-6">
            <div>
              <p className="uppercase tracking-[0.3em] text-[#921bb2] text-sm font-semibold mb-4">
                Kontaktinformationen
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent leading-snug">
                Lassen Sie uns ins Gespräch kommen
              </h2>
            </div>
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent">
                Schreiben Sie uns
              </h3>
              <p className="text-slate-600 text-sm sm:text-base 2xl:text-lg leading-relaxed">
                Am einfachsten erreichen Sie uns über dieses Formular oder per E-Mail. So können wir Ihr Anliegen direkt aufnehmen und Ihnen schnell und gezielt weiterhelfen.
                Wenn Ihnen ein persönliches Gespräch lieber ist, sind wir selbstverständlich auch telefonisch für Sie da.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {contactChannels.map((channel) => (
                <article key={channel.label} className="flex gap-4 sm:gap-6 p-4 sm:p-5 md:p-6 rounded-2xl hover:bg-white transition-all card-animated">
                  <div className="flex size-12 sm:size-14 md:size-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#921bb2] to-[#cd20b2] text-white shadow-lg flex-shrink-0">
                    {channel.icon}
                  </div>
                  <div className="flex-1">
                    <p className="uppercase tracking-[0.2em] text-slate-500 text-xs font-semibold mb-1">
                      {channel.label}
                    </p>
                    <p className="text-slate-900 font-semibold text-base sm:text-lg">{channel.value}</p>
                    <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-1 2xl:text-lg">{channel.hint}</p>
                  </div>
                </article>
              ))}
              <div className="rounded-2xl bg-gradient-to-br from-[#921bb2]/5 to-[#cd20b2]/5 p-4 sm:p-6 border border-[#921bb2]/10">
                <p className="uppercase tracking-[0.2em] text-slate-500 text-xs font-semibold mb-2">
                  Öffnungszeiten
                </p>
                <p className="text-slate-900 font-semibold">Montag – Freitag, 08:00 – 18:00 Uhr</p>
              </div>
            </div>
          </div>

          {/* Kontaktformular */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/50 p-6 sm:p-8 lg:p-10">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent">
                Schreiben Sie uns
              </h3>
              <p className="text-slate-600 text-sm sm:text-base md:text-lg 2xl:text-2xl">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen zurück.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Name <span className="text-[#921bb2]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 placeholder:text-slate-400 transition-all focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20 focus:scale-[1.02]"
                    placeholder="Vor- und Nachname"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    E-Mail <span className="text-[#921bb2]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 placeholder:text-slate-400 transition-all focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20 focus:scale-[1.02]"
                    placeholder="name@firma.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 placeholder:text-slate-400 transition-all focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20 focus:scale-[1.02]"
                    placeholder="+41 XX XXX XX XX"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700">
                    Firma
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 placeholder:text-slate-400 transition-all focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20 focus:scale-[1.02]"
                    placeholder="Unternehmensname"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Betreff <span className="text-[#921bb2]">*</span>
                </label>
                <select 
                  required
                  className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 transition-all focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20 focus:scale-[1.02]"
                >
                  <option value="">Bitte wählen Sie einen Betreff</option>
                  <option>Anfrage</option>
                  <option>Projektstart</option>
                  <option>Partnerschaft</option>
                  <option>IT Contracting</option>
                  <option>Cybersecurity</option>
                  <option>Softwareentwicklung</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700">
                  Nachricht <span className="text-[#921bb2]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 placeholder:text-slate-400 transition-all resize-none focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20 focus:scale-[1.02]"
                  placeholder="Beschreiben Sie Ihr Anliegen oder Projekt..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#921bb2] to-[#cd20b2] px-8 py-4 sm:py-5 text-white font-semibold text-lg sm:text-xl shadow-lg hover:shadow-xl btn-animated"
              >
                Nachricht senden
              </button>
              <p className="text-xs text-slate-500 text-center">
                Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-16">
        <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 px-0 sm:px-4 md:px-6">
          <div className="aspect-[4/3] sm:aspect-[16/9] w-full">
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
      </section>

      <Footer />
    </div>
  );
}
