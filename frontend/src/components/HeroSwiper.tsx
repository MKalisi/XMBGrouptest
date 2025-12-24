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

  const parallaxOffset = useMemo(() => {
    if (typeof window === "undefined") return 600;
    return Math.round(window.innerWidth * 0.75);
  }, []);

  // Mobile: Alle 3 Sektionen zusammen = 100vh
  if (isMobile) {
    return (
      <div className="relative w-full h-screen">
        {/* Logo oben rechts */}
        {!showIntro && (
          <div className="absolute top-16 right-4 z-50">
            <img
              src="/Logo/logotransp_big.png"
              alt="XMB Group AG Logo"
              className="h-12 w-auto drop-shadow-lg"
            />
          </div>
        )}

        {/* Alle 3 Sektionen - je 1/3 der Höhe */}
        <div className="flex flex-col h-full">
          {sections.map((section) => (
            <div
              key={section.id}
              className="relative flex-1 flex items-center"
            >
              {/* Hintergrundbild pro Sektion */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${section.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 px-6 w-full">
                <div
                  className="font-bold mb-1"
                  style={{
                    fontSize: "3.5rem",
                    lineHeight: "1",
                    WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  {section.number}
                </div>
                <h2 
                  className="text-white uppercase tracking-wider text-sm font-semibold mb-3"
                  style={{
                    maxWidth: "200px",
                    wordBreak: "break-word",
                    hyphens: "auto",
                  }}
                >
                  {section.title}
                </h2>
                <button
                  onClick={() => onNavigate(section.route)}
                  className="border border-white text-white uppercase tracking-wider text-xs px-4 py-2 hover:bg-white hover:text-black transition-colors rounded-full"
                >
                  Mehr erfahren
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }}>
            <span className="text-white/80 text-xs uppercase tracking-wider font-semibold">Scroll</span>
            <ChevronDown className="w-5 h-5 text-white/80 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  // Desktop: Swiper wie bisher
  return (
    <div className="relative w-full overflow-hidden h-screen">
      {/* MAIN / Background Swiper */}
      <Swiper
        modules={[Thumbs, Parallax]}
        className="absolute inset-0 hero-swiper-main"
        speed={900}
        parallax
        allowTouchMove={true}
        slidesPerView={1}
        spaceBetween={0}
        onSwiper={setMainSwiper}
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {sections.map((section) => (
          <SwiperSlide key={section.id}>
            <div className="relative w-full h-full overflow-hidden">
              <div
                className="absolute inset-0"
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
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content / Thumbs */}
      <div className="relative z-10 flex h-full">
        <div className="w-full flex h-full">
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            className="w-full h-full"
            slidesPerView={3}
            watchSlidesProgress
            allowTouchMove={false}
          >
            {sections.map((section, index) => {
              const isActive = index === activeIndex;

              return (
                <SwiperSlide key={`thumb-${section.id}`}>
                  <div
                    className="relative cursor-pointer h-full flex flex-col items-center justify-end transition-all duration-500 p-8 pb-32"
                    onClick={() => onNavigate(section.route)}
                    onMouseEnter={() => {
                      if (mainSwiper && !mainSwiper.destroyed) {
                        mainSwiper.slideTo(index);
                        }
                      }}                      
                     >
                    <div
                      className="font-bold transition-all duration-500"
                      style={{
                        fontSize: isLargeScreen ? "8rem" : "6rem",
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

                    <h2
                      className="text-white uppercase tracking-wider text-center mb-4 transition-all duration-500"
                      style={{
                        fontSize: isLargeScreen ? "1.25rem" : "1rem",
                        opacity: isActive ? 1 : 0.6,
                        fontWeight: isActive ? 600 : 400,
                        maxWidth: "100%",
                        wordBreak: "break-word",
                        hyphens: "auto",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      {section.title}
                    </h2>

                    <button
                      className="border-2 border-white text-white uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-500 px-6 py-3"
                      style={{
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "translateY(0)" : "translateY(20px)",
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                    >
                      Mehr erfahren
                    </button>

                    <div
                      className="h-0.5 mt-6 transition-all duration-500"
                      style={{
                        width: isActive ? "60px" : "0px",
                        backgroundColor: section.color,
                      }}
                    />
                  </div>

                  {index < sections.length - 1 && (
                    <div className="absolute top-0 right-0 h-full w-px bg-white/20" />
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* Logo */}
      {!showIntro && (
        <div className={`absolute z-[100] top-8 right-8 ${isLargeScreen ? "2xl:top-12 2xl:right-12" : ""}`}>
          <img
            src="/Logo/logotransp_big.png"
            alt="XMB Group AG Logo"
            className={`h-36 ${isLargeScreen ? "2xl:h-44" : ""} w-auto drop-shadow-lg`}
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
