"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRightIcon, CrossIcon, AwardIcon } from "@/components/ui/Icons";

export default function MockExamResultPage() {
  const params = useParams();
  const examId = (params?.id as string) || "test-101";

  // Mock Result Data (Passing: 58/65, Threshold: 52/65)
  const totalScored = 65;
  const passingScore = 52;
  const userScore = 58;
  const isPassed = userScore >= passingScore;
  const percentage = Math.round((userScore / totalScored) * 100);

  const domainResults = [
    {
      name: "Trafikregler (Traffic Rules & Priority)",
      score: 28,
      total: 32,
      percent: 88,
    },
    {
      name: "Trafiksäkerhet (Road Safety & Skid Control)",
      score: 14,
      total: 16,
      percent: 88,
    },
    {
      name: "Fordonskännedom & Manövrering",
      score: 7,
      total: 8,
      percent: 88,
    },
    {
      name: "Miljö & Ecodriving",
      score: 5,
      total: 5,
      percent: 100,
    },
    {
      name: "Personliga förutsättningar (Human Factors)",
      score: 4,
      total: 4,
      percent: 100,
    },
  ];

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Header Banner: Pass/Fail Announcement */}
      <div
        className={`rounded-3xl p-8 sm:p-12 text-center border shadow-md space-y-4 ${
          isPassed
            ? "bg-gradient-to-b from-emerald-500/10 via-white to-white border-emerald-300"
            : "bg-gradient-to-b from-rose-500/10 via-white to-white border-rose-300"
        }`}
      >
        <div
          className={`w-16 h-16 mx-auto rounded-3xl flex items-center justify-center shadow-sm ${
            isPassed ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
          }`}
        >
          {isPassed ? (
            <AwardIcon className="w-8 h-8 text-white" />
          ) : (
            <CrossIcon className="w-8 h-8 text-white" />
          )}
        </div>

        <div>
          <span
            className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${
              isPassed
                ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                : "bg-rose-100 text-rose-800 border border-rose-300"
            }`}
          >
            {isPassed ? "EXAMINATION PASSED (GODKÄND)" : "EXAMINATION FAILED (UNDERKÄND)"}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            {isPassed ? "Congratulations! You Passed." : "Keep Practising!"}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1">
            Official Swedish Transport Administration (Trafikverket) standard requires at least 52 out of 65 scored questions (80%).
          </p>
        </div>

        {/* Big Score Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-lg mx-auto">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 block uppercase">Total Score</span>
            <span className="text-2xl font-black text-slate-900">
              {userScore} / {totalScored}
            </span>
            <span className="text-[11px] font-semibold text-emerald-600 block">
              Passing Bar: {passingScore}
            </span>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 block uppercase">Percentage</span>
            <span className="text-2xl font-black text-teal-600">{percentage}%</span>
            <span className="text-[11px] font-semibold text-slate-500 block">
              Required: 80%
            </span>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 block uppercase">Time Spent</span>
            <span className="text-2xl font-black text-slate-900">34:12</span>
            <span className="text-[11px] font-semibold text-slate-500 block">
              Limit: 50:00
            </span>
          </div>
        </div>
      </div>

      {/* 5-Domain Mastery Breakdown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Domain-by-Domain Mastery Evaluation
          </h2>
          <p className="text-xs text-slate-500">
            Detailed breakdown across Transportstyrelsens 5 curriculum subjects
          </p>
        </div>

        <div className="space-y-4">
          {domainResults.map((domain, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-800">{domain.name}</span>
                <span className="text-teal-700">
                  {domain.score} / {domain.total} ({domain.percent}%)
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    domain.percent >= 80 ? "bg-teal-500" : "bg-amber-500"
                  }`}
                  style={{ width: `${domain.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <Link
          href={`/mock-exam/${examId}/review`}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-all"
        >
          <span>Audit & Review All 70 Questions</span>
          <ArrowRightIcon className="w-4 h-4" />
        </Link>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Link
            href="/mock-exam"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-sm transition-all"
          >
            Retake Simulator
          </Link>

          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-2xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
