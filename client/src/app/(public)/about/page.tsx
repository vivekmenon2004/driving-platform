import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ShieldSafetyIcon,
  BookModuleIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About Us — Gothenburg Dynamics AB & Swedish Traffic Safety",
  description:
    "Learn about Gothenburg Dynamics AB, our commitment to Swedish traffic safety, Vision Zero (Nollvisionen), and our Transportstyrelsen-compliant ed-tech platform.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span>Gothenburg Dynamics AB</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
            Pioneering Digital Driver Education in Sweden
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Headquartered in Gothenburg, Sweden. We engineer high-compliance educational technology to support candidates and partner driving schools across Sweden.
          </p>
        </div>

        {/* Vision & Mission Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <ShieldSafetyIcon className="w-6 h-6 text-teal-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                Rooted in Sweden&apos;s Vision Zero (Nollvisionen)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                In 1997, the Swedish Parliament adopted Vision Zero — the pioneering ethical approach stating that no one should be killed or seriously injured in road traffic.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Gothenburg Dynamics, we build software that doesn&apos;t just train students to pass an exam through rote memorisation, but genuinely instills defensive driving habits, acute hazard awareness, and eco-conscious behaviour.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-teal-600">
              <span>Zero Traffic Fatalities Philosophy</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <BookModuleIcon className="w-6 h-6 text-teal-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                Strict Statutory Alignment
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Our questions and syllabus modules are reviewed and audited against the official regulations of the Swedish Transport Agency (Transportstyrelsen) and Swedish Road Traffic Ordinance (Trafikförordningen).
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every practice question provides immediate legal citations (TrF chapters and sections), giving students absolute certainty and confidence during their revision.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-teal-600">
              <span>Trafikförordningen (1998:1276) Aligned</span>
            </div>
          </div>
        </div>

        {/* Company Facts */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white mb-20 shadow-xl border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-teal-400 mb-1">1,500+</div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Audited Questions</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-teal-400 mb-1">80%</div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Trafikverket Pass Mark</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-teal-400 mb-1">5</div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Study Languages</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-teal-400 mb-1">20%–30%</div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Driving School Revenue</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Join Thousands of Swedish Learners
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Get started today with our free trial or explore our driving school partner program.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/register"
              className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-teal-500 hover:bg-teal-600 shadow-sm transition-all"
            >
              Start Free Trial
            </Link>
            <Link
              href="/partner"
              className="px-6 py-3 rounded-xl font-bold text-xs text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 transition-all"
            >
              Partner Your Driving School
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
