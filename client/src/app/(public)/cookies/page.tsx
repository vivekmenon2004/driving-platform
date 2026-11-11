import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Gothenburg Dynamics AB",
  description:
    "Explanation of how Gothenburg Dynamics AB uses essential session cookies, preference cookies, and privacy-preserving analytics.",
};

export default function CookiePolicyPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block mb-2">
            Cookies & Tracking
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Cookie Policy
          </h1>
          <p className="text-xs text-slate-400 mb-8 pb-6 border-b border-slate-100">
            Last Updated: 10 November 2026 • Electronic Communications Act (Lag 2022:482 om elektronisk kommunikation)
          </p>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">1. What Are Cookies?</h3>
              <p>
                Cookies are small text files stored on your browser or device when you navigate digital services. We use cookies strictly to authenticate sessions, prevent CSRF attacks, and remember your language preference.
              </p>
            </section>

            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">2. Categories of Cookies We Use</h3>
              <div className="space-y-4 mt-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm">Essential & Security Cookies (Mandatory)</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    HttpOnly, Secure, SameSite=Strict cookies used to maintain your logged-in session, authenticate JWT tokens, and safeguard exam submissions. These cannot be disabled.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm">Functional & Preference Cookies</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Store your chosen study language (e.g. Svenska vs English) and driving school referral code parameter (?ref=CODE).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm">Zero Third-Party Advertising Trackers</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Gothenburg Dynamics does not use cross-site advertising trackers, Meta Pixel, or data-broker cookies. Your study telemetry remains strictly confidential.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

