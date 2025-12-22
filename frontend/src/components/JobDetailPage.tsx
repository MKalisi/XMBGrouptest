import { Footer } from "./Footer";
import { ArrowLeft, MapPin, Calendar, Briefcase, Users, CheckCircle } from "lucide-react";

type JobInfo = {
  id: string;
  title: string;
  type: string;
  location: string;
  startDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  department: string;
  experience: string;
};

const jobs: Record<string, JobInfo> = {
  "senior-fullstack-entwickler": {
    id: "senior-fullstack-entwickler",
    title: "Senior Full-Stack Entwickler",
    type: "Vollzeit",
    location: "Zürich / Remote",
    startDate: "Ab sofort",
    description:
      "Wir suchen einen erfahrenen Full-Stack Entwickler für spannende Projekte im Bereich Cloud-native Anwendungen. Sie arbeiten in einem agilen Team an innovativen Lösungen und tragen maßgeblich zur Weiterentwicklung unserer Software-Plattformen bei.",
    requirements: [
      "Mehrjährige Erfahrung in Full-Stack Entwicklung",
      "Starke Kenntnisse in TypeScript/JavaScript, React und Node.js",
      "Erfahrung mit Cloud-Plattformen (AWS, Azure oder GCP)",
      "Kenntnisse in Microservices-Architekturen",
      "Erfahrung mit CI/CD-Pipelines und DevOps-Praktiken",
      "Teamfähigkeit und ausgezeichnete Kommunikationsfähigkeiten",
    ],
    responsibilities: [
      "Entwicklung und Wartung von Full-Stack Anwendungen",
      "Design und Implementierung von RESTful APIs",
      "Zusammenarbeit mit dem Team bei der Architektur-Planung",
      "Code-Reviews und Qualitätssicherung",
      "Mentoring von Junior-Entwicklern",
    ],
    benefits: [
      "Flexible Arbeitszeiten und Remote-Möglichkeiten",
      "Moderne Arbeitsumgebung mit neuester Technologie",
      "Weiterbildungsmöglichkeiten und Zertifizierungen",
      "Attraktives Gehaltspaket mit Boni",
      "Team-Events und Firmenkultur",
    ],
    department: "Softwareentwicklung",
    experience: "5+ Jahre",
  },
  "cloud-engineer": {
    id: "cloud-engineer",
    title: "Cloud Engineer (AWS/Azure)",
    type: "Teilzeit",
    location: "Bern / Hybrid",
    startDate: "Ab Januar 2025",
    description:
      "Verstärken Sie unser Team als Cloud Engineer mit Fokus auf moderne Cloud-Infrastrukturen und DevOps-Praktiken. Sie sind verantwortlich für die Planung, Implementierung und Wartung unserer Cloud-Lösungen und arbeiten eng mit den Entwicklungsteams zusammen.",
    requirements: [
      "Erfahrung mit AWS oder Azure Cloud-Services",
      "Kenntnisse in Infrastructure as Code (Terraform, CloudFormation)",
      "Erfahrung mit Container-Technologien (Docker, Kubernetes)",
      "Kenntnisse in CI/CD-Tools (Jenkins, GitLab CI, GitHub Actions)",
      "Verständnis für Netzwerk- und Sicherheitskonzepte",
      "Gute Deutsch- und Englischkenntnisse",
    ],
    responsibilities: [
      "Design und Implementierung von Cloud-Infrastrukturen",
      "Automatisierung von Deployment-Prozessen",
      "Monitoring und Optimierung der Cloud-Ressourcen",
      "Sicherheits- und Compliance-Implementierungen",
      "Support und Troubleshooting",
    ],
    benefits: [
      "Teilzeit-Modell mit flexibler Zeiteinteilung",
      "Hybrides Arbeitsmodell (Homeoffice möglich)",
      "Zugang zu Cloud-Zertifizierungsprogrammen",
      "Moderne Tools und Technologien",
      "Kollegiales Arbeitsumfeld",
    ],
    department: "Infrastruktur & DevOps",
    experience: "3+ Jahre",
  },
  "it-projektmanager": {
    id: "it-projektmanager",
    title: "IT-Projektmanager",
    type: "Vollzeit",
    location: "Basel / Remote",
    startDate: "Ab sofort",
    description:
      "Verantworten Sie komplexe IT-Projekte und führen Sie agile Teams erfolgreich zum Ziel. Sie koordinieren Projekte von der Planung bis zur Umsetzung und sind die zentrale Ansprechperson für Stakeholder, Teams und Kunden.",
    requirements: [
      "Erfolgreich abgeschlossenes Studium (Wirtschaftsinformatik, Informatik oder ähnlich)",
      "Mehrjährige Erfahrung im IT-Projektmanagement",
      "Zertifizierung in Scrum, PMP oder ähnlich von Vorteil",
      "Starke Kommunikations- und Führungsfähigkeiten",
      "Erfahrung mit agilen Methoden (Scrum, Kanban)",
      "Kenntnisse in Projektmanagement-Tools (Jira, Confluence)",
    ],
    responsibilities: [
      "Planung und Steuerung von IT-Projekten",
      "Koordination von interdisziplinären Teams",
      "Kommunikation mit Stakeholdern und Kunden",
      "Risikomanagement und Qualitätssicherung",
      "Reporting und Dokumentation",
    ],
    benefits: [
      "Vollzeit-Position mit flexiblen Arbeitszeiten",
      "Remote-Arbeit möglich",
      "Projektmanagement-Zertifizierungen",
      "Verantwortungsvolle Position mit Gestaltungsspielraum",
      "Attraktive Karrieremöglichkeiten",
    ],
    department: "Projektmanagement",
    experience: "5+ Jahre",
  },
};

type JobDetailPageProps = {
  jobId: string | null;
};

export function JobDetailPage({ jobId }: JobDetailPageProps) {
  const job = jobId ? jobs[jobId] : undefined;

  if (!job) {
    return (
      <div className="bg-white text-slate-900">
        <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20 text-center">
          <p className="uppercase tracking-wider text-sm text-slate-500 mb-4">
            Stellenausschreibung
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            Stelle nicht gefunden
          </h1>
          <p className="text-slate-600 mb-6" style={{ lineHeight: '1.7' }}>
            Die angeforderte Stellenausschreibung konnte nicht gefunden werden.
          </p>
          <a
            href="#/personalverleih/fuer-unsere-kunden"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#CB7CDF] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zu den Jobs</span>
          </a>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] py-16 md:py-20 text-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <a
            href="#/personalverleih/fuer-unsere-kunden"
            className="inline-flex items-center gap-2 text-black/80 hover:text-black text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zu den Jobs</span>
          </a>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-black/10 text-black border border-black/30 mb-4">
                {job.type}
              </span>
              <h1 className="text-3xl md:text-4xl font-semibold text-black mb-4">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-black/80 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{job.startDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{job.department}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Description */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">
            Stellenbeschreibung
          </h2>
          <p className="text-slate-600 mb-8" style={{ lineHeight: '1.7' }}>
            {job.description}
          </p>

          <div className="grid gap-8 md:grid-cols-2 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#921bb2]" />
                Ihre Aufgaben
              </h3>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600" style={{ lineHeight: '1.7' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#921bb2] mt-2 flex-shrink-0"></span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#921bb2]" />
                Ihre Qualifikationen
              </h3>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600" style={{ lineHeight: '1.7' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#921bb2] mt-2 flex-shrink-0"></span>
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Call-to-Action */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            Interesse geweckt?
          </h2>
          <p className="text-slate-600 mb-6" style={{ lineHeight: '1.7' }}>
            Wir freuen uns auf Ihre Bewerbung! Senden Sie uns Ihre Unterlagen oder kontaktieren Sie uns für weitere Informationen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#/kontakt"
              className="inline-block px-6 py-3 bg-[#CB7CDF] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Jetzt bewerben
            </a>
            <a
              href="mailto:jobs@xmb-group.ch"
              className="inline-block px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:border-[#921bb2] hover:text-[#921bb2] transition-colors"
            >
              E-Mail senden
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
