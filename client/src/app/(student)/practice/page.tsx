"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

type PracticeMode = "random" | "topic" | "mistakes" | "bookmarks" | "difficulty";

export default function PracticeLauncherPage() {
  const [selectedMode, setSelectedMode] = useState<PracticeMode>("random");
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [questionCount, setQuestionCount] = useState<number>(25);

  const MODES = [
    {
      id: "random",
      title: "Random Adaptive Drill",
      description: "Quick simulated questions randomly drawn across all 5 syllabus modules.",
      badge: "Fast Prep",
    },
    {
      id: "topic",
      title: "Topic-Wise Focused Practice",
      description: "Target a specific domain such as Priority Rules, Winter Safety, or Ecodriving.",
      badge: "Curriculum Aligned",
    },
    {
      id: "mistakes",
      title: "Mistake Bank Recovery",
      description: "Practice the 24 questions you previously answered incorrectly on tests.",
      badge: "24 Questions Ready",
      highlight: true,
    },
    {
      id: "bookmarks",
      title: "Bookmarked Questions",
      description: "Review questions you manually saved for in-depth review.",
      badge: "12 Saved",
    },
    {
      id: "difficulty",
      title: "High-Trap & Hard Questions",
      description: "Tough junction scenarios and common statistical traps on the Trafikverket exam.",
      badge: "Exam Traps",
    },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* 1. Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 mb-2">
              <span>Dynamic Question Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Practice Launcher
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select your practice drill style, question volume, and topic focus.
            </p>
          </div>

          <Link
            href="/mock-exam"
            className="px-4 py-2.5 rounded-2xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>70-Q Official Exam</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
          </Link>
        </div>
      </div>

      {/* 2. Practice Mode Selector */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Step 1: Choose Practice Mode
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MODES.map((mode) => {
            const isSelected = selectedMode === mode.id;
            return (
              <div
                key={mode.id}
                onClick={() => setSelectedMode(mode.id as PracticeMode)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? "border-teal-500 bg-teal-50/40 ring-2 ring-teal-500/20"
                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        mode.highlight
                          ? "bg-rose-100 text-rose-800"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {mode.badge}
                    </span>
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        isSelected
                          ? "border-teal-500 bg-teal-500"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {mode.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {mode.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Topic Selection (Conditional if Topic-Wise) */}
      {selectedMode === "topic" && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4 animate-fade-in">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Step 2: Choose Topic Domain
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: "all", label: "All 5 Domains (Mixed)" },
              { id: "trafikregler", label: "Trafikregler (Traffic Rules & Priority)" },
              { id: "trafiksakerhet", label: "Trafiksäkerhet (Road Safety & Skid)" },
              { id: "fordonskannedom", label: "Fordonskännedom & Manövrering" },
              { id: "miljo", label: "Miljö & Ecodriving" },
              { id: "personliga", label: "Personliga förutsättningar" },
            ].map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedDomain(d.id)}
                className={`p-3.5 rounded-xl border text-left text-xs font-bold transition-all ${
                  selectedDomain === d.id
                    ? "border-teal-500 bg-teal-50 text-teal-900"
                    : "border-slate-200 hover:bg-slate-50 text-slate-700"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 4. Question Count & Difficulty */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
            {selectedMode === "topic" ? "Step 3" : "Step 2"}: Question Volume
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            {[10, 25, 50].map((cnt) => (
              <button
                key={cnt}
                type="button"
                onClick={() => setQuestionCount(cnt)}
                className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all ${
                  questionCount === cnt
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cnt} Questions
              </button>
            ))}
          </div>
        </div>

        {/* Start Practice Session Button */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Immediate feedback enabled • Legal statute citations provided after each answer.
          </div>

          <Link
            href={`/practice/session-101?mode=${selectedMode}&count=${questionCount}&domain=${selectedDomain}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-md transition-all active:scale-[0.98]"
          >
            <span>Start Practice Session</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
