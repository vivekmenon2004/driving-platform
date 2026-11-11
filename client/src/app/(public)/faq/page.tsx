"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDownIcon,
  SearchIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";

export default function FAQPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const faqs = [
    {
      category: "B-Körkort Examination",
      q: "How is the official Trafikverket theory exam structured?",
      a: "The official Swedish B-körkort theory test consists of exactly 70 questions. 65 of these questions are scored, while 5 are randomly distributed unscored calibration items. You must score at least 52 out of 65 (80.0%) to pass. The test has a strict 50-minute time limit.",
    },
    {
      category: "B-Körkort Examination",
      q: "What prerequisites do I need before taking the theory test?",
      a: "Before booking your theory exam at Trafikverket, you must possess a valid learner's permit (körkortstillstånd) and have successfully completed Risk 1 (Riskettan: alcohol, drugs, fatigue) and Risk 2 (Halkbana: skid training). Both risk trainings are valid for 5 years.",
    },
    {
      category: "B-Körkort Examination",
      q: "How long is a passed theory test valid?",
      a: "Once you pass the theory test at Trafikverket, your result is valid for 4 months. You must pass your practical driving test (körprov) within this 4-month window; otherwise, you must retake both tests.",
    },
    {
      category: "Platform & Practice",
      q: "How does the Gothenburg Dynamics Exam Simulator differ from real tests?",
      a: "Our simulator is designed to be an exact digital twin of the Trafikverket terminal interface. It replicates the 70-question format, the 50-minute countdown, the question review flag, and strict blind evaluation where no answers or hints are revealed until full test submission.",
    },
    {
      category: "Platform & Practice",
      q: "What is the Readiness Score and when should I book my test?",
      a: "The Readiness Score is an algorithmic estimate calculated from your recent mock exams, syllabus completion, and mistake bank revision. When your readiness score consistently reaches 85% or higher across all 5 domains, you are statistically primed to pass on your first attempt.",
    },
    {
      category: "Platform & Practice",
      q: "Can I study in languages other than Swedish?",
      a: "Yes. In addition to standard Swedish (Svenska), our platform supports full English and multilingual study guides in Arabic, Persian, and Ukrainian, reflecting official Trafikverket test language options.",
    },
    {
      category: "Billing & Study Passes",
      q: "Are the study passes recurring subscriptions?",
      a: "No! All our study passes (7-day, 30-day, and 90-day) are strictly one-time fixed purchases. There are zero hidden recurring charges or surprise renewals. If your pass expires, you simply decide if you wish to purchase an extension.",
    },
    {
      category: "Billing & Study Passes",
      q: "How does the 100% Pass Guarantee work?",
      a: "Our 90-Day Full Mastery pass includes our 100% Pass Guarantee. If you complete all 5 syllabus modules, maintain an 85%+ readiness score, and do not pass your official Trafikverket theory exam on your first attempt, we refund your 299 SEK purchase in full.",
    },
    {
      category: "Driving Schools",
      q: "How does the Driving School Partner program work?",
      a: "Swedish driving schools (trafikskolor) partner with Gothenburg Dynamics to monitor their students' theory progress, verify readiness before booking practical lessons, and earn 20% to 30% tiered affiliate commissions paid monthly via Bankgiro/Plusgiro.",
    },
  ];

  const categories = ["All", "B-Körkort Examination", "Platform & Practice", "Billing & Study Passes", "Driving Schools"];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCat === "All" || faq.category === selectedCat;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span>Frequently Asked Questions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Everything You Need to Know
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Got questions about Swedish B-körkort requirements, our 70-question simulator, or study passes? Find your answers below.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <SearchIcon className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. 70 questions, passing score, pass guarantee)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200/80 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 shadow-sm transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedCat(c)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCat === c
                  ? "bg-teal-500 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.map((faq, index) => {
            const isOpen = activeAccordion === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveAccordion(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60 hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </h3>
                  </div>
                  <div className={`text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDownIcon className="w-5 h-5 text-slate-400" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white text-center border border-slate-800 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            Still have questions?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-6">
            Our support team in Gothenburg is ready to help you with curriculum questions, exam bookings, or partnership inquiries.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md"
          >
            <span>Contact Support</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
