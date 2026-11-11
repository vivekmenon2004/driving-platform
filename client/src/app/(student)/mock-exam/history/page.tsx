"use client";

import React from "react";
import Link from "next/link";

interface ExamRecord {
  id: string;
  testNumber: number;
  date: string;
  score: number;
  total: number;
  passed: boolean;
  timeSpent: string;
  weakestDomain: string;
}

const EXAM_HISTORY: ExamRecord[] = [
  {
    id: "test-104",
    testNumber: 4,
    date: "Nov 10, 2026",
    score: 58,
    total: 65,
    passed: true,
    timeSpent: "34m 12s",
    weakestDomain: "Fordonskännedom (75%)",
  },
  {
    id: "test-103",
    testNumber: 3,
    date: "Nov 06, 2026",
    score: 54,
    total: 65,
    passed: true,
    timeSpent: "39m 45s",
    weakestDomain: "Trafikregler (78%)",
  },
  {
    id: "test-102",
    testNumber: 2,
    date: "Nov 02, 2026",
    score: 51,
    total: 65,
    passed: false, // 1 point below 52
    timeSpent: "44m 20s",
    weakestDomain: "Trafiksäkerhet (68%)",
  },
  {
    id: "test-101",
    testNumber: 1,
    date: "Oct 28, 2026",
    score: 47,
    total: 65,
    passed: false,
    timeSpent: "48m 10s",
    weakestDomain: "Personliga förutsättningar (60%)",
  },
];

export default function MockExamHistoryPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* 1. Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 mb-2">
              <span>Historical Performance Log</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Mock Exam History
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Review progression trends, score developments, and time management across official mock attempts.
            </p>
          </div>

          <Link
            href="/mock-exam"
            className="px-5 py-3 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold shadow-sm transition-all self-start sm:self-auto"
          >
            Launch New Mock Exam
          </Link>
        </div>
      </div>

      {/* 2. Aggregate Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs">
          <span className="text-[10px] font-bold text-slate-400 block uppercase">Total Exams Taken</span>
          <span className="text-3xl font-black text-slate-900">4 Completed</span>
          <span className="text-xs text-emerald-600 font-semibold block mt-1">2 Passed (50% Pass Rate)</span>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs">
          <span className="text-[10px] font-bold text-slate-400 block uppercase">Average Score</span>
          <span className="text-3xl font-black text-teal-600">52.5 / 65</span>
          <span className="text-xs text-slate-400 font-semibold block mt-1">+11 pts improvement since Test #1</span>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs">
          <span className="text-[10px] font-bold text-slate-400 block uppercase">Avg Completion Time</span>
          <span className="text-3xl font-black text-slate-900">41m 36s</span>
          <span className="text-xs text-slate-400 font-semibold block mt-1">8m 24s safety margin under 50m limit</span>
        </div>
      </div>

      {/* 3. Visual Progression Trend Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Score Progression vs Passing Threshold (52 Pts)
        </h2>

        <div className="pt-6 pb-2">
          <div className="relative grid grid-cols-4 gap-4 items-end h-44 border-b border-slate-200 px-4">
            {/* 80% Pass Line */}
            <div
              className="absolute left-0 right-0 border-b border-dashed border-teal-500/60 z-0 pointer-events-none"
              style={{ bottom: "80%" }}
            >
              <span className="absolute right-2 -top-4 text-[10px] font-extrabold text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200">
                80% Pass Mark (52 pts)
              </span>
            </div>

            {EXAM_HISTORY.slice().reverse().map((exam) => {
              const heightPct = Math.round((exam.score / 65) * 100);
              return (
                <div key={exam.id} className="relative z-10 flex flex-col items-center gap-2 h-full justify-end">
                  <span className="text-xs font-black text-slate-900">{exam.score} pts</span>
                  <div
                    className={`w-full max-w-[48px] rounded-t-xl transition-all shadow-xs ${
                      exam.passed ? "bg-teal-500" : "bg-rose-400"
                    }`}
                    style={{ height: `${heightPct}%` }}
                  />
                  <span className="text-[10px] font-bold text-slate-400">Test #{exam.testNumber}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-3 px-2">
            <span>Pass line: 52 points (80%)</span>
            <span className="text-teal-600 font-bold">Latest Score: 58 / 65 (89%)</span>
          </div>
        </div>
      </div>

      {/* 4. Detailed Exam Log Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Detailed Attempt History
        </h2>

        <div className="divide-y divide-slate-100">
          {EXAM_HISTORY.map((exam) => (
            <div
              key={exam.id}
              className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xs ${
                    exam.passed
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-rose-100 text-rose-800"
                  }`}
                >
                  {exam.score}/65
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Mock Exam #{exam.testNumber}
                    </h3>
                    <span
                      className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                        exam.passed
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-rose-50 text-rose-700 border border-rose-200"
                      }`}
                    >
                      {exam.passed ? "Passed" : "Failed"}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {exam.date} • Time: {exam.timeSpent} • Weakest: {exam.weakestDomain}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/mock-exam/${exam.id}/result`}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  Result
                </Link>
                <Link
                  href={`/mock-exam/${exam.id}/review`}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold"
                >
                  Review Audit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
