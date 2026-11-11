import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  CheckIcon,
  TrophyIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Pricing & Study Passes — Swedish B-Körkort Theory",
  description:
    "Transparent study pass pricing in SEK with zero recurring surprise fees. Choose 7-day, 30-day, or 90-day mastery passes with 100% Pass Guarantee.",
};

export default function PricingPage() {
  const plans = [
    {
      name: "Free Trial",
      tagline: "Explore the platform risk-free",
      price: "0",
      period: "No credit card required",
      highlight: false,
      ctaText: "Start Free Trial",
      ctaHref: "/register",
      features: [
        "First 2 chapters of all 5 domains",
        "50 realistic practice questions",
        "Standard Swedish road signs index",
        "Readiness score sample calculation",
        "Mobile & desktop access",
      ],
      notIncluded: [
        "70-question official mock exams",
        "Automated Mistake Bank",
        "Pass Guarantee coverage",
      ],
    },
    {
      name: "7-Day Sprint",
      tagline: "Ideal for final-week intensive revision",
      price: "99",
      period: "SEK / 7 days full access",
      highlight: false,
      ctaText: "Choose 7-Day Sprint",
      ctaHref: "/register?plan=7day",
      features: [
        "Full access to all 5 theory domains",
        "Complete 1,500+ question bank",
        "Unlimited 70-Q mock exam simulations",
        "Automated Mistake Bank tracking",
        "Official TrF Swedish statute citations",
      ],
      notIncluded: [
        "100% Pass Guarantee",
        "Driving school progress sync",
      ],
    },
    {
      name: "30-Day Standard",
      tagline: "The most popular choice for first-time testers",
      price: "179",
      period: "SEK / 30 days full access",
      highlight: true,
      badge: "MOST POPULAR",
      ctaText: "Choose 30-Day Pass",
      ctaHref: "/register?plan=30day",
      features: [
        "Everything in 7-Day Sprint",
        "30 days unlimited platform access",
        "In-depth readiness score analytics",
        "Category-wise mastery radar chart",
        "Road signs flashcard & rapid quiz tool",
        "Priority student support",
      ],
      notIncluded: [
        "100% Pass Guarantee",
      ],
    },
    {
      name: "90-Day Full Mastery",
      tagline: "Complete preparation with full pass guarantee",
      price: "299",
      period: "SEK / 90 days full access",
      highlight: false,
      badge: "100% PASS GUARANTEE",
      ctaText: "Choose 90-Day Mastery",
      ctaHref: "/register?plan=90day",
      features: [
        "Everything in 30-Day Standard",
        "90 full days of unlimited access",
        "100% Pass Guarantee (Pass or money back)",
        "Trafikverket exam booking advisor",
        "Driving school partner progress telemetry",
        "Offline study PDF summary guides",
      ],
      notIncluded: [],
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span>Transparent Fixed Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
            Transparent Pricing Plans
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            One-time study passes with zero automatic subscription traps. All prices include 25% Swedish VAT (Moms).
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                p.highlight
                  ? "bg-white border-2 border-teal-500 shadow-xl ring-4 ring-teal-500/10 relative"
                  : "bg-white border border-slate-200/80 shadow-sm hover:border-slate-300"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                  {p.badge}
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-500 min-h-[32px]">
                    {p.tagline}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">
                      {p.price}
                    </span>
                    <span className="text-base font-bold text-slate-700">SEK</span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    {p.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                    Included Capabilities:
                  </span>
                  {p.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <CheckIcon className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                  {p.notIncluded.map((nf, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 line-through">
                      <span className="w-4 h-4 text-slate-300 flex-shrink-0 text-center font-bold">✕</span>
                      <span>{nf}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={p.ctaHref}
                  className={`w-full py-3.5 rounded-xl text-xs font-bold text-center block transition-all active:scale-[0.98] ${
                    p.highlight
                      ? "bg-teal-500 text-white hover:bg-teal-600 shadow-sm"
                      : "bg-slate-50 text-slate-800 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {p.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 100% Pass Guarantee Card */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white mb-20 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center flex-shrink-0">
              <TrophyIcon className="w-8 h-8 text-teal-400" />
            </div>
            <div>
              <span className="text-teal-400 text-xs font-bold uppercase tracking-widest block mb-1">
                Risk-Free Commitment
              </span>
              <h3 className="text-xl sm:text-2xl font-black mb-2 tracking-tight">
                Gothenburg Dynamics 100% Pass Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                If you complete all 5 syllabus modules, maintain an 85%+ readiness score, and do not pass your official Trafikverket examination on the first attempt, we refund your 90-day study pass in full.
              </p>
            </div>
          </div>

          <Link
            href="/register?plan=90day"
            className="flex-shrink-0 px-6 py-3.5 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 transition-all active:scale-[0.98]"
          >
            Claim Guaranteed Pass
          </Link>
        </div>

        {/* VAT Disclosure */}
        <div className="text-center text-xs text-slate-400 max-w-2xl mx-auto">
          <p>
            Gothenburg Dynamics AB (Org. nr: 559000-0000). All prices are displayed inclusive of Swedish VAT (25% Moms) in compliance with the Swedish Consumer Agency (Konsumentverket). Stripe payments are encrypted with TLS 1.3.
          </p>
        </div>
      </div>
    </div>
  );
}
