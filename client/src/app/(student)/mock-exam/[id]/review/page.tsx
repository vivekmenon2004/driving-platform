"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  CheckCircleIcon,
  CrossIcon,
  FlagIcon,
  VideoIcon,
} from "@/components/ui/Icons";

interface ReviewQuestion {
  num: number;
  domain: string;
  lawRef: string;
  text: string;
  options: string[];
  userAnswerIndex: number;
  correctAnswerIndex: number;
  isFlagged: boolean;
  explanation: string;
  media?: {
    type: "photo" | "video";
    caption: string;
  };
}

const REVIEW_QUESTIONS: ReviewQuestion[] = [
  {
    num: 1,
    domain: "Trafikregler (Traffic Rules)",
    lawRef: "TrF 3 kap. 18 § & TSFS 2012:60",
    text: "You are approaching a roundabout with two entry lanes. You intend to take the third exit (turning left). Which lane should you enter from, and when must you indicate right?",
    options: [
      "Use the left-hand lane on entry. You are not required to indicate upon entering, but you must indicate right when changing lanes to exit.",
      "Use the right-hand lane exclusively and indicate left continuously until you reach the exit.",
      "Either lane may be freely chosen without indicating, provided the vehicle yields to entry traffic.",
      "Stay in the right-hand lane and flash hazard lights before turning into the circle.",
    ],
    userAnswerIndex: 0,
    correctAnswerIndex: 0,
    isFlagged: false,
    explanation:
      "Under Swedish traffic rules (TrF 3 kap.), enter the left-hand lane when intending to turn left. Indicating upon entering is optional, but signaling right when exiting is mandatory by statute.",
    media: {
      type: "video",
      caption: "Video simulation: 2-lane urban roundabout approach",
    },
  },
  {
    num: 2,
    domain: "Fordonskännedom & Manövrering",
    lawRef: "Transportstyrelsens föreskrifter (TSFS 2009:19)",
    text: "What is the statutory minimum tyre tread depth required on winter tyres for a passenger car (Category B) during the legal winter period in Sweden?",
    options: [
      "At least 3.0 millimetres across the principal tread grooves.",
      "At least 1.6 millimetres across the principal tread grooves.",
      "At least 4.0 millimetres on driven wheels and 2.0 mm on non-driven wheels.",
      "At least 5.0 millimetres during snowfall and 3.0 mm on dry roads.",
    ],
    userAnswerIndex: 1, // Mistake!
    correctAnswerIndex: 0,
    isFlagged: true,
    explanation:
      "TSFS 2009:19 mandates at least 3.0 mm for winter tyres on passenger cars during winter road conditions (1 Dec – 31 Mar). 1.6 mm is only the legal limit for summer tyres.",
    media: {
      type: "photo",
      caption: "Inspection photo: winter tyre tread gauge indicator",
    },
  },
  {
    num: 3,
    domain: "Trafikregler (Traffic Rules)",
    lawRef: "TrF 3 kap. 18 § — Priority to the Right (Högerregeln)",
    text: "You are driving vehicle A on a street with no priority signs, stop signs, or traffic signals. Vehicle B is approaching from your right. Which vehicle has the legal duty to give way?",
    options: [
      "Vehicle A must give way according to the priority-to-the-right rule (högerregeln).",
      "Vehicle B must give way because Vehicle A is continuing straight ahead.",
      "The vehicle that arrives at the intersection line first always has the right of way.",
      "Both vehicles must stop completely and flash headlights before proceeding.",
    ],
    userAnswerIndex: 0,
    correctAnswerIndex: 0,
    isFlagged: false,
    explanation:
      "Priority to the right applies at all intersections where no priority road sign, yield sign, or traffic signals are present.",
  },
  {
    num: 4,
    domain: "Trafiksäkerhet (Road Safety)",
    lawRef: "TrF 3 kap. 61 § — Pedestrian Crossings",
    text: "As you approach a pedestrian crossing, a delivery van is parked right before the zebra crossing, partially obstructing your view. What must you do?",
    options: [
      "Slow down well in advance, prepare to stop, and only proceed when you have verified no pedestrian is crossing or about to cross.",
      "Maintain current speed and sound the horn to alert any hidden pedestrians.",
      "Overtake the parked van immediately on the left before reaching the crossing.",
      "Speed up past the van so you clear the danger zone as quickly as possible.",
    ],
    userAnswerIndex: 0,
    correctAnswerIndex: 0,
    isFlagged: true,
    explanation:
      "Drivers must yield to pedestrians on or about to step onto a crossing. When visibility is obstructed by a parked vehicle, speed must be reduced to walking pace or stopped.",
  },
  {
    num: 5,
    domain: "Trafiksäkerhet & Miljö",
    lawRef: "TrF 3 kap. 65 § — Highway Merging",
    text: "You are accelerating to 110 km/h to merge onto the motorway. A vehicle in the right lane of the motorway does not change lanes. What is the rule?",
    options: [
      "Mutual consideration applies; neither has priority. You must adapt speed in the acceleration lane to merge smoothly into a suitable gap.",
      "Motorway traffic has absolute statutory priority; you must stop completely at the end of the ramp.",
      "You have priority because you are joining from the right-hand acceleration ramp.",
      "You must immediately honk and brake hard to 30 km/h.",
    ],
    userAnswerIndex: 1, // Mistake!
    correctAnswerIndex: 0,
    isFlagged: false,
    explanation:
      "Under TrF 3:65 §, mutual consideration applies between merging vehicles and vehicles already on the motorway when no yield sign is present.",
  },
];

export default function MockExamReviewPage() {
  const params = useParams();
  const examId = (params?.id as string) || "test-101";

  const [activeFilter, setActiveFilter] = useState<"all" | "incorrect" | "flagged">("all");

  const filteredQuestions = REVIEW_QUESTIONS.filter((q) => {
    if (activeFilter === "incorrect") return q.userAnswerIndex !== q.correctAnswerIndex;
    if (activeFilter === "flagged") return q.isFlagged;
    return true;
  });

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-2">
              <Link href="/mock-exam/history" className="hover:text-teal-600">
                Exam History
              </Link>
              <span>/</span>
              <Link href={`/mock-exam/${examId}/result`} className="hover:text-teal-600">
                Exam Result
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-bold">Review Audit</span>
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Exam Audit & Question Review
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Review answers, legal references, and explanations for Exam #{examId}
            </p>
          </div>

          <Link
            href={`/mock-exam/${examId}/result`}
            className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 self-start sm:self-auto"
          >
            ← Back to Result
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 pt-6 mt-6 border-t border-slate-100 text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeFilter === "all"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Questions ({REVIEW_QUESTIONS.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("incorrect")}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeFilter === "incorrect"
                ? "bg-rose-600 text-white shadow-xs"
                : "bg-rose-50 text-rose-700 hover:bg-rose-100"
            }`}
          >
            Incorrect Only ({REVIEW_QUESTIONS.filter((q) => q.userAnswerIndex !== q.correctAnswerIndex).length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("flagged")}
            className={`px-3.5 py-1.5 rounded-full transition-all inline-flex items-center gap-1.5 ${
              activeFilter === "flagged"
                ? "bg-amber-600 text-white shadow-xs"
                : "bg-amber-50 text-amber-800 hover:bg-amber-100"
            }`}
          >
            <FlagIcon className="w-3 h-3" />
            Flagged ({REVIEW_QUESTIONS.filter((q) => q.isFlagged).length})
          </button>
        </div>
      </div>

      {/* Questions Review List */}
      <div className="space-y-6">
        {filteredQuestions.map((q) => {
          const isCorrect = q.userAnswerIndex === q.correctAnswerIndex;

          return (
            <div
              key={q.num}
              className={`bg-white rounded-3xl p-6 sm:p-8 border shadow-xs space-y-4 ${
                isCorrect ? "border-slate-200/80" : "border-rose-200"
              }`}
            >
              {/* Question Top Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800">
                    Question #{q.num}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {q.domain}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {q.isFlagged && (
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 inline-flex items-center gap-1">
                      <FlagIcon className="w-3 h-3 text-amber-600" />
                      Flagged
                    </span>
                  )}
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full inline-flex items-center gap-1 ${
                      isCorrect
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-rose-50 text-rose-800 border border-rose-200"
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircleIcon className="w-3 h-3 text-emerald-600" />
                        Correct
                      </>
                    ) : (
                      <>
                        <CrossIcon className="w-3 h-3 text-rose-600" />
                        Incorrect
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Media Preview if question has media */}
              {q.media && (
                <div className="p-3.5 bg-slate-900 text-slate-200 rounded-xl text-xs flex items-center justify-between border border-slate-800 shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded-lg bg-teal-500/20 text-teal-400">
                      <VideoIcon className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="font-semibold text-white mr-1.5">
                        {q.media.type === "video" ? "Trafikverket Video Clip" : "Technical Diagram"}:
                      </span>
                      <span className="text-slate-300">{q.media.caption}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    HQ 1080p
                  </span>
                </div>
              )}

              {/* Question Text */}
              <h2 className="text-sm font-bold text-slate-900">{q.text}</h2>

              {/* Options Breakdown with User Answer & Correct Answer markers */}
              <div className="space-y-2">
                {q.options.map((opt, optIdx) => {
                  const isUserChoice = q.userAnswerIndex === optIdx;
                  const isRightChoice = q.correctAnswerIndex === optIdx;

                  let rowStyle = "border-slate-100 bg-slate-50/50 text-slate-600";
                  if (isRightChoice) {
                    rowStyle = "border-emerald-300 bg-emerald-50/80 text-emerald-950 font-bold";
                  } else if (isUserChoice && !isRightChoice) {
                    rowStyle = "border-rose-300 bg-rose-50/80 text-rose-950 font-bold line-through";
                  }

                  return (
                    <div
                      key={optIdx}
                      className={`p-3.5 rounded-xl border text-xs flex items-center justify-between transition-all ${rowStyle}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-bold w-5">{String.fromCharCode(65 + optIdx)}.</span>
                        <span>{opt}</span>
                      </div>
                      <div className="text-[10px] font-bold">
                        {isRightChoice && (
                          <span className="text-emerald-700 inline-flex items-center gap-1 font-bold">
                            <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600" />
                            Correct Answer
                          </span>
                        )}
                        {isUserChoice && !isRightChoice && (
                          <span className="text-rose-700 inline-flex items-center gap-1 font-bold">
                            <CrossIcon className="w-3.5 h-3.5 text-rose-600" />
                            Your Selection
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Legal Statute & Official Explanation */}
              <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/80 space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-800">
                  Legal Basis: {q.lawRef}
                </span>
                <p className="text-xs text-slate-800 leading-relaxed">
                  {q.explanation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
