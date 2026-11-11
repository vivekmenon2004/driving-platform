"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GothenburgDynamicsLogo } from "../ui/Icons";

interface NavItem {
  id: string;
  label: string;
  href: string;
  pagePath: string;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/#home", pagePath: "/" },
  { id: "how-it-works", label: "How It Works", href: "/#how-it-works", pagePath: "/how-it-works" },
  { id: "theory-learning", label: "Theory Learning", href: "/#theory-learning", pagePath: "/theory" },
  { id: "practice", label: "Practice", href: "/#practice", pagePath: "/practice" },
  { id: "traffic-signs", label: "Traffic Signs", href: "/#traffic-signs", pagePath: "/traffic-signs" },
  { id: "pricing", label: "Pricing", href: "/#pricing", pagePath: "/pricing" },
  {
    id: "driving-schools",
    label: "For Driving Schools",
    href: "/#driving-schools",
    pagePath: "/partner",
    badge: "Partner",
  },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inPageActiveSection, setInPageActiveSection] = useState<string>("home");
  const pathname = usePathname();

  // If on a subpage, derive active section directly from pathname; otherwise use in-page scroll spy
  const matchedRouteItem = NAV_ITEMS.find((item) => item.pagePath === pathname);
  const activeSection = pathname === "/" ? inPageActiveSection : (matchedRouteItem?.id || "");

  // Real-time Scroll Spy on the Home page (/)
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      // If near the very top of the page, active is always 'home'
      if (window.scrollY < 120) {
        setInPageActiveSection("home");
        return;
      }

      const scrollPosition = window.scrollY + 160; // offset for sticky navbar
      let current = "home";

      for (let i = 0; i < SECTION_IDS.length; i++) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            current = id;
          }
        }
      }

      setInPageActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Smooth scroll handler for in-page anchors on the home page
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (pathname === "/") {
      e.preventDefault();
      setInPageActiveSection(item.id);
      setMobileMenuOpen(false);

      if (item.id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const el = document.getElementById(item.id);
      if (el) {
        const yOffset = -72; // height of fixed navbar
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center flex-shrink-0"
          onClick={() => setInPageActiveSection("home")}
        >
          <GothenburgDynamicsLogo variant="dark" />
        </Link>

        {/* Desktop Navigation Links with Active Underline Indicator */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-semibold">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative py-2 inline-flex items-center gap-1.5 transition-colors duration-150 ${
                  isActive
                    ? "text-slate-950 font-bold"
                    : "text-slate-600 font-medium hover:text-slate-950"
                }`}
              >
                <span>{item.label}</span>

                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border transition-colors ${
                      isActive
                        ? "bg-teal-100 text-teal-800 border-teal-300"
                        : "bg-teal-50 text-teal-700 border-teal-200"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}

                {/* Active Section Underline Indicator (exact match to screenshot) */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-950 rounded-full transition-all duration-200"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Auth / Portal Actions */}
        <div className="hidden lg:flex items-center gap-3.5 flex-shrink-0">
          <Link
            href="/login"
            className="text-xs font-semibold text-slate-700 hover:text-teal-600 transition-colors px-3 py-2"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-sm transition-all active:scale-[0.98]"
          >
            Start Free
          </Link>
        </div>

        {/* Mobile menu hamburger toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm transition-colors ${
                  isActive
                    ? "bg-slate-100 text-slate-950 font-bold border-l-4 border-slate-950"
                    : "text-slate-700 font-medium hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="bg-teal-50 text-teal-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-teal-200">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-bold text-slate-800 border border-slate-200 rounded-full hover:bg-slate-50"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-bold text-white bg-teal-500 rounded-full hover:bg-teal-600 shadow-sm"
            >
              Start Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
