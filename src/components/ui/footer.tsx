import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

const navigation = {
  services: [
    { name: "IT Contracting", href: "/services/contracting" },
    { name: "Cyber Security", href: "/services/security" },
    { name: "Software Development", href: "/services/software" },
  ],
  company: [
    { name: "Über uns", href: "/company" },
    { name: "Kontakt", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-xmb-darker">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-xmb-blue via-xmb-purple to-xmb-pink rounded-lg opacity-60" />
                <div className="absolute inset-[2px] bg-xmb-darker rounded-[6px] flex items-center justify-center">
                  <span className="text-lg font-bold gradient-text">X</span>
                </div>
              </div>
              <span className="text-xl font-semibold">XMB Group</span>
            </Link>
            <p className="text-sm text-xmb-gray leading-relaxed">
              Ihr zuverlässiger Partner für IT-Dienstleistungen in der Schweiz. 
              Qualität und Präzision in jedem Projekt.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-xmb-gray hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-xmb-gray hover:text-white transition-all"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-xmb-gray hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Unternehmen</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-xmb-gray hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-xmb-gray">
                <MapPin size={16} className="text-xmb-purple shrink-0" />
                <span>Zürich, Schweiz</span>
              </li>
              <li>
                <a
                  href="mailto:info@xmb-group.ch"
                  className="flex items-center gap-3 text-sm text-xmb-gray hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-xmb-purple shrink-0" />
                  <span>info@xmb-group.ch</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+41441234567"
                  className="flex items-center gap-3 text-sm text-xmb-gray hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-xmb-purple shrink-0" />
                  <span>+41 44 123 45 67</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-xmb-gray">
            © {new Date().getFullYear()} XMB Group AG. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-xmb-gray hover:text-white transition-colors">
              Datenschutz
            </Link>
            <Link href="/imprint" className="text-sm text-xmb-gray hover:text-white transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

