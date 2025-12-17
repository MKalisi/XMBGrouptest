const footerLinks = {
  services: [
    { label: "IT Contracting", href: "#/personalverleih" },
    { label: "Cybersecurity", href: "#/cybersecurity" },
    { label: "Softwareentwicklung", href: "#/softwareentwicklung" },
  ],
  company: [
    { label: "Über uns", href: "#/ueber-uns" },
    { label: "Kontakt", href: "#/kontakt" },
  ],
  legal: [
    { label: "Impressum", href: "#/impressum" },
    { label: "Datenschutz", href: "#/datenschutz" },
    { label: "AGB", href: "#/agb" },
  ],
};

const footerLogo = "/Logo/White logo.png";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Beschreibung */}
          <div className="lg:col-span-1">
            <img
              src={footerLogo}
              alt="XMB Group AG"
              className="h-20 w-auto object-contain"
            />
            <p className="mt-4 text-slate-400 text-sm" style={{ lineHeight: '1.7' }}>
              IT Contracting, Cybersecurity und Softwareentwicklung aus der Schweiz.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-medium text-slate-300 uppercase tracking-wider mb-4">Services</p>
            <ul className="space-y-2">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <p className="text-sm font-medium text-slate-300 uppercase tracking-wider mb-4">Unternehmen</p>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt - Vollständig */}
          <div>
            <p className="text-sm font-medium text-slate-300 uppercase tracking-wider mb-4">Kontakt</p>
            <address className="not-italic text-slate-400 text-sm space-y-2" style={{ lineHeight: '1.7' }}>
              <p className="font-medium text-white">XMB Group AG</p>
              <p>Eichengasse 3<br />4702 Oensingen<br />Schweiz</p>
              <p className="pt-2">
                <a href="tel:+41440000000" className="hover:text-white transition-colors">+41 44 000 00 00</a>
              </p>
              <p>
                <a href="mailto:info@xmb-group.ch" className="hover:text-white transition-colors">info@xmb-group.ch</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-10 pt-6">
          <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} XMB Group AG. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              {footerLinks.legal.map((item) => (
                <a key={item.label} href={item.href} className="hover:text-slate-300 transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

