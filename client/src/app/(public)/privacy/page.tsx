import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy (GDPR) — Gothenburg Dynamics AB",
  description:
    "Information on how Gothenburg Dynamics AB collects, processes, and protects your personal data under the EU General Data Protection Regulation (GDPR).",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block mb-2">
            Data Protection
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Privacy Policy (GDPR)
          </h1>
          <p className="text-xs text-slate-400 mb-8 pb-6 border-b border-slate-100">
            Compliant with Regulation (EU) 2016/679 (GDPR) and the Swedish Data Protection Act (Lag 2018:218)
          </p>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">1. Data Controller Identity</h3>
              <p>
                Gothenburg Dynamics AB (Org. nr: 559000-0000), Lindholmspiren 5, 417 56 Göteborg, Sweden, is the Data Controller responsible for the processing of your personal data. You can contact our Data Protection Officer at privacy@gothenburgdynamics.se.
              </p>
            </section>

            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">2. What Data We Collect & Why</h3>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Account Data:</strong> Name, email address, password hash (Argon2id), preferred study language, and target test date.</li>
                <li><strong>Study Telemetry:</strong> Questions answered, quiz scores, mock exam history, mistake bank records, and readiness score algorithms.</li>
                <li><strong>Payment Data:</strong> Processed securely via Stripe. We do not store raw credit card numbers or CVCs on our servers.</li>
                <li><strong>Driving School Telemetry Consent:</strong> If you register via a driving school partner link, your syllabus progress is shared with your school strictly upon your explicit opt-in consent.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">3. Legal Basis for Processing</h3>
              <p>
                We process your data primarily on the basis of contract fulfillment (GDPR Art. 6.1.b) to deliver your purchased study pass, and consent (GDPR Art. 6.1.a) for student telemetry sharing with driving school instructors.
              </p>
            </section>

            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">4. Your Statutory GDPR Rights</h3>
              <p>
                Under Chapter III of the GDPR, you have the following enforceable rights:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Right of Access & Portability:</strong> Export your full personal data and exam logs in machine-readable JSON/CSV directly from your Student Profile.</li>
                <li><strong>Right to Rectification:</strong> Edit your personal details at any time in account settings.</li>
                <li><strong>Right to Erasure (Right to be Forgotten):</strong> Submit an automated account deletion request from your security settings.</li>
                <li><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with the Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten - IMY).</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

