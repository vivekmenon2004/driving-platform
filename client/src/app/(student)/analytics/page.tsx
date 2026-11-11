"use client";

import React from "react";
import Link from "next/link";
import {
  FlameIcon,
  SignpostRegIcon,
  ShieldSafetyIcon,
  KeyIcon,
  LeafEcoIcon,
  PersonCircumstanceIcon,
  TargetIcon,
  TrophyIcon,
  AwardIcon,
  CheckCircleIcon,
} from "@/components/ui/Icons";

export default function LearningAnalyticsPage() {
  const domainMastery = [
    { name: "Trafikregler (Traffic Rules)", accuracy: 82, questionsDone: 420, icon: SignpostRegIcon },
    { name: "Trafiksäkerhet (Road Safety)", accuracy: 80, questionsDone: 340, icon: ShieldSafetyIcon },
    { name: "Fordonskännedom & Manövrering", accuracy: 75, questionsDone: 210, icon: KeyIcon },
    { name: "Miljö & Ecodriving", accuracy: 91, questionsDone: 158, icon: LeafEcoIcon },
    { name: "Personliga förutsättningar", accuracy: 72, questionsDone: 120, icon: PersonCircumstanceIcon },
  ];

  const trapPatterns = [
    {
      topic: "Roundabout Left Turn Lane Selection & Indicating",
      statute: "TrF 3 kap. 18 § & TSFS 2012:60",
      failureRate: "42% failure rate",
      tip: "Remember: Entering from the left lane is standard when turning left, but indicating right when exiting is legally mandatory.",
    },
    {
      topic: "Datumparkering (Odd/Even Date Parking Rules)",
      statute: "TrF 3 kap. 49 §",
      failureRate: "38% failure rate",
      tip: "On odd dates, parking is prohibited on the side with odd house numbers (1, 3, 5). On even dates, prohibited on even house numbers.",
    },
    {
      topic: "Winter Tyre Mandatory Period & Tread Depth",
      statute: "TSFS 2009:19",
      failureRate: "34% failure rate",
      tip: "Minimum 3.0 mm tread depth between 1 Dec and 31 Mar during winter road conditions. Studded tyres permitted 1 Oct – 15 Apr.",
    },
  ];

  const badges = [
    {
      title: "First 1,000 Questions",
      desc: "Answered over 1,000 realistic exam questions",
      icon: TargetIcon,
      color: "bg-teal-100 text-teal-700",
      unlocked: true,
    },
    {
      title: "Mock Exam Master",
      desc: "Scored 85%+ on official 70-question simulation",
      icon: TrophyIcon,
      color: "bg-amber-100 text-amber-700",
      unlocked: true,
    },
    {
      title: "Traffic Signs Pro",
      desc: "Mastered 200+ signs with >90% accuracy in Rapid Quiz",
      icon: SignpostRegIcon,
      color: "bg-blue-100 text-blue-700",
      unlocked: true,
    },
    {
      title: "Eco-Driver Elite",
      desc: "100% accuracy in Ecodriving and vehicle emissions",
      icon: LeafEcoIcon,
      color: "bg-emerald-100 text-emerald-700",
      unlocked: true,
    },
    {
      title: "7-Day Study Streak",
      desc: "Studied consecutively every day for 1 week",
      icon: FlameIcon,
      color: "bg-orange-100 text-orange-700",
      unlocked: true,
    },
    {
      title: "Flawless Priority",
      desc: "100% accuracy on all Högerregeln junction drills",
      icon: AwardIcon,
      color: "bg-purple-100 text-purple-700",
      unlocked: false,
    },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* 1. Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 mb-2">
              <span>Deep-Dive Learning Analytics</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Performance & Diagnostic Intelligence
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Comprehensive analysis of study habits, accuracy patterns, common exam traps, and milestone achievements.
            </p>
          </div>

          <Link
            href="/practice"
            className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold shadow-sm transition-all self-start sm:self-auto"
          >
            Launch Practice Drill
          </Link>
        </div>
      </div>

      {/* 2. Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs">
          <span className="text-[10px] font-bold text-slate-400 block uppercase">Total Questions Answered</span>
          <span className="text-3xl font-black text-slate-900">1,248</span>
          <span className="text-[11px] text-teal-600 font-bold block mt-1">Across 4 Mock Exams & Drills</span>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs">
          <span className="text-[10px] font-bold text-slate-400 block uppercase">Overall Accuracy</span>
          <span className="text-3xl font-black text-teal-600">78.4%</span>
          <span className="text-[11px] text-slate-500 font-semibold block mt-1">+6.2% over previous week</span>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs">
          <span className="text-[10px] font-bold text-slate-400 block uppercase">Study Streak</span>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-3xl font-black text-slate-900">7 Days</span>
            <FlameIcon className="w-5 h-5 text-amber-500" />
          </div>
          <span className="text-[11px] text-amber-600 font-bold block mt-1">Daily Habit Maintained</span>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs">
          <span className="text-[10px] font-bold text-slate-400 block uppercase">Milestones Unlocked</span>
          <span className="text-3xl font-black text-slate-900">5 / 6</span>
          <span className="text-[11px] text-emerald-600 font-bold block mt-1">1 Badge Remaining</span>
        </div>
      </div>

      {/* 3. Category Mastery Breakdown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <h2 className="text-base font-bold text-slate-900">
          Curriculum Category Mastery (5 Domains)
        </h2>

        <div className="space-y-4">
          {domainMastery.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-teal-600" />
                    <span className="text-slate-800">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] text-slate-400 font-semibold">
                      {item.questionsDone} questions answered
                    </span>
                    <span className="text-teal-700 font-black">{item.accuracy}%</span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      item.accuracy >= 80 ? "bg-teal-500" : "bg-amber-500"
                    }`}
                    style={{ width: `${item.accuracy}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Repeated Mistake Patterns & Trap Detection */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Repeated Mistake Patterns & Common Exam Traps
          </h2>
          <p className="text-xs text-slate-500">
            Our diagnostic AI flagged these specific topics as your highest-risk knowledge gaps
          </p>
        </div>

        <div className="space-y-3">
          {trapPatterns.map((trap, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-rose-200/80 bg-rose-50/40 space-y-2"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-rose-950">
                  {trap.topic}
                </h3>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-200 text-rose-900">
                  {trap.failureRate}
                </span>
              </div>
              <p className="text-[11px] text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900">Instructor Tip: </span>
                {trap.tip}
              </p>
              <span className="text-[10px] font-semibold text-rose-800 block">
                Statute: {trap.statute}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Milestone Badges */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Achievement Badges & Milestones
          </h2>
          <p className="text-xs text-slate-500">
            Unlock professional verification badges as you advance through the curriculum
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border flex items-start gap-4 transition-all ${
                  b.unlocked
                    ? "border-teal-200/80 bg-teal-50/20 shadow-xs"
                    : "border-slate-200 bg-slate-50/60 opacity-60"
                }`}
              >
                <div className={`p-3 rounded-xl flex-shrink-0 ${b.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">{b.title}</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{b.desc}</p>
                  <div className="mt-2.5">
                    {b.unlocked ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircleIcon className="w-3 h-3 text-emerald-600" />
                        Unlocked
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
