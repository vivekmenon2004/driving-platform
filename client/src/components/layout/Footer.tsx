import React from "react";
import Link from "next/link";
import { GothenburgDynamicsLogo } from "../ui/Icons";

export function Footer() {
  return (
    <footer className="bg-white text-slate-600 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Brand & Regulatory Disclaimer (5 cols) */}
          <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-6">
            <Link href="/" className="inline-block">
              <GothenburgDynamicsLogo variant="dark" />
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed pt-1">
              Gothenburg Dynamics educational platform provides full-scope Swedish theory exam preparation for Category B licences, with complete knowledge area coverage and practice modules.
            </p>

            {/* Important Regulatory Notice Box */}
            <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] leading-relaxed text-slate-500 space-y-1">
              <span className="font-bold text-slate-800 block">
                Important Regulatory Notice:
              </span>
              <p>
                Gothenburg Dynamics is an independent educational technology provider. Our learning materials and practice exams are not affiliated with, endorsed by, or administered by Trafikverket or Transportstyrelsen.
              </p>
            </div>
          </div>

          {/* Links Column 1: Platform (2 cols) */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/" className="hover:text-teal-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-teal-600 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/theory" className="hover:text-teal-600 transition-colors">
                  Theory Learning
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:text-teal-600 transition-colors">
                  Practice Questions
                </Link>
              </li>
              <li>
                <Link href="/traffic-signs" className="hover:text-teal-600 transition-colors">
                  Road Signs Library
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-teal-600 transition-colors">
                  Pricing & Study Passes
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-teal-600 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Student Resources (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Student Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/practice" className="hover:text-teal-600 transition-colors">
                  70-Q Mock Simulator
                </Link>
              </li>
              <li>
                <Link href="/traffic-signs" className="hover:text-teal-600 transition-colors">
                  Swedish Road Signs
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-teal-600 transition-colors">
                  Student Sign In
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-teal-600 transition-colors">
                  Create Student Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Company & Legal (3 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/about" className="hover:text-teal-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-600 transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-teal-600 transition-colors">
                  Privacy Policy (GDPR)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-teal-600 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-teal-600 transition-colors">
                  Cookie Preferences
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-teal-600 transition-colors">
                  Official Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 Gothenburg Dynamics AB. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/cookies" className="hover:text-slate-600">
              Cookie Preferences
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-600">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-slate-600">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
