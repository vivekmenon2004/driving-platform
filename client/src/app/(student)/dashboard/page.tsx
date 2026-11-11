"use client";

import React from "react";
import Link from "next/link";
import {
  FlameIcon,
  ArrowRightIcon,
  SignpostRegIcon,
  ShieldSafetyIcon,
  LeafEcoIcon,
  KeyIcon,
  PersonCircumstanceIcon,
  SpeedometerIcon,
} from "@/components/ui/Icons";

export default function StudentDashboardPage() {
  const domains = [
    {
      name: "Trafikregler (Traffic Rules)",
      code: "trafikregler",
      progress: 78,
      lessonsDone: 18,
      totalLessons: 22,
      accuracy: 82,
      icon: SignpostRegIcon,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Trafiksäkerhet (Road Safety)",
      code: "trafiksakerhet",
      progress: 70,
      lessonsDone: 14,
      totalLessons: 19,
      accuracy: 80,
      icon: ShieldSafetyIcon,
      color: "from-teal-500 to-emerald-600",
    },
    {
      name: "Fordonskännedom & Manövrering",
      code: "fordonskannedom",
      progress: 62,
      lessonsDone: 10,
      totalLessons: 16,
      accuracy: 75,
      icon: KeyIcon,
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Miljö & Ecodriving",
      code: "miljo",
      progress: 88,
      lessonsDone: 8,
      totalLessons: 9,
      accuracy: 91,
      icon: LeafEcoIcon,
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "Personliga förutsättningar",
      code: "personliga",
      progress: 55,
      lessonsDone: 6,
      totalLessons: 11,
      accuracy: 72,
      icon: PersonCircumstanceIcon,
      color: "from-purple-500 to-violet-600",
    },
  ];

  const recentBadges = [
    {
      title: "Mock Exam #4 (70 Questions)",
      score: "58 / 65 pts",
      percent: 89,
      status: "PASSED",
      date: "Yesterday",
      passThreshold: "80% (52/65)",
    },
    {
      title: "Rapid Sign Identification Quiz",
      score: "28 / 30 signs",
      percent: 93,
      status: "EXCELLENT",
      date: "3 days ago",
      passThreshold: "TSFS Recall",
    },
    {
      title: "Mock Exam #3 (70 Questions)",
      score: "54 / 65 pts",
      percent: 83,
      status: "PASSED",
      date: "5 days ago",
      passThreshold: "80% (52/65)",
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. Header Banner & Pass Status */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 mb-3">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span>Standard 30-Day Pass: 24 Days Remaining</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Welcome back, Erik!
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Swedish Driving Licence Category B (B-körkort) Theory Prep • Target Exam: Dec 12, 2026
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/theory/trafikregler/lesson-1"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-md transition-all active:scale-[0.98]"
            >
              <span>Continue Learning</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>

            <Link
              href="/mock-exam"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300/80 transition-all active:scale-[0.98]"
            >
              <span>70-Q Mock Exam</span>
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Key Metrics Row: Readiness Score, Syllabus %, Streak, Mistake Bank */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Readiness Score Gauge with 80% passing indicator */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span className="flex items-center gap-1.5">
                <SpeedometerIcon className="w-4 h-4 text-teal-600" />
                <span>Readiness Score</span>
              </span>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                Exam Ready
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-black text-slate-900">84%</span>
              <span className="text-xs font-bold text-slate-400">/ 80% passing</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Consistently outperforming Trafikverket&apos;s 52/65 point statutory passing bar.
            </p>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
              <span>0%</span>
              <span className="text-emerald-700 font-extrabold">Pass Bar: 80%</span>
              <span>100%</span>
            </div>
            <div className="relative w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-teal-500 h-full rounded-full transition-all duration-500"
                style={{ width: "84%" }}
              />
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-slate-400/80 z-10"
                style={{ left: "80%" }}
                title="80% Passing Threshold"
              />
            </div>
          </div>
        </div>

        {/* Syllabus Completion */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span>Syllabus Completion</span>
              <span className="text-blue-600 font-extrabold">56 of 77 Lessons</span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-black text-slate-900">68%</span>
              <span className="text-xs font-bold text-slate-400">Total Progress</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Covering all 5 Swedish Transport Agency curriculum learning domains.
            </p>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden mt-4">
            <div
              className="bg-blue-500 h-full rounded-full transition-all duration-500"
              style={{ width: "68%" }}
            />
          </div>
        </div>

        {/* Learning Streak */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span>Study Streak</span>
              <FlameIcon className="w-4 h-4 text-amber-500" />
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-black text-slate-900">7 Days</span>
              <span className="text-xs font-bold text-amber-600">Active Daily</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Daily practice builds muscle memory for complex Swedish junction priorities.
            </p>
          </div>
          <div className="flex items-center gap-1.5 mt-4">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
              <div
                key={idx}
                className={`flex-1 text-center py-1 rounded-lg text-[10px] font-bold ${
                  idx <= 5
                    ? "bg-teal-500 text-white"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* Mistake Bank Quick Link */}
        <Link
          href="/practice?mode=mistakes"
          className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-3xl p-6 border border-rose-200/80 shadow-xs flex flex-col justify-between hover:border-rose-300 transition-all group"
        >
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-rose-700 mb-2">
              <span>Mistake Bank</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-200/60 text-rose-800 font-black">
                Review Now
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-black text-rose-900">24</span>
              <span className="text-xs font-bold text-rose-600">Failed Questions</span>
            </div>
            <p className="text-[11px] text-rose-800/80 leading-relaxed">
              Drill specifically the questions you answered incorrectly in mock tests.
            </p>
          </div>
          <div className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 group-hover:gap-2 transition-all mt-4">
            <span>Practice Mistake Bank</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </div>
        </Link>
      </div>

      {/* 3. 5-Domain Radar & Curriculum Mastery Breakdown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              5-Domain Curriculum Mastery
            </h2>
            <p className="text-xs text-slate-500">
              Transportstyrelsens 5 core examination domains for passenger cars (Category B)
            </p>
          </div>
          <Link
            href="/theory"
            className="text-xs font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
          >
            <span>Open Theory Centre</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {domains.map((dom) => {
            const Icon = dom.icon;
            return (
              <Link
                key={dom.code}
                href={`/theory/${dom.code}`}
                className="p-5 rounded-2xl border border-slate-200 hover:border-teal-300 hover:bg-slate-50/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold text-teal-600">
                    {dom.accuracy}% Accuracy
                  </span>
                </div>
                <h3 className="text-xs font-bold text-slate-900 mb-1">
                  {dom.name}
                </h3>
                <p className="text-[11px] text-slate-400 mb-3">
                  {dom.lessonsDone} / {dom.totalLessons} lessons completed
                </p>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-teal-500 h-full rounded-full"
                    style={{ width: `${dom.progress}%` }}
                  />
                </div>
              </Link>
            );
          })}

          {/* Quick Signs Card */}
          <Link
            href="/signs"
            className="p-5 rounded-2xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50/30 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700">
                  <SignpostRegIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  240+ Signs
                </span>
              </div>
              <h3 className="text-xs font-bold text-slate-900 mb-1">
                Traffic Signs & Flashcards
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                Test your sign recall with interactive flip cards and rapid quizzes.
              </p>
            </div>
            <div className="text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              <span>Open Sign Deck</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>
      </div>

      {/* 4. Recent Test Badges & Quick Launch Drill Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (7 cols): Recent Test Badges */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Recent Test Results</h2>
              <p className="text-xs text-slate-500">Last 3 evaluated assessments</p>
            </div>
            <Link
              href="/mock-exam/history"
              className="text-xs font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
            >
              <span>View History</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {recentBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xs">
                    {badge.percent}%
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">{badge.title}</h3>
                    <p className="text-[11px] text-slate-400">
                      {badge.score} • {badge.date} • Required: {badge.passThreshold}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                    {badge.status}
                  </span>
                  <Link
                    href={`/mock-exam/test-10${idx + 1}/review`}
                    className="text-xs font-bold text-slate-600 hover:text-teal-600"
                  >
                    Review
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (5 cols): Quick Launch Modules */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-1">Fast Practice Launcher</h2>
            <p className="text-xs text-slate-500 mb-6">Jump straight into targeted practice modes</p>

            <div className="space-y-3">
              <Link
                href="/practice?mode=random-25"
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-teal-400 hover:bg-teal-50/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal-500" />
                  <span className="text-xs font-bold text-slate-800">Random 25-Question Quick Drill</span>
                </div>
                <ArrowRightIcon className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              <Link
                href="/signs/quiz"
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-teal-400 hover:bg-teal-50/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-xs font-bold text-slate-800">Rapid Sign Identification Quiz</span>
                </div>
                <ArrowRightIcon className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              <Link
                href="/mock-exam"
                className="flex items-center justify-between p-3.5 rounded-xl border border-rose-200 bg-rose-50/40 hover:bg-rose-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-xs font-bold text-rose-950">
                    Official 70-Q / 50-Min Simulation
                  </span>
                </div>
                <ArrowRightIcon className="w-3.5 h-3.5 text-rose-600" />
              </Link>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Target Exam Date:</span>
            <span className="font-bold text-slate-900">Dec 12, 2026 (31 days left)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
