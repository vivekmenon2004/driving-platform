import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRightIcon,
  CheckIcon,
  CheckCircleIcon,
  KeyIcon,
  LeafEcoIcon,
  ShieldSafetyIcon,
  SignpostRegIcon,
  PersonCircumstanceIcon,
  TrendChartIcon,
  QuestionListIcon,
  BookModuleIcon,
  GlobeIcon,
  ClockIcon,
  TrophyIcon,
  FlameIcon,
  RefreshCwIcon,
} from "@/components/ui/Icons";
import { InteractiveSampleQuestion } from "@/components/home/InteractiveSampleQuestion";
import { TrafficSignsPreview } from "@/components/home/TrafficSignsPreview";

export const metadata: Metadata = {
  title: "Gothenburg Dynamics — Swedish Driving Theory Platform (B-körkort)",
  description:
    "Prepare for your Swedish driving theory test with confidence. Comprehensive Category B (B-körkort) curriculum, over 1,500+ realistic practice questions, diagnostic test readiness, and driving school partnerships.",
  keywords: [
    "Gothenburg Dynamics",
    "Swedish driving theory",
    "B-körkort",
    "Trafikverket",
    "Körkortsteori",
    "Swedish traffic rules",
    "Teoriprov",
    "Driving school partner",
  ],
  openGraph: {
    title: "Gothenburg Dynamics — Swedish Driving Theory Platform",
    description:
      "Prepare for your Swedish driving theory test with confidence. Master traffic rules, practice realistic questions and track your readiness.",
    url: "https://gothenburgdynamics.se",
    siteName: "Gothenburg Dynamics",
    locale: "en_SE",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (#home) */}
        {/* ========================================================= */}
        <section id="home" className="pt-6 pb-14 lg:pt-10 lg:pb-18">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Hero Copy Inside Floating Card (5 cols on lg/xl) */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 xl:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
                <div>
                  {/* Top Pill Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-4 sm:mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                    <span>Swedish Driving Theory Examination Platform</span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[38px] font-black tracking-tight text-slate-900 leading-[1.15] mb-4">
                    Prepare for Your
                    <br />
                    Swedish Driving
                    <br />
                    Theory Test with
                    <br />
                    Confidence.
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 max-w-md">
                    Master Swedish traffic rules, practice over 1,500+ realistic questions, and prepare for your B-körkort theory examination with confidence.
                  </p>

                  {/* Dual CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                    <Link
                      href="/register"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-sm transition-all active:scale-[0.98]"
                    >
                      <span>Start Free Trial</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      href="#theory-learning"
                      className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 transition-all active:scale-[0.98]"
                    >
                      Explore Curriculum
                    </Link>
                  </div>
                </div>

                {/* 3 Stats Badges Below */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center sm:text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <QuestionListIcon className="w-3.5 h-3.5 text-teal-600" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">
                      1,500+ Practice Questions
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <BookModuleIcon className="w-3.5 h-3.5 text-teal-600" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">
                      5 Syllabus Modules
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <GlobeIcon className="w-3.5 h-3.5 text-teal-600" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">
                      Multilingual Support
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Scenic Road Car Hero Visual (7 cols on lg/xl) */}
              <div className="lg:col-span-7 relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-900 flex items-center justify-center">
                {/* High-Resolution Swedish Road B-Körkort Image */}
                <Image
                  src="/images/swedish-road-b-korkort.jpg"
                  alt="Modern car driving on a scenic Swedish road with B-körkort road sign"
                  fill
                  priority
                  quality={95}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 750px"
                />

                {/* Top-Right Glass Overlay Card */}
                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-lg border border-white/80 max-w-[210px] hidden sm:block">
                  <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-teal-600 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                    <span>Live Road Simulation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 3v3m0 12v3M3 12h3m12 0h3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-900 leading-tight">
                        Interactive Learning
                      </h4>
                      <p className="text-[9px] text-slate-500">
                        Category B Curriculum
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom-Right Overlay Card */}
                <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-4 shadow-xl border border-slate-100 min-w-[170px] sm:min-w-[230px]">
                  <div className="flex items-center justify-between gap-2 sm:gap-3 text-[9px] sm:text-[10px] mb-1 sm:mb-1.5">
                    <span className="font-bold text-slate-800">Current Readiness</span>
                    <span className="text-slate-400 text-[8px] sm:text-[9px]">Passing: 80%</span>
                  </div>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs sm:text-base font-black text-slate-900">84% Readiness</span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-teal-600">Passed</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-slate-100 rounded-full h-1 sm:h-1.5 overflow-hidden mb-1.5 sm:mb-2">
                    <div className="bg-teal-500 h-full rounded-full w-[84%]" />
                  </div>
                  <div className="text-right">
                    <Link
                      href="/login"
                      className="text-[9px] sm:text-[10px] font-bold text-teal-600 hover:text-teal-700 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Continue Learning</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* TRUST & SOCIAL PROOF STRIP */}
        {/* ========================================================= */}
        <section className="py-6 border-y border-slate-200/70 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900">94.2%</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">First-Time Pass Rate</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-teal-600">1,500+</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Trafikverket-Standard Questions</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900">100%</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Pass Guarantee Available</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-teal-600">4.9 / 5</p>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Verified Student Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. HOW IT WORKS SECTION (#how-it-works) */}
        {/* ========================================================= */}
        <section id="how-it-works" className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2.5">
                Structured Pedagogy
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                How Gothenburg Dynamics Works
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                From complete beginner to licensed driver. Our 4-stage pedagogical framework guarantees you understand the Swedish traffic rules, rather than just memorising answers.
              </p>
            </div>

            {/* 4 Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Step 1 */}
              <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-teal-300 transition-all">
                <div className="absolute top-3 right-5 text-6xl font-black text-slate-100 select-none">
                  01
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
                    <BookModuleIcon className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full mb-2">
                    Foundation
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    Master the 5 Domains
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Learn the complete syllabus with clear diagrams for roundabouts, right-of-way, and eco-driving.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  Citations to Trafikförordningen (TrF)
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-teal-300 transition-all">
                <div className="absolute top-3 right-5 text-6xl font-black text-slate-100 select-none">
                  02
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
                    <QuestionListIcon className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full mb-2">
                    Algorithmic Practice
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    Targeted Drills & Mistake Bank
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Practice 1,500+ questions. Any mistakes automatically flow into your personalized Mistake Bank for spaced repetition.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  Spaced Repetition Algorithm
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-teal-300 transition-all">
                <div className="absolute top-3 right-5 text-6xl font-black text-slate-100 select-none">
                  03
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
                    <ClockIcon className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full mb-2">
                    Simulation
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    70-Question Blind Exam
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Authentic Trafikverket format: 70 questions (65 scored), 50-minute timer, and strict 80% passing threshold (52/65).
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  Identical Test Environment
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-teal-300 transition-all">
                <div className="absolute top-3 right-5 text-6xl font-black text-slate-100 select-none">
                  04
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-5">
                    <TrophyIcon className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full mb-2">
                    Success
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    Exam-Day Readiness
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Track your Readiness Gauge. Hit 85%+ to take your official exam at Trafikverket with confidence and pass on your first attempt.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                  100% Pass Guarantee Backing
                </div>
              </div>
            </div>

            {/* Bottom Link to Full How It Works Guide */}
            <div className="text-center">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-xs font-bold text-teal-600 hover:text-teal-700 group py-1"
              >
                <span>Read the Complete 4-Step Pedagogical Framework</span>
                <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. THEORY LEARNING SECTION (#theory-learning) */}
        {/* ========================================================= */}
        <section id="theory-learning" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2.5">
                Official Scope / Areas
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Comprehensive Swedish Driving Theory Syllabus
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                Structured curriculum designed around the 5 official knowledge areas and real-world driving situations.
              </p>
            </div>

            {/* 6 Grid Cards (3 cols x 2 rows) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Area 1 */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                      <KeyIcon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider">
                      AREA 1
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    Vehicle Knowledge and Manoeuvring
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    Vehicle anatomy, pre-drive checks, controls and specifications, braking systems, and powertrain dynamics.
                  </p>
                </div>
                <Link
                  href="/theory"
                  className="text-xs font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1 group"
                >
                  <span>Study Area Overview</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Card 2: Area 2 */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                      <LeafEcoIcon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider">
                      AREA 2
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    Environment & EcoDriving
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    Eco-driving techniques, fuel efficiency, emissions standards, alternative fuels, and climate-conscious driving.
                  </p>
                </div>
                <Link
                  href="/theory"
                  className="text-xs font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1 group"
                >
                  <span>Study Area Overview</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Card 3: Area 3 */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                      <ShieldSafetyIcon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider">
                      AREA 3
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    Traffic Safety
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    Defensive driving, risk awareness, stopping distance, vulnerable road users, and accident procedures.
                  </p>
                </div>
                <Link
                  href="/theory"
                  className="text-xs font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1 group"
                >
                  <span>Study Area Overview</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Card 4: Area 4 */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                      <SignpostRegIcon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider">
                      AREA 4
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    Traffic Regulations
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    Right-of-way rules, priority, intersections, speed limits, freeway restrictions, and road markings.
                  </p>
                </div>
                <Link
                  href="/theory"
                  className="text-xs font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1 group"
                >
                  <span>Study Area Overview</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Card 5: Area 5 */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                      <PersonCircumstanceIcon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 tracking-wider">
                      AREA 5
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    Individual Circumstances
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    Driver psychology, alcohol and drugs, fatigue, distracted driving, peer pressure, and self-assessment.
                  </p>
                </div>
                <Link
                  href="/theory"
                  className="text-xs font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1 group"
                >
                  <span>Study Area Overview</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Card 6: Integrated Self-Assessment (Featured Dark Card) */}
              <div className="bg-[#0f1d32] border border-slate-800 rounded-2xl p-7 shadow-xl flex flex-col justify-between text-white">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5">
                    <TrendChartIcon className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    Integrated Self-Assessment
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Continuous diagnostics track your knowledge retention across all five areas so you always know when you are test-ready.
                  </p>
                </div>
                <Link
                  href="#practice"
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-md transition-all inline-flex items-center justify-center gap-1.5"
                >
                  <span>Try Practice Questions</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. PRACTICE SECTION (#practice) */}
        {/* ========================================================= */}
        <section id="practice" className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2.5">
                Interactive Test Engine
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Practice Realistic Trafikverket Questions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Try this live sample question right now. Experience how our instant statutory feedback explains the underlying Swedish traffic law.
              </p>
            </div>

            {/* Interactive Sample Question Widget */}
            <div className="max-w-3xl mx-auto mb-16">
              <InteractiveSampleQuestion />
            </div>

            {/* 4 Practice Modes Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <QuestionListIcon className="w-5 h-5 text-teal-600" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Domain-Targeted Drills
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Focus on one specific area like EcoDriving, Stopping Distances, or Roundabout navigation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <RefreshCwIcon className="w-5 h-5 text-teal-600" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Automated Mistake Bank
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every incorrect answer is automatically captured for spaced repetition until 100% mastered.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <FlameIcon className="w-5 h-5 text-teal-600" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  Quick-Fire Commute Drills
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  10, 25, or 50 rapid-fire questions optimized for mobile study on the bus, train, or tram.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <ClockIcon className="w-5 h-5 text-teal-600" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  70-Question Simulator
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full 50-minute timed mock test mirroring the official Trafikverket computer exam system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. TRAFFIC SIGNS SECTION (#traffic-signs) */}
        {/* ========================================================= */}
        <section id="traffic-signs" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2.5">
                Official TSFS Catalog
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Master Swedish Road & Traffic Signs
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                Learn authentic Swedish traffic signs classified by the Swedish Transport Agency regulations (TSFS). Practice visual recall with real-world road context.
              </p>
            </div>

            {/* Interactive Traffic Signs Showcase */}
            <TrafficSignsPreview />
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. TRANSPARENT PRICING SECTION (#pricing) */}
        {/* ========================================================= */}
        <section id="pricing" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2.5">
              Educational Plans
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Transparent Pricing Plans
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto mb-14">
              Choose the plan that fits your study schedule. Configurable educational plans with 1,500+ practice questions.
            </p>

            {/* 4 Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch text-left">
              {/* Card 1: Free */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Free</h3>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl font-black text-slate-900">0 SEK</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-6">Free trial access</p>

                  <ul className="space-y-3 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>50 practice theory questions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>1 full mock test examination</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>Basic Swedish road signs overview</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>Real-time progress tracking</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href="/register?plan=free"
                    className="block w-full py-2.5 rounded-xl text-center text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    Start Exploring Free
                  </Link>
                </div>
              </div>

              {/* Card 2: Basic */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Basic</h3>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl font-black text-slate-900">99 SEK</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-6">7 days full access</p>

                  <ul className="space-y-3 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>500+ realistic practice questions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>3 full mock examinations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>Category B syllabus module review</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>Step-by-step answer explanations</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href="/register?plan=basic"
                    className="block w-full py-2.5 rounded-xl text-center text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    Choose 7-Day Access
                  </Link>
                </div>
              </div>

              {/* Card 3: Standard (Featured / Most Popular with Teal Border) */}
              <div className="relative bg-white border-2 border-teal-500 rounded-2xl p-7 flex flex-col justify-between shadow-xl scale-[1.02]">
                {/* Most Popular Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-teal-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Standard</h3>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl font-black text-slate-900">179 SEK</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-6">30 days full access</p>

                  <ul className="space-y-3 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span className="font-semibold text-slate-900">All 1,500+ questions & mock exams</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>Complete 5 syllabus modules</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>Smart diagnostic test analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>Comprehensive road signs visual library</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>Pass guarantee or free renewal</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href="/register?plan=standard"
                    className="block w-full py-2.5 rounded-xl text-center text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-md transition-colors"
                  >
                    Choose 30-Day Access
                  </Link>
                </div>
              </div>

              {/* Card 4: Premium */}
              <div className="bg-white border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Premium</h3>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl font-black text-slate-900">299 SEK</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-6">90 days full access</p>

                  <ul className="space-y-3 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>Full access to complete question bank</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>Unlimited full mock examinations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>Smart difficulty-adaptive practice</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>Direct tutor & instructor support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                      <span>Multilingual translation support</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <Link
                    href="/register?plan=premium"
                    className="block w-full py-2.5 rounded-xl text-center text-xs font-bold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    Choose 90-Day Access
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 mt-10">
              Prices are inclusive of Swedish VAT. Subscriptions do not automatically renew without your consent.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. PARTNER WITH GOTHENBURG DYNAMICS (#driving-schools) */}
        {/* ========================================================= */}
        <section id="driving-schools" className="py-16 lg:py-24 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0f172a] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl border border-slate-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Column: Heading & CTAs (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-5">
                    <span>B2B Driving School Platform</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                    Partner with Gothenburg Dynamics
                    <br />
                    for Driving Schools
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8 max-w-xl">
                    Equip your instructors and students with modern digital theory curriculum while expanding student licensing and commercial reach across Sweden.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                    <Link
                      href="/register?role=partner"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-md transition-all active:scale-[0.98]"
                    >
                      Apply for School Partnership
                    </Link>
                    <a
                      href="mailto:partner@gothenburgdynamics.se"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all active:scale-[0.98]"
                    >
                      Contact Partner Relations
                    </a>
                  </div>
                </div>

                {/* Right Column: Benefits Checklist (5 cols) */}
                <div className="lg:col-span-5 bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6 sm:p-7">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-teal-400 mb-4">
                    Partner Program Benefits
                  </p>
                  <ul className="space-y-3 text-xs text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <CheckCircleIcon className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>School-branded student portal access & monitoring</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircleIcon className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>Comprehensive real-time student progress & readiness analytics</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircleIcon className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>Volume license discounts and custom billing for driving schools</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircleIcon className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>Dedicated account manager and priority Swedish-language support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
