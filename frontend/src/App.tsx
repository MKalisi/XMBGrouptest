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
      <section className={`bg-white ${isMobile ? 'py-12' : 'py-24'}`} id="personalverleih">
        <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16">
          <div className={`grid grid-cols-1 lg:grid-cols-2 items-stretch ${isMobile ? 'gap-8' : 'gap-16'}`}>
            <div className="relative overflow-hidden rounded-lg h-full">
              <ImageWithFallback
                src="/it-contracting-section.jpg"
                alt="IT Contracting"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="uppercase tracking-wider text-sm 2xl:text-base" style={{ color: '#921bb2' }}>
                Professionelles IT Contracting
              </p>

              <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-4xl xl:text-5xl'} 2xl:text-6xl ${screenWidth >= 1920 ? 'whitespace-nowrap' : ''} relative group`}>
                <span className="relative z-10 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent tracking-tight">
                  Qualifiziertes Personal für Ihr Projekt
                </span>
                <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transition-all duration-500 group-hover:w-24"></span>
              </h2>

              <p className="text-lg 2xl:text-2xl">
                XMB Group AG begleitet Ihre Projekte und stellt Ihnen sorgfältig ausgewählte IT-Fachkräfte zur Verfügung – präzise abgestimmt auf Ihre Anforderungen.
              </p>

              <p className="text-black text-lg 2xl:text-2xl">
                Wir vermitteln erfahrene IT-Spezialisten, Entwickler und Projektmanager, die Ihre Teams zuverlässig verstärken und Verantwortung übernehmen. Ob kurzfristige Unterstützung oder gezielte Expertise für ein wichtiges Projekt – wir sorgen dafür, dass Sie die richtigen Fachkräfte erhalten, um Ihre Ziele sicher zu erreichen.
              </p>

              <p className="text-black font-semibold text-lg 2xl:text-2xl">Unser Ansatz ist klar:</p>

              <p className="text-black text-lg 2xl:text-2xl">
                Wir analysieren den Bedarf, wählen passende Profile aus und kümmern uns um die gesamte organisatorische Abwicklung. So können Sie sich auf das Wesentliche konzentrieren, während wir die passende Verstärkung bereitstellen.
              </p>

              <p className="text-black text-lg 2xl:text-2xl">
                Gemeinsam sorgen wir dafür, dass Ihre Projekte erfolgreich vorankommen – strukturiert, professionell und mit verlässlicher Qualität.
              </p>

              <button
                onClick={() => navigateTo('personalverleih')}
                className={`mt-4 text-white uppercase tracking-wider rounded-full transition-all duration-300 hover:opacity-90 ${
                  isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4'
                } 2xl:px-10 2xl:py-5 2xl:text-lg`}
                style={{ backgroundColor: '#921bb2' }}
              >
                Mehr über IT Contracting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section className={`${isMobile ? 'py-12' : 'py-24'}`} style={{ backgroundColor: '#921bb2' }} id="cybersecurity">
        <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16">
          <div className={`grid grid-cols-1 lg:grid-cols-2 ${isMobile ? 'gap-8' : 'gap-16'}`}>
            <div className="text-white space-y-6">
              <p className="uppercase tracking-wider text-sm opacity-90 2xl:text-base">Das XMB Angebot</p>

              <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-4xl xl:text-5xl'} 2xl:text-6xl`}>
                IT-Beratung und<br />Begleitung.
              </h2>

              <p className="text-white/90 leading-relaxed text-lg 2xl:text-2xl">
                XMB begleitet Unternehmen in digitalen Transformationsprozessen. Mit der gebündelten
                Expertise und Erfahrung unserer Consultants steuern wir die strategisch entscheidenden
                Faktoren Ihrer IT-Vorhaben. Ob klassisch, agil, hybrid oder nach einem gewünschten Ansatz –
                XMB liefert die richtigen Impulse und Vorhaben.
              </p>

              <button
                onClick={() => navigateTo('cybersecurity')}
                className={`mt-6 bg-transparent border-2 border-white text-white uppercase tracking-wider rounded-full font-semibold btn-animated hover:bg-white hover:text-[#921bb2] ${
                  isMobile ? 'px-6 py-3 text-base' : 'px-10 py-5 text-lg'
                } 2xl:px-12 2xl:py-6 2xl:text-xl`}
              >
                Zum Angebot
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className={`group relative bg-white rounded-3xl border-2 border-slate-200 hover:border-[#921bb2] transition-all duration-500 shadow-sm hover:shadow-xl card-animated overflow-hidden ${
                isMobile ? 'p-5' : 'p-8'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#921bb2]/5 to-[#cd20b2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`relative z-10 flex items-start ${isMobile ? 'gap-4' : 'gap-6'}`}>
                  <div className={`rounded-2xl bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                    isMobile ? 'w-14 h-14' : 'w-20 h-20'
                  }`}>
                    <Search className={`text-white ${isMobile ? 'w-7 h-7' : 'w-10 h-10'}`} />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-3 text-slate-900 group-hover:text-[#921bb2] transition-colors duration-300 ${
                      isMobile ? 'text-lg' : 'text-2xl'
                    } 2xl:text-3xl`}>Business Consulting</h3>
                    <p className={`text-black group-hover:text-slate-700 transition-colors duration-300 ${
                      isMobile ? 'text-sm' : 'text-base'
                    } 2xl:text-xl`}>
                      Wir sind Ihre Spezialist:innen in der Business Analyse und im Product Management.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
              </div>

              <div className={`group relative bg-white rounded-3xl border-2 border-slate-200 hover:border-[#921bb2] transition-all duration-500 shadow-sm hover:shadow-xl card-animated overflow-hidden ${
                isMobile ? 'p-5' : 'p-8'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#921bb2]/5 to-[#cd20b2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`relative z-10 flex items-start ${isMobile ? 'gap-4' : 'gap-6'}`}>
                  <div className={`rounded-2xl bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                    isMobile ? 'w-14 h-14' : 'w-20 h-20'
                  }`}>
                    <Settings className={`text-white ${isMobile ? 'w-7 h-7' : 'w-10 h-10'}`} />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-3 text-slate-900 group-hover:text-[#921bb2] transition-colors duration-300 ${
                      isMobile ? 'text-lg' : 'text-2xl'
                    } 2xl:text-3xl`}>Projekt- und Agile Consulting</h3>
                    <p className={`text-black group-hover:text-slate-700 transition-colors duration-300 ${
                      isMobile ? 'text-sm' : 'text-base'
                    } 2xl:text-xl`}>
                      Wir begleiten Sie als Scrum Master, Release Train Engineer, Projekt- und Programmleiter:innen.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
              </div>

              <div className={`group relative bg-white rounded-3xl border-2 border-slate-200 hover:border-[#921bb2] transition-all duration-500 shadow-sm hover:shadow-xl card-animated overflow-hidden ${
                isMobile ? 'p-5' : 'p-8'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#921bb2]/5 to-[#cd20b2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`relative z-10 flex items-start ${isMobile ? 'gap-4' : 'gap-6'}`}>
                  <div className={`rounded-2xl bg-gradient-to-br from-[#cd20b2] to-[#921bb2] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                    isMobile ? 'w-14 h-14' : 'w-20 h-20'
                  }`}>
                    <Network className={`text-white ${isMobile ? 'w-7 h-7' : 'w-10 h-10'}`} />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-3 text-slate-900 group-hover:text-[#921bb2] transition-colors duration-300 ${
                      isMobile ? 'text-lg' : 'text-2xl'
                    } 2xl:text-3xl`}>Technologie Consulting</h3>
                    <p className={`text-black group-hover:text-slate-700 transition-colors duration-300 ${
                      isMobile ? 'text-sm' : 'text-base'
                    } 2xl:text-xl`}>
                      Wir setzen unsere Expertise als IT-Architekten, Requirements und Software Engineer und in der Cloud-Beratung für Sie ein.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
              </div>

              <div className={`group relative bg-white rounded-3xl border-2 border-slate-200 hover:border-[#921bb2] transition-all duration-500 shadow-sm hover:shadow-xl card-animated overflow-hidden ${
                isMobile ? 'p-5' : 'p-8'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#921bb2]/5 to-[#cd20b2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`relative z-10 flex items-start ${isMobile ? 'gap-4' : 'gap-6'}`}>
                  <div className={`rounded-2xl bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                    isMobile ? 'w-14 h-14' : 'w-20 h-20'
                  }`}>
                    <BarChart3 className={`text-white ${isMobile ? 'w-7 h-7' : 'w-10 h-10'}`} />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-3 text-slate-900 group-hover:text-[#921bb2] transition-colors duration-300 ${
                      isMobile ? 'text-lg' : 'text-2xl'
                    } 2xl:text-3xl`}>Management Consulting</h3>
                    <p className={`text-black group-hover:text-slate-700 transition-colors duration-300 ${
                      isMobile ? 'text-sm' : 'text-base'
                    } 2xl:text-xl`}>
                      Wir beraten Sie auf strategischer Ebene in den Themen Transformation, Digitalisierung und Sourcing.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Softwareentwicklung Section */}
      <section className={`bg-white ${isMobile ? 'py-12' : 'py-24'}`} id="softwareentwicklung">
        <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16">
          <div className={`grid grid-cols-1 lg:grid-cols-2 ${isMobile ? 'gap-8' : 'gap-16'}`}>
            <div className="space-y-6">
              <p className="uppercase tracking-wider text-sm 2xl:text-base" style={{ color: '#cd20b2' }}>
                Unsere Leistung - Für Sie
              </p>

              <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-4xl xl:text-5xl'} 2xl:text-6xl relative group`}>
                <span className="bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] bg-clip-text text-transparent tracking-tight">
                  Solide Softwareentwicklung für eine stabile digitale Zukunft
                </span>
                <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#921bb2] via-[#cd20b2] to-[#921bb2] transition-all duration-500 group-hover:w-24"></span>
              </h2>

              <p className="text-lg 2xl:text-2xl">
                Wir entwickeln Software, die sich an bewährten Abläufen orientiert und Unternehmen zuverlässig unterstützt. Unsere Lösungen fügen sich sauber in bestehende Strukturen ein, schaffen klare Prozesse und ermöglichen es, tägliche Aufgaben effizienter und transparenter zu gestalten.
              </p>

              <p className="text-black leading-relaxed text-lg 2xl:text-2xl">
                Mit technischer Kompetenz und einem tiefen Verständnis für gewachsene Systeme sorgen wir dafür, dass Digitalisierung nicht zum Umbruch wird, sondern zur nachhaltigen Weiterentwicklung Ihrer Arbeitswelt.
              </p>

              <button
                onClick={() => navigateTo('softwareentwicklung')}
                className={`mt-6 text-white uppercase tracking-wider rounded-full font-semibold btn-animated ${
                  isMobile ? 'px-6 py-3 text-base' : 'px-10 py-5 text-lg'
                } 2xl:px-12 2xl:py-6 2xl:text-xl`}
                style={{ backgroundColor: '#cd20b2' }}
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
                  className="group relative bg-white border-2 border-slate-200 hover:border-[#cd20b2] rounded-3xl p-6 flex items-start justify-between card-animated cursor-pointer overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl 2xl:p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#cd20b2]/5 to-[#921bb2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 pr-6 flex-1">
                    <p className="text-xl font-bold group-hover:text-[#cd20b2] transition-colors duration-300 2xl:text-2xl" style={{ color: tool.color }}>
                      {tool.title}
                    </p>
                    <p className="text-base text-black/70 mt-2 group-hover:text-slate-700 transition-colors duration-300 2xl:text-xl">
                      {tool.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-black/50 group-hover:text-[#cd20b2] transition-colors mt-1 flex-shrink-0 relative z-10 2xl:w-6 2xl:h-6" />

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#cd20b2] via-[#921bb2] to-[#cd20b2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${isMobile ? 'py-12' : 'py-24'}`} style={{ backgroundColor: '#921bb2' }} id="kontakt">
        <div className="w-full px-6 md:px-8 lg:px-12 xl:px-16">
          <div className={`grid grid-cols-1 lg:grid-cols-2 items-center ${isMobile ? 'gap-8' : 'gap-16'}`}>
            <div className="text-white space-y-6">
              <p className="uppercase tracking-wider text-sm opacity-90 2xl:text-base">Kontakt</p>

              <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-4xl xl:text-5xl'} 2xl:text-6xl`}>
                Bereit um Ihr<br />nächstes Vorhaben gemeinsam anzugehen?
              </h2>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold 2xl:text-3xl">Schreiben Sie uns</h3>
                <p className="text-white/90 leading-relaxed text-lg 2xl:text-2xl">
                  Am einfachsten erreichen Sie uns über dieses Formular oder per E-Mail. So können wir Ihr Anliegen direkt aufnehmen und Ihnen schnell und gezielt weiterhelfen.
                  Wenn Ihnen ein persönliches Gespräch lieber ist, sind wir selbstverständlich auch telefonisch für Sie da.
                </p>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 2xl:w-14 2xl:h-14">
                    <svg className="w-6 h-6 text-white 2xl:w-7 2xl:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 2xl:text-base">E-Mail</p>
                    <p className="text-lg 2xl:text-xl">info@xmb-group.ch</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 2xl:w-14 2xl:h-14">
                    <svg className="w-6 h-6 text-white 2xl:w-7 2xl:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 2xl:text-base">Telefon</p>
                    <p className="text-lg 2xl:text-xl">+41 44 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 2xl:w-14 2xl:h-14">
                    <svg className="w-6 h-6 text-white 2xl:w-7 2xl:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 2xl:text-base">Adresse</p>
                    <p className="text-lg 2xl:text-xl">Eichengasse 3<br />4702 Oensingen</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigateTo('kontakt')}
                className={`mt-6 bg-white text-[#921bb2] uppercase tracking-wider rounded-full font-semibold btn-animated ${
                  isMobile ? 'px-6 py-3 text-base' : 'px-10 py-5 text-lg'
                } 2xl:px-12 2xl:py-6 2xl:text-xl`}
              >
                Zur Kontaktseite
              </button>
            </div>

            <div className={`bg-white rounded-3xl shadow-xl border border-slate-200/50 ${isMobile ? 'p-6' : 'p-8 lg:p-10'}`}>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 2xl:text-base">
                      Name <span className="text-[#921bb2]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 placeholder:text-slate-400 transition-all focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20 focus:scale-[1.02] 2xl:px-6 2xl:py-5 2xl:text-xl"
                      placeholder="Vor- und Nachname"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 2xl:text-base">
                      E-Mail <span className="text-[#921bb2]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 placeholder:text-slate-400 transition-all focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20 focus:scale-[1.02] 2xl:px-6 2xl:py-5 2xl:text-xl"
                      placeholder="name@firma.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 2xl:text-base">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 placeholder:text-slate-400 transition-all focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20 focus:scale-[1.02] 2xl:px-6 2xl:py-5 2xl:text-xl"
                      placeholder="+41 XX XXX XX XX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 2xl:text-base">
                      Firma
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 placeholder:text-slate-400 transition-all focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20 focus:scale-[1.02] 2xl:px-6 2xl:py-5 2xl:text-xl"
                      placeholder="Unternehmensname"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700 2xl:text-base">
                    Betreff <span className="text-[#921bb2]">*</span>
                  </label>
                  <select
                    required
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 transition-all focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20 focus:scale-[1.02] 2xl:px-6 2xl:py-5 2xl:text-xl"
                  >
                    <option value="">Bitte wählen Sie einen Betreff</option>
                    <option>Anfrage</option>
                    <option>Projektstart</option>
                    <option>Partnerschaft</option>
                    <option>IT Contracting</option>
                    <option>Cybersecurity</option>
                    <option>Softwareentwicklung</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700 2xl:text-base">
                    Nachricht <span className="text-[#921bb2]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 placeholder:text-slate-400 transition-all resize-none focus:border-[#921bb2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#921bb2]/20 focus:scale-[1.02] 2xl:px-6 2xl:py-5 2xl:text-xl"
                    placeholder="Beschreiben Sie Ihr Anliegen oder Projekt..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-[#921bb2] to-[#cd20b2] px-8 py-5 text-white font-semibold text-xl shadow-lg hover:shadow-xl btn-animated 2xl:px-10 2xl:py-6 2xl:text-2xl"
                >
                  Nachricht senden
                </button>

                <p className="text-xs text-slate-500 text-center 2xl:text-sm">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
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
            style={{ backgroundColor: activeMenu === 'home' ? '#cd20b2' : 'transparent' }}
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
                  ? '#cd20b2'
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
                    style={{ backgroundColor: isActive ? 'rgba(205, 32, 178, 0.3)' : 'transparent' }}
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
