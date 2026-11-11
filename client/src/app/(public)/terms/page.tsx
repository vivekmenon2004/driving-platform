import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Gothenburg Dynamics AB",
  description:
    "Terms of service, study pass purchase conditions, cancellation rights, and pass guarantee terms governed by Swedish law.",
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block mb-2">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 mb-8 pb-6 border-b border-slate-100">
            Last Updated: 10 November 2026 • Governed by Swedish Law (Svensk rätt)
          </p>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">1. Contracting Entity</h3>
              <p>
                These terms govern your use of the Gothenburg Dynamics platform provided by Gothenburg Dynamics AB (Org. nr: 559000-0000), Lindholmspiren 5, 417 56 Göteborg, Sweden. By purchasing a study pass or using our free trial, you agree to these terms.
              </p>
            </section>

            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">2. Non-Recurring Study Passes</h3>
              <p>
                All study passes (7-day, 30-day, and 90-day) are strictly fixed-duration purchases. They do not auto-renew. All displayed fees include Swedish Value Added Tax (Moms) at the statutory rate of 25%.
              </p>
            </section>

            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">3. Right of Withdrawal (Ångerrätt)</h3>
              <p>
                Under the Swedish Distance and Doorstep Sales Act (Lag om distansavtal och avtal utanför affärslokaler 2005:59), consumers generally have a 14-day right of withdrawal. However, when you explicitly access digital theory material or initiate practice tests before the expiration of the 14-day period, you acknowledge and consent that the right of withdrawal ceases once digital execution has commenced.
              </p>
            </section>

            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">4. 100% Pass Guarantee Criteria</h3>
              <p>
                The Pass Guarantee applies exclusively to the 90-Day Full Mastery pass. To qualify for a complete refund:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>You must have marked 100% of the lessons in all 5 knowledge domains as completed.</li>
                <li>You must have completed at least 5 full 70-question mock exams maintaining an average Readiness Score of 85% or higher.</li>
                <li>You must submit your official Trafikverket fail test result slip within 14 calendar days of your test date.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">5. Independent Educational Provider</h3>
              <p>
                Gothenburg Dynamics is an independent educational technology provider. Our learning materials and practice exams are not affiliated with, endorsed by, or administered by Trafikverket or Transportstyrelsen.
              </p>
            </section>

            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">6. Governing Law & Jurisdiction</h3>
              <p>
                These terms are governed by the substantive laws of Sweden. Any dispute shall be settled by the Swedish General Court (Göteborgs tingsrätt) or through the Swedish National Board for Consumer Disputes (Allmänna reklamationsnämnden - ARN).
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

