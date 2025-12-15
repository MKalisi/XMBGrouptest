import { useState, useEffect } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Search, Settings, Network, BarChart3, ChevronRight, ChevronDown } from 'lucide-react';
import { PersonalverleihPage } from './components/PersonalverleihPage';
import { ManagedServicesPage } from './components/ManagedServicesPage';
import { SoftwareentwicklungPage } from './components/SoftwareentwicklungPage';
import { KontaktPage } from './components/KontaktPage';
import { ToolDetailPage } from './components/ToolDetailPage';
import { UeberUnsPage } from './components/UeberUnsPage';
import logoImage from 'figma:asset/ff4ac840ebe313bb8ae6c1fa93289c0a377de144.png';

export default function App() {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);
  const [activeMenu, setActiveMenu] = useState<string>('home');
  const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [toolId, setToolId] = useState<string | null>(null);
  const [showSoftwareSubmenu, setShowSoftwareSubmenu] = useState<boolean>(false);

  const toolsList = [
    { id: 'coremlis', title: 'Coremlis', color: '#cd20b2' },
    { id: 'depotix', title: 'Depotix', color: '#cd20b2' },
    { id: 'realestate', title: 'Real Estate Software', color: '#cd20b2' },
    { id: 'iauto', title: 'iAuto', color: '#921bb2' },
    { id: 'education', title: 'XMB-Education', color: '#921bb2' }
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(2) || 'home'; // Remove #/
      
      // Check if it's a tool detail page
      if (hash.startsWith('tools/')) {
        const id = hash.split('/')[1];
        setToolId(id);
        setCurrentPage('tool-detail');
        setActiveMenu('softwareentwicklung');
        setShowSoftwareSubmenu(true);
      } else {
        setToolId(null);
        setCurrentPage(hash);
        setActiveMenu(hash);
        if (hash !== 'softwareentwicklung') {
          setShowSoftwareSubmenu(false);
        }
      }
    };

    // Set initial page
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    window.location.hash = `#/${page}`;
    setActiveMenu(page);
    setCurrentPage(page);
  };

  const sections = [
    {
      id: 1,
      number: '01',
      title: 'IT Contracting',
      image: 'https://images.unsplash.com/photo-1574085727801-3992ff7ab11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2V8ZW58MXx8fHwxNzY0MTU0NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#921bb2',
      route: 'personalverleih'
    },
    {
      id: 2,
      number: '02',
      title: 'Managed Services',
      image: 'https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHNlcnZlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MjI3NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#362fcc',
      route: 'managed-services'
    },
    {
      id: 3,
      number: '03',
      title: 'Softwareentwicklung',
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2NDE3NTE5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: '#cd20b2',
      route: 'softwareentwicklung'
    }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'personalverleih':
        return <PersonalverleihPage />;
      case 'managed-services':
        return <ManagedServicesPage />;
      case 'softwareentwicklung':
        return <SoftwareentwicklungPage />;
      case 'kontakt':
        return <KontaktPage />;
      case 'tool-detail':
        return <ToolDetailPage toolId={toolId} />;
      case 'ueber-uns':
        return <UeberUnsPage />;
      default:
        return <HomePage />;
    }
  };

  const HomePage = () => (
    <>
      {/* Hero Section with Three Columns */}
      <div className="relative w-full h-screen" id="home">
        {/* Logo */}
        <div className="absolute top-8 left-8 z-50">
          <img 
            src={logoImage} 
            alt="XMB GROUP AG" 
            className="h-16 w-auto"
          />
        </div>

        {/* Three Column Layout */}
        <div className="flex h-full">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="relative cursor-pointer overflow-hidden"
              style={{
                width: hoveredSection === null 
                  ? '33.333%' 
                  : hoveredSection === index 
                    ? '70%' 
                    : '15%',
                transition: 'width 0.7s ease-in-out'
              }}
              onMouseEnter={() => setHoveredSection(index)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => navigateTo(section.route)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                  style={{
                    transform: hoveredSection === index ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.7s ease-in-out'
                  }}
                />
                {/* Dark Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    opacity: hoveredSection === null || hoveredSection === index ? 1 : 0.9,
                    transition: 'opacity 0.5s ease-in-out'
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-start p-12 z-10">
                {/* Number */}
                <div 
                  className="text-white opacity-30 mb-4"
                  style={{
                    fontSize: hoveredSection === index ? '10rem' : hoveredSection !== null ? '3rem' : '6rem',
                    transition: 'font-size 0.5s ease-in-out'
                  }}
                >
                  {section.number}
                </div>

                {/* Title */}
                <h2 
                  className="text-white uppercase tracking-wider mb-6"
                  style={{
                    fontSize: hoveredSection === index ? '3.5rem' : hoveredSection !== null ? '1.2rem' : '2rem',
                    lineHeight: '1.2',
                    opacity: hoveredSection !== null && hoveredSection !== index ? 0.8 : 1,
                    transition: 'font-size 0.5s ease-in-out, opacity 0.5s ease-in-out'
                  }}
                >
                  {section.title}
                </h2>

                {/* Button - visible on hover */}
                <button
                  className="px-6 py-3 border-2 border-white text-white uppercase tracking-wider hover:bg-white hover:text-black"
                  style={{
                    opacity: hoveredSection === index ? 1 : 0,
                    transform: hoveredSection === index ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                    pointerEvents: hoveredSection === index ? 'auto' : 'none'
                  }}
                >
                  Mehr erfahren
                </button>
              </div>

              {/* Colored accent line on hover */}
              <div
                className="absolute top-0 left-0 h-full w-1"
                style={{
                  backgroundColor: section.color,
                  opacity: hoveredSection === index ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }}>
            <span className="text-white/80 text-xs uppercase tracking-wider font-semibold group-hover:text-white transition-colors">
              Scroll
            </span>
            <ChevronDown className="w-6 h-6 text-white/80 group-hover:text-white transition-colors animate-pulse" />
          </div>
        </div>
      </div>

      {/* IT Contracting Section */}
      <section className="bg-white py-24 px-8" id="personalverleih">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative h-[600px] overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjQxNzc0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="IT Contracting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p 
                className="uppercase tracking-wider text-sm"
                style={{ color: '#921bb2' }}
              >
                Professionelles IT Contracting
              </p>
              
              <h2 className="text-5xl">
                Qualifiziertes Personal <br />für Ihr Projekt?
              </h2>

              <p className="text-lg">
                <span className="font-semibold">XMB Group begleitet</span> Ihre Projekte und stellt Ihnen{' '}
                <span style={{ color: '#921bb2' }}>qualifiziertes Fachpersonal</span> zur Verfügung.
              </p>

              <p className="text-gray-700">
                Wir vermitteln hochqualifizierte IT-Spezialisten, Entwickler und Projektmanager für Ihre individuellen Anforderungen. 
                Haben Sie Bedarf an erfahrenen Fachkräften oder fehlt Ihnen Personal für ein wichtiges Projekt? 
                Wir unterstützen Sie zielgerichtet und verleihen Ihrem Team neuen Schwung!
              </p>

              <p className="text-gray-700">
                Seit 2008 vermitteln wir erfolgreich IT-Fachkräfte in der ganzen Schweiz. 
                Unsere Experten aus den Bereichen Informatik, Software-Entwicklung und Projektmanagement 
                prägen unsere Erfolgsstory.
              </p>

              <button
                onClick={() => navigateTo('personalverleih')}
                className="mt-4 px-8 py-4 text-white uppercase tracking-wider rounded-full transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#921bb2' }}
              >
                Mehr über IT Contracting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Services Section */}
      <section className="py-24 px-8" style={{ backgroundColor: '#362fcc' }} id="managed-services">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Text Content */}
            <div className="text-white space-y-6">
              <p className="uppercase tracking-wider text-sm opacity-90">
                Das XMB Angebot
              </p>
              
              <h2 className="text-5xl">
                IT-Beratung und<br />Begleitung.
              </h2>

              <p className="text-white/90 leading-relaxed">
                XMB begleitet Unternehmen in digitalen Transformationsprozessen. Mit der gebündelten 
                Expertise und Erfahrung unserer Consultants steuern wir die strategisch entscheidenden 
                Faktoren Ihrer IT-Vorhaben. Ob klassisch, agil, hybrid oder nach einem gewünschten Ansatz – 
                XMB liefert die richtigen Impulse und Vorhaben.
              </p>

              <button
                onClick={() => navigateTo('managed-services')}
                className="mt-4 px-8 py-3 bg-transparent border-2 border-white text-white uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-white hover:text-[#362fcc]"
              >
                Zum Angebot
              </button>
            </div>

            {/* Right Side - Service Cards */}
            <div className="grid grid-cols-1 gap-4">
              {/* Business Consulting */}
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#921bb2' }}
                >
                  <Search className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Business Consulting</h3>
                  <p className="text-gray-700 text-sm">
                    Wir sind Ihre Spezialist:innen in der Business Analyse und im Product Management.
                  </p>
                </div>
              </div>

              {/* Projekt- und Agile Consulting */}
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#362fcc' }}
                >
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Projekt- und Agile Consulting</h3>
                  <p className="text-gray-700 text-sm">
                    Wir begleiten Sie als Scrum Master, Release Train Engineer, Projekt- und Programmleiter:innen.
                  </p>
                </div>
              </div>

              {/* Technologie Consulting */}
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#cd20b2' }}
                >
                  <Network className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Technologie Consulting</h3>
                  <p className="text-gray-700 text-sm">
                    Wir setzen unsere Expertise als IT-Architekten, Requirements und Software Engineer und in der Cloud-Beratung für Sie ein.
                  </p>
                </div>
              </div>

              {/* Management Consulting */}
              <div className="bg-white rounded-lg p-6 flex items-start gap-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#921bb2' }}
                >
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Management Consulting</h3>
                  <p className="text-gray-700 text-sm">
                    Wir beraten Sie auf strategischer Ebene in den Themen Transformation, Digitalisierung und Sourcing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Softwareentwicklung Section */}
      <section className="bg-white py-24 px-8" id="softwareentwicklung">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <p 
                className="uppercase tracking-wider text-sm"
                style={{ color: '#cd20b2' }}
              >
                Unsere Leistung - Für Sie
              </p>
              
              <h2 className="text-5xl">
                Ihre <span style={{ color: '#cd20b2' }}>digitale Transformation</span> – solide unterstützt durch bewährte Softwarelösungen
              </h2>

              <p className="text-gray-700 leading-relaxed">
                Unsere Softwaretools entstehen aus langjähriger Erfahrung und einem tiefen Verständnis für gewachsene Unternehmensprozesse. Wir entwickeln Lösungen, die sich nahtlos in bestehende Strukturen einfügen und zugleich den Weg in eine moderne, stabile digitale Zukunft ebnen. Verlässlichkeit, klare Abläufe und nachhaltige Qualität stehen bei uns im Mittelpunkt. So unterstützen wir Unternehmen dabei, ihre täglichen Aufgaben effizienter zu bewältigen, Transparenz zu erhöhen und bewährte Arbeitsweisen mit zeitgemäßen Werkzeugen zu stärken.
              </p>

              <button
                onClick={() => navigateTo('softwareentwicklung')}
                className="mt-4 px-8 py-4 text-white uppercase tracking-wider rounded-full transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#cd20b2' }}
              >
                Mehr erfahren
              </button>
            </div>

            {/* Right Side - Client Categories */}
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between hover:border-[#cd20b2] transition-colors cursor-pointer group">
                <span className="text-lg">Öffentliche Verwaltung</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#cd20b2] transition-colors" />
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between hover:border-[#cd20b2] transition-colors cursor-pointer group">
                <span className="text-lg">Bundesnahe Betriebe</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#cd20b2] transition-colors" />
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between hover:border-[#cd20b2] transition-colors cursor-pointer group">
                <span className="text-lg">Kantone und Gemeinden</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#cd20b2] transition-colors" />
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between hover:border-[#cd20b2] transition-colors cursor-pointer group">
                <span className="text-lg">Grossunternehmen</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#cd20b2] transition-colors" />
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5 flex items-center justify-between hover:border-[#cd20b2] transition-colors cursor-pointer group">
                <span className="text-lg">KMU, Start-Ups und Kleinfirmen</span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#cd20b2] transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-24 px-8"
        style={{ backgroundColor: '#921bb2' }}
        id="kontakt"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text */}
            <div className="text-white space-y-6">
              <p className="uppercase tracking-wider text-sm opacity-90">
                Kontakt
              </p>
              
              <h2 className="text-5xl">
                Bereit um Ihr<br />nächstes Vorhaben gemeinsam anzugehen?
              </h2>

              <p className="text-white/90 leading-relaxed text-lg">
                Lassen Sie uns gemeinsam Ihre digitale Zukunft gestalten. 
                Kontaktieren Sie uns für ein unverbindliches Gespräch.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">E-Mail</p>
                    <p className="text-lg">info@xmb-group.ch</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Telefon</p>
                    <p className="text-lg">+41 44 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Adresse</p>
                    <p className="text-lg">Musterstrasse 123<br />8000 Zürich</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigateTo('kontakt')}
                className="mt-6 px-8 py-4 bg-white text-[#921bb2] uppercase tracking-wider rounded-full transition-all duration-300 hover:bg-gray-100"
              >
                Zur Kontaktseite
              </button>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl border border-white/20 p-8 lg:p-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Schreiben Sie uns
                </h3>
                <p className="text-slate-600 text-sm">
                  Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen zurück.
                </p>
              </div>
              <form className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                    Name <span className="text-[#921bb2]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20"
                    placeholder="Vor- und Nachname"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                    E-Mail <span className="text-[#921bb2]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20"
                    placeholder="name@firma.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700">
                    Firma
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20"
                    placeholder="Unternehmensname"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                    Nachricht <span className="text-[#921bb2]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-all resize-none focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20"
                    placeholder="Beschreiben Sie Ihr Anliegen oder Projekt..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-[#921bb2] to-[#cd20b2] px-6 py-4 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Nachricht senden
                </button>
                <p className="text-xs text-slate-500 text-center">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl tracking-wider mb-6">
                <span className="font-bold">XMB</span>
                <span className="font-light">GROUP</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ihr Partner für IT Contracting, Managed Services und Softwareentwicklung in der Schweiz.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="uppercase tracking-wider text-sm mb-6" style={{ color: '#cd20b2' }}>
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#/personalverleih" className="text-gray-400 hover:text-white transition-colors">
                    IT Contracting
                  </a>
                </li>
                <li>
                  <a href="#/managed-services" className="text-gray-400 hover:text-white transition-colors">
                    Managed Services
                  </a>
                </li>
                <li>
                  <a href="#/softwareentwicklung" className="text-gray-400 hover:text-white transition-colors">
                    Softwareentwicklung
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    IT-Beratung
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="uppercase tracking-wider text-sm mb-6" style={{ color: '#cd20b2' }}>
                Unternehmen
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Über uns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Karriere
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Referenzen
                  </a>
                </li>
                <li>
                  <a href="#/kontakt" className="text-gray-400 hover:text-white transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="uppercase tracking-wider text-sm mb-6" style={{ color: '#cd20b2' }}>
                Kontakt
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Musterstrasse 123</li>
                <li>8000 Zürich</li>
                <li className="pt-2">info@xmb-group.ch</li>
                <li>+41 44 123 45 67</li>
              </ul>

              {/* Social Media */}
              <div className="flex gap-4 mt-6">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#921bb2] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#921bb2] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#921bb2] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 XMB Group. Alle Rechte vorbehalten.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Impressum
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Datenschutz
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  AGB
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );

  return (
    <div className="relative w-full overflow-y-auto overflow-x-hidden">
      {/* Left Navigation Menu */}
      <nav 
        className="fixed left-0 top-0 h-screen bg-black/90 backdrop-blur-sm z-50 flex flex-col py-8 transition-all duration-300"
        style={{ width: isMenuExpanded ? '250px' : '80px' }}
        onMouseEnter={() => setIsMenuExpanded(true)}
        onMouseLeave={() => setIsMenuExpanded(false)}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-6 mb-8">
          <div 
            className="overflow-hidden transition-all duration-300"
            style={{ width: isMenuExpanded ? '150px' : '0px', opacity: isMenuExpanded ? 1 : 0 }}
          >
            <h2 className="text-white whitespace-nowrap">
              <span className="font-bold">XMB</span>
              <span className="font-light">GROUP</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-4">
          {/* Logo/Home */}
          <a 
            href="#/"
            className="flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300 group"
            style={{
              backgroundColor: activeMenu === 'home' ? '#cd20b2' : 'transparent'
            }}
            onClick={(e) => {
              e.preventDefault();
              navigateTo('home');
            }}
          >
            <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span 
              className="text-white whitespace-nowrap overflow-hidden transition-all duration-300"
              style={{ 
                width: isMenuExpanded ? '150px' : '0px',
                opacity: isMenuExpanded ? 1 : 0
              }}
            >
              Home
            </span>
          </a>

          <div className="h-px bg-white/20 my-2" />

          {/* IT Contracting */}
          <a 
            href="#/personalverleih"
            className="flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: activeMenu === 'personalverleih' ? '#921bb2' : 'transparent'
            }}
            onClick={(e) => {
              e.preventDefault();
              navigateTo('personalverleih');
            }}
          >
            <span className="text-white text-lg font-bold flex-shrink-0 w-6 text-center">01</span>
            <span 
              className="text-white whitespace-nowrap overflow-hidden transition-all duration-300"
              style={{ 
                width: isMenuExpanded ? '150px' : '0px',
                opacity: isMenuExpanded ? 1 : 0
              }}
            >
              IT Contracting
            </span>
          </a>

          {/* Managed Services */}
          <a 
            href="#/managed-services"
            className="flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: activeMenu === 'managed-services' ? '#362fcc' : 'transparent'
            }}
            onClick={(e) => {
              e.preventDefault();
              navigateTo('managed-services');
            }}
          >
            <span className="text-white text-lg font-bold flex-shrink-0 w-6 text-center">02</span>
            <span 
              className="text-white whitespace-nowrap overflow-hidden transition-all duration-300"
              style={{ 
                width: isMenuExpanded ? '150px' : '0px',
                opacity: isMenuExpanded ? 1 : 0
              }}
            >
              Managed Services
            </span>
          </a>

          {/* Softwareentwicklung */}
          <button
            className="w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: activeMenu === 'softwareentwicklung' || currentPage === 'tool-detail' ? '#cd20b2' : 'transparent'
            }}
            onClick={() => {
              if (showSoftwareSubmenu) {
                setShowSoftwareSubmenu(false);
                navigateTo('softwareentwicklung');
              } else {
                setShowSoftwareSubmenu(true);
                navigateTo('softwareentwicklung');
              }
            }}
          >
            <span className="text-white text-lg font-bold flex-shrink-0 w-6 text-center">03</span>
            <span 
              className="text-white whitespace-nowrap overflow-hidden transition-all duration-300 flex-1 text-left"
              style={{ 
                width: isMenuExpanded ? '150px' : '0px',
                opacity: isMenuExpanded ? 1 : 0
              }}
            >
              Softwareentwicklung
            </span>
            {isMenuExpanded && (
              <ChevronRight 
                className="w-4 h-4 text-white flex-shrink-0 transition-transform duration-300"
                style={{
                  transform: showSoftwareSubmenu ? 'rotate(90deg)' : 'rotate(0deg)'
                }}
              />
            )}
          </button>

          {/* Software Submenu */}
          {showSoftwareSubmenu && isMenuExpanded && (
            <div className="ml-6 space-y-1 overflow-hidden transition-all duration-300">
              {toolsList.map((tool) => (
                <a
                  key={tool.id}
                  href={`#/tools/${tool.id}`}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 text-sm"
                  style={{
                    backgroundColor: toolId === tool.id ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = `#/tools/${tool.id}`;
                  }}
                >
                  <div 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: tool.color }}
                  />
                  <span className="text-white/80 hover:text-white whitespace-nowrap">
                    {tool.title}
                  </span>
                </a>
              ))}
            </div>
          )}

          <div className="h-px bg-white/20 my-2" />

          {/* Über uns */}
          <a 
            href="#/ueber-uns"
            className="flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: activeMenu === 'ueber-uns' ? '#921bb2' : 'transparent'
            }}
            onClick={(e) => {
              e.preventDefault();
              navigateTo('ueber-uns');
            }}
          >
            <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span 
              className="text-white whitespace-nowrap overflow-hidden transition-all duration-300"
              style={{ 
                width: isMenuExpanded ? '150px' : '0px',
                opacity: isMenuExpanded ? 1 : 0
              }}
            >
              Über uns
            </span>
          </a>

          {/* Contact */}
          <a 
            href="#/kontakt"
            className="flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: activeMenu === 'kontakt' ? '#921bb2' : 'transparent'
            }}
            onClick={(e) => {
              e.preventDefault();
              navigateTo('kontakt');
            }}
          >
            <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span 
              className="text-white whitespace-nowrap overflow-hidden transition-all duration-300"
              style={{ 
                width: isMenuExpanded ? '150px' : '0px',
                opacity: isMenuExpanded ? 1 : 0
              }}
            >
              Kontakt
            </span>
          </a>
        </div>
      </nav>

      {/* Main Content - with left margin to account for menu */}
      <div 
        className="transition-all duration-300"
        style={{ marginLeft: isMenuExpanded ? '250px' : '80px' }}
      >
        {renderPage()}
      </div>
    </div>
  );
}