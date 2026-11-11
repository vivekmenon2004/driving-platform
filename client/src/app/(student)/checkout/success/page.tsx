"use client";

import React from "react";
import Link from "next/link";
import { CheckCircleIcon, ArrowRightIcon } from "@/components/ui/Icons";

export default function CheckoutSuccessPage() {
  return (
    <div className="space-y-8 max-w-xl mx-auto py-6">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-teal-50 text-teal-600 flex items-center justify-center">
          <CheckCircleIcon className="w-10 h-10 text-teal-600" />
        </div>

        <div>
          <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
            Payment Confirmed
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
            Welcome to Gothenburg Dynamics!
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Your study pass is active immediately. A receipt has been dispatched to your email.
          </p>
        </div>

        {/* Receipt Summary Card */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-slate-400 font-semibold">Order Reference:</span>
            <span className="font-black text-slate-900">#GD-98241-SE</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Selected Pass:</span>
            <span className="font-bold text-slate-900">Standard 30-Day Full Pass</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Total Paid:</span>
            <span className="font-black text-teal-700">179 SEK (incl. 25% Swedish VAT)</span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-slate-200">
            <span className="text-slate-500 font-medium">Valid Until:</span>
            <span className="font-bold text-slate-900">December 12, 2026</span>
          </div>
        </div>

        {/* Unlocked Features Checklist */}
        <div className="text-left bg-teal-50/50 border border-teal-200/60 rounded-2xl p-4 space-y-2 text-xs text-teal-950">
          <p className="font-black">Unlocked Privileges:</p>
          <ul className="space-y-1 text-[11px] text-teal-900">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <span>Full access to 1,500+ official format practice questions</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <span>Unlimited 70-question official mock simulations with 50-minute timer</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <span>All 5 curriculum domains, video lessons, and sign flashcards</span>
            </li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold shadow-md transition-all active:scale-[0.98]"
          >
            <span>Start Learning Now</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <Link
            href="/theory"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all"
          >
            Browse Curriculum
          </Link>
        </div>
      </div>
    </div>
  );
}

