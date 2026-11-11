"use client";

import React from "react";
import Link from "next/link";
import { CrossIcon } from "@/components/ui/Icons";

export default function CheckoutCancelPage() {
  return (
    <div className="space-y-8 max-w-xl mx-auto py-6">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center">
          <CrossIcon className="w-7 h-7 text-amber-600" />
        </div>

        <div>
          <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
            Payment Cancelled
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
            Checkout Was Not Completed
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            No charges were incurred on your card or account. Your existing access level remains unchanged.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed text-left">
          <p className="font-bold text-slate-900 mb-1">Need Assistance or Swish Payment?</p>
          If you encountered payment issues, you can choose another payment method or contact our support team at{" "}
          <a href="mailto:support@gothenburgdynamics.se" className="text-teal-600 font-bold underline">
            support@gothenburgdynamics.se
          </a>.
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/#pricing"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all"
          >
            Review Pricing Plans
          </Link>
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

