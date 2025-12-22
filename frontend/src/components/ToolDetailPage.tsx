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
      <div className="bg-white text-slate-900">
        <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">Tool nicht gefunden</h1>
          <p className="text-slate-600 mb-6" style={{ lineHeight: '1.7' }}>
            Wählen Sie ein Tool aus dem Menü „Softwareentwicklung", um Details zu sehen.
          </p>
          <a
            href="#/softwareentwicklung"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#CB7CDF] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zur Übersicht</span>
          </a>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] py-16 md:py-20 text-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <a
            href="#/softwareentwicklung"
            className="inline-flex items-center gap-2 text-black/80 hover:text-black text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zur Übersicht</span>
          </a>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 text-black">
            {tool.title}
          </h1>
          <p className="text-black/90 mb-4" style={{ lineHeight: '1.7' }}>
            {tool.tagline}
          </p>
          <p className="text-black/90" style={{ lineHeight: '1.7' }}>
            {tool.description}
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {tool.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <div
                  key={feature}
                  className="bg-white border border-slate-200 rounded-lg p-5"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-900" style={{ lineHeight: '1.7' }}>{feature}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] py-12 lg:py-16 text-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-black">
            Live Demo
          </h2>
          <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg border border-black/20 bg-white/30">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-black/80 mb-2">Live Demo wird geladen...</p>
                <p className="text-black/70 text-sm">
                  Bitte kontaktieren Sie uns für Zugang zur Live Demo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
            Über {tool.title}
          </h2>
          <div className="space-y-4" style={{ lineHeight: '1.7' }}>
            <p className="text-slate-600">
              {tool.description}
            </p>
            <p className="text-slate-600">
              {tool.title} ist eine leistungsstarke Lösung, die speziell für
              moderne Unternehmen entwickelt wurde. Mit fortschrittlichen
              Funktionen und nahtlosen Integrationen unterstützt das Tool Ihre
              Geschäftsprozesse und steigert die Effizienz in Ihrem Unternehmen.
            </p>
            <p className="text-slate-600">
              Unsere Plattform bietet umfassende Möglichkeiten zur Automatisierung,
              Analyse und Verwaltung Ihrer Geschäftsprozesse. Durch die intuitive
              Benutzeroberfläche und die flexible Architektur können Sie das Tool
              genau an Ihre individuellen Anforderungen anpassen.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] py-12 lg:py-16 text-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white/30 rounded-lg border border-black/20 p-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">Technische Spezifikationen</h2>
              <dl className="space-y-4">
                {tool.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col border-b border-black/10 pb-4 last:border-0"
                  >
                    <dt className="text-sm text-black/70 mb-1 uppercase tracking-wider">
                      {spec.label}
                    </dt>
                    <dd className="text-black" style={{ lineHeight: '1.7' }}>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-white/30 rounded-lg border border-black/20 p-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">Integrationen</h2>
              <p className="text-black/80 mb-6" style={{ lineHeight: '1.7' }}>
                Vorgefertigte Konnektoren und APIs verbinden das Tool mit Ihrer
                Systemlandschaft.
              </p>
              <div className="flex flex-wrap gap-3">
                {tool.integrations.map((integration) => (
                  <span
                    key={integration}
                    className="px-4 py-2 bg-white/40 border border-black/20 rounded-lg text-black text-sm"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            Jetzt Demo anfragen
          </h2>
          <p className="text-slate-600 mb-6" style={{ lineHeight: '1.7' }}>
            Wir zeigen Live Use-Cases und binden Ihre Integrationen mit ein.
          </p>
          <a
            href="#/kontakt"
            className="inline-block px-6 py-3 bg-[#CB7CDF] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
