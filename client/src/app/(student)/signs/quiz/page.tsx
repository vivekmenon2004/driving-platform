"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  CheckCircleIcon,
  FlameIcon,
  ClockIcon,
} from "@/components/ui/Icons";
import { SwedishTrafficSign } from "@/components/ui/SwedishTrafficSign";

interface QuizQuestion {
  code: string;
  iconSymbol: string;
  correctAnswer: string;
  swedishName: string;
  options: string[];
  explanation: string;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    code: "B1",
    iconSymbol: "▽",
    correctAnswer: "Give Way / Yield (Väjningsplikt)",
    swedishName: "Väjningsplikt (TrF 3 kap. 19 §)",
    options: [
      "Give Way / Yield (Väjningsplikt)",
      "Priority Road (Huvudled)",
      "End of Priority Road",
      "Compulsory Stop (Stopplikt)",
    ],
    explanation: "Under TrF 3:19 §, you must yield the right of way to vehicles approaching on the crossing road.",
  },
  {
    code: "A20",
    iconSymbol: "🚧",
    correctAnswer: "Road Work Ahead (Varning för vägarbete)",
    swedishName: "Varning för vägarbete (TSFS 2019:74)",
    options: [
      "Loose Chippings / Gravel",
      "Road Work Ahead (Varning för vägarbete)",
      "Danger / General Warning",
      "Narrow Road Ahead",
    ],
    explanation: "Warns of active construction, road workers, or machinery ahead. Speed must be promptly adjusted.",
  },
  {
    code: "B4",
    iconSymbol: "◇",
    correctAnswer: "Priority Road (Huvudled)",
    swedishName: "Huvudled (TrF 3 kap. 18 §)",
    options: [
      "Priority Road (Huvudled)",
      "Motorway Start",
      "Home Zone / Gångfartsområde",
      "Give Way to Oncoming Vehicles",
    ],
    explanation: "Drivers on this road have priority over cross traffic at all upcoming intersections until the end sign.",
  },
  {
    code: "C1",
    iconSymbol: "⛔",
    correctAnswer: "No Entry for Any Vehicle (Förbud mot infart)",
    swedishName: "Förbud mot infart (TSFS 2019:74)",
    options: [
      "No Stopping or Standing",
      "No Entry for Any Vehicle (Förbud mot infart)",
      "Passing Prohibited",
      "End of Speed Limit",
    ],
    explanation: "Statutory prohibition against vehicular entry from this direction.",
  },
  {
    code: "E11",
    iconSymbol: "🚶",
    correctAnswer: "Home Zone / Walking Pace Area (Gångfartsområde)",
    swedishName: "Gångfartsområde (TrF 8 kap. 1 §)",
    options: [
      "Pedestrian Zone / Gågata",
      "School Crossing Zone",
      "Home Zone / Walking Pace Area (Gångfartsområde)",
      "Shared Footpath and Cycle Track",
    ],
    explanation: "Drivers must not exceed walking pace (approx 5-7 km/h) and must yield to all pedestrians.",
  },
];

export default function RapidSignQuizPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timer, setTimer] = useState(15);
  const [isFinished, setIsFinished] = useState(false);
  const [missedQuestions, setMissedQuestions] = useState<QuizQuestion[]>([]);

  const question = QUIZ_QUESTIONS[currentIdx];

  const handleAnswer = useCallback(
    (option: string) => {
      setSelectedOption(option);
      if (option === question.correctAnswer) {
        setScore((prev) => prev + 1);
        setStreak((prev) => prev + 1);
      } else {
        setStreak(0);
        setMissedQuestions((prev) => [...prev, question]);
      }
    },
    [question]
  );

  // Timer countdown
  useEffect(() => {
    if (selectedOption !== null || isFinished) return;
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          handleAnswer("");
          return 15;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedOption, isFinished, handleAnswer]);

  const handleNext = () => {
    setSelectedOption(null);
    setTimer(15);
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setStreak(0);
    setTimer(15);
    setIsFinished(false);
    setMissedQuestions([]);
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/signs" className="hover:text-teal-600 transition-colors">
            Traffic Signs Library
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Rapid Sign Quiz</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
            <FlameIcon className="w-3.5 h-3.5 text-amber-500" />
            <span>Streak: {streak}</span>
          </span>
        </div>
      </div>

      {!isFinished ? (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          {/* Progress & Timer Bar */}
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-500">
              Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
            </span>
            <div className="flex items-center gap-1.5 text-rose-600">
              <ClockIcon className="w-4 h-4" />
              <span>{timer}s</span>
            </div>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                timer < 5 ? "bg-rose-500" : "bg-teal-500"
              }`}
              style={{ width: `${(timer / 15) * 100}%` }}
            />
          </div>

          {/* Sign Visual Card: Authentic Swedish Vector Sign */}
          <div className="py-8 bg-slate-50 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center space-y-3">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-800 shadow-xs">
              Sign Code: {question.code}
            </span>
            <div className="py-2 flex items-center justify-center">
              <SwedishTrafficSign code={question.code} size="xl" />
            </div>
            <p className="text-xs font-bold text-slate-700">
              What is the official meaning of this Swedish road sign?
            </p>
          </div>

          {/* 4 Multiple Choice Options */}
          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === question.correctAnswer;
              let btnClass = "border-slate-200 bg-white hover:bg-slate-50 text-slate-800";

              if (selectedOption !== null) {
                if (isCorrect) {
                  btnClass = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                } else if (isSelected) {
                  btnClass = "border-rose-500 bg-rose-50 text-rose-950 font-bold";
                } else {
                  btnClass = "border-slate-100 bg-slate-50 text-slate-400 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={selectedOption !== null}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-4 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${btnClass}`}
                >
                  <span>{option}</span>
                  {selectedOption !== null && isCorrect && (
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner & Next CTA */}
          {selectedOption !== null && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 animate-fade-in">
              <p className="text-xs text-slate-700">
                <span className="font-bold text-slate-900">{question.swedishName}: </span>
                {question.explanation}
              </p>
              <button
                type="button"
                onClick={handleNext}
                className="w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
              >
                {currentIdx + 1 < QUIZ_QUESTIONS.length ? "Next Question" : "See Final Score"}
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Completed Screen */
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <CheckCircleIcon className="w-8 h-8 text-teal-600" />
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Rapid Sign Quiz Completed!
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Your accuracy has been logged to your Traffic Signs profile.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto flex items-center justify-around">
            <div>
              <p className="text-2xl font-black text-slate-900">
                {score} / {QUIZ_QUESTIONS.length}
              </p>
              <p className="text-[11px] font-bold text-slate-400">Score</p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <p className="text-2xl font-black text-teal-600">
                {Math.round((score / QUIZ_QUESTIONS.length) * 100)}%
              </p>
              <p className="text-[11px] font-bold text-slate-400">Accuracy</p>
            </div>
          </div>

          {missedQuestions.length > 0 && (
            <div className="text-left bg-rose-50/60 border border-rose-200 rounded-2xl p-4 space-y-2">
              <p className="text-xs font-bold text-rose-900">
                Signs to Review ({missedQuestions.length}):
              </p>
              <ul className="space-y-1 text-xs text-rose-800">
                {missedQuestions.map((q) => (
                  <li key={q.code} className="flex items-center gap-2">
                    <span className="font-bold">{q.code}</span> — {q.correctAnswer}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              type="button"
              onClick={handleRestart}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
            >
              Play Again
            </button>
            <Link
              href="/signs"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-bold transition-all"
            >
              Back to Signs Library
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
