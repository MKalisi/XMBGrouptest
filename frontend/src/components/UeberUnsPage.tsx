import { Footer } from "./Footer";
import { Plus, Award, Building2, Rocket, TrendingUp, Shield, Heart, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const milestones = [
  "Übergreifende Betreuung von Projekten und Fachkräften",
  "Breites Netzwerk an IT-Experten und Partnerunternehmen",
  "Kombiniertes Fachwissen aus drei Branchenbereichen",
  "Persönliche Betreuung und verlässliche Projektunterstützung"
];

const managingTeam = [
  {
    name: "Xavier Hofmann",
    role: "Founder & CEO",
    bio: "Als Gründer und CEO leitet Xavier die strategische Ausrichtung von XMB Group AG und bringt Expertise im Workplace & Application Management ein.",
    image: "/team/fuehrung/xavier.jpg",
  },
  {
    name: "Melih Oezkan",
    role: "Founder & CEO",
    bio: "Melih verbindet strategisches Denken mit innovativer Umsetzung. Mit Erfahrung in HERMES und SAFe verantwortet er kundenorientierte Digitalisierungsprogramme.",
    image: "/team/fuehrung/melih.jpg",
  },
  {
    name: "Burak Zendeli",
    role: "Founder & CEO",
    bio: "Burak steht für nachhaltige Lösungen und messbaren Mehrwert. Seine Erfahrung in agilen und klassischen Methoden garantiert erfolgreiche IT-Projekte.",
    image: "/team/fuehrung/burak.jpg",
  },
];

export function UeberUnsPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#B84DD4] to-[#FDF5FA] py-16 md:py-20 text-black">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 text-black">
            XMB Group AG – Ihre ganzheitliche IT-Unterstützung aus einer Hand
          </h1>
          <p className="text-black/90" style={{ lineHeight: '1.7' }}>
            Wir verbinden Recruiting, Softwareentwicklung und Cybersecurity zu stabilen Lösungen, die Unternehmen zuverlässig in ihrer digitalen Entwicklung begleiten.
          </p>
        </div>
      </section>

      {/* Company Introduction Section - Modern Visual Mindmap & Timeline */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-slate-900">
            Über uns
          </h2>
          
          {/* Grid Layout: Mindmap & Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Side - Mindmap */}
            <div className="hidden lg:block relative min-h-[500px] flex items-center justify-center">
            {/* Connection Lines Background */}
            <svg className="absolute top-0 left-0 w-full pointer-events-none" style={{ height: '100%', zIndex: 0 }}>
              <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="#B84DD4" strokeWidth="2" opacity="0.3" />
              <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="#B84DD4" strokeWidth="2" opacity="0.3" />
              <line x1="50%" y1="50%" x2="50%" y2="75%" stroke="#B84DD4" strokeWidth="2" opacity="0.3" />
            </svg>

            {/* Center Node - XMB Group AG */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] flex items-center justify-center border-2 border-white shadow-lg">
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold text-white mb-1">XMB Group</h3>
                  <p className="text-lg font-semibold text-white/90">AG</p>
                </div>
              </div>
            </div>

            {/* Top Left Node - Recruiting */}
            <div className="absolute top-0 left-[5%]">
              <div className="relative bg-white rounded-lg p-4 border border-slate-200 shadow-sm w-56">
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-base font-semibold mb-2 text-slate-900">Recruiting</h4>
                <p className="text-slate-600 text-sm" style={{ lineHeight: '1.7' }}>Qualifizierte IT-Fachkräfte für Ihre Projekte</p>
              </div>
            </div>

            {/* Top Right Node - Softwareentwicklung */}
            <div className="absolute top-0 right-[5%]">
              <div className="relative bg-white rounded-lg p-4 border border-slate-200 shadow-sm w-56">
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-base font-semibold mb-2 text-slate-900">Softwareentwicklung</h4>
                <p className="text-slate-600 text-sm" style={{ lineHeight: '1.7' }}>Maßgeschneiderte Lösungen für Ihre Anforderungen</p>
              </div>
            </div>

            {/* Bottom Center Node - Cybersecurity */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="relative bg-white rounded-lg p-4 border border-slate-200 shadow-sm w-56">
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-base font-semibold mb-2 text-slate-900">Cybersecurity</h4>
                <p className="text-slate-600 text-sm" style={{ lineHeight: '1.7' }}>Sorgenfreie IT-Betreuung aus einer Hand</p>
              </div>
            </div>
            </div>
            
            {/* Right Side - Timeline */}
            <div className="lg:sticky lg:top-24 mt-8 lg:mt-0 order-2 lg:order-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-8 text-slate-900">
                Unsere Geschichte
              </h3>
              
              {/* Timeline Container */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                
                {/* Timeline Items */}
                <div className="space-y-8">
                  {[
                    { year: "2020", event: "Gründung des Unternehmens", icon: Building2 },
                    { year: "2021", event: "Erstes grösseres Projekt erfolgreich abgeschlossen.", icon: Award },
                    { year: "2022", event: "Erweiterung des Teams / Standort", icon: Users },
                    { year: "2023", event: "Einführung neuer Dienstleistungen", icon: Rocket },
                    { year: "2024", event: "Starkes Wachstum und neue Kunden", icon: TrendingUp },
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="relative flex items-start">
                        {/* Icon Circle on Line */}
                        <div className="absolute left-8 flex-shrink-0" style={{ transform: 'translateX(-50%)' }}>
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] border-2 border-white shadow-sm flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        
                        {/* Year - Right of Icon */}
                        <div className="ml-16 flex-shrink-0">
                          <div className="text-xl font-semibold text-[#921bb2]">
                            {item.year}
                          </div>
                        </div>
                        
                        {/* Event Text - Right Side */}
                        <div className="ml-6 flex-1 pt-1">
                          <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                            {item.event}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Key Points - Visual Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 border border-slate-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[#921bb2]"></div>
                  <p className="text-slate-700" style={{ lineHeight: '1.7' }}>{milestone}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Short Description */}
          <div className="mt-12 text-center max-w-4xl mx-auto">
            <p className="text-slate-700" style={{ lineHeight: '1.7' }}>
              Drei bewährte Unternehmen, eine gemeinsame Vision: 
              <span className="font-semibold text-[#921bb2]"> ganzheitliche IT-Unterstützung</span> für erfolgreiche Unternehmen.
            </p>
          </div>

          {/* Company Description */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 md:p-8 border border-slate-200">
              <div className="space-y-4 text-slate-600" style={{ lineHeight: '1.7' }}>
                <p>
                  XMB Group AG entstand aus dem Zusammenschluss von drei Unternehmen mit langjähriger Expertise in 
                  <span className="font-semibold text-[#921bb2]"> Recruiting</span>, 
                  <span className="font-semibold text-[#921bb2]"> Softwareentwicklung</span> und 
                  <span className="font-semibold text-[#921bb2]"> Cybersecurity</span>. 
                  Jede dieser Firmen brachte bewährte Arbeitsweisen, tiefes Fachwissen und eine klare Ausrichtung mit.
                </p>
                <p>
                  Durch die Vereinigung unserer Kräfte bieten wir unseren Kunden einen zuverlässigen Partner, 
                  der alle wichtigen IT-Bereiche aus einer Hand abdeckt. Wir unterstützen Unternehmen ganzheitlich – 
                  von der Entwicklung und Betreuung ihrer IT bis hin zur Gewinnung der passenden Fachkräfte. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Team Section */}
      <section className="bg-gradient-to-b from-[#B84DD4] to-[#FDF5FA] py-16 sm:py-20 text-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-black">
            Managing Team
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {managingTeam.map((member) => (
              <div
                key={member.name}
                className="group relative text-center cursor-pointer"
              >
                {/* Card Container mit Hover-Effekten */}
                <div className="relative transition-all duration-500 ease-out group-hover:-translate-y-3">
                  {/* Bild Container */}
                  <div className="relative mb-6 aspect-square w-full max-w-xs mx-auto overflow-hidden rounded-lg border border-black/20 transition-all duration-500 group-hover:border-[#921bb2] group-hover:shadow-lg">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{
                        objectPosition: member.name === "Melih Oezkan" ? "center 20%" : "center center"
                      }}
                    />
                  </div>
                  
                  {/* Name und Role */}
                  <div className="transition-all duration-300">
                    <p className="text-lg font-semibold mb-1 text-black">
                      {member.name}
                    </p>
                    <p className="text-black/80 font-medium text-sm">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Beschreibung Panel - erscheint beim Hover */}
                  <div className="relative mt-4 overflow-hidden rounded-lg bg-white/30 backdrop-blur-sm border border-black/30 group-hover:border-black/50 shadow-lg transition-all duration-500 ease-out max-h-0 opacity-0 translate-y-[-20px] group-hover:max-h-[280px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                    {/* Content */}
                    <div className="relative p-4 text-left">
                      {/* Text mit Animation */}
                      <p className="text-black/80 text-sm leading-relaxed transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drive and Goals Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">Antrieb und Ziele</h2>
          <p className="text-slate-600 mb-8" style={{ lineHeight: '1.7' }}>
            Wir sind der strategische Digitalisierungspartner für erfolgreiche Unternehmen der Zukunft. 
            Der Erfolg unserer Kunden ist unser grösster Ansporn. Für Ihren Erfolg wachsen wir weiter!
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="was-macht" className="border border-slate-300 rounded-lg !border-b">
              <AccordionTrigger className="text-slate-900 hover:no-underline hover:text-[#921bb2] transition-colors px-4 py-3">
                <div className="flex items-center gap-3">
                  <Plus className="w-5 h-5" />
                  <span className="text-base font-semibold">Was macht XMB Group AG?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pt-3 px-4 pb-4" style={{ lineHeight: '1.7' }}>
                Wir verbinden die Vermittlung qualifizierter IT-Fachkräfte mit der technischen Umsetzung und Betreuung von IT-Projekten. Durch die Kombination von Personal-, Entwicklungs- und Servicekompetenz bieten wir Unternehmen eine Unterstützung, die alle wichtigen Bereiche abdeckt – zuverlässig, strukturiert und aus einer Hand.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="wie-machen" className="border border-slate-300 rounded-lg !border-b">
              <AccordionTrigger className="text-slate-900 hover:no-underline hover:text-[#921bb2] transition-colors px-4 py-3">
                <div className="flex items-center gap-3">
                  <Plus className="w-5 h-5" />
                  <span className="text-base font-semibold">Wie machen wir das?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pt-3 px-4 pb-4" style={{ lineHeight: '1.7' }}>
                Wir analysieren die Anforderungen unserer Kunden sorgfältig, wählen die passenden Spezialisten aus und stellen die fachliche Qualität sicher. Parallel dazu betreuen wir technische Prozesse oder übernehmen den Betrieb kompletter IT-Lösungen. Klare Abläufe, transparente Kommunikation und feste Ansprechpartner sorgen für eine Zusammenarbeit mit Bestand.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="wieso-xmb" className="border border-slate-300 rounded-lg !border-b">
              <AccordionTrigger className="text-slate-900 hover:no-underline hover:text-[#921bb2] transition-colors px-4 py-3">
                <div className="flex items-center gap-3">
                  <Plus className="w-5 h-5" />
                  <span className="text-base font-semibold">Wieso XMB Group AG?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pt-3 px-4 pb-4">
                <div className="space-y-4" style={{ lineHeight: '1.7' }}>
                  <p>
                    Unsere Stärke liegt im Zusammenspiel unserer Kernbereiche. Was früher getrennt war, ist heute eine Einheit:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#921bb2] font-bold mt-1">►</span>
                      <span>IT-Expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#921bb2] font-bold mt-1">►</span>
                      <span>Personalgewinnung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#921bb2] font-bold mt-1">►</span>
                      <span>Service- und Betriebsverantwortung</span>
                    </li>
                  </ul>
                  <p>
                    Damit bieten wir Unternehmen einen Partner, der nicht nur liefert, sondern begleitet – mit Erfahrung, Verantwortung und dem Anspruch, langfristig erfolgreich zu sein.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>


      {/* Werte & Grundprinzipien */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-slate-900">
            Werte & Grundprinzipien
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Award,
                title: "Qualität",
                description: "Wir arbeiten präzise und sorgfältig.",
              },
              {
                icon: Shield,
                title: "Zuverlässigkeit",
                description: "Wir halten unser Wort, jederzeit.",
              },
              {
                icon: Heart,
                title: "Kundennähe",
                description: "Wir sind nah bei den Kunden und zuhören.",
              },
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-slate-200 text-center"
                >
                  {/* Icon Circle */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B84DD4] to-[#FDF5FA] flex items-center justify-center border-2 border-white">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600" style={{ lineHeight: '1.7' }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-gradient-to-b from-[#B84DD4] to-[#FDF5FA] py-12 lg:py-16 text-black">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
            Bereit für Ihre digitale Zukunft?
          </h2>
          <p className="text-black/80 mb-6" style={{ lineHeight: '1.7' }}>
            Lassen Sie uns gemeinsam Ihre IT-Herausforderungen meistern. Wir verbinden Recruiting, Softwareentwicklung und Cybersecurity zu einer maßgeschneiderten Lösung für Ihr Unternehmen.
          </p>
          <a
            href="#/kontakt"
            className="inline-block px-6 py-3 bg-white text-[#921bb2] font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
