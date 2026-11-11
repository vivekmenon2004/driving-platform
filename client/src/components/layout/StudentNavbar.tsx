"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GothenburgDynamicsLogo } from "@/components/ui/Icons";

const STUDENT_NAV = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Theory Curriculum", href: "/theory" },
  { label: "Practice Drills", href: "/practice" },
  { label: "Traffic Signs", href: "/signs" },
  { label: "70-Q Mock Exam", href: "/mock-exam", highlight: true },
  { label: "Analytics", href: "/analytics" },
];

export function StudentNavbar() {
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="flex items-center">
            <GothenburgDynamicsLogo variant="dark" />
          </Link>

          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold">
            {STUDENT_NAV.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/dashboard" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1.5 inline-flex items-center gap-1.5 transition-colors ${
                    isActive
                      ? "text-teal-700 font-bold"
                      : "text-slate-600 hover:text-slate-950 font-medium"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  )}
                  {isActive && (
                    <span className="absolute -bottom-2.5 left-0 right-0 h-0.5 bg-teal-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Active Study Pass Badge */}
          <Link
            href="/profile/subscription"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 hover:bg-teal-100 border border-teal-200 text-teal-800 text-[11px] font-bold transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span>30-Day Pass: 24 Days Left</span>
          </Link>

          {/* User Profile Menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2.5 p-1 rounded-full hover:bg-slate-100 transition-colors focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                EL
              </div>
              <div className="text-left hidden md:block">
                <p className="text-xs font-bold text-slate-800 leading-none">Erik Lindqvist</p>
                <p className="text-[10px] text-teal-600 font-medium mt-0.5">B-körkort Candidate</p>
              </div>
              <svg
                className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                  profileOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Profile Dropdown */}
            {profileOpen && (
              <div
                className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 z-50 text-xs"
                onClick={() => setProfileOpen(false)}
              >
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="font-bold text-slate-900">Erik Lindqvist</p>
                  <p className="text-[11px] text-slate-400 truncate">erik.lindqvist@example.se</p>
                </div>
                <Link
                  href="/profile"
                  className="flex items-center px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                >
                  Student Profile
                </Link>
                <Link
                  href="/profile/subscription"
                  className="flex items-center px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                >
                  Subscription & Passes
                </Link>
                <Link
                  href="/profile/consent"
                  className="flex items-center px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                >
                  Consent & Privacy
                </Link>
                <Link
                  href="/profile/security"
                  className="flex items-center px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-teal-700"
                >
                  Security & GDPR Data
                </Link>
                <div className="border-t border-slate-100 my-1" />
                <Link
                  href="/login"
                  className="flex items-center px-4 py-2 text-rose-600 hover:bg-rose-50 font-semibold"
                >
                  Sign Out
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle Navigation"
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
      </div>

      {/* Mobile Nav Links */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-1">
          {STUDENT_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl text-xs font-semibold ${
                pathname === item.href
                  ? "bg-teal-50 text-teal-800 font-bold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t border-slate-100 my-2 pt-2">
            <Link
              href="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Profile & Settings
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

