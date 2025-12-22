import { useState, useEffect } from 'react';
import { useIsMobile } from './ui/use-mobile';

interface CookieBannerProps {
  menuWidth?: number;
  isMenuExpanded?: boolean;
}

export const CookieBanner = ({ menuWidth = 90, isMenuExpanded = false }: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Prüfe ob der Benutzer bereits zugestimmt hat
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Zeige den Banner nach einem kurzen Delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  // Berechne die tatsächliche Sidebar-Breite
  const sidebarWidth = isMobile ? 0 : (isMenuExpanded ? 300 : menuWidth);

  return (
    <div
      className={`fixed bottom-0 z-[9998] transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      style={{
        left: isMobile ? '0' : `${sidebarWidth}px`,
        right: '0',
      }}
    >
      <div
        className={`bg-white border-t-2 shadow-2xl ${
          isMobile ? 'p-4' : 'p-6'
        }`}
        style={{ borderColor: '#921bb2' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className={`flex ${isMobile ? 'flex-col gap-4' : 'items-center justify-between gap-6'}`}>
            {/* Text Content */}
            <div className={`flex-1 ${isMobile ? '' : 'pr-4'}`}>
              <div className="flex items-start gap-3">
                <div
                  className={`rounded-full flex items-center justify-center flex-shrink-0 ${
                    isMobile ? 'w-10 h-10' : 'w-12 h-12'
                  }`}
                  style={{ backgroundColor: '#921bb2' }}
                >
                  <svg
                    className={`text-white ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold mb-2 ${isMobile ? 'text-lg' : 'text-xl'}`} style={{ color: '#921bb2' }}>
                    Cookie-Einstellungen
                  </h3>
                  <p className={`text-black ${isMobile ? 'text-sm' : 'text-base'}`}>
                    Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                    Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu. 
                    Weitere Informationen finden Sie in unserer{' '}
                    <a
                      href="#/datenschutz"
                      className="underline font-semibold hover:opacity-80 transition-opacity"
                      style={{ color: '#921bb2' }}
                    >
                      Datenschutzerklärung
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className={`flex ${isMobile ? 'flex-col gap-3 w-full' : 'items-center gap-4 flex-shrink-0'}`}>
              <button
                onClick={handleDecline}
                className={`border-2 uppercase tracking-wider font-semibold transition-all duration-300 hover:opacity-80 ${
                  isMobile ? 'px-6 py-3 text-sm w-full' : 'px-8 py-3'
                }`}
                style={{
                  borderColor: '#921bb2',
                  color: '#921bb2',
                  backgroundColor: 'transparent',
                }}
              >
                Ablehnen
              </button>
              <button
                onClick={handleAccept}
                className={`text-white uppercase tracking-wider font-semibold transition-all duration-300 hover:opacity-90 btn-animated ${
                  isMobile ? 'px-6 py-3 text-sm w-full' : 'px-8 py-3'
                }`}
                style={{ background: 'linear-gradient(to right, #B84DD4, #E866D4)' }}
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

