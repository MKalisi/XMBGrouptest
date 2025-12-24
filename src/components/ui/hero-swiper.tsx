"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Swiper: any;
  }
}

interface HeroSlide {
  number: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  gradient?: "blue" | "purple" | "pink";
}

interface HeroSwiperProps {
  slides: HeroSlide[];
  className?: string;
}

export function HeroSwiper({ slides, className = "" }: HeroSwiperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mainSwiperRef = useRef<any>(null);
  const thumbsSwiperRef = useRef<any>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    // Wait for Swiper to be loaded
    let checkInterval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    const initializeSwipers = () => {
      if (!wrapperRef.current || !window.Swiper) return;

      // Cleanup previous instances
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }

      // Define slider settings similar to the original site
      const sliderSettings = {
        speed: 1000,
        perview: 3,
        mdperview: 2,
        smperview: 1,
        autoplay: false,
        mousewheel: false,
        parallax: true
      };

      // Initialize thumbnail slider
      const thumbs = new window.Swiper(wrapperRef.current.querySelector('.gallery-thumbs'), {
        slidesPerView: 1,
        speed: sliderSettings.speed,
        loop: false,
        mousewheel: sliderSettings.mousewheel,
        autoplay: sliderSettings.autoplay,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        simulateTouch: false,
        grabCursor: true,
        slideActiveClass: 'swiper-slide-thumb-active',
        breakpoints: {
          320: {
            slidesPerView: sliderSettings.smperview
          },
          768: {
            slidesPerView: sliderSettings.mdperview
          },
          1024: {
            slidesPerView: sliderSettings.perview
          }
        },
        navigation: {
          nextEl: wrapperRef.current.querySelector('.swiper-button-next'),
          prevEl: wrapperRef.current.querySelector('.swiper-button-prev')
        }
      });

      thumbsSwiperRef.current = thumbs;

      // Initialize main slider with parallax effect and connect thumbnails
      const mainSlider = new window.Swiper(wrapperRef.current.querySelector('.gallery-top'), {
        effect: 'slide',
        slidesPerView: 1,
        spaceBetween: 0,
        speed: sliderSettings.speed,
        loop: false,
        mousewheel: sliderSettings.mousewheel,
        autoplay: sliderSettings.autoplay,
        parallax: sliderSettings.parallax,
        watchSlidesVisibility: false,
        watchSlidesProgress: false,
        simulateTouch: false,
        thumbs: {
          swiper: thumbs
        },
        on: {
          init: function(this: any) {
            // Set parallax distance based on slider width
            const swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
              const slide = swiper.slides[i];
              const bg = slide.querySelector('.bg-cover');
              if (bg) {
                const parallaxDistance = 0.75 * swiper.width;
                bg.setAttribute('data-swiper-parallax', parallaxDistance);
              }
            }
          }
        }
      });

      mainSwiperRef.current = mainSlider;

      // Store event listeners for cleanup
      const eventListeners: Array<{ element: Element; event: string; handler: EventListener }> = [];

      // Function to handle hover and click behaviour
      function setupInteractions() {
        // Remove existing event listeners
        eventListeners.forEach(({ element, event, handler }) => {
          element.removeEventListener(event, handler);
        });
        eventListeners.length = 0;

        const thumbSlides = wrapperRef.current?.querySelectorAll('.gallery-thumbs .swiper-slide');
        if (!thumbSlides) return;

        if (window.innerWidth > 1024) {
          // Hover behaviour for desktop
          thumbSlides.forEach((slide: Element, index: number) => {
            const handleMouseEnter = () => {
              // Use the index directly from forEach - this is the correct slide index
    if (mainSwiperRef.current) {
                mainSwiperRef.current.slideTo(index, sliderSettings.speed);
              }
              
              // Reset all slides to default state
              thumbSlides.forEach((s: Element) => {
                const footer = (s as HTMLElement).querySelector('.slide-item-footer') as HTMLElement;
                const indicator = (s as HTMLElement).querySelector('.slide-item-indicator') as HTMLElement;
                const number = (s as HTMLElement).querySelector('.slide-item-number') as HTMLElement;
                
                if (footer) {
                  footer.style.opacity = '0';
                  footer.style.transform = 'translateY(20px)';
                  footer.style.pointerEvents = 'none';
                }
                if (indicator) {
                  indicator.style.width = '0px';
                }
                if (number) {
                  (number.style as any).webkitTextStroke = '1px rgba(255, 255, 255, 0.4)';
                  (number.style as any).webkitTextFillColor = 'transparent';
                }
              });
              
              // Show active slide elements
              const activeFooter = (slide as HTMLElement).querySelector('.slide-item-footer') as HTMLElement;
              const activeIndicator = (slide as HTMLElement).querySelector('.slide-item-indicator') as HTMLElement;
              const activeNumber = (slide as HTMLElement).querySelector('.slide-item-number') as HTMLElement;
              
              if (activeFooter) {
                activeFooter.style.opacity = '1';
                activeFooter.style.transform = 'translateY(0)';
                activeFooter.style.pointerEvents = 'auto';
              }
              if (activeIndicator) {
                activeIndicator.style.width = '100%';
              }
              if (activeNumber) {
                // Get gradient color from data attribute
                const gradient = (slide as HTMLElement).getAttribute('data-gradient') || 'blue';
                let gradientColors = '';
                
                if (gradient === 'blue') {
                  gradientColors = 'linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)';
                } else if (gradient === 'purple') {
                  gradientColors = 'linear-gradient(135deg, #921bb2 0%, #cd20b2 50%, #362fcc 100%)';
                } else if (gradient === 'pink') {
                  gradientColors = 'linear-gradient(135deg, #cd20b2 0%, #362fcc 50%, #921bb2 100%)';
                } else {
                  gradientColors = 'linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)';
                }
                
                activeNumber.style.background = gradientColors;
                (activeNumber.style as any).webkitBackgroundClip = 'text';
                activeNumber.style.backgroundClip = 'text';
                (activeNumber.style as any).webkitTextFillColor = 'transparent';
                (activeNumber.style as any).webkitTextStroke = '1px transparent';
                activeNumber.style.color = 'transparent';
              }
            };

            slide.addEventListener('mouseenter', handleMouseEnter);
            eventListeners.push({ element: slide, event: 'mouseenter', handler: handleMouseEnter });
          });
        } else {
          // On smaller screens show all footers and indicators
          thumbSlides.forEach((slide: Element) => {
            const footer = (slide as HTMLElement).querySelector('.slide-item-footer') as HTMLElement;
            const indicator = (slide as HTMLElement).querySelector('.slide-item-indicator') as HTMLElement;
            const number = (slide as HTMLElement).querySelector('.slide-item-number') as HTMLElement;
            
            if (footer) {
              footer.style.opacity = '1';
              footer.style.transform = 'translateY(0)';
              footer.style.pointerEvents = 'auto';
            }
            if (indicator) {
              indicator.style.width = '100%';
            }
            if (number) {
              // Get gradient color from data attribute
              const gradient = (slide as HTMLElement).getAttribute('data-gradient') || 'blue';
              let gradientColors = '';
              
              if (gradient === 'blue') {
                gradientColors = 'linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)';
              } else if (gradient === 'purple') {
                gradientColors = 'linear-gradient(135deg, #921bb2 0%, #cd20b2 50%, #362fcc 100%)';
              } else if (gradient === 'pink') {
                gradientColors = 'linear-gradient(135deg, #cd20b2 0%, #362fcc 50%, #921bb2 100%)';
              } else {
                gradientColors = 'linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)';
              }
              
              number.style.background = gradientColors;
              (number.style as any).webkitBackgroundClip = 'text';
              number.style.backgroundClip = 'text';
              (number.style as any).webkitTextFillColor = 'transparent';
              (number.style as any).webkitTextStroke = '1px transparent';
              number.style.color = 'transparent';
            }
          });
          // Sync main slider when thumbnail slides
          const handleSlideChange = function() {
            mainSwiperRef.current?.slideTo(thumbs.activeIndex);
          };
          thumbs.on('slideChange', handleSlideChange);
        }
      }

      // Initial call
      setupInteractions();
      
      // Set initial active state for first slide
      const firstSlide = wrapperRef.current?.querySelector('.gallery-thumbs .swiper-slide:first-child') as HTMLElement;
      if (firstSlide && window.innerWidth > 1024) {
        const firstFooter = firstSlide.querySelector('.slide-item-footer') as HTMLElement;
        const firstIndicator = firstSlide.querySelector('.slide-item-indicator') as HTMLElement;
        const firstNumber = firstSlide.querySelector('.slide-item-number') as HTMLElement;
        
        if (firstFooter) {
          firstFooter.style.opacity = '1';
          firstFooter.style.transform = 'translateY(0)';
          firstFooter.style.pointerEvents = 'auto';
        }
        if (firstIndicator) {
          firstIndicator.style.width = '100%';
        }
        if (firstNumber) {
          // Get gradient color from data attribute or use first slide's gradient
          const gradient = firstSlide.getAttribute('data-gradient') || slides[0]?.gradient || 'blue';
          let gradientColors = '';
          
          if (gradient === 'blue') {
            gradientColors = 'linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)';
          } else if (gradient === 'purple') {
            gradientColors = 'linear-gradient(135deg, #921bb2 0%, #cd20b2 50%, #362fcc 100%)';
          } else if (gradient === 'pink') {
            gradientColors = 'linear-gradient(135deg, #cd20b2 0%, #362fcc 50%, #921bb2 100%)';
          } else {
            gradientColors = 'linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)';
          }
          
          firstNumber.style.background = gradientColors;
          (firstNumber.style as any).webkitBackgroundClip = 'text';
          firstNumber.style.backgroundClip = 'text';
          (firstNumber.style as any).webkitTextFillColor = 'transparent';
          (firstNumber.style as any).webkitTextStroke = '1px transparent';
          firstNumber.style.color = 'transparent';
        }
      }
      
      // Reapply interactions on resize
      const handleResize = () => {
        setupInteractions();
      };
      window.addEventListener('resize', handleResize);

      // Store cleanup function
      cleanupRef.current = () => {
        window.removeEventListener('resize', handleResize);
        // Remove all event listeners
        eventListeners.forEach(({ element, event, handler }) => {
          element.removeEventListener(event, handler);
        });
        if (mainSwiperRef.current) {
          mainSwiperRef.current.destroy(true, true);
          mainSwiperRef.current = null;
        }
        if (thumbsSwiperRef.current) {
          thumbsSwiperRef.current.destroy(true, true);
          thumbsSwiperRef.current = null;
        }
      };
    };

    // Check if Swiper is already loaded
    if (window.Swiper) {
      initializeSwipers();
    } else {
      // Wait for Swiper to be loaded
      checkInterval = setInterval(() => {
        if (window.Swiper) {
          clearInterval(checkInterval);
          initializeSwipers();
        }
      }, 100);

      // Timeout after 5 seconds
      timeout = setTimeout(() => {
        clearInterval(checkInterval);
        if (!window.Swiper) {
          console.error('Swiper library not loaded');
        }
      }, 5000);
    }

    // Cleanup function for the useEffect
    return () => {
      if (checkInterval) clearInterval(checkInterval);
      if (timeout) clearTimeout(timeout);
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [slides]);

  return (
    <div className={`interactive-link-slider-wrapper ${className}`} ref={wrapperRef}>
      {/* Top slider with background images */}
      <div className="swiper gallery-top">
        <div className="swiper-wrapper">
        {slides.map((slide, index) => (
            <div key={index} className="swiper-slide">
              <div 
                className="bg-cover" 
                style={{ backgroundImage: `url('${slide.image}')` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Thumbnails / content slider */}
      <div className="swiper gallery-thumbs">
        <div className="swiper-wrapper">
          {slides.map((slide, index) => (
            <div key={index} className="swiper-slide" data-gradient={slide.gradient || 'blue'}>
              <div className="relative cursor-pointer h-full flex flex-col items-center justify-end transition-all duration-500 p-8 pb-32">
                <div 
                  className="font-bold transition-all duration-500 slide-item-number" 
                  style={{
                    fontSize: '6rem',
                    lineHeight: 1,
                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    transform: 'scale(1)',
                    marginBottom: '1rem'
                  }}
                >
                  {slide.number}
                </div>
                <h2 
                  className="text-white uppercase tracking-wider text-center mb-12 transition-all duration-500 slide-item-title"
                  style={{
                    fontSize: '1rem',
                    opacity: 0.6,
                    fontWeight: 400,
                    maxWidth: '100%',
                    wordBreak: 'break-word',
                    hyphens: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                >
                    {slide.title}
                </h2>
                {slide.href && (
                  <button 
                    className="border-2 border-white text-white uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-500 px-6 py-3 slide-item-footer"
                    style={{
                      opacity: 0,
                      transform: 'translateY(20px)',
                      pointerEvents: 'none'
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = slide.href || '#';
                    }}
                  >
                    Mehr erfahren
                  </button>
                )}
                <div 
                  className="h-0.5 mt-6 transition-all duration-500 slide-item-indicator"
                  style={{
                    width: '0px',
                    backgroundColor: 'rgb(146, 27, 178)'
                  }}
                ></div>
                  </div>
                </div>
          ))}
        </div>
        {/* Optional navigation buttons (hidden on desktop, visible on tablet/mobile) */}
        <div className="swiper-button-prev" style={{ color: '#fff' }}></div>
        <div className="swiper-button-next" style={{ color: '#fff' }}></div>
      </div>
    </div>
  );
}
