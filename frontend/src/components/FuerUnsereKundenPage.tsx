import { useState, useMemo } from "react";
import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, CheckCircle, Clock, Users, Shield, Briefcase, MapPin, Calendar, Filter, X } from "lucide-react";

type Job = {
  id: string;
  title: string;
  type: string;
  location: string;
  startDate: string;
  description: string;
  href: string;
};

export function FuerUnsereKundenPage() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const jobs: Job[] = [
    {
      id: 'senior-fullstack-entwickler',
      title: 'Senior Full-Stack Entwickler',
      type: 'Vollzeit',
      location: 'Zürich / Remote',
      startDate: 'Ab sofort',
      description: 'Wir suchen einen erfahrenen Full-Stack Entwickler für spannende Projekte im Bereich Cloud-native Anwendungen.',
      href: '#/jobs/senior-fullstack-entwickler',
    },
    {
      id: 'cloud-engineer',
      title: 'Cloud Engineer (AWS/Azure)',
      type: 'Teilzeit',
      location: 'Bern / Hybrid',
      startDate: 'Ab Januar 2025',
      description: 'Verstärken Sie unser Team als Cloud Engineer mit Fokus auf moderne Cloud-Infrastrukturen und DevOps-Praktiken.',
      href: '#/jobs/cloud-engineer',
    },
    {
      id: 'it-projektmanager',
      title: 'IT-Projektmanager',
      type: 'Vollzeit',
      location: 'Basel / Remote',
      startDate: 'Ab sofort',
      description: 'Verantworten Sie komplexe IT-Projekte und führen Sie agile Teams erfolgreich zum Ziel.',
      href: '#/jobs/it-projektmanager',
    },
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesType = !selectedType || job.type === selectedType;
      const matchesLocation = !selectedLocation || job.location.includes(selectedLocation);
      return matchesType && matchesLocation;
    });
  }, [selectedType, selectedLocation]);

  const uniqueTypes = useMemo(() => Array.from(new Set(jobs.map(job => job.type))), []);
  const uniqueLocations = useMemo(() => {
    const locations = new Set<string>();
    jobs.forEach(job => {
      const locationParts = job.location.split(' / ');
      locationParts.forEach(part => locations.add(part.trim()));
    });
    return Array.from(locations);
  }, []);

  const hasActiveFilters = selectedType !== "" || selectedLocation !== "";

  const clearFilters = () => {
    setSelectedType("");
    setSelectedLocation("");
  };

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-[#5E3B83] py-16 md:py-20 text-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <a
            href="#/personalverleih"
            className="inline-flex items-center gap-2 text-black/80 hover:text-black text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zu IT Contracting</span>
          </a>
          <p className="uppercase tracking-wider text-sm text-black/80 font-medium mb-4">Für unsere Kunden</p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 text-black">
              Qualifizierte IT-Fachkräfte für Ihr Projekt
          </h1>
          <p className="text-black/90" style={{ lineHeight: '1.7' }}>
            Sie benötigen Spezialisten für Ihr IT-Projekt? Wir vermitteln Ihnen sorgfältig ausgewählte Fachkräfte, die präzise zu Ihren Anforderungen passen und Ihr Team zuverlässig unterstützen.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Unser Service für Sie</h2>
              <div className="space-y-4" style={{ lineHeight: '1.7' }}>
                <p className="text-slate-600">
                Als Ihr IT-Contracting-Partner übernehmen wir die gesamte Abwicklung der Personalvermittlung. Wir klären den Bedarf, identifizieren passende Kandidaten und kümmern uns um alle organisatorischen Schritte – bis zur erfolgreichen Einsatzplanung.
              </p>
                <p className="text-slate-600">
                Unser Talent-Pool umfasst eine breite Auswahl erfahrener IT-Spezialisten, darunter Softwareentwickler, Cloud-Engineers, Projektmanager und Experten aus vielen weiteren Bereichen. Alle Profile werden fortlaufend geprüft und aktuell gehalten, damit Sie jederzeit die richtige Unterstützung erhalten.
              </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:min-h-[400px] overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="IT Team"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#5E3B83] py-12 lg:py-16 text-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-black">
              Ihre Vorteile
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white/30 rounded-lg p-5 border border-black/20">
              <div className="w-10 h-10 rounded-lg bg-black/10 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-black">Schnelle Vermittlung</h3>
              <p className="text-black/80 text-sm" style={{ lineHeight: '1.7' }}>
                Wir liefern innerhalb kurzer Zeit passende Kandidaten – strukturiert, abgestimmt und mit aussagekräftigen Profilen.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-5 border border-black/20">
              <div className="w-10 h-10 rounded-lg bg-black/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-black">Geprüfte Qualität</h3>
              <p className="text-black/80 text-sm" style={{ lineHeight: '1.7' }}>
                Alle Fachkräfte werden hinsichtlich Qualifikation, Erfahrung und Eignung sorgfältig bewertet.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-5 border border-black/20">
              <div className="w-10 h-10 rounded-lg bg-black/10 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-black">Breites Portfolio</h3>
              <p className="text-black/80 text-sm" style={{ lineHeight: '1.7' }}>
                Von Entwicklern über Engineers bis hin zu Projektleitern – wir decken alle wesentlichen IT-Bereiche ab.
              </p>
            </div>
            <div className="bg-white/30 rounded-lg p-5 border border-black/20">
              <div className="w-10 h-10 rounded-lg bg-black/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-black">Compliance & Rechtssicherheit</h3>
              <p className="text-black/80 text-sm" style={{ lineHeight: '1.7' }}>
                Wir übernehmen die gesamte Vertragsabwicklung und sorgen für klare, regelkonforme Prozesse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offene Jobs Bereich */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
                Offene Jobs
            </h2>
            <p className="max-w-3xl mx-auto text-slate-600" style={{ lineHeight: '1.7' }}>
              Aktuelle Stellenausschreibungen für IT-Spezialisten. Werden Sie Teil unseres Teams oder finden Sie den passenden Kandidaten für Ihr Projekt.
            </p>
          </div>

          {/* Filter-Bereich */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-[#921bb2]" />
                <span className="font-medium text-slate-900">Filter:</span>
                  </div>
              
              <div className="flex flex-wrap items-center gap-4">
                {/* Job-Typ Filter */}
                <div className="flex items-center gap-2">
                  <label className="text-sm text-slate-600 whitespace-nowrap">Job-Typ:</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white text-slate-900 focus:border-[#921bb2] focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                  >
                    <option value="">Alle</option>
                    {uniqueTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Standort Filter */}
                <div className="flex items-center gap-2">
                  <label className="text-sm text-slate-600 whitespace-nowrap">Standort:</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white text-slate-900 focus:border-[#921bb2] focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                  >
                    <option value="">Alle</option>
                    {uniqueLocations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                {/* Filter zurücksetzen */}
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 px-3 py-2 text-sm text-slate-600 hover:text-[#921bb2] transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Zurücksetzen</span>
                </button>
                )}
              </div>
            </div>

            {/* Ergebnis-Anzeige */}
            {hasActiveFilters && (
              <div className="mt-4 text-sm text-slate-600">
                {filteredJobs.length === 0 ? (
                  <span>Keine Jobs gefunden, die den Filterkriterien entsprechen.</span>
                ) : (
                  <span>{filteredJobs.length} {filteredJobs.length === 1 ? 'Stelle' : 'Stellen'} gefunden</span>
                )}
              </div>
            )}
            </div>

          {/* Job-Liste - Grid Layout */}
          {filteredJobs.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {filteredJobs.map((job) => (
                <div key={job.id} className="group bg-white border border-slate-200 hover:border-[#921bb2] rounded-lg p-6 transition-colors flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#921bb2]/10 text-[#921bb2] border border-[#921bb2]/20">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {job.title}
                </h3>
                  <p className="text-slate-600 text-sm mb-4 flex-grow" style={{ lineHeight: '1.7' }}>
                    {job.description}
                </p>
                  <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <MapPin className="w-4 h-4 text-[#921bb2] flex-shrink-0" />
                      <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Calendar className="w-4 h-4 text-[#921bb2] flex-shrink-0" />
                      <span>{job.startDate}</span>
                    </div>
                  </div>
                  <a
                    href={job.href}
                    className="w-full px-4 py-2.5 bg-[#CB7CDF] text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm mt-auto text-center block"
                  >
                    Details ansehen
                  </a>
                </div>
              ))}
              </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600">Keine Jobs gefunden.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              Bereit für neue Fachkräfte?
          </h2>
          <p className="text-slate-600 mb-6" style={{ lineHeight: '1.7' }}>
            Kontaktieren Sie uns – gemeinsam finden wir die passenden IT-Spezialisten für Ihr Projekt.
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

