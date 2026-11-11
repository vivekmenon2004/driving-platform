"use client";

import React from "react";
import Link from "next/link";
import { CheckCircleIcon, FilePdfIcon } from "@/components/ui/Icons";

export default function SubscriptionPlanPage() {
  const currentPass = {
    planName: "Standard 30-Day Pass",
    status: "Active",
    daysRemaining: 24,
    validUntil: "December 5, 2026",
    pricePaid: "179 SEK",
    features: [
      "Access to all 1,500+ practice questions",
      "Unlimited 70-question official mock simulations",
      "5-domain complete curriculum with video simulations",
      "Personalized mistake bank and diagnostic readiness score",
    ],
  };

  const upgradeOptions = [
    {
      name: "7-Day Sprint Pass",
      price: "99 SEK",
      duration: "7 days access",
      description: "Quick revision pass right before your scheduled exam date.",
      cta: "Extend by 7 Days",
    },
    {
      name: "30-Day Standard Pass",
      price: "179 SEK",
      duration: "30 days access",
      description: "Our most popular study package with comprehensive diagnostic tools.",
      cta: "Renew Current Plan",
      popular: true,
    },
    {
      name: "90-Day Full Pass + Guarantee",
      price: "299 SEK",
      duration: "90 days access",
      description: "Full pass guarantee. Free renewal if you do not pass your official exam.",
      cta: "Upgrade to 90 Days",
    },
  ];

  const receipts = [
    { id: "INV-2026-0891", date: "Nov 05, 2026", plan: "Standard 30-Day Pass", amount: "179 SEK", status: "Paid" },
    { id: "INV-2026-0412", date: "Oct 06, 2026", plan: "Basic 7-Day Pass", amount: "99 SEK", status: "Paid" },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* 1. Header & Sub-Nav */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 mb-2">
            <span>Billing & Study Access</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Subscription Plan & Study Passes
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage your active study pass duration, explore upgrade options, and download Swedish VAT receipts.
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
            className="px-4 py-2 rounded-xl bg-slate-900 text-white shadow-xs"
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

      {/* 2. Current Pass Card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-700">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
              Current Active Pass
            </span>
            <h2 className="text-2xl font-black text-white mt-2">
              {currentPass.planName}
            </h2>
            <p className="text-xs text-slate-300">
              Valid until {currentPass.validUntil} • Non-renewing single pass
            </p>
          </div>

          <div className="text-right">
            <span className="text-3xl font-black text-teal-400">
              {currentPass.daysRemaining} Days
            </span>
            <span className="text-xs text-slate-400 block">Remaining Access</span>
          </div>
        </div>

        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
          {currentPass.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircleIcon className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Upgrade Pass Options */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <h2 className="text-base font-bold text-slate-900">
          Extend or Upgrade Your Pass
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {upgradeOptions.map((opt, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border flex flex-col justify-between ${
                opt.popular
                  ? "border-teal-500 bg-teal-50/20 ring-2 ring-teal-500/20 shadow-md"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div>
                {opt.popular && (
                  <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-teal-500 text-white mb-2 inline-block">
                    Recommended
                  </span>
                )}
                <h3 className="text-sm font-bold text-slate-900">{opt.name}</h3>
                <div className="text-2xl font-black text-slate-900 mt-2 mb-1">
                  {opt.price}
                </div>
                <p className="text-[11px] text-slate-400 mb-3">{opt.duration}</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {opt.description}
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href={`/checkout/success?plan=${opt.name.toLowerCase().replace(/ /g, "-")}`}
                  className={`block w-full py-2.5 rounded-xl text-center text-xs font-bold transition-all ${
                    opt.popular
                      ? "bg-teal-500 hover:bg-teal-600 text-white shadow-sm"
                      : "border border-slate-200 text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {opt.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Payment Receipts Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-slate-900">
          Billing Receipts & Invoices (Swedish VAT Included)
        </h2>

        <div className="divide-y divide-slate-100">
          {receipts.map((rcpt) => (
            <div
              key={rcpt.id}
              className="py-3.5 flex items-center justify-between text-xs"
            >
              <div>
                <span className="font-bold text-slate-900">{rcpt.id}</span>
                <span className="text-slate-400 ml-2">({rcpt.date})</span>
                <p className="text-[11px] text-slate-500 mt-0.5">{rcpt.plan}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-black text-slate-900">{rcpt.amount}</span>
                <button
                  type="button"
                  onClick={() => alert(`Downloading receipt ${rcpt.id} PDF (Swedish VAT 25% included)...`)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold"
                >
                  <FilePdfIcon className="w-3.5 h-3.5 text-slate-500" />
                  <span>PDF Receipt</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
