import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  BookModuleIcon,
  QuestionListIcon,
  ClockIcon,
  TrophyIcon,
  CheckIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "How It Works — Structured Swedish B-Körkort Preparation",
  description:
    "Discover how Gothenburg Dynamics prepares you to pass the Swedish Trafikverket driving theory test on your first attempt with our 4-step structured learning system.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      tag: "Foundation",
      title: "Master the 5 Official Knowledge Domains",
      desc: "Study the complete Transportstyrelsen syllabus broken down into bite-sized, interactive chapters. Every lesson links directly to official Swedish statutes (Trafikförordningen - TrF).",
      icon: BookModuleIcon,
      features: [
        "Interactive diagrams for roundabouts & högerregeln (priority-to-the-right)",
        "EcoDriving fuel-saving calculation models (gear skipping & RPM)",
        "Clear explanations of complex Swedish parking regulations (datumparkering)",
      ],
    },
    {
      step: "02",
      tag: "Algorithmic Practice",
      title: "Targeted Practice & Spaced Repetition",
      desc: "Tackle over 1,500+ authentic Swedish theory questions. Our smart algorithm identifies weak domains and populates your personal Mistake Bank for automated spaced repetition.",
      icon: QuestionListIcon,
      features: [
        "Topic-wise drilling or quick 10, 25, 50 question drills",
        "Personal Mistake Bank: repeat failed questions until 100% mastered",
        "Statutory citations provided for every correct & incorrect option",
      ],
    },
    {
      step: "03",
      tag: "Realistic Simulation",
      title: "70-Question Blind Exam Simulator",
      desc: "Simulate the authentic Trafikverket test environment. Exactly 70 questions (65 scored + 5 calibration questions), a 50-minute strict countdown timer, and a clean blind test interface.",
      icon: ClockIcon,
      features: [
        "Identical 52/65 (80%) passing score threshold",
        "Zero hints or answers revealed until full submission",
        "Post-exam domain breakdown showing where to focus review",
      ],
    },
    {
      step: "04",
      tag: "Success",
      title: "Trafikverket Exam Day Confidence",
      desc: "Track your personal Readiness Score. When your readiness hits 85%+, you are statistically primed to pass the official examination at Trafikverket on your very first try.",
      icon: TrophyIcon,
      features: [
        "Continuous readiness score gauge updated with every practice test",
        "Detailed exam-day checklist & Trafikverket booking guidelines",
        "100% Pass Guarantee on the 90-Day Full Mastery study pass",
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span>Structured Pedagogy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
            How Gothenburg Dynamics Works
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From complete beginner to licensed driver. Our 4-stage pedagogical framework guarantees you understand the Swedish traffic rules, rather than just memorising answers.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden flex flex-col justify-between hover:border-teal-300 hover:shadow-md transition-all group"
              >
                {/* Large Background Step Number */}
                <div className="absolute top-4 right-6 text-7xl sm:text-8xl font-black text-slate-100 select-none group-hover:text-teal-50 transition-colors">
                  {item.step}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-xs font-bold text-teal-700 bg-teal-50/80 px-2.5 py-1 rounded-full uppercase tracking-wider border border-teal-200/60">
                      Step {item.step} • {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <CheckIcon className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table: Traditional vs. Gothenburg Dynamics */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white mb-20 shadow-xl border border-slate-800">
          <div className="max-w-3xl mb-10">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-widest block mb-2">
              The Modern Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
              Traditional Driving Theory vs. Gothenburg Dynamics
            </h2>
            <p className="text-sm text-slate-400">
              See why hundreds of Swedish driving students switch to our active learning system every month.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                  <th className="py-3 px-4">Feature / Capability</th>
                  <th className="py-3 px-4">Traditional Textbook</th>
                  <th className="py-3 px-4 text-teal-400 font-bold">Gothenburg Dynamics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Question Pool Size</td>
                  <td className="py-4 px-4 text-slate-400">200–300 static questions</td>
                  <td className="py-4 px-4 text-teal-300 font-bold">1,500+ continuously audited questions</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Simulator Accuracy</td>
                  <td className="py-4 px-4 text-slate-400">Paper-based practice tests</td>
                  <td className="py-4 px-4 text-teal-300 font-bold">Official 70-Q / 50-Min Blind Trafikverket replica</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Mistake Analysis</td>
                  <td className="py-4 px-4 text-slate-400">Manual review by hand</td>
                  <td className="py-4 px-4 text-teal-300 font-bold">Automated Mistake Bank with spaced repetition</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Readiness Score</td>
                  <td className="py-4 px-4 text-slate-400">Guesswork / intuition</td>
                  <td className="py-4 px-4 text-teal-300 font-bold">Algorithmic Readiness Gauge (80% pass threshold)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Multi-language Study</td>
                  <td className="py-4 px-4 text-slate-400">Swedish only</td>
                  <td className="py-4 px-4 text-teal-300 font-bold">Svenska, English, Arabic, Persian, Ukrainian</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl p-8 sm:p-12 text-center text-white shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">
            Ready to Begin Your B-Körkort Preparation?
          </h2>
          <p className="text-sm sm:text-base text-teal-100 max-w-xl mx-auto mb-8 leading-relaxed">
            Start with our 50-question free trial today or explore the complete curriculum. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/register"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs text-teal-900 bg-white hover:bg-teal-50 shadow-md transition-all active:scale-[0.98]"
            >
              Start Free Trial Now
            </Link>
            <Link
              href="/theory"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs text-white bg-teal-800/60 hover:bg-teal-800/80 border border-teal-300/40 transition-all active:scale-[0.98]"
            >
              Explore Curriculum Syllabus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
