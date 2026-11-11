"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircleIcon } from "@/components/ui/Icons";

export default function StudentProfilePage() {
  const [name, setName] = useState("Erik Lindqvist");
  const [email, setEmail] = useState("erik.lindqvist@example.se");
  const [phone, setPhone] = useState("+46 70 123 4567");
  const [language, setLanguage] = useState("en");
  const [examDate, setExamDate] = useState("2026-12-12");
  const [category, setCategory] = useState("B");
  const [savedMessage, setSavedMessage] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* 1. Header & Profile Sub-Nav */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 mb-2">
            <span>Student Account</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Student Profile & Study Preferences
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage your personal contact details, target Trafikverket exam date, and language options.
          </p>
        </div>

        {/* Profile Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 text-xs font-bold">
          <Link
            href="/profile"
            className="px-4 py-2 rounded-xl bg-slate-900 text-white shadow-xs"
          >
            General Profile
          </Link>
          <Link
            href="/profile/subscription"
            className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Subscription & Passes
          </Link>
          <Link
            href="/profile/consent"
            className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Consent & Privacy
          </Link>
          <Link
            href="/profile/security"
            className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Security & GDPR Data
          </Link>
        </div>
      </div>

      {/* 2. Edit Profile Form */}
      <form
        onSubmit={handleSave}
        className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6"
      >
        {savedMessage && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
            <span>Profile settings saved successfully!</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Preferred Study Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-teal-500 bg-white"
            >
              <option value="en">English (Official Translation Standard)</option>
              <option value="sv">Svenska (Original Swedish Statutes)</option>
              <option value="ar">العربية (Arabic Translation)</option>
              <option value="fa">فارسی (Persian Translation)</option>
              <option value="tr">Türkçe (Turkish Translation)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Target Trafikverket Exam Date
            </label>
            <input
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-teal-500"
            />
            <span className="text-[10px] text-teal-600 font-bold block mt-1">
              31 days until your booked theory examination
            </span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Licence Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-teal-500 bg-white"
            >
              <option value="B">Category B — Passenger Car (B-körkort)</option>
              <option value="AM">Category AM — Moped Class I</option>
              <option value="A2">Category A2 — Motorcycle</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold shadow-sm transition-all"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

