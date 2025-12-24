"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Context für Sidebar-Breite
const SidebarContext = createContext<{ sidebarWidth: number }>({ sidebarWidth: 90 });

export const useSidebarWidth = () => useContext(SidebarContext);

// Platzhalter für Logo-Images - bitte durch echte Logos ersetzen
const logoImage = "/logo-full.png"; // Logo für erweiterte Ansicht
const logoImageLandingpage = "/logo-icon.png"; // Logo für minimierte Ansicht

// Tools-Liste für Softwareentwicklung Submenü
const toolsList = [
  { id: "tool-1", title: "Tool 1" },
  { id: "tool-2", title: "Tool 2" },
  { id: "tool-3", title: "Tool 3" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [showPersonalverleihSubmenu, setShowPersonalverleihSubmenu] = useState(false);
  const [showSoftwareSubmenu, setShowSoftwareSubmenu] = useState(false);

  // Mobile Detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Bestimme aktives Menü basierend auf pathname
  const activeMenu = pathname === "/" ? "home" 
    : pathname.startsWith("/services/contracting") ? "contracting"
    : pathname.startsWith("/services/security") ? "security"
    : pathname.startsWith("/services/software") ? "software"
    : pathname.startsWith("/company") ? "company"
    : pathname.startsWith("/contact") ? "contact"
    : "";

  // Öffne Submenüs wenn auf entsprechender Seite
  useEffect(() => {
    if (pathname.startsWith("/services/contracting")) {
      setShowPersonalverleihSubmenu(true);
    }
    if (pathname.startsWith("/services/software")) {
      setShowSoftwareSubmenu(true);
    }
  }, [pathname]);

  const sidebarWidth = isMobile ? 0 : (isMenuExpanded ? 300 : 90);

  // Setze CSS-Variable für Sidebar-Breite
  useEffect(() => {
    document.documentElement.style.setProperty("--sidebar-width", `${sidebarWidth}px`);
  }, [sidebarWidth]);

  return (
    <SidebarContext.Provider value={{ sidebarWidth }}>
      <>
      {/* Mobile Hamburger Button */}
      {isMobile && (
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-[100] bg-white backdrop-blur-sm p-3 rounded-lg text-black hover:bg-gray-100 transition-all shadow-lg"
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
        className={`fixed left-0 top-0 h-screen bg-white backdrop-blur-sm z-50 flex flex-col py-8 transition-all duration-300 shadow-lg ${
          isMobile 
            ? (isMobileMenuOpen ? "translate-x-0" : "-translate-x-full")
            : "translate-x-0"
        }`}
        style={{
          width: isMobile ? "280px" : isMenuExpanded ? "300px" : "90px",
        }}
        onMouseEnter={() => !isMobile && setIsMenuExpanded(true)}
        onMouseLeave={() => !isMobile && setIsMenuExpanded(false)}
      >
        <div className={`flex items-center justify-center mb-8 ${isMobile ? "px-4 pt-16" : "px-4"}`}>
          <img
            src={isMobile || isMenuExpanded ? logoImage : logoImageLandingpage}
            alt="XMB Group AG"
            className="w-auto object-contain transition-all duration-300"
            style={{
              height: isMobile ? "100px" : isMenuExpanded ? "144px" : "200px",
              opacity: isMobile ? 1 : isMenuExpanded ? 1 : 0.7,
              transform: isMenuExpanded ? "scale(1)" : "scale(1)",
            }}
            onError={(e) => {
              // Fallback wenn Logo nicht gefunden wird
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>

        <div className="flex flex-col gap-2 px-4">
          {/* Home */}
          <Link
            href="/"
            className="flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300 group"
            style={{ 
              background: activeMenu === "home" 
                ? "linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)" 
                : "transparent" 
            }}
            onClick={() => {
              if (isMobile) setIsMobileMenuOpen(false);
            }}
          >
            <svg className={`w-6 h-6 flex-shrink-0 ${activeMenu === "home" ? "text-white" : "text-black"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span
              className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${activeMenu === "home" ? "text-white" : "text-black"}`}
              style={{
                width: isMenuExpanded || isMobile ? "150px" : "0px",
                opacity: isMenuExpanded || isMobile ? 1 : 0,
              }}
            >
              Home
            </span>
          </Link>

          <div className="h-px bg-black/20 my-2" />

          {/* IT Contracting */}
          <div
            className="w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{
              background:
                activeMenu === "contracting"
                  ? "linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)"
                  : "transparent",
            }}
          >
            <span className={`text-lg font-bold flex-shrink-0 w-6 text-center ${activeMenu === "contracting" ? "text-white" : "text-black"}`}>01</span>
            <Link
              href="/services/contracting"
              className={`whitespace-nowrap overflow-hidden transition-all duration-300 flex-1 text-left hover:opacity-80 ${activeMenu === "contracting" ? "text-white" : "text-black"}`}
              style={{
                width: isMenuExpanded || isMobile ? "150px" : "0px",
                opacity: isMenuExpanded || isMobile ? 1 : 0,
              }}
              onClick={() => {
                if (isMobile) setIsMobileMenuOpen(false);
              }}
            >
              IT Contracting
            </Link>
            {(isMenuExpanded || isMobile) && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowPersonalverleihSubmenu(!showPersonalverleihSubmenu);
                }}
                className="flex-shrink-0 p-1 hover:bg-black/10 rounded transition-all duration-300"
              >
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${activeMenu === "contracting" ? "text-white" : "text-black"}`}
                  style={{
                    transform: showPersonalverleihSubmenu ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                />
              </button>
            )}
          </div>

          {showPersonalverleihSubmenu && (isMenuExpanded || isMobile) && (
            <div className="ml-6 space-y-1 overflow-hidden transition-all duration-300">
              <Link
                href="/services/contracting"
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 text-sm hover:bg-black/5"
                style={{
                  background:
                    pathname === "/services/contracting"
                      ? "linear-gradient(135deg, rgba(54, 47, 204, 0.2) 0%, rgba(146, 27, 178, 0.2) 50%, rgba(205, 32, 178, 0.2) 100%)"
                      : "transparent",
                }}
                onClick={() => {
                  if (isMobile) setIsMobileMenuOpen(false);
                }}
              >
                    <span
                      className="transition-all duration-300"
                      style={{
                        color:
                          pathname === "/services/contracting"
                            ? "#921bb2"
                            : "rgba(0, 0, 0, 0.8)",
                        fontWeight: pathname === "/services/contracting" ? "600" : "400",
                        background: pathname === "/services/contracting"
                          ? "linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)"
                          : "none",
                        WebkitBackgroundClip: pathname === "/services/contracting" ? "text" : "unset",
                        WebkitTextFillColor: pathname === "/services/contracting" ? "transparent" : "unset",
                        backgroundClip: pathname === "/services/contracting" ? "text" : "unset",
                      }}
                    >
                      Für unsere Kunden
                    </span>
              </Link>
            </div>
          )}

          {/* Cybersecurity */}
          <Link
            href="/services/security"
            className="flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{ 
              background: activeMenu === "security" 
                ? "linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)" 
                : "transparent" 
            }}
            onClick={() => {
              if (isMobile) setIsMobileMenuOpen(false);
            }}
          >
            <span className={`text-lg font-bold flex-shrink-0 w-6 text-center ${activeMenu === "security" ? "text-white" : "text-black"}`}>02</span>
            <span
              className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${activeMenu === "security" ? "text-white" : "text-black"}`}
              style={{
                width: isMenuExpanded || isMobile ? "150px" : "0px",
                opacity: isMenuExpanded || isMobile ? 1 : 0,
              }}
            >
              Cybersecurity
            </span>
          </Link>

          {/* Softwareentwicklung */}
          <div
            className="w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{
              background:
                activeMenu === "software"
                  ? "linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)"
                  : "transparent",
            }}
          >
            <span className={`text-lg font-bold flex-shrink-0 w-6 text-center ${activeMenu === "software" ? "text-white" : "text-black"}`}>03</span>
            <Link
              href="/services/software"
              className={`whitespace-nowrap overflow-hidden transition-all duration-300 flex-1 text-left hover:opacity-80 ${activeMenu === "software" ? "text-white" : "text-black"}`}
              style={{
                width: isMenuExpanded || isMobile ? "190px" : "0px",
                opacity: isMenuExpanded || isMobile ? 1 : 0,
              }}
              onClick={() => {
                if (isMobile) setIsMobileMenuOpen(false);
              }}
            >
              Softwareentwicklung
            </Link>
            {(isMenuExpanded || isMobile) && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowSoftwareSubmenu(!showSoftwareSubmenu);
                }}
                className="flex-shrink-0 p-1 hover:bg-black/10 rounded transition-all duration-300 ml-1"
              >
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-300 ${activeMenu === "software" ? "text-white" : "text-black"}`}
                  style={{
                    transform: showSoftwareSubmenu ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                />
              </button>
            )}
          </div>

          {showSoftwareSubmenu && (isMenuExpanded || isMobile) && (
            <div className="ml-6 space-y-1 overflow-hidden transition-all duration-300">
              <Link
                href="/services/software"
                className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 text-sm hover:bg-black/5"
                style={{ 
                  background: pathname === "/services/software"
                    ? "linear-gradient(135deg, rgba(54, 47, 204, 0.2) 0%, rgba(146, 27, 178, 0.2) 50%, rgba(205, 32, 178, 0.2) 100%)" 
                    : "transparent" 
                }}
                onClick={() => {
                  if (isMobile) setIsMobileMenuOpen(false);
                }}
              >
                <span
                  className="transition-all duration-300 whitespace-nowrap"
                  style={{
                    color: pathname === "/services/software" ? "#921bb2" : "rgba(0, 0, 0, 0.8)",
                    fontWeight: pathname === "/services/software" ? "600" : "400",
                    background: pathname === "/services/software"
                      ? "linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)"
                      : "none",
                    WebkitBackgroundClip: pathname === "/services/software" ? "text" : "unset",
                    WebkitTextFillColor: pathname === "/services/software" ? "transparent" : "unset",
                    backgroundClip: pathname === "/services/software" ? "text" : "unset",
                  }}
                >
                  Software Development
                </span>
              </Link>
            </div>
          )}

          <div className="h-px bg-black/20 my-2" />

          {/* Über uns */}
          <Link
            href="/company"
            className="flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{ 
              background: activeMenu === "company" 
                ? "linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)" 
                : "transparent" 
            }}
            onClick={() => {
              if (isMobile) setIsMobileMenuOpen(false);
            }}
          >
            <svg className={`w-6 h-6 flex-shrink-0 ${activeMenu === "company" ? "text-white" : "text-black"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span
              className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${activeMenu === "company" ? "text-white" : "text-black"}`}
              style={{
                width: isMenuExpanded || isMobile ? "150px" : "0px",
                opacity: isMenuExpanded || isMobile ? 1 : 0,
              }}
            >
              Über uns
            </span>
          </Link>

          {/* Kontakt */}
          <Link
            href="/contact"
            className="flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300"
            style={{ 
              background: activeMenu === "contact" 
                ? "linear-gradient(135deg, #362fcc 0%, #921bb2 50%, #cd20b2 100%)" 
                : "transparent" 
            }}
            onClick={() => {
              if (isMobile) setIsMobileMenuOpen(false);
            }}
          >
            <svg className={`w-6 h-6 flex-shrink-0 ${activeMenu === "contact" ? "text-white" : "text-black"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span
              className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${activeMenu === "contact" ? "text-white" : "text-black"}`}
              style={{
                width: isMenuExpanded || isMobile ? "150px" : "0px",
                opacity: isMenuExpanded || isMobile ? 1 : 0,
              }}
            >
              Kontakt
            </span>
          </Link>
        </div>
      </nav>
      </>
    </SidebarContext.Provider>
  );
}
