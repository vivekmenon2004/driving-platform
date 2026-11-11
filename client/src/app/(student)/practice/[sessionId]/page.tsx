"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CrossIcon,
  BookmarkIcon,
  BookmarkFilledIcon,
} from "@/components/ui/Icons";
import { RoadScenarioDiagram } from "@/components/ui/RoadScenarioDiagram";

interface PracticeQuestion {
  id: number;
  domain: string;
  lawRef: string;
  lessonLink: string;
  lessonName: string;
  media?: {
    type: "photo" | "diagram";
    caption: string;
    diagramType: "roundabout" | "tyre" | "junction";
  };
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const SAMPLE_QUESTIONS: PracticeQuestion[] = [
  {
    id: 1,
    domain: "Trafikregler (Traffic Rules)",
    lawRef: "TrF 3 kap. 18 § — Priority to the Right (Högerregeln)",
    lessonLink: "/theory/trafikregler/lesson-1",
    lessonName: "The Priority to the Right Rule & Exceptions",
    media: {
      type: "diagram",
      caption: "Uncontrolled residential 4-way intersection without priority signs",
      diagramType: "junction",
    },
    text: "You are driving on a paved suburban residential street approaching an intersection. To your right is an unpaved gravel road with a car approaching. No traffic signs are posted. Who must yield?",
    options: [
      "You must yield to the car on the gravel road under the priority-to-the-right rule (högerregeln).",
      "The car on the gravel road must yield because paved roads always have priority over gravel roads.",
      "The vehicle travelling at higher speed has statutory priority.",
      "Both vehicles have equal priority; whoever reaches the intersection first may proceed.",
    ],
    correctIndex: 0,
    explanation:
      "In Sweden, road surface (paved vs gravel) does not alter the priority-to-the-right rule (TrF 3 kap. 18 §). Unless there is a sign (e.g. B1, B2, B4) or an exit rule applies (e.g. property driveway), you must always yield to traffic on your right.",
  },
  {
    id: 2,
    domain: "Fordonskännedom & Manövrering",
    lawRef: "TSFS 2009:19 — Swedish Transport Agency Winter Tyre Regulations",
    lessonLink: "/theory/fordonskannedom/lesson-1",
    lessonName: "Tyres, Tread Depth & Inspection",
    media: {
      type: "photo",
      caption: "Passenger car (Category B) winter tyre depth gauge check",
      diagramType: "tyre",
    },
    text: "During the mandatory winter tyre period in Sweden (1 December – 31 March) when winter road conditions prevail, what is the minimum legal tread depth for a passenger car?",
    options: [
      "At least 3.0 millimetres in the principal tread grooves.",
      "At least 1.6 millimetres in the principal tread grooves.",
      "At least 4.0 millimetres on drive wheels and 2.0 mm on non-drive wheels.",
      "At least 5.0 millimetres regardless of road condition.",
    ],
    correctIndex: 0,
    explanation:
      "Swedish law requires a minimum tyre tread depth of 3.0 mm on winter tyres for passenger cars and light vehicles during winter road conditions (TSFS 2009:19). For summer tyres, the minimum is 1.6 mm.",
  },
  {
    id: 3,
    domain: "Trafikregler (Traffic Rules)",
    lawRef: "TrF 3 kap. 22 § — Roundabout Navigation",
    lessonLink: "/theory/trafikregler/lesson-5",
    lessonName: "Approaching, Entering & Yielding at Roundabouts",
    media: {
      type: "diagram",
      caption: "Multi-lane roundabout with entry and exit arrows",
      diagramType: "roundabout",
    },
    text: "When exiting a roundabout in Sweden, when is it legally mandatory to use your directional indicator (turn signal)?",
    options: [
      "You must indicate right well in advance before the exit, and maintain the signal until you have left the roundabout.",
      "You must indicate left while circulating and switch to right only when crossing the exit curb.",
      "Turn indicators are not required if you are in the outer lane.",
      "You must indicate right only if other vehicles are queuing at the entry.",
    ],
    correctIndex: 0,
    explanation:
      "Under TrF 3 kap. 65 §, signaling right when leaving a roundabout is mandatory by law. Signaling left on entry is optional when taking a left turn, but signaling right when exiting is strictly enforced.",
  },
];

export default function ActivePracticeSessionPage() {
  const params = useParams();
  const sessionId = params?.sessionId as string;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionIncorrect, setSessionIncorrect] = useState(0);
  const [bookmarked, setBookmarked] = useState<Record<number, boolean>>({});

  const question = SAMPLE_QUESTIONS[currentIdx] || SAMPLE_QUESTIONS[0];
  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question.correctIndex;

  const handleSelectAnswer = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    if (idx === question.correctIndex) {
      setSessionCorrect((prev) => prev + 1);
    } else {
      setSessionIncorrect((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    if (currentIdx + 1 < SAMPLE_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const toggleBookmark = (id: number) => {
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* 1. Header with Breadcrumb & Session Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/practice" className="hover:text-teal-600 transition-colors">
            Practice
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Active Drill #{sessionId || "101"}</span>
        </div>

        {/* Live Score Tally */}
        <div className="flex items-center gap-3 text-xs font-bold">
          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
            ✓ {sessionCorrect} Correct
          </span>
          <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
            ✕ {sessionIncorrect} Missed
          </span>
        </div>
      </div>

      {/* 2. Main Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
        {/* Question Header: Domain, Counter, Bookmark */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200">
              {question.domain}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500">
              Question {currentIdx + 1} of {SAMPLE_QUESTIONS.length}
            </span>
            <button
              type="button"
              onClick={() => toggleBookmark(question.id)}
              className="p-1.5 text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
              title="Bookmark Question"
            >
              {bookmarked[question.id] ? (
                <BookmarkFilledIcon className="w-4 h-4 text-amber-500" />
              ) : (
                <BookmarkIcon className="w-4 h-4 text-slate-300 hover:text-slate-500" />
              )}
            </button>
          </div>
        </div>

        {/* Media / Scenario Graphic: Authentic Vector Diagram */}
        {question.media && (
          <RoadScenarioDiagram
            type={question.media.diagramType}
            caption={question.media.caption}
          />
        )}

        {/* Question Text */}
        <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
          {question.text}
        </h2>

        {/* 4 Options with refined radio button styling */}
        <div className="space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrectOption = idx === question.correctIndex;

            let btnStyle = "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60 text-slate-800 cursor-pointer";
            if (isAnswered) {
              if (isCorrectOption) {
                btnStyle = "border-emerald-500 bg-emerald-50/70 text-emerald-950 font-bold ring-2 ring-emerald-500/20";
              } else if (isSelected) {
                btnStyle = "border-rose-500 bg-rose-50/70 text-rose-950 font-bold ring-2 ring-rose-500/20";
              } else {
                btnStyle = "border-slate-100 bg-slate-50/40 text-slate-400 opacity-60";
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isAnswered}
                onClick={() => handleSelectAnswer(idx)}
                className={`w-full min-h-[56px] p-4 rounded-2xl border text-left text-xs font-semibold transition-all flex items-start justify-between gap-3.5 ${btnStyle}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`w-6 h-6 rounded-full border flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5 transition-colors ${
                      isAnswered && isCorrectOption
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : isAnswered && isSelected
                        ? "border-rose-500 bg-rose-500 text-white"
                        : isSelected
                        ? "border-teal-500 bg-teal-500 text-white"
                        : "border-slate-300 bg-slate-50 text-slate-600"
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-relaxed">{option}</span>
                </div>

                {isAnswered && isCorrectOption && (
                  <CheckCircleIcon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                )}
                {isAnswered && isSelected && !isCorrectOption && (
                  <CrossIcon className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Immediate Feedback Card (Visible after answering) */}
        {isAnswered && (
          <div
            className={`p-5 rounded-2xl border space-y-3 animate-fade-in ${
              isCorrect
                ? "bg-emerald-50/80 border-emerald-200"
                : "bg-rose-50/80 border-rose-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-xs font-extrabold uppercase tracking-wide flex items-center gap-1.5 ${
                  isCorrect ? "text-emerald-900" : "text-rose-900"
                }`}
              >
                {isCorrect ? (
                  <>
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
                    <span>Correct Answer</span>
                  </>
                ) : (
                  <>
                    <CrossIcon className="w-4 h-4 text-rose-600" />
                    <span>Incorrect Answer</span>
                  </>
                )}
              </span>

              <span className="text-[11px] font-mono font-bold text-slate-700 bg-white/70 px-2.5 py-0.5 rounded border border-slate-200">
                {question.lawRef}
              </span>
            </div>

            <p className="text-xs text-slate-800 leading-relaxed">
              {question.explanation}
            </p>

            {/* Lesson Deep Link */}
            <div className="pt-2 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <Link
                href={question.lessonLink}
                className="text-xs font-bold text-teal-800 hover:text-teal-900 inline-flex items-center gap-1"
              >
                <span>Read Full Lesson: {question.lessonName}</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>

              {currentIdx + 1 < SAMPLE_QUESTIONS.length ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all"
                >
                  Next Question →
                </button>
              ) : (
                <Link
                  href="/practice"
                  className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold shadow-sm transition-all"
                >
                  Complete Drill
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
