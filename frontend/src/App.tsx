import { useState, useEffect } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import {
  Search,
  Settings,
  Network,
  BarChart3,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';

import { HeroSwiper } from './components/HeroSwiper';

import { PersonalverleihPage } from './components/PersonalverleihPage';
import { FuerUnsereKundenPage } from './components/FuerUnsereKundenPage';
import { FuerITSpezialistenPage } from './components/FuerITSpezialistenPage';
import { CybersecurityPage } from './components/CybersecurityPage';
import { SoftwareentwicklungPage } from './components/SoftwareentwicklungPage';
import { KontaktPage } from './components/KontaktPage';
import { ToolDetailPage } from './components/ToolDetailPage';
import { UeberUnsPage } from './components/UeberUnsPage';
import { ImpressumPage } from './components/ImpressumPage';
import { DatenschutzPage } from './components/DatenschutzPage';
import { AGBPage } from './components/AGBPage';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { useIsMobile } from './components/ui/use-mobile';

const logoImage = '/Logo/White logo.png';
const logoImageLandingpage = '/Logo/logotransp_big.png';

export default function App() {
  const [activeMenu, setActiveMenu] = useState<string>('home');
  const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [toolId, setToolId] = useState<string | null>(null);
  const [showSoftwareSubmenu, setShowSoftwareSubmenu] = useState<boolean>(false);
  const [showPersonalverleihSubmenu, setShowPersonalverleihSubmenu] =
    useState<boolean>(false);

  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [introPhase, setIntroPhase] = useState<'initial' | 'flying' | 'fading'>(
    'initial'
  );

  const isMobile = useIsMobile();
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1920
  );

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsLargeScreen(width >= 1536);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toolsList = [
    {
      id: 'coremlis',
      title: 'Coremlis',
      color: '#cd20b2',
      description: 'CRM Software für automatisiertes Kundenmanagement.',
    },
    {
      id: 'depotix',
      title: 'Depotix',
      color: '#cd20b2',
      description: 'Depot- und Portfolio-Management mit Echtzeit-Transparenz.',
    },
    {
      id: 'realestate',
      title: 'Real Estate Software',
      color: '#cd20b2',
      description:
        'Plattform für Immobilienverwaltung, Mietermanagement und Finanzen.',
    },
    {
      id: 'iauto',
      title: 'iAuto',
      color: '#cd20b2',
      description: 'Automotive Management für Flotten, Werkstatt und Verkauf.',
    },
    {
      id: 'education',
      title: 'XMB-Education',
      color: '#cd20b2',
      description:
        'E-Learning und Campus-Management für Bildungseinrichtungen.',
    },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(2) || 'home';

      if (hash.startsWith('tools/')) {
        const id = hash.split('/')[1];
        setToolId(id);
        setCurrentPage('tool-detail');
        setActiveMenu('softwareentwicklung');
        setShowSoftwareSubmenu(true);
      } else if (hash.startsWith('personalverleih/')) {
        const subpage = hash.split('/')[1];
        setCurrentPage(hash);
        setActiveMenu('personalverleih');
        setShowPersonalverleihSubmenu(true);
        if (subpage === 'fuer-unsere-kunden' || subpage === 'fuer-it-spezialisten') {
          // ok
        }
      } else {
        setToolId(null);
        setCurrentPage(hash);
        setActiveMenu(hash);

        if (hash !== 'softwareentwicklung') setShowSoftwareSubmenu(false);
        if (hash !== 'personalverleih' && !hash.startsWith('personalverleih/')) {
          setShowPersonalverleihSubmenu(false);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Logo Intro Animation
  useEffect(() => {
    if (!showIntro) return;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const initTimer = setTimeout(() => {
          const waitTimer = setTimeout(() => {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setIntroPhase('flying');
              });
            });

            const flyTimer = setTimeout(() => {
              setShowIntro(false);
            }, 1800);

            return () => clearTimeout(flyTimer);
          }, 900);

          return () => clearTimeout(waitTimer);
        }, 50);

        return () => clearTimeout(initTimer);
      });
    });
  }, [showIntro]);

  const navigateTo = (page: string) => {
    window.location.hash = `#/${page}`;
    setActiveMenu(page);
    setCurrentPage(page);
    if (isMobile) setIsMobileMenuOpen(false);
  };

  const sections = [
    {
      id: 1,
      number: '01',
      title: 'IT Contracting',
      image: '/it-contracting-hero.jpg',
      color: '#921bb2',
      route: 'personalverleih',
    },
    {
      id: 2,
      number: '02',
      title: 'Cybersecurity',
      image: '/cybersecurity-hero.jpg',
      color: '#921bb2',
      route: 'cybersecurity',
    },
    {
      id: 3,
      number: '03',
      title: 'Softwareentwicklung',
      image: '/softwareentwicklung-hero.jpg',
      color: '#cd20b2',
      route: 'softwareentwicklung',
    },
  ];

  const renderPage = () => {
    if (currentPage === 'personalverleih/fuer-unsere-kunden') return <FuerUnsereKundenPage />;
    if (currentPage === 'personalverleih/fuer-it-spezialisten') return <FuerITSpezialistenPage />;

    switch (currentPage) {
      case 'personalverleih':
        return <PersonalverleihPage />;
      case 'cybersecurity':
        return <CybersecurityPage />;
      case 'softwareentwicklung':
        return <SoftwareentwicklungPage />;
      case 'kontakt':
        return <KontaktPage />;
      case 'tool-detail':
        return <ToolDetailPage toolId={toolId} />;
      case 'ueber-uns':
        return <UeberUnsPage />;
      case 'impressum':
        return <ImpressumPage />;
      case 'datenschutz':
        return <DatenschutzPage />;
      case 'agb':
        return <AGBPage />;
      default:
        return <HomePage />;
    }
  };

  const HomePage = () => (
    <>
      {/* ✅ HERO: Jetzt mit SwiperSlide */}
      <HeroSwiper
        sections={sections}
        isMobile={isMobile}
        isLargeScreen={isLargeScreen}
        showIntro={showIntro}
        onNavigate={(route) => navigateTo(route)}
      />
      

      {/* IT Contracting Section */}
      <section className={`bg-white ${isMobile ? 'py-12' : 'py-16 lg:py-24'}`} id="personalverleih">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 items-stretch ${isMobile ? 'gap-8' : 'gap-12'}`}>
            <div className="relative overflow-hidden rounded-lg h-full">
              <ImageWithFallback
                src="/it-contracting-section.jpg"
                alt="IT Contracting"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <p className="uppercase tracking-wider text-sm text-[#921bb2] font-medium">
                IT Contracting
              </p>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">
                Qualifiziertes Personal für Ihr Projekt
              </h2>

              <div className="max-w-prose space-y-4 text-slate-600" style={{ lineHeight: '1.7' }}>
                <p>
                  XMB Group AG begleitet Ihre Projekte und stellt Ihnen sorgfältig ausgewählte IT-Fachkräfte zur Verfügung – präzise abgestimmt auf Ihre Anforderungen.
                </p>

                <p>
                  Wir vermitteln erfahrene IT-Spezialisten, Entwickler und Projektmanager, die Ihre Teams zuverlässig verstärken und Verantwortung übernehmen.
                </p>

                <p className="font-medium text-slate-800">Unser Ansatz ist klar:</p>

                <p>
                  Wir analysieren den Bedarf, wählen passende Profile aus und kümmern uns um die gesamte organisatorische Abwicklung. So können Sie sich auf das Wesentliche konzentrieren.
                </p>
              </div>

              <button
                onClick={() => navigateTo('personalverleih')}
                className="mt-6 px-6 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-[#921bb2] to-[#cd20b2] hover:opacity-90 transition-opacity"
              >
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section className={`${isMobile ? 'py-12' : 'py-16 lg:py-24'} bg-gradient-to-br from-[#921bb2] to-[#cd20b2]`} id="cybersecurity">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 ${isMobile ? 'gap-8' : 'gap-12'}`}>
            <div className="text-white space-y-4">
              <p className="uppercase tracking-wider text-sm text-white/80 font-medium">IT-Beratung</p>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                IT-Beratung und Begleitung
              </h2>

              <p className="text-white/90 max-w-prose" style={{ lineHeight: '1.7' }}>
                XMB begleitet Unternehmen in digitalen Transformationsprozessen. Mit der gebündelten
                Expertise unserer Consultants steuern wir die strategisch entscheidenden
                Faktoren Ihrer IT-Vorhaben.
              </p>

              <button
                onClick={() => navigateTo('cybersecurity')}
                className="mt-6 px-6 py-3 bg-white text-[#921bb2] font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Angebot ansehen
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: Search, title: 'Business Consulting', desc: 'Business Analyse und Product Management.' },
                { icon: Settings, title: 'Projekt- und Agile Consulting', desc: 'Scrum Master, Release Train Engineer, Projektleitung.' },
                { icon: Network, title: 'Technologie Consulting', desc: 'IT-Architektur, Requirements Engineering, Cloud-Beratung.' },
                { icon: BarChart3, title: 'Management Consulting', desc: 'Transformation, Digitalisierung und Sourcing.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg border border-slate-200 p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Softwareentwicklung Section */}
      <section className={`bg-white ${isMobile ? 'py-12' : 'py-16 lg:py-24'}`} id="softwareentwicklung">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 ${isMobile ? 'gap-8' : 'gap-12'}`}>
            <div className="space-y-4">
              <p className="uppercase tracking-wider text-sm text-[#921bb2] font-medium">
                Softwareentwicklung
              </p>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight">
                Solide Software für eine stabile digitale Zukunft
              </h2>

              <div className="max-w-prose space-y-4 text-slate-600" style={{ lineHeight: '1.7' }}>
                <p>
                  Wir entwickeln Software, die sich an bewährten Abläufen orientiert und Unternehmen zuverlässig unterstützt. Unsere Lösungen fügen sich sauber in bestehende Strukturen ein.
                </p>

                <p>
                  Mit technischer Kompetenz sorgen wir dafür, dass Digitalisierung zur nachhaltigen Weiterentwicklung Ihrer Arbeitswelt wird.
                </p>
              </div>

              <button
                onClick={() => navigateTo('softwareentwicklung')}
                className="mt-6 px-6 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-[#921bb2] to-[#cd20b2] hover:opacity-90 transition-opacity"
              >
                Mehr erfahren
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {toolsList.map((tool) => (
                <a
                  key={tool.id}
                  href={`#/tools/${tool.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = `#/tools/${tool.id}`;
                  }}
                  className="group bg-white border border-slate-200 hover:border-[#921bb2] rounded-lg p-5 flex items-start justify-between transition-colors"
                >
                  <div className="pr-4 flex-1">
                    <p className="font-semibold text-[#921bb2] group-hover:text-[#7a1696] transition-colors">
                      {tool.title}
                    </p>
                    <p className="text-slate-600 text-sm mt-1">
                      {tool.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#921bb2] transition-colors mt-0.5 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${isMobile ? 'py-12' : 'py-16 lg:py-24'} bg-gradient-to-br from-[#921bb2] to-[#cd20b2]`} id="kontakt">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 items-start ${isMobile ? 'gap-8' : 'gap-12'}`}>
            <div className="text-white space-y-6">
              <p className="uppercase tracking-wider text-sm text-white/80 font-medium">Kontakt</p>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                Bereit für Ihr nächstes Vorhaben?
              </h2>

              <p className="text-white/90 max-w-prose" style={{ lineHeight: '1.7' }}>
                Am einfachsten erreichen Sie uns über das Formular oder per E-Mail. Wir melden uns zeitnah bei Ihnen.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">E-Mail</p>
                    <p>info@xmb-group.ch</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Telefon</p>
                    <p>+41 44 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Adresse</p>
                    <p>Eichengasse 3, 4702 Oensingen</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigateTo('kontakt')}
                className="mt-4 px-6 py-3 bg-white text-[#921bb2] font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Zur Kontaktseite
              </button>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6 lg:p-8">
              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">
                      Name <span className="text-[#921bb2]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                      placeholder="Vor- und Nachname"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">
                      E-Mail <span className="text-[#921bb2]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                      placeholder="name@firma.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">
                      Telefon <span className="text-slate-400 text-xs font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                      placeholder="+41 XX XXX XX XX"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-slate-700">
                      Firma <span className="text-slate-400 text-xs font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                      placeholder="Unternehmensname"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">
                    Betreff <span className="text-[#921bb2]">*</span>
                  </label>
                  <select
                    required
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                  >
                    <option value="">Bitte wählen</option>
                    <option>Allgemeine Anfrage</option>
                    <option>IT Contracting</option>
                    <option>Cybersecurity</option>
                    <option>Softwareentwicklung</option>
                    <option>Partnerschaft</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">
                    Nachricht <span className="text-[#921bb2]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 resize-none focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#921bb2]"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-[#921bb2] to-[#cd20b2] px-6 py-3 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Nachricht senden
                </button>

                <p className="text-xs text-slate-500 text-center">
                  Mit dem Absenden stimmen Sie unserer <a href="#/datenschutz" className="underline hover:text-[#921bb2]">Datenschutzerklärung</a> zu.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );

  return (
    <div className="relative w-full overflow-y-auto overflow-x-hidden">
      {/* Logo Intro Animation */}
      {showIntro && (
        <div
          className="fixed inset-0 z-[9999]"
          style={{
            backgroundColor: '#000000',
            opacity: introPhase === 'flying' ? 0 : 1,
            transition: introPhase === 'flying' ? 'opacity 1.8s ease-out' : 'none',
            pointerEvents: introPhase === 'flying' ? 'none' : 'auto',
          }}
        >
          <div
            className="absolute"
            style={{
              left: introPhase === 'flying' ? 'calc(100% - 2rem)' : '50%',
              top: introPhase === 'flying' ? '2rem' : '50%',
              width: introPhase === 'flying' ? 'auto' : '320px',
              height: introPhase === 'flying' ? '144px' : '320px',
              transform: introPhase === 'flying' ? 'translate(-100%, 0)' : 'translate(-50%, -50%)',
              transition:
                introPhase === 'flying'
                  ? 'left 1.8s cubic-bezier(0.4, 0, 0.2, 1), top 1.8s cubic-bezier(0.4, 0, 0.2, 1), height 1.8s cubic-bezier(0.4, 0, 0.2, 1), transform 1.8s cubic-bezier(0.4, 0, 0.2, 1)'
                  : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              willChange: introPhase === 'flying' ? 'left, top, height, transform' : 'auto',
            }}
          >
            <img
              src={logoImageLandingpage}
              alt="XMB Group AG Logo"
              className="h-36 w-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* Mobile Hamburger Button */}
      {isMobile && (
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-[100] bg-black/90 backdrop-blur-sm p-3 rounded-lg text-white hover:bg-black transition-all"
          aria-label="Menu öffnen"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Left Navigation Menu */}
      <nav
        className={`fixed left-0 top-0 h-screen bg-black/90 backdrop-blur-sm z-50 flex flex-col py-8 transition-all duration-300 ${
          isMobile ? (isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full') : ''
        }`}
        style={{
          width: isMobile ? '280px' : isMenuExpanded ? '300px' : '90px',
        }}
        onMouseEnter={() => !isMobile && setIsMenuExpanded(true)}
        onMouseLeave={() => !isMobile && setIsMenuExpanded(false)}
      >
        <div className={`flex items-center justify-center mb-8 ${isMobile ? 'px-4 pt-16' : 'px-'}`}>
          <img
            src={isMobile || isMenuExpanded ? logoImage : logoImageLandingpage}
            alt="XMB Group AG"
            className="w-auto object-contain transition-all duration-300"
            style={{
              height: isMobile ? '100px' : isMenuExpanded ? '144px' : '200px',
              opacity: isMobile ? 1 : isMenuExpanded ? 1 : 0.7,
              transform: isMenuExpanded ? 'scale(1)' : 'scale(1)',
            }}
          />
        </div>

        <div className="flex flex-col gap-2 px-4">
          {/* Home */}
          <a
            href="#/"
            className="flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300 group"
            style={{ backgroundColor: activeMenu === 'home' ? '#921bb2' : 'transparent' }}
            onClick={(e) => {
              e.preventDefault();
              navigateTo('home');
              if (isMobile) setIsMobileMenuOpen(false);
            }}
          >
            <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span
              className="text-white whitespace-nowrap overflow-hidden transition-all duration-300"
              style={{
                width: isMenuExpanded || isMobile ? '150px' : '0px',
                opacity: isMenuExpanded || isMobile ? 1 : 0,
              }}
            >
              Home
            </span>
          </a>

          <div className="h-px bg-white/20 my-2" />

          {/* IT Contracting */}
          <div
            className="w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{
              backgroundColor:
                activeMenu === 'personalverleih' || currentPage.startsWith('personalverleih/')
                  ? '#921bb2'
                  : 'transparent',
            }}
          >
            <span className="text-white text-lg font-bold flex-shrink-0 w-6 text-center">01</span>
            <a
              href="#/personalverleih"
              className="text-white whitespace-nowrap overflow-hidden transition-all duration-300 flex-1 text-left hover:opacity-80"
              style={{
                width: isMenuExpanded || isMobile ? '150px' : '0px',
                opacity: isMenuExpanded || isMobile ? 1 : 0,
              }}
              onClick={(e) => {
                e.preventDefault();
                navigateTo('personalverleih');
                if (isMobile) setIsMobileMenuOpen(false);
              }}
            >
              IT Contracting
            </a>
            {(isMenuExpanded || isMobile) && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowPersonalverleihSubmenu(!showPersonalverleihSubmenu);
                }}
                className="flex-shrink-0 p-1 hover:bg-white/10 rounded transition-all duration-300"
              >
                <ChevronRight
                  className="w-4 h-4 text-white transition-transform duration-300"
                  style={{
                    transform: showPersonalverleihSubmenu ? 'rotate(90deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
            )}
          </div>

          {showPersonalverleihSubmenu && (isMenuExpanded || isMobile) && (
            <div className="ml-6 space-y-1 overflow-hidden transition-all duration-300">
              <a
                href="#/personalverleih/fuer-unsere-kunden"
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 text-sm hover:bg-white/5"
                style={{
                  backgroundColor:
                    currentPage === 'personalverleih/fuer-unsere-kunden'
                      ? 'rgba(146, 27, 178, 0.3)'
                      : 'transparent',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '#/personalverleih/fuer-unsere-kunden';
                  if (isMobile) setIsMobileMenuOpen(false);
                }}
              >
                <span
                  className="transition-all duration-300"
                  style={{
                    color:
                      currentPage === 'personalverleih/fuer-unsere-kunden'
                        ? '#fff'
                        : 'rgba(255, 255, 255, 0.8)',
                    fontWeight: currentPage === 'personalverleih/fuer-unsere-kunden' ? '600' : '400',
                  }}
                >
                  Für unsere Kunden
                </span>
              </a>
              <a
                href="#/personalverleih/fuer-it-spezialisten"
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 text-sm hover:bg-white/5"
                style={{
                  backgroundColor:
                    currentPage === 'personalverleih/fuer-it-spezialisten'
                      ? 'rgba(146, 27, 178, 0.3)'
                      : 'transparent',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '#/personalverleih/fuer-it-spezialisten';
                  if (isMobile) setIsMobileMenuOpen(false);
                }}
              >
                <span
                  className="transition-all duration-300"
                  style={{
                    color:
                      currentPage === 'personalverleih/fuer-it-spezialisten'
                        ? '#fff'
                        : 'rgba(255, 255, 255, 0.8)',
                    fontWeight:
                      currentPage === 'personalverleih/fuer-it-spezialisten' ? '600' : '400',
                  }}
                >
                  Für IT-Spezialisten
                </span>
              </a>
            </div>
          )}

          {/* Cybersecurity */}
          <a
            href="#/cybersecurity"
            className="flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{ backgroundColor: activeMenu === 'cybersecurity' ? '#921bb2' : 'transparent' }}
            onClick={(e) => {
              e.preventDefault();
              navigateTo('cybersecurity');
            }}
          >
            <span className="text-white text-lg font-bold flex-shrink-0 w-6 text-center">02</span>
            <span
              className="text-white whitespace-nowrap overflow-hidden transition-all duration-300"
              style={{
                width: isMenuExpanded || isMobile ? '150px' : '0px',
                opacity: isMenuExpanded || isMobile ? 1 : 0,
              }}
            >
              Cybersecurity
            </span>
          </a>

          {/* Softwareentwicklung */}
          <div
            className="w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{
              backgroundColor:
                activeMenu === 'softwareentwicklung' || currentPage === 'tool-detail'
                  ? '#921bb2'
                  : 'transparent',
            }}
          >
            <span className="text-white text-lg font-bold flex-shrink-0 w-6 text-center">03</span>
            <a
              href="#/softwareentwicklung"
              className="text-white whitespace-nowrap overflow-hidden transition-all duration-300 flex-1 text-left hover:opacity-80"
              style={{
                width: isMenuExpanded || isMobile ? '190px' : '0px',
                opacity: isMenuExpanded || isMobile ? 1 : 0,
              }}
              onClick={(e) => {
                e.preventDefault();
                navigateTo('softwareentwicklung');
                if (isMobile) setIsMobileMenuOpen(false);
              }}
            >
              Softwareentwicklung
            </a>
            {(isMenuExpanded || isMobile) && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowSoftwareSubmenu(!showSoftwareSubmenu);
                }}
                className="flex-shrink-0 p-1 hover:bg-white/10 rounded transition-all duration-300 ml-1"
              >
                <ChevronRight
                  className="w-4 h-4 text-white transition-transform duration-300"
                  style={{
                    transform: showSoftwareSubmenu ? 'rotate(90deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
            )}
          </div>

          {showSoftwareSubmenu && (isMenuExpanded || isMobile) && (
            <div className="ml-6 space-y-1 overflow-hidden transition-all duration-300">
              {toolsList.map((tool) => {
                const isActive = currentPage === 'tool-detail' && toolId === tool.id;
                return (
                  <a
                    key={tool.id}
                    href={`#/tools/${tool.id}`}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 text-sm hover:bg-white/5"
                    style={{ backgroundColor: isActive ? 'rgba(146, 27, 178, 0.3)' : 'transparent' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = `#/tools/${tool.id}`;
                      if (isMobile) setIsMobileMenuOpen(false);
                    }}
                  >
                    <span
                      className="transition-all duration-300 whitespace-nowrap"
                      style={{
                        color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.8)',
                        fontWeight: isActive ? '600' : '400',
                      }}
                    >
                      {tool.title}
                    </span>
                  </a>
                );
              })}
            </div>
          )}

          <div className="h-px bg-white/20 my-2" />

          {/* Über uns */}
          <a
            href="#/ueber-uns"
            className="flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{ backgroundColor: activeMenu === 'ueber-uns' ? '#921bb2' : 'transparent' }}
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
                width: isMenuExpanded || isMobile ? '150px' : '0px',
                opacity: isMenuExpanded || isMobile ? 1 : 0,
              }}
            >
              Über uns
            </span>
          </a>

          {/* Kontakt */}
          <a
            href="#/kontakt"
            className="flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{ backgroundColor: activeMenu === 'kontakt' ? '#921bb2' : 'transparent' }}
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
                width: isMenuExpanded || isMobile ? '150px' : '0px',
                opacity: isMenuExpanded || isMobile ? 1 : 0,
              }}
            >
              Kontakt
            </span>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className="transition-all duration-300"
        style={{ marginLeft: isMobile ? '0' : isMenuExpanded ? '300px' : '90px' }}
      >
        {renderPage()}
      </div>

      <CookieBanner menuWidth={90} isMenuExpanded={isMenuExpanded} />
    </div>
  );
}
