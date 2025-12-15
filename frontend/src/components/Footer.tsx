const footerLinks = {
  services: [
    { label: "IT Contracting", href: "#/personalverleih" },
    { label: "Cybersecurity", href: "#/cybersecurity" },
    { label: "Softwareentwicklung", href: "#/softwareentwicklung" },
    { label: "IT-Beratung", href: "#/cybersecurity" },
  ],
  company: [
    { label: "Über uns", href: "#/ueber-uns" },
    { label: "Karriere", href: "#/ueber-uns" },
    { label: "Referenzen", href: "#/ueber-uns" },
    { label: "Kontakt", href: "#/kontakt" },
  ],
  legal: [
    { label: "Impressum", href: "#/kontakt" },
    { label: "Datenschutz", href: "#/kontakt" },
    { label: "AGB", href: "#/kontakt" },
  ],
};

const socials = [
  { label: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { label: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
  { label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

const footerLogo = "/Logo/White logo.png";

export function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={footerLogo}
              alt="XMB Group AG"
              className="h-36 w-auto object-contain"
            />
            <p className="mt-4 text-white/70">
              Partner für IT Contracting, Cybersecurity und Softwareentwicklung.
            </p>
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-[#cd20b2]">Services</p>
            <ul className="mt-4 flex flex-col gap-3 text-white/70">
              {footerLinks.services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-[#cd20b2]">Unternehmen</p>
            <ul className="mt-4 flex flex-col gap-3 text-white/70">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-[#cd20b2]">Kontakt</p>
            <div className="mt-4 space-y-2 text-white/70">
              <p>Eichengasse 3, 4702 Oensingen</p>
              <p>info@xmb-group.ch</p>
              <p>+41 44 000 00 00</p>
            </div>
            <div className="mt-6 flex gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  aria-label={item.label}
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#921bb2]"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© 2025 XMB Group AG. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              {footerLinks.legal.map((item) => (
                <a key={item.label} href={item.href} className="hover:text-white">
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

