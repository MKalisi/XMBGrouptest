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
  const patternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Section mit verschwommenem Hintergrund */}
      <section className="relative overflow-hidden px-4 sm:px-6 py-20 md:py-28">
        <ImageWithFallback
          src="/ueber-uns-hero.jpg"
          alt="Über uns"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#921bb2] via-[#921bb2] to-[#cd20b2] opacity-40"></div>
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 blur-3xl"
            style={{ backgroundImage: `url('${patternUrl}')` }}
          ></div>
        </div>
        <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-4 sm:space-y-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight relative group max-w-[95vw] sm:max-w-[80vw] mx-auto">
            <span className="relative z-10 text-white tracking-tight">
              XMB Group AG – Ihre ganzheitliche IT-Unterstützung aus einer Hand
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h1>
          <p className="max-w-5xl mx-auto text-base sm:text-lg md:text-xl text-white/90 leading-relaxed 2xl:text-2xl">
            Wir verbinden Recruiting, Softwareentwicklung und Cybersecurity zu stabilen Lösungen, die Unternehmen zuverlässig in ihrer digitalen Entwicklung begleiten.
          </p>
        </div>
      </section>

      {/* Company Introduction Section - Modern Visual Mindmap & Timeline */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white overflow-x-hidden">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-10 sm:mb-12 md:mb-16 text-center relative inline-block group max-w-[95vw] sm:max-w-[90vw] mx-auto px-2 leading-snug">
            <span className="relative z-10 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent tracking-tight">
              Über uns
            </span>
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#921bb2] to-[#cd20b2] group-hover:w-32 transition-all duration-500"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#921bb2]/0 via-[#cd20b2]/10 to-[#921bb2]/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </h2>
          
          {/* Grid Layout: Mindmap & Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Left Side - Mindmap */}
            <div className="hidden lg:block relative min-h-[350px] md:min-h-[500px] lg:min-h-[700px] flex items-center justify-center scale-75 md:scale-90 lg:scale-100 origin-center" style={{ overflow: 'visible', padding: '1rem 0' }}>
            {/* Connection Lines Background */}
            <svg className="absolute top-0 left-0 w-full pointer-events-none hidden sm:block" style={{ height: 'calc(100% + 80px)', zIndex: 0, overflow: 'visible' }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#921bb2" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#cd20b2" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#921bb2" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {/* Lines connecting center to nodes */}
              <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.5" />
              <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.5" />
              <line x1="50%" y1="50%" x2="50%" y2="75%" stroke="#921bb2" strokeWidth="2.5" opacity="0.4" />
            </svg>

            {/* Center Node - XMB Group AG */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(146,27,178,0.5)]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="text-center px-2 sm:px-3 md:px-4">
                  <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">XMB Group</h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white/90">AG</p>
                </div>
                {/* Pulsing ring effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-2 sm:border-3 border-white/30 animate-ping" style={{ transformOrigin: 'center center', margin: 0, padding: 0 }}></div>
              </div>
            </div>

            {/* Top Left Node - Recruiting */}
            <div className="absolute top-0 left-0 sm:left-[2%] md:left-[5%] group cursor-pointer" style={{ zIndex: 10 }}>
              <div className="relative bg-white rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl border-2 border-transparent group-hover:border-[#921bb2] transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl w-36 sm:w-44 md:w-56 lg:w-64">
                <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 group-hover:text-[#921bb2] transition-colors">Recruiting</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Qualifizierte IT-Fachkräfte für Ihre Projekte</p>
              </div>
            </div>

            {/* Top Right Node - Softwareentwicklung */}
            <div className="absolute top-0 right-0 sm:right-[2%] md:right-[5%] group cursor-pointer" style={{ zIndex: 10 }}>
              <div className="relative bg-white rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl border-2 border-transparent group-hover:border-[#921bb2] transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl w-36 sm:w-44 md:w-56 lg:w-64">
                <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 group-hover:text-[#921bb2] transition-colors">Softwareentwicklung</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Maßgeschneiderte Lösungen für Ihre Anforderungen</p>
              </div>
            </div>

            {/* Bottom Center Node - Cybersecurity */}
            <div className="absolute bottom-[-5px] sm:bottom-[-10px] md:bottom-[-20px] left-1/2 transform -translate-x-1/2 group cursor-pointer" style={{ zIndex: 10 }}>
              <div className="relative bg-white rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl border-2 border-transparent group-hover:border-[#921bb2] transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl w-36 sm:w-44 md:w-56 lg:w-64">
                <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 group-hover:text-[#921bb2] transition-colors">Cybersecurity</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Sorgenfreie IT-Betreuung aus einer Hand</p>
              </div>
            </div>
            </div>
            
            {/* Right Side - Timeline */}
            <div className="lg:sticky lg:top-24 mt-6 sm:mt-8 lg:mt-0 order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 relative inline-block group leading-snug">
                <span className="relative z-10 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent tracking-tight">
                  Unsere Geschichte
                </span>
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#921bb2] to-[#cd20b2] group-hover:w-full transition-all duration-500"></span>
              </h3>
              
              {/* Timeline Container */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-20 sm:left-24 md:left-28 lg:left-32 xl:left-36 top-0 bottom-6 w-0.5 bg-gradient-to-b from-[#921bb2]/20 via-[#cd20b2]/40 to-[#921bb2]/20" style={{ transform: 'translateX(-50%)' }}></div>
                
                {/* Timeline Items */}
                <div className="space-y-6 sm:space-y-8 md:space-y-10">
                  {[
                    { year: "2020", event: "Gründung des Unternehmens", icon: Building2 },
                    { year: "2021", event: "Erstes grösseres Projekt erfolgreich abgeschlossen.", icon: Award },
                    { year: "2022", event: "Erweiterung des Teams / Standort", icon: Users },
                    { year: "2023", event: "Einführung neuer Dienstleistungen", icon: Rocket },
                    { year: "2024", event: "Starkes Wachstum und neue Kunden", icon: TrendingUp },
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="relative flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                        {/* Year - Left Side */}
                        <div className="w-12 sm:w-14 md:w-16 lg:w-20 flex-shrink-0 text-right z-10 relative">
                          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#921bb2] to-[#cd20b2] bg-clip-text text-transparent">
                            {item.year}
                          </div>
                        </div>
                        
                        {/* Icon Circle on Line */}
                        <div className="absolute left-20 sm:left-24 md:left-28 lg:left-32 xl:left-36 z-20 flex-shrink-0" style={{ transform: 'translateX(-50%)' }}>
                          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-[#921bb2] to-[#cd20b2] border-2 sm:border-3 md:border-4 border-white shadow-lg flex items-center justify-center group hover:scale-110 transition-all duration-300">
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                          </div>
                        </div>
                        
                        {/* Spacer for Icon */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0"></div>
                        
                        {/* Event Text - Right Side */}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed 2xl:text-xl">
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
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-slate-200 hover:border-[#921bb2] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 bg-gradient-to-br from-[#921bb2] to-[#cd20b2] group-hover:scale-150 transition-transform duration-300"></div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed group-hover:text-slate-900 transition-colors">{milestone}</p>
                </div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#921bb2] to-[#cd20b2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl sm:rounded-b-2xl"></div>
              </div>
            ))}
          </div>

          {/* Short Description */}
          <div className="mt-10 sm:mt-12 md:mt-16 text-center max-w-5xl mx-auto px-4 sm:px-6">
            <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed 2xl:text-2xl">
              Drei bewährte Unternehmen, eine gemeinsame Vision: 
              <span className="font-bold text-[#921bb2]"> ganzheitliche IT-Unterstützung</span> für erfolgreiche Unternehmen.
              </p>
          </div>

          {/* Company Description - Gekürzt */}
          <div className="mt-6 sm:mt-8 md:mt-12 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-slate-200 shadow-lg">
              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg md:text-xl 2xl:text-2xl">
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
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-br from-[#921bb2] to-[#cd20b2] text-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 relative inline-block group leading-snug">
            <span className="relative z-10 text-white tracking-tight">
              Managing Team
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {managingTeam.map((member) => (
              <div
                key={member.name}
                className="group relative text-center cursor-pointer"
              >
                {/* Card Container mit Hover-Effekten */}
                <div className="relative transition-all duration-500 ease-out group-hover:-translate-y-3">
                  {/* Bild Container mit sauberem Border */}
                  <div className="relative mb-4 sm:mb-5 md:mb-6 aspect-square w-full max-w-xs mx-auto overflow-hidden rounded-lg sm:rounded-xl transition-all duration-500 border-2 border-transparent group-hover:border-[#921bb2] group-hover:shadow-[0_20px_40px_rgba(146,27,178,0.15)]">
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
                    <p className="text-lg sm:text-xl font-bold mb-1 transition-colors duration-300 text-white">
                      {member.name}
                    </p>
                    <p className="text-white/80 font-medium text-sm sm:text-base 2xl:text-lg transition-colors duration-300">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Beschreibung Panel - erscheint beim Hover */}
                  <div className="relative mt-4 sm:mt-5 md:mt-6 overflow-hidden rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 group-hover:border-white/50 shadow-lg transition-all duration-500 ease-out max-h-0 opacity-0 translate-y-[-20px] group-hover:max-h-[280px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)]">
                    {/* Content */}
                    <div className="relative p-4 sm:p-5 md:p-6 text-left">
                      {/* Text mit Animation */}
                      <p className="text-white/90 text-xs sm:text-sm leading-relaxed 2xl:text-base transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
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
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent leading-snug">Antrieb und Ziele</h2>
          <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-5xl 2xl:text-2xl">
            Wir sind der strategische Digitalisierungspartner für erfolgreiche Unternehmen der Zukunft. 
            Der Erfolg unserer Kunden ist unser grösster Ansporn. Für Ihren Erfolg wachsen wir weiter!
          </p>
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            <AccordionItem value="was-macht" className="border-slate-200">
              <AccordionTrigger className="text-slate-900 hover:no-underline hover:text-[#921bb2] transition-colors">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-base sm:text-lg font-semibold">Was macht XMB Group AG?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 pt-3 sm:pt-4">
                <p className="leading-relaxed text-sm sm:text-base md:text-lg 2xl:text-xl">
                  Wir verbinden die Vermittlung qualifizierter IT-Fachkräfte mit der technischen Umsetzung und Betreuung von IT-Projekten. Durch die Kombination von Personal-, Entwicklungs- und Servicekompetenz bieten wir Unternehmen eine Unterstützung, die alle wichtigen Bereiche abdeckt – zuverlässig, strukturiert und aus einer Hand.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="wie-machen" className="border-slate-200">
              <AccordionTrigger className="text-slate-900 hover:no-underline hover:text-[#921bb2] transition-colors">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-base sm:text-lg font-semibold">Wie machen wir das?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 pt-3 sm:pt-4">
                <p className="leading-relaxed text-sm sm:text-base md:text-lg 2xl:text-xl">
                  Wir analysieren die Anforderungen unserer Kunden sorgfältig, wählen die passenden Spezialisten aus und stellen die fachliche Qualität sicher. Parallel dazu betreuen wir technische Prozesse oder übernehmen den Betrieb kompletter IT-Lösungen. Klare Abläufe, transparente Kommunikation und feste Ansprechpartner sorgen für eine Zusammenarbeit mit Bestand.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="wieso-xmb" className="border-slate-200">
              <AccordionTrigger className="text-slate-900 hover:no-underline hover:text-[#921bb2] transition-colors">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-base sm:text-lg font-semibold">Wieso XMB Group AG?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 pt-3 sm:pt-4">
                <div className="space-y-3 sm:space-y-4">
                  <p className="leading-relaxed text-sm sm:text-base md:text-lg 2xl:text-xl">
                    Unsere Stärke liegt im Zusammenspiel unserer Kernbereiche. Was früher getrennt war, ist heute eine Einheit:
                  </p>
                  <ul className="space-y-2 sm:space-y-3 ml-2 sm:ml-4">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-[#921bb2] font-bold mt-0.5 sm:mt-1">►</span>
                      <span className="text-sm sm:text-base md:text-lg text-slate-700 2xl:text-xl">IT-Expertise</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-[#921bb2] font-bold mt-0.5 sm:mt-1">►</span>
                      <span className="text-sm sm:text-base md:text-lg text-slate-700 2xl:text-xl">Personalgewinnung</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <span className="text-[#921bb2] font-bold mt-0.5 sm:mt-1">►</span>
                      <span className="text-sm sm:text-base md:text-lg text-slate-700 2xl:text-xl">Service- und Betriebsverantwortung</span>
                    </li>
                  </ul>
                  <p className="leading-relaxed text-sm sm:text-base md:text-lg mt-3 sm:mt-4 text-slate-700 2xl:text-xl">
                    Damit bieten wir Unternehmen einen Partner, der nicht nur liefert, sondern begleitet – mit Erfahrung, Verantwortung und dem Anspruch, langfristig erfolgreich zu sein.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>


      {/* Werte & Grundprinzipien */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-14 md:mb-16 relative inline-block group max-w-[95vw] sm:max-w-[90vw] mx-auto px-2 leading-snug">
            <span className="relative z-10 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent tracking-tight">
              Werte & Grundprinzipien
            </span>
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#921bb2] to-[#cd20b2] group-hover:w-40 transition-all duration-500"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#921bb2]/0 via-[#cd20b2]/10 to-[#921bb2]/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: "Qualität",
                description: "Wir arbeiten präzise und sorgfältig.",
                color: "#921bb2"
              },
              {
                icon: Shield,
                title: "Zuverlässigkeit",
                description: "Wir halten unser Wort, jederzeit.",
                color: "#cd20b2"
              },
              {
                icon: Heart,
                title: "Kundennähe",
                description: "Wir sind nah bei den Kunden und zuhören.",
                color: "#921bb2"
              },
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-slate-200 hover:border-[#921bb2] transition-all duration-500 shadow-sm hover:shadow-xl text-center"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#921bb2]/5 to-[#cd20b2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    {/* Icon Circle */}
                    <div className="mb-4 sm:mb-5 md:mb-6 flex justify-center">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 sm:border-3 md:border-4 border-white">
                        <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-[#921bb2] transition-colors duration-300 bg-gradient-to-r from-slate-900 via-[#921bb2] to-slate-900 bg-clip-text text-transparent leading-snug">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed group-hover:text-slate-700 transition-colors duration-300 2xl:text-xl">
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Animated bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-2xl sm:rounded-b-3xl"></div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-gradient-to-br from-[#921bb2] to-[#cd20b2] py-16 sm:py-20 text-white">
        <div className="w-full flex flex-col gap-5 sm:gap-6 text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block group max-w-[95vw] sm:max-w-[80vw] mx-auto px-2 leading-snug">
            <span className="relative z-10 text-white tracking-tight">
              Bereit für Ihre digitale Zukunft?
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 blur-2xl group-hover:via-white/20 transition-all duration-500"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#921bb2]/20 via-[#cd20b2]/30 to-[#921bb2]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </h2>
          <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-xl text-white/90 2xl:text-2xl px-2">
            Lassen Sie uns gemeinsam Ihre IT-Herausforderungen meistern. Wir verbinden Recruiting, Softwareentwicklung und Cybersecurity zu einer maßgeschneiderten Lösung für Ihr Unternehmen.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
            <a
              href="#/kontakt"
              className="rounded-full bg-white px-8 sm:px-10 py-4 sm:py-5 text-[#921bb2] font-semibold text-base sm:text-lg btn-animated"
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
