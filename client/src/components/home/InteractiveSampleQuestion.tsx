"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  RefreshCwIcon,
  ArrowRightIcon,
  ShieldSafetyIcon,
} from "@/components/ui/Icons";

interface QuizQuestion {
  id: string;
  type: "video" | "photo" | "text";
  domain: string;
  lawRef: string;
  difficulty: "Easy" | "Medium" | "Hard";
  question: string;
  mediaUrl?: string;
  mediaCaption?: string;
  options: {
    id: number;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
}

export function InteractiveSampleQuestion() {
  const [activeQuestionType, setActiveQuestionType] = useState<"video" | "photo" | "text">("video");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(true);
  const [videoProgress, setVideoProgress] = useState<number>(65);

  const sampleQuestions: Record<"video" | "photo" | "text", QuizQuestion> = {
    video: {
      id: "Q-VID-01",
      type: "video",
      domain: "Traffic Regulations (Trafikregler)",
      lawRef: "TrF 3 kap. 18 § & TSFS 2012:60 — Roundabout Navigation",
      difficulty: "Medium",
      question:
        "Watch the 8-second traffic scenario: You are approaching a two-lane roundabout in built-up traffic. You intend to take the 3rd exit (turning left). Which lane must you enter from, and when must you indicate right?",
      mediaCaption: "Trafikverket Video Simulation: Approaching dual-lane roundabout at 45 km/h",
      options: [
        {
          id: 0,
          text: "Enter from the left lane. Indicating upon entry is optional, but you must indicate right when changing lanes to leave the roundabout.",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Enter from the right lane only, and keep your left indicator on continuously until reaching the exit.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Enter whichever lane has fewer vehicles without signaling, since traffic inside the circle must yield to you.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Stay strictly in the right lane and flash hazard lights before turning off.",
          isCorrect: false,
        },
      ],
      explanation:
        "Under Swedish traffic law (TrF 3 kap.), when turning left (taking an exit located past 12 o'clock) at a multi-lane roundabout, you should normally enter in the left-hand lane. In Sweden, signaling when entering is not legally required, but signaling right when exiting is mandatory by statute.",
    },
    photo: {
      id: "Q-PHT-02",
      type: "photo",
      domain: "Traffic Regulations (Trafikregler)",
      lawRef: "TrF 3 kap. 18 § — Priority to the Right (Högerregeln)",
      difficulty: "Medium",
      question:
        "Examine the road junction diagram: You are driving vehicle A on an open residential street without priority signs or traffic signals. Vehicle B approaches from the right. Who has the duty to give way?",
      mediaCaption: "Scenario Diagram: Uncontrolled four-way junction with vehicles A and B",
      options: [
        {
          id: 0,
          text: "Vehicle A must give way according to the priority-to-the-right rule (högerregeln).",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Vehicle B must yield because vehicle A is continuing straight ahead.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Whichever vehicle reached the intersection boundary line first has priority.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Both vehicles must stop completely and flash headlights before moving.",
          isCorrect: false,
        },
      ],
      explanation:
        "Under Trafikförordningen (TrF 3 kap. 18 §), when no priority road sign, give-way sign, or traffic lights are present, the basic priority-to-the-right rule (högerregeln) applies. Vehicle A must yield to vehicle B arriving from the right.",
    },
    text: {
      id: "Q-TXT-03",
      type: "text",
      domain: "Individual Circumstances (Personliga Förutsättningar)",
      lawRef: "Körkortslagen (1998:488) & Trafikbrottslagen — BAC Statutory Limits",
      difficulty: "Easy",
      question:
        "What is the statutory blood alcohol concentration (BAC) limit for driving a motor vehicle under Swedish law (rattfylleri)?",
      options: [
        {
          id: 0,
          text: "0.20 per mille (0.20 ‰) in blood or 0.10 mg/L in exhaled breath.",
          isCorrect: true,
        },
        {
          id: 1,
          text: "0.50 per mille (0.50 ‰) in blood or 0.25 mg/L in exhaled breath.",
          isCorrect: false,
        },
        {
          id: 2,
          text: "0.80 per mille (0.80 ‰) in blood or 0.40 mg/L in exhaled breath.",
          isCorrect: false,
        },
        {
          id: 3,
          text: "Zero tolerance (0.00 ‰) under all circumstances without medical exemption.",
          isCorrect: false,
        },
      ],
      explanation:
        "Sweden enforces one of Europe's strictest drink-driving laws. The threshold for driving under the influence (rattfylleri) is 0.20 per mille (0.2 ‰) in the blood or 0.10 milligrams per litre in breath. Exceeding 1.0 ‰ is classified as aggravated drunk driving (grovt rattfylleri).",
    },
  };

  const currentQ = sampleQuestions[activeQuestionType];

  const handleSwitchType = (type: "video" | "photo" | "text") => {
    setActiveQuestionType(type);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
  };

  const handleSelect = (index: number) => {
    if (!isAnswerSubmitted) {
      setSelectedOption(index);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedOption !== null) {
      setIsAnswerSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
  };

  const isUserCorrect =
    selectedOption !== null && currentQ.options[selectedOption].isCorrect;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm">
      {/* Top Question Format Switcher (Video vs Photo vs Text) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
            Question Format Preview:
          </span>
          <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1 text-xs font-bold">
            <button
              type="button"
              onClick={() => handleSwitchType("video")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeQuestionType === "video"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>🎬</span>
              <span>Video Scenario</span>
            </button>
            <button
              type="button"
              onClick={() => handleSwitchType("photo")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeQuestionType === "photo"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>📷</span>
              <span>Photo / Diagram</span>
            </button>
            <button
              type="button"
              onClick={() => handleSwitchType("text")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeQuestionType === "text"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>📝</span>
              <span>Text Law</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200/80">
            <ShieldSafetyIcon className="w-3.5 h-3.5 text-teal-600" />
            <span>{currentQ.domain}</span>
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700">
            {currentQ.difficulty}
          </span>
        </div>
      </div>

      {/* MEDIA CONTAINER: Video Player OR Photo Diagram */}
      {currentQ.type === "video" && (
        <div className="my-6 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-md">
          {/* Simulated Video Display Area */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex items-center justify-center p-6 text-center select-none overflow-hidden">
            {/* Visual Roundabout Road Scenario Graphics */}
            <div className="absolute inset-0 opacity-20 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 600 250" fill="none">
                <circle cx="300" cy="125" r="70" stroke="#0d9488" strokeWidth="8" strokeDasharray="12 8" />
                <circle cx="300" cy="125" r="35" fill="#1e293b" stroke="#334155" strokeWidth="4" />
                {/* Approaching road lanes */}
                <path d="M 300 250 L 300 195" stroke="#38bdf8" strokeWidth="6" />
                <path d="M 285 250 L 285 195" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6 6" />
                {/* Exiting branches */}
                <path d="M 300 0 L 300 55" stroke="#94a3b8" strokeWidth="6" />
                <path d="M 0 125 L 230 125" stroke="#94a3b8" strokeWidth="6" />
                <path d="M 600 125 L 370 125" stroke="#94a3b8" strokeWidth="6" />
              </svg>
            </div>

            {/* Video overlay badges */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="bg-rose-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>SCENARIO VIDEO</span>
              </span>
              <span className="bg-black/60 backdrop-blur-md text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded-md border border-white/10">
                0:05 / 0:08
              </span>
            </div>

            {/* Replay indicator badge */}
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-teal-300 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-white/10">
              Replays: 1 / 3
            </div>

            {/* Central Animated Vehicle Representation */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-400 flex items-center justify-center text-teal-300 shadow-lg mb-2">
                <span className="text-xl">🚗</span>
              </div>
              <p className="text-xs font-bold text-white tracking-wide">
                Vehicle Approaching Dual-Lane Roundabout
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Speed: 42 km/h • Gear: 3rd • Left Lane Selected
              </p>
            </div>

            {/* Bottom Video Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                className="w-7 h-7 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold flex items-center justify-center text-xs flex-shrink-0"
              >
                {isPlayingVideo ? "⏸" : "▶"}
              </button>

              {/* Scrub timeline */}
              <div
                className="flex-1 bg-slate-700 h-1.5 rounded-full overflow-hidden cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  setVideoProgress(Math.round((clickX / rect.width) * 100));
                }}
              >
                <div
                  className="bg-teal-400 h-full rounded-full transition-all"
                  style={{ width: `${videoProgress}%` }}
                />
              </div>

              <button
                type="button"
                onClick={() => setVideoProgress(0)}
                className="text-[10px] font-bold text-slate-300 hover:text-white flex items-center gap-1 bg-white/10 px-2 py-1 rounded"
              >
                <span>↺ Replay</span>
              </button>
            </div>
          </div>
          <div className="py-2 px-4 bg-slate-900 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>{currentQ.mediaCaption}</span>
            <span className="text-teal-400 font-semibold text-[10px]">Trafikverket Official Computer Simulation Format</span>
          </div>
        </div>
      )}

      {currentQ.type === "photo" && (
        <div className="my-6 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm">
          {/* Simulated Crossroads Diagram */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center p-6 text-center select-none">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full max-w-md" viewBox="0 0 400 200" fill="none">
                {/* Horizontal Road */}
                <rect x="0" y="70" width="400" height="60" fill="#94a3b8" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="#f8fafc" strokeWidth="2" strokeDasharray="8 6" />

                {/* Vertical Road */}
                <rect x="170" y="0" width="60" height="200" fill="#94a3b8" />
                <line x1="200" y1="0" x2="200" y2="200" stroke="#f8fafc" strokeWidth="2" strokeDasharray="8 6" />

                {/* Vehicle A (Green - You) driving up */}
                <rect x="205" y="145" width="20" height="35" rx="4" fill="#0d9488" stroke="#ffffff" strokeWidth="1.5" />
                <text x="215" y="167" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">A</text>

                {/* Vehicle B (Blue - From Right) driving left */}
                <rect x="260" y="75" width="35" height="20" rx="4" fill="#1e3a8a" stroke="#ffffff" strokeWidth="1.5" />
                <text x="277" y="89" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">B</text>
              </svg>
            </div>

            <div className="absolute top-3 left-3 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
              <span>📷 SCENARIO DIAGRAM</span>
            </div>

            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-slate-200">
              No Signs / Equal Roads
            </div>
          </div>
          <div className="py-2 px-4 bg-slate-100 border-t border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
            <span>{currentQ.mediaCaption}</span>
            <span className="text-teal-700 font-semibold text-[10px]">TrF 3 kap. 18 § Right-of-Way</span>
          </div>
        </div>
      )}

      {/* Question Text */}
      <div className="py-4">
        <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {currentQ.question}
        </h4>
      </div>

      {/* Options List */}
      <div className="space-y-3 mb-6">
        {currentQ.options.map((opt, idx) => {
          let optionStyles =
            "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50 text-slate-800";

          if (selectedOption === idx && !isAnswerSubmitted) {
            optionStyles = "border-teal-500 bg-teal-50/40 text-slate-950 shadow-sm ring-1 ring-teal-500";
          } else if (isAnswerSubmitted) {
            if (opt.isCorrect) {
              optionStyles = "border-emerald-500 bg-emerald-50/60 text-emerald-950 font-semibold ring-1 ring-emerald-500";
            } else if (selectedOption === idx && !opt.isCorrect) {
              optionStyles = "border-rose-500 bg-rose-50/60 text-rose-950 font-semibold ring-1 ring-rose-500";
            } else {
              optionStyles = "border-slate-200 bg-slate-50/40 text-slate-400 opacity-60";
            }
          }

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleSelect(idx)}
              disabled={isAnswerSubmitted}
              className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all flex items-start gap-3.5 ${optionStyles}`}
            >
              <div
                className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 transition-colors ${
                  selectedOption === idx && !isAnswerSubmitted
                    ? "border-teal-600 bg-teal-500 text-white"
                    : isAnswerSubmitted && opt.isCorrect
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : isAnswerSubmitted && selectedOption === idx && !opt.isCorrect
                    ? "border-rose-600 bg-rose-600 text-white"
                    : "border-slate-300 text-slate-600 bg-white"
                }`}
              >
                {String.fromCharCode(65 + idx)}
              </div>
              <span className="text-xs sm:text-sm leading-relaxed flex-1">
                {opt.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Answer Verification Feedback */}
      {isAnswerSubmitted && (
        <div
          className={`p-5 rounded-2xl border mb-6 transition-all ${
            isUserCorrect
              ? "bg-emerald-50/80 border-emerald-200 text-emerald-950"
              : "bg-amber-50/80 border-amber-200 text-amber-950"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold text-white ${
                isUserCorrect ? "bg-emerald-600" : "bg-amber-600"
              }`}
            >
              {isUserCorrect ? "✓" : "!"}
            </span>
            <h5 className="text-sm font-bold">
              {isUserCorrect ? "Correct! Well done." : "Incorrect. Study the statutory rule:"}
            </h5>
          </div>
          <p className="text-xs leading-relaxed mb-3 text-slate-700">
            {currentQ.explanation}
          </p>
          <div className="pt-2 border-t border-slate-200/60 text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span>Statutory Reference: {currentQ.lawRef}</span>
          </div>
        </div>
      )}

      {/* Controls / Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {!isAnswerSubmitted ? (
            <button
              type="button"
              onClick={handleCheckAnswer}
              disabled={selectedOption === null}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-sm transition-all ${
                selectedOption !== null
                  ? "bg-teal-500 hover:bg-teal-600 active:scale-[0.98]"
                  : "bg-slate-300 cursor-not-allowed"
              }`}
            >
              Verify Answer
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <RefreshCwIcon className="w-3.5 h-3.5" />
              <span>Try Again</span>
            </button>
          )}
        </div>

        <Link
          href="/practice"
          className="text-xs font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1 group py-1"
        >
          <span>Practice 1,500+ Questions & Video Scenarios</span>
          <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
