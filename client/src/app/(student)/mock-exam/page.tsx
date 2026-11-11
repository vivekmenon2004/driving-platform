"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ClockIcon,
  VideoIcon,
  FlagIcon,
} from "@/components/ui/Icons";
import { RoadScenarioDiagram } from "@/components/ui/RoadScenarioDiagram";

interface ExamQuestion {
  num: number;
  domain: string;
  lawRef: string;
  media?: {
    type: "video" | "photo";
    caption: string;
    duration?: string;
    diagramType?: "roundabout" | "junction" | "tyre" | "pedestrian" | "highway" | "custom";
    customUrl?: string;
  };
  text: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

const INITIAL_EXAM_QUESTIONS: Record<number, ExamQuestion> = {
  1: {
    num: 1,
    domain: "Trafikregler (Traffic Rules)",
    lawRef: "TrF 3 kap. 18 § & TSFS 2012:60",
    media: {
      type: "video",
      caption: "Trafikverket Video Clip (0:08): Approaching two-lane roundabout in urban traffic",
      duration: "0:08",
      diagramType: "roundabout",
    },
    text: "You are approaching a roundabout with two entry lanes as shown in the video simulation. You intend to take the third exit (turning left). Which lane should you enter from, and when must you indicate right?",
    options: [
      "Use the left-hand lane on entry. You are not required to indicate upon entering, but you must indicate right when changing lanes to exit.",
      "Use the right-hand lane exclusively and indicate left continuously until you reach the exit.",
      "Either lane may be freely chosen without indicating, provided the vehicle yields to entry traffic.",
      "Stay in the right-hand lane and flash hazard lights before turning into the circle.",
    ],
    correctIndex: 0,
    explanation: "Under Swedish traffic rules (TrF 3 kap.), enter the left-hand lane when intending to turn left. Indicating upon entering is optional, but signaling right when exiting is mandatory by statute.",
  },
  2: {
    num: 2,
    domain: "Fordonskännedom & Manövrering",
    lawRef: "Transportstyrelsens föreskrifter (TSFS 2009:19)",
    media: {
      type: "photo",
      caption: "Technical Inspection Photo: Passenger car winter tyre tread depth gauge",
      diagramType: "tyre",
    },
    text: "Examine the technical inspection photo above. What is the statutory minimum tyre tread depth required on winter tyres for a passenger car (Category B) during the legal winter period in Sweden?",
    options: [
      "At least 3.0 millimetres across the principal tread grooves.",
      "At least 1.6 millimetres across the principal tread grooves.",
      "At least 4.0 millimetres on driven wheels and 2.0 mm on non-driven wheels.",
      "At least 5.0 millimetres during snowfall and 3.0 mm on dry roads.",
    ],
    correctIndex: 0,
    explanation: "Swedish law (TSFS 2009:19) requires a minimum tread depth of 3.0 mm on winter tyres for passenger cars between 1 December and 31 March when winter road conditions apply.",
  },
  3: {
    num: 3,
    domain: "Trafikregler (Traffic Rules)",
    lawRef: "TrF 3 kap. 18 § — Priority to the Right (Högerregeln)",
    media: {
      type: "photo",
      caption: "Scenario Photo: Uncontrolled four-way intersection with vehicle B approaching from right",
      diagramType: "junction",
    },
    text: "Look at the junction diagram photo. You are driving vehicle A on a street with no priority signs, stop signs, or traffic signals. Vehicle B is approaching from your right. Which vehicle has the legal duty to give way?",
    options: [
      "Vehicle A must give way according to the priority-to-the-right rule (högerregeln).",
      "Vehicle B must give way because Vehicle A is continuing straight ahead.",
      "The vehicle that arrives at the intersection line first always has the right of way.",
      "Both vehicles must stop completely and flash headlights before proceeding.",
    ],
    correctIndex: 0,
    explanation: "The priority-to-the-right rule (högerregeln) applies at all intersections where no priority road sign, yield sign, or traffic signals are present.",
  },
  4: {
    num: 4,
    domain: "Trafiksäkerhet (Road Safety)",
    lawRef: "TrF 3 kap. 61 § — Pedestrian Crossings (Övergångsställe)",
    media: {
      type: "video",
      caption: "Trafikverket Video Clip (0:06): Approach to zebra crossing with delivery van parked on right",
      duration: "0:06",
      diagramType: "pedestrian",
    },
    text: "Watch the video clip carefully: As you approach the pedestrian crossing, a delivery van is parked right before the zebra crossing, partially obstructing your view. What must you do?",
    options: [
      "Slow down well in advance, prepare to stop, and only proceed when you have verified no pedestrian is crossing or about to cross.",
      "Maintain current speed and sound the horn to alert any hidden pedestrians.",
      "Overtake the parked van immediately on the left before reaching the crossing.",
      "Speed up past the van so you clear the danger zone as quickly as possible.",
    ],
    correctIndex: 0,
    explanation: "Drivers must yield to pedestrians on or about to step onto a pedestrian crossing. When view is obstructed by a parked vehicle, speed must be reduced to walking pace or stopped.",
  },
  5: {
    num: 5,
    domain: "Trafiksäkerhet & Miljö",
    lawRef: "TrF 3 kap. 65 § — Highway Merging",
    media: {
      type: "video",
      caption: "Trafikverket Video Clip (0:09): Merging onto Motorway (Motorväg E4) at 110 km/h",
      duration: "0:09",
      diagramType: "highway",
    },
    text: "Watch the acceleration lane video: You are accelerating to 110 km/h to merge onto the motorway. A vehicle in the right lane of the motorway does not change lanes. What is the rule?",
    options: [
      "Mutual consideration applies; neither has priority. You must adapt speed in the acceleration lane to merge smoothly into a suitable gap.",
      "Motorway traffic has absolute statutory priority; you must stop completely at the end of the ramp.",
      "You have priority because you are joining from the right-hand acceleration ramp.",
      "You must immediately honk and brake hard to 30 km/h.",
    ],
    correctIndex: 0,
    explanation: "Under Swedish law (TrF 3 kap. 65 §), when entering a motorway via an acceleration lane without yield signs, mutual consideration applies between merging and through traffic.",
  },
};

export default function MockExamSimulatorPage() {
  const router = useRouter();

  // Questions Database (70 questions; 1-5 detailed; 6-70 synthesized)
  const [questions, setQuestions] = useState<Record<number, ExamQuestion>>(() => {
    const full: Record<number, ExamQuestion> = { ...INITIAL_EXAM_QUESTIONS };
    for (let i = 6; i <= 70; i++) {
      full[i] = {
        num: i,
        domain:
          i % 4 === 0
            ? "Trafikregler (Traffic Rules)"
            : i % 4 === 1
            ? "Trafiksäkerhet (Road Safety)"
            : i % 4 === 2
            ? "Fordonskännedom & Manövrering"
            : "Miljö & Ecodriving",
        lawRef: `TrF & TSFS 2019:74 Regulation §${i + 12}`,
        text: `Official simulation question #${i}: Examine the Swedish traffic scenario regarding statutory roadway duty, sign priority, and vehicle operation. Which of the following statements represents the correct course of legal action?`,
        options: [
          "Comply with standard Trafikverket safety distance and give way according to Swedish Traffic Ordinance.",
          "Maintain current velocity and sound acoustic horn warning.",
          "Disregard right-hand priority when entering an arterial roadway.",
          "Accelerate past the intersection line without verifying cross-traffic visibility.",
        ],
        correctIndex: 0,
        explanation: "Swedish statutory driving requirements mandate mutual consideration, correct observation technique, and strict adherence to Traffic Ordinance rules.",
      };
    }
    return full;
  });

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [markedQuestions, setMarkedQuestions] = useState<Record<number, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(50 * 60); // 50 minutes countdown
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // In-simulation Admin Question Authoring Modal
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [authoringForm, setAuthoringForm] = useState<ExamQuestion>({
    num: 1,
    domain: "Trafikregler (Traffic Rules)",
    lawRef: "TrF 3 kap. 18 §",
    media: {
      type: "video",
      caption: "Custom Scenario Clip (0:08)",
      duration: "0:08",
      diagramType: "roundabout",
    },
    text: "",
    options: ["", "", "", ""],
    correctIndex: 0,
    explanation: "",
  });

  // Strict 50-minute timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const answeredCount = Object.keys(markedQuestions).length;
  const flaggedCount = Object.values(flaggedQuestions).filter(Boolean).length;
  const currentQData = questions[currentQuestion] || questions[1];

  const handleSelectOption = (optIdx: number) => {
    setMarkedQuestions((prev) => ({ ...prev, [currentQuestion]: optIdx }));
  };

  const toggleFlag = (qNum: number) => {
    setFlaggedQuestions((prev) => ({ ...prev, [qNum]: !prev[qNum] }));
  };

  // Open Admin Authoring Modal
  const handleOpenAdminEditor = () => {
    const existing = questions[currentQuestion];
    setAuthoringForm({
      ...existing,
      options: [...existing.options],
    });
    setIsAdminModalOpen(true);
  };

  // Save Admin Authoring Form
  const handleSaveAdminQuestion = () => {
    setQuestions((prev) => ({
      ...prev,
      [authoringForm.num]: { ...authoringForm },
    }));
    setIsAdminModalOpen(false);
  };

  const handleSubmitExam = () => {
    router.push("/mock-exam/test-101/result");
  };

  return (
    <div className="space-y-6">
      {/* 1. Official Simulator Header Bar */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-widest uppercase text-rose-400">
              Official Trafikverket Simulation Mode (Category B)
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            70-Question Theory Examination Simulator
          </h1>
          <p className="text-xs text-slate-400">
            Passing threshold: 52 / 65 points (80%) • 5 trial questions excluded from score
          </p>
        </div>

        <div className="flex items-center gap-4 self-end md:self-center">
          {/* Strict 50-minute Timer */}
          <div className="bg-slate-800/90 border border-slate-700 px-4 py-2 rounded-2xl flex items-center gap-2.5">
            <ClockIcon className="w-5 h-5 text-teal-400" />
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-400 block leading-none">TIME REMAINING</span>
              <span className={`text-base font-black tracking-wider ${timeLeft < 300 ? "text-rose-400 animate-pulse" : "text-white"}`}>
                {formatTimer(timeLeft)}
              </span>
            </div>
          </div>

          {/* Admin Media & Question Editor Button */}
          <button
            type="button"
            onClick={handleOpenAdminEditor}
            className="px-3.5 py-2 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/30 text-xs font-bold transition-colors flex items-center gap-1.5"
            title="Admin question editor"
          >
            <VideoIcon className="w-3.5 h-3.5" />
            <span>Admin Editor</span>
          </button>

          {/* Submit Exam Button */}
          <button
            type="button"
            onClick={() => setIsSubmitModalOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-black shadow-md transition-all active:scale-[0.98]"
          >
            Submit Exam
          </button>
        </div>
      </div>

      {/* 2. Simulator Body: Left (Question Matrix) vs Right (Active Question Card) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (4 cols): Question Matrix (1-70) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Question Matrix (1–70)
              </h2>
              <p className="text-[11px] text-slate-400">
                {answeredCount} answered • {flaggedCount} flagged
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggleFlag(currentQuestion)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                flaggedQuestions[currentQuestion]
                  ? "bg-amber-100 border-amber-300 text-amber-900"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <FlagIcon className={`w-3.5 h-3.5 ${flaggedQuestions[currentQuestion] ? "text-amber-600" : "text-slate-400"}`} />
              <span>{flaggedQuestions[currentQuestion] ? "Flagged" : "Flag for Review"}</span>
            </button>
          </div>

          {/* 70 Questions Grid */}
          <div className="grid grid-cols-7 sm:grid-cols-10 lg:grid-cols-7 gap-1.5 max-h-[380px] overflow-y-auto p-1">
            {Array.from({ length: 70 }, (_, i) => i + 1).map((qNum) => {
              const isCurrent = currentQuestion === qNum;
              const isAnswered = markedQuestions[qNum] !== undefined;
              const isFlagged = flaggedQuestions[qNum];
              const hasMedia = questions[qNum]?.media !== undefined;

              let btnBg = "bg-slate-100 text-slate-700 hover:bg-slate-200";
              if (isAnswered) btnBg = "bg-teal-600 text-white font-bold";
              if (isCurrent) btnBg += " ring-2 ring-slate-900 ring-offset-1 font-black";

              return (
                <button
                  key={qNum}
                  type="button"
                  onClick={() => setCurrentQuestion(qNum)}
                  className={`h-8 rounded-lg text-[11px] relative flex items-center justify-center transition-all ${btnBg}`}
                >
                  <span>{qNum}</span>
                  {isFlagged && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500" />
                  )}
                  {hasMedia && !isFlagged && (
                    <span className="absolute -bottom-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-bold">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-md bg-teal-600" /> Answered
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-md bg-amber-500" /> Flagged
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-md bg-indigo-400" /> Video/Photo
            </span>
          </div>
        </div>

        {/* Right Column (8 cols): Question Card */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
          {/* Header of Question */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200">
                {currentQData.domain}
              </span>
              <p className="text-[11px] text-slate-400 font-semibold mt-1">
                Statute: {currentQData.lawRef}
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs font-black text-slate-900">
                Question {currentQuestion} of 70
              </span>
            </div>
          </div>

          {/* Media / Video Simulation Player or Photo Diagram: Vector Road Scenario */}
          {currentQData.media && (
            <RoadScenarioDiagram
              type={currentQData.media.diagramType || "junction"}
              caption={currentQData.media.caption}
            />
          )}

          {/* Question Text */}
          <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
            {currentQData.text}
          </h2>

          {/* Options (Clean Blind Testing Mode: No instant correctness shown) */}
          <div className="space-y-3">
            {currentQData.options.map((opt, idx) => {
              const isSelected = markedQuestions[currentQuestion] === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full min-h-[56px] p-4 rounded-2xl border text-left text-xs font-semibold transition-all flex items-start gap-3.5 cursor-pointer ${
                    isSelected
                      ? "border-teal-500 bg-teal-50/50 text-teal-950 ring-2 ring-teal-500/20 font-bold"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full border flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? "border-teal-500 bg-teal-500 text-white"
                        : "border-slate-300 bg-slate-50 text-slate-600"
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="leading-relaxed">{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Stepper Navigation: Previous / Next */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              disabled={currentQuestion === 1}
              onClick={() => setCurrentQuestion((prev) => Math.max(1, prev - 1))}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40"
            >
              ← Previous
            </button>

            <span className="text-xs text-slate-400">
              {answeredCount} of 70 answered
            </span>

            {currentQuestion < 70 ? (
              <button
                type="button"
                onClick={() => setCurrentQuestion((prev) => Math.min(70, prev + 1))}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
              >
                Next →
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(true)}
                className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold shadow-md transition-colors"
              >
                Finish & Submit
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. In-Simulation Admin Question Editor Modal */}
      {isAdminModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-black text-slate-900">
                Admin Editor: Question #{authoringForm.num}
              </h3>
              <button
                type="button"
                onClick={() => setIsAdminModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-lg"
              >
                ✕
              </button>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">
                Media Attachment (Photo or 8s Video Simulation)
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <button
                  type="button"
                  onClick={() =>
                    setAuthoringForm({
                      ...authoringForm,
                      media: {
                        type: "video",
                        caption: "Trafikverket Video Simulation (0:08)",
                        duration: "0:08",
                        diagramType: "roundabout",
                      },
                    })
                  }
                  className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer ${
                    authoringForm.media?.type === "video"
                      ? "bg-teal-50 border-teal-500 text-teal-900"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <VideoIcon className="w-3.5 h-3.5 text-teal-600" />
                  <span>Attach 8s Video Clip</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setAuthoringForm({
                      ...authoringForm,
                      media: {
                        type: "photo",
                        caption: "Scenario Photo / Diagram",
                        diagramType: "junction",
                      },
                    })
                  }
                  className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer ${
                    authoringForm.media?.type === "photo"
                      ? "bg-teal-50 border-teal-500 text-teal-900"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="font-bold text-teal-600">PHOTO</span>
                  <span>Attach Road Diagram</span>
                </button>
              </div>

              {authoringForm.media && (
                <input
                  type="text"
                  value={authoringForm.media.caption}
                  onChange={(e) =>
                    setAuthoringForm({
                      ...authoringForm,
                      media: { ...authoringForm.media!, caption: e.target.value },
                    })
                  }
                  placeholder="Media caption..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
                />
              )}
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">
                Question Text
              </label>
              <textarea
                value={authoringForm.text}
                onChange={(e) =>
                  setAuthoringForm({ ...authoringForm, text: e.target.value })
                }
                rows={3}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-slate-500">
                Options & Select Correct Index
              </label>
              {authoringForm.options.map((opt, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="admin-correct-idx"
                    checked={authoringForm.correctIndex === idx}
                    onChange={() =>
                      setAuthoringForm({ ...authoringForm, correctIndex: idx })
                    }
                  />
                  <input
                    type="text"
                    value={opt}
                    onChange={(e) => {
                      const newOpts = [...authoringForm.options];
                      newOpts[idx] = e.target.value;
                      setAuthoringForm({ ...authoringForm, options: newOpts });
                    }}
                    className="flex-1 p-2 rounded-xl border border-slate-200 text-xs"
                  />
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsAdminModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveAdminQuestion}
                className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold shadow-sm"
              >
                Save to Simulator
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Submission Confirmation Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-black">
              70
            </div>

            <h3 className="text-lg font-black text-slate-900">
              Submit Official Examination?
            </h3>

            <p className="text-xs text-slate-500">
              You have answered <strong>{answeredCount} of 70</strong> questions.
              {70 - answeredCount > 0 && (
                <span className="text-rose-600 block mt-1 font-bold">
                  Warning: You have {70 - answeredCount} unanswered questions which will be graded as 0.
                </span>
              )}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-3">
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(false)}
                className="py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Return to Test
              </button>
              <button
                type="button"
                onClick={handleSubmitExam}
                className="py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold shadow-md"
              >
                Confirm & Grade
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
