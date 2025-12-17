import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Parallax } from "swiper/modules";
import { ChevronDown } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/thumbs";

type Section = {
  id: number;
  number: string;
  title: string;
  image: string;
  color: string;
  route: string;
};

export function HeroSwiper({
  sections,
  isMobile,
  isLargeScreen,
  showIntro,
  onNavigate,
}: {
  sections: Section[];
  isMobile: boolean;
  isLargeScreen: boolean;
  showIntro: boolean;
  onNavigate: (route: string) => void;
}) {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Parallax-Wert ähnlich wie bei Imagemedia (0.75 * Breite)
  const parallaxOffset = useMemo(() => {
    if (typeof window === "undefined") return 600;
    return Math.round(window.innerWidth * 0.75);
  }, []);

  return (
    <div className={`relative w-full overflow-hidden ${isMobile ? "min-h-screen" : "h-screen"}`}>
      {/* MAIN / Background Swiper */}
      <Swiper
        modules={[Thumbs, Parallax]}
        className="absolute inset-0 bg-black"
        speed={900}
        parallax
        allowTouchMove={true} // ✅ damit Wischen geht
        onSwiper={setMainSwiper}
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
        thumbs={{
          // wichtig: Swiper kann "destroyed" sein, deshalb absichern
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {sections.map((section) => (
          <SwiperSlide key={section.id}>
            <div className="relative w-full h-full bg-black overflow-hidden">
              {/* Hintergrundbild */}
              <div
                className="absolute top-0 bottom-0"
                data-swiper-parallax={`-${parallaxOffset}`}
                style={{
                    left: "-10%",
                    width: "120%",
                    backgroundImage: `url(${section.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "scale(1.05) translateZ(0)",
                    willChange: "transform",
  }}
/>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content / “Thumbs” unten */}
      <div className="relative z-10 flex h-full">
        {/* damit du weiterhin deine 3 Spalten-Optik hast */}
        <div className={`w-full ${isMobile ? "flex flex-col" : "flex"} h-full`}>
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            className={`${isMobile ? "w-full h-full" : "w-full h-full"}`}
            slidesPerView={isMobile ? 1 : 3}
            watchSlidesProgress
            allowTouchMove={isMobile} // Desktop: du willst eher hover/click, Mobile: wischen ok
          >
            {sections.map((section, index) => {
              const isActive = index === activeIndex;

              return (
                <SwiperSlide key={`thumb-${section.id}`}>
                  <div
                    className={`relative cursor-pointer h-full flex flex-col items-center justify-end transition-all duration-500 ${
                      isMobile ? "p-6 justify-center" : "p-8 pb-32"
                    }`}
                    onClick={() => onNavigate(section.route)}
                    onMouseEnter={() => {
                        if (!isMobile && mainSwiper && !mainSwiper.destroyed) {
                          mainSwiper.slideTo(index);      // ✅ Hauptslider bewegen
                        }
                      }}                      
                     >
                    {/* Number */}
                    <div
                      className="font-bold transition-all duration-500"
                      style={{
                        fontSize: isMobile ? "4rem" : isLargeScreen ? "8rem" : "6rem",
                        lineHeight: "1",
                        WebkitTextStroke: isActive ? "2px white" : "1px rgba(255,255,255,0.4)",
                        WebkitTextFillColor: isActive ? "rgba(255,255,255,0.15)" : "transparent",
                        color: "transparent",
                        transform: isActive ? "scale(1.1)" : "scale(1)",
                        marginBottom: "1rem",
                      }}
                    >
                      {section.number}
                    </div>

                    {/* Title */}
                    <h2
                      className="text-white uppercase tracking-wider text-center mb-4 transition-all duration-500"
                      style={{
                        fontSize: isMobile ? "1rem" : isLargeScreen ? "1.25rem" : "1rem",
                        opacity: isActive ? 1 : 0.6,
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      {section.title}
                    </h2>

                    {/* Button */}
                    <button
                      className="border-2 border-white text-white uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-500 px-6 py-3"
                      style={{
                        opacity: isMobile ? 1 : isActive ? 1 : 0,
                        transform: isMobile ? "translateY(0)" : isActive ? "translateY(0)" : "translateY(20px)",
                        pointerEvents: isMobile ? "auto" : isActive ? "auto" : "none",
                      }}
                    >
                      Mehr erfahren
                    </button>

                    {/* Active line */}
                    <div
                      className="h-0.5 mt-6 transition-all duration-500"
                      style={{
                        width: isActive ? "60px" : "0px",
                        backgroundColor: section.color,
                      }}
                    />
                  </div>

                  {/* Divider (nur Desktop) */}
                  {!isMobile && index < sections.length - 1 && (
                    <div className="absolute top-0 right-0 h-full w-px bg-white/20" />
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* optional: Logo erst nach Intro */}
      {!showIntro && (
        <div className={`absolute z-[100] ${isMobile ? "top-20 right-4" : "top-8 right-8"} ${isLargeScreen ? "2xl:top-12 2xl:right-12" : ""}`}>
          <img
            src="/Logo/logotransp_big.png"
            alt="XMB Group AG Logo"
            className={`${isMobile ? "h-20" : "h-36"} ${isLargeScreen ? "2xl:h-44" : ""} w-auto drop-shadow-lg`}
          />
        </div>
      )}

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
  );
}
