import React from "react";
import Link from "next/link";
import { GothenburgDynamicsLogo, CheckCircleIcon } from "@/components/ui/Icons";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      {/* Left Column: Brand & Educational Trust Seal (Visible on lg+) */}
      <div className="lg:w-5/12 bg-slate-900 text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden border-r border-slate-800">
        {/* Background glow circle */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <Link href="/" className="inline-block mb-12">
            <GothenburgDynamicsLogo variant="light" />
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-4">
            <span>🇸🇪 Swedish B-Körkort Theory</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 leading-tight">
            Prepare with Precision. Pass with Confidence.
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
            Access 1,500+ realistic practice questions, the 70-question timed simulator, and your personalized Readiness Score tracking all 5 Transportstyrelsen knowledge areas.
          </p>

          <div className="space-y-3.5 pt-6 border-t border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span>Exact 70-question / 50-minute / 80% pass criteria replica</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span>Automated Mistake Bank with spaced repetition revision</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span>Full curriculum across all 5 official statutory domains</span>
            </div>
          </div>
        </div>

        {/* Regulatory footer */}
        <div className="relative z-10 pt-10 text-[11px] text-slate-500 border-t border-slate-800/80">
          <p>© 2026 Gothenburg Dynamics AB • Independent Swedish Ed-Tech</p>
        </div>
      </div>

      {/* Right Column: Form Container */}
      <div className="lg:w-7/12 flex-1 flex flex-col justify-center items-center p-6 sm:p-10 lg:p-16">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}
