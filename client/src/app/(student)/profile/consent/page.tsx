"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircleIcon } from "@/components/ui/Icons";

export default function ConsentSettingsPage() {
  const [schoolSharing, setSchoolSharing] = useState(true);
  const [telemetry, setTelemetry] = useState(true);
  const [marketingEmail, setMarketingEmail] = useState(false);
  const [legalUpdates, setLegalUpdates] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* 1. Header & Sub-Nav */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 mb-2">
            <span>GDPR & Privacy Controls</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Consent & Privacy Preferences
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage granular data sharing with driving schools, platform telemetry, and communication preferences.
          </p>
        </div>

        {/* Profile Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 text-xs font-bold">
          <Link
            href="/profile"
            className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
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
            className="px-4 py-2 rounded-xl bg-slate-900 text-white shadow-xs"
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

      {/* 2. Consent Toggles Form */}
      <form
        onSubmit={handleSave}
        className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6"
      >
        {saved && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
            <span>Consent preferences updated successfully!</span>
          </div>
        )}

        {/* Toggle 1: Driving School Progress Sharing */}
        <div className="flex items-start justify-between gap-4 p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              Driving School Progress Sharing (Partner Portal)
            </h3>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
              Allow your assigned driving school instructor to inspect your theory test readiness score, completed mock exams, and weakest domains to plan in-car practical driving lessons.
            </p>
          </div>
          <input
            type="checkbox"
            checked={schoolSharing}
            onChange={(e) => setSchoolSharing(e.target.checked)}
            className="w-5 h-5 accent-teal-600 rounded mt-1 cursor-pointer"
          />
        </div>

        {/* Toggle 2: Anonymous Analytics & Telemetry */}
        <div className="flex items-start justify-between gap-4 p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              Diagnostic Analytics & Question Calibration
            </h3>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
              Share aggregated, anonymous question response times to help calibrate question difficulty and detect misleading translation phrasing.
            </p>
          </div>
          <input
            type="checkbox"
            checked={telemetry}
            onChange={(e) => setTelemetry(e.target.checked)}
            className="w-5 h-5 accent-teal-600 rounded mt-1 cursor-pointer"
          />
        </div>

        {/* Toggle 3: Swedish Traffic Law Amendments */}
        <div className="flex items-start justify-between gap-4 p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              Swedish Road Law Regulatory Updates (TrF & TSFS)
            </h3>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
              Receive notifications whenever Transportstyrelsen issues amendments to road traffic ordinances, speed regulations, or winter tyre dates.
            </p>
          </div>
          <input
            type="checkbox"
            checked={legalUpdates}
            onChange={(e) => setLegalUpdates(e.target.checked)}
            className="w-5 h-5 accent-teal-600 rounded mt-1 cursor-pointer"
          />
        </div>

        {/* Toggle 4: Marketing Communications */}
        <div className="flex items-start justify-between gap-4 p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
          <div>
            <h3 className="text-xs font-bold text-slate-900">
              Promotional News & Study Discounts
            </h3>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
              Occasional partner driving school discounts, seasonal pass upgrades, and platform feature releases.
            </p>
          </div>
          <input
            type="checkbox"
            checked={marketingEmail}
            onChange={(e) => setMarketingEmail(e.target.checked)}
            className="w-5 h-5 accent-teal-600 rounded mt-1 cursor-pointer"
          />
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold shadow-sm transition-all"
          >
            Save Consent Settings
          </button>
        </div>
      </form>
    </div>
  );
}

