import { Footer } from "./Footer";
import { MonitorCog, Layers, Diamond, ArrowLeft } from "lucide-react";

type ToolInfo = {
  title: string;
  tagline: string;
  description: string;
  color: string;
  features: string[];
  specs: { label: string; value: string }[];
  integrations: string[];
};

const tools: Record<string, ToolInfo> = {
  coremlis: {
    title: "Coremlis",
    tagline: "CRM-Funktionen mit intelligenter Automatisierung.",
    description:
      "Customer Journeys, Aufgaben und Reporting laufen in einem System zusammen und bilden den Single Point of Truth.",
    color: "#cd20b2",
    features: [
      "Lead- und Pipeline-Management",
      "Automatisierte Workflows & Reminders",
      "360° Kundenakte mit Reporting",
    ],
    specs: [
      { label: "Hosting", value: "Azure / On-Prem" },
      { label: "Integrationen", value: "SAP, Salesforce, HubSpot" },
      { label: "Security", value: "SOC2, FINMA ready" },
    ],
    integrations: ["Power BI", "Teams", "DocuSign"],
  },
  depotix: {
    title: "Depotix",
    tagline: "Portfolio-Management, Transaktionen, Analytics.",
    description:
      "Steuern Sie Depots, Assets und Compliance über eine modulare Plattform mit Echtzeit-Insights.",
    color: "#cd20b2",
    features: [
      "Transaktions- und Order-Management",
      "Risk & Compliance Layer",
      "Performance Analytics Dashboards",
    ],
    specs: [
      { label: "Hosting", value: "Private Cloud" },
      { label: "Integrationen", value: "Avaloq, Finnova, Temenos" },
      { label: "Security", value: "FIPS 140-2, ISO 27001" },
    ],
    integrations: ["PowerBI", "Snowflake", "ServiceNow"],
  },
  realestate: {
    title: "Real Estate Software",
    tagline: "Immobilienverwaltung, Mietermanagement, Finanzen.",
    description:
      "Digitalisieren Sie Bewirtschaftung, Verträge und Reportings mit Self-Service Portalen.",
    color: "#cd20b2",
    features: [
      "Objekt- und Vertragsverwaltung",
      "Tenant Portal & Ticketing",
      "Finanz- und ESG-Reporting",
    ],
    specs: [
      { label: "Hosting", value: "SaaS, ISO zertifiziert" },
      { label: "Integrationen", value: "Abacus, SAP RE, W&W" },
      { label: "Security", value: "GDPR, FINMA" },
    ],
    integrations: ["Power Automate", "Tableau", "Slack"],
  },
  iauto: {
    title: "iAuto",
    tagline: "Fahrzeugverwaltung, Werkstatt, Verkauf.",
    description:
      "White-Label Mobility Stack für Sharing, Subscription und klassische Händlerprozesse.",
    color: "#921bb2",
    features: [
      "Telematik- und Flottensteuerung",
      "Werkstatt- und Wartungsplanung",
      "Digitaler Verkauf und Payment",
    ],
    specs: [
      { label: "Hosting", value: "Azure / Kubernetes" },
      { label: "Integrationen", value: "OEM APIs, SAP SD, Salesforce" },
      { label: "Security", value: "ISO 21434, TISAX" },
    ],
    integrations: ["Stripe", "Twilio", "Dynamics 365"],
  },
  education: {
    title: "XMB-Education",
    tagline: "LMS, Kursverwaltung, Zertifikate.",
    description:
      "Campus-Management mit Self-Service Portalen und Prüfungs-Workflows.",
    color: "#921bb2",
    features: [
      "Kurs- und Ressourcenplanung",
      "Digitale Prüfungen & Zertifikate",
      "Studierenden- und Dozentenportal",
    ],
    specs: [
      { label: "Hosting", value: "SaaS / Mandantenfähig" },
      { label: "Integrationen", value: "Moodle, Teams, SAP HCM" },
      { label: "Security", value: "Edu-DSG, ISO 27001" },
    ],
    integrations: ["Zoom", "SharePoint", "HubSpot"],
  },
};

type ToolDetailPageProps = {
  toolId: string | null;
};

export function ToolDetailPage({ toolId }: ToolDetailPageProps) {
  const tool = toolId ? tools[toolId] : undefined;
  const featureIcons = [MonitorCog, Layers, Diamond];

  if (!tool) {
    return (
      <div className="bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
          <p className="uppercase tracking-[0.35em] text-white/40 text-xs sm:text-sm">
            Tool Detail
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4">Tool nicht gefunden</h1>
          <p className="mt-3 sm:mt-4 text-white/70 text-base sm:text-lg md:text-xl px-4">
            Wähle ein Tool aus dem Menü „Softwareentwicklung", um Details zu
            sehen.
          </p>
          <a
            href="#/softwareentwicklung"
            className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-6 sm:px-8 py-2.5 sm:py-3 text-white font-semibold text-sm sm:text-base hover:bg-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Zurück zur Übersicht</span>
          </a>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900">
      <section
        className="relative overflow-hidden px-4 sm:px-6 py-20 md:py-24 text-white"
        style={{ 
          background: tool.color === "#cd20b2" 
            ? "linear-gradient(to bottom right, #921bb2, #cd20b2)" 
            : "linear-gradient(to bottom right, #921bb2, #921bb2)"
        }}
      >
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-4 sm:space-y-6">
          <a
            href="#/softwareentwicklung"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white font-semibold hover:bg-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl mb-4 w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Zurück zur Übersicht</span>
          </a>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight whitespace-normal relative group max-w-[95vw] sm:max-w-[80vw]">
            <span className="relative z-10 text-white tracking-tight">
              {tool.title}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed 2xl:text-2xl">
            {tool.tagline}
          </p>
          <p className="max-w-5xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed 2xl:text-2xl">
            {tool.description}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
            <a
              href="#/kontakt"
              className="inline-flex rounded-full bg-white px-8 sm:px-10 py-4 sm:py-5 text-[#921bb2] font-semibold text-base sm:text-lg btn-animated"
            >
              Jetzt Demo anfragen
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 py-12 sm:py-16">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto grid max-w-6xl gap-5 sm:gap-6 md:grid-cols-3">
            {tool.features.map((feature, index) => (
              <article
                key={feature}
                className="rounded-2xl sm:rounded-3xl border border-slate-200 p-5 sm:p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className="mb-3 sm:mb-4 flex size-10 sm:size-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${tool.color}1a`, color: tool.color }}
                >
                  {(() => {
                    const Icon = featureIcons[index % featureIcons.length];
                    return <Icon className="size-5 sm:size-6" />;
                  })()}
                </div>
                <p className="text-base sm:text-lg 2xl:text-xl">{feature}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#921bb2] via-[#921bb2] to-[#cd20b2] px-4 sm:px-6 py-12 sm:py-16">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block group leading-snug">
              <span className="relative z-10 text-white tracking-tight">
                Live Demo
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
              <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </h2>
            <div className="relative h-64 sm:h-80 md:aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-white/30 bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <p className="text-white/90 text-base sm:text-lg 2xl:text-xl">Live Demo wird geladen...</p>
                  <p className="mt-2 text-white/70 text-sm sm:text-base 2xl:text-lg">
                    Bitte kontaktieren Sie uns für Zugang zur Live Demo
                  </p>
                </div>
              </div>
              {/* Platzhalter für iframe oder eingebettete Demo */}
              {/* <iframe
                src="https://demo.example.com"
                className="h-full w-full"
                title="Live Demo"
                allowFullScreen
              /> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 py-12 sm:py-16">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-7xl space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block group leading-snug">
              <span className="relative z-10 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent tracking-tight">
                Über {tool.title}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 2xl:text-2xl">
                {tool.description}
              </p>
              <p className="mt-3 sm:mt-4 text-slate-600 text-base sm:text-lg md:text-xl 2xl:text-2xl">
                {tool.title} ist eine leistungsstarke Lösung, die speziell für
                moderne Unternehmen entwickelt wurde. Mit fortschrittlichen
                Funktionen und nahtlosen Integrationen unterstützt das Tool Ihre
                Geschäftsprozesse und steigert die Effizienz in Ihrem Unternehmen.
              </p>
              <p className="mt-3 sm:mt-4 text-slate-600 text-base sm:text-lg md:text-xl 2xl:text-2xl">
                Unsere Plattform bietet umfassende Möglichkeiten zur Automatisierung,
                Analyse und Verwaltung Ihrer Geschäftsprozesse. Durch die intuitive
                Benutzeroberfläche und die flexible Architektur können Sie das Tool
                genau an Ihre individuellen Anforderungen anpassen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#921bb2] via-[#921bb2] to-[#cd20b2] px-4 sm:px-6 py-12 sm:py-16">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-7xl grid gap-6 sm:gap-8 md:grid-cols-2">
            <div className="rounded-2xl sm:rounded-3xl border-2 border-white/30 bg-white/10 backdrop-blur-sm p-5 sm:p-6 hover:bg-white/20 transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-snug">Technische Spezifikationen</h2>
              <dl className="mt-4 sm:mt-5 md:mt-6 space-y-3 sm:space-y-4">
                {tool.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col rounded-xl border border-white/20 bg-white/5 p-3 sm:p-4"
                  >
                    <dt className="uppercase tracking-[0.2em] text-white/70 text-xs sm:text-sm mb-1 sm:mb-2">
                      {spec.label}
                    </dt>
                    <dd className="text-white text-base sm:text-lg 2xl:text-xl">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl sm:rounded-3xl border-2 border-white/30 bg-white/10 backdrop-blur-sm p-5 sm:p-6 hover:bg-white/20 transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-snug">Integrationen & Visuals</h2>
              <p className="mt-2 sm:mt-3 text-white/90 text-base sm:text-lg md:text-xl 2xl:text-2xl">
                Vorgefertigte Konnektoren und APIs verbinden das Tool mit Ihrer
                Systemlandschaft.
              </p>
              <div className="mt-4 sm:mt-5 md:mt-6 flex flex-wrap gap-2 sm:gap-3">
                {tool.integrations.map((integration) => (
                  <span
                    key={integration}
                    className="rounded-full border border-white/30 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-white text-sm sm:text-base 2xl:text-lg"
                  >
                    {integration}
                  </span>
                ))}
              </div>
              <div className="mt-6 sm:mt-8 grid gap-2 sm:gap-3 md:grid-cols-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="aspect-[4/3] rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 text-center text-white/70 flex items-center justify-center text-sm sm:text-base 2xl:text-lg"
                  >
                    Screenshot {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-white py-16 sm:py-20">
        <div className="w-full flex flex-col gap-5 sm:gap-6 text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block group max-w-[95vw] sm:max-w-[80vw] mx-auto px-2 leading-snug">
            <span className="relative z-10 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent tracking-tight">
              Jetzt Demo anfragen
            </span>
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#921bb2] to-[#cd20b2] group-hover:w-40 transition-all duration-500"></span>
          </h2>
          <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl text-slate-700 2xl:text-2xl px-2">
            Wir zeigen Live Use-Cases und binden Ihre Integrationen mit ein.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            <a
              href="#/kontakt"
              className="rounded-full bg-gradient-to-r from-[#921bb2] to-[#cd20b2] px-8 sm:px-10 py-4 sm:py-5 text-white font-semibold text-base sm:text-lg btn-animated"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
