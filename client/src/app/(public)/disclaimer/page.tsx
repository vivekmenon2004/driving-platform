import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Regulatory Disclaimer — Gothenburg Dynamics AB",
  description:
    "Official regulatory notice regarding independent educational status and non-affiliation with Trafikverket or Transportstyrelsen.",
};

export default function DisclaimerPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block mb-2">
            Regulatory Notice
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Official Disclaimer
          </h1>
          <p className="text-xs text-slate-400 mb-8 pb-6 border-b border-slate-100">
            Transportstyrelsen & Trafikverket Independent Educational Notice
          </p>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
              <h3 className="font-bold text-sm text-amber-950">Statutory Independence Notice</h3>
              <p className="text-xs leading-relaxed">
                Gothenburg Dynamics is an independent educational technology provider developed by Gothenburg Dynamics AB. Our platform, curriculum materials, mock tests, and practice questions are not produced, authorized, sponsored, administered, or endorsed by the Swedish Transport Administration (Trafikverket) or the Swedish Transport Agency (Transportstyrelsen).
              </p>
            </div>

            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">1. Educational Purpose</h3>
              <p>
                All questions and syllabus materials are authored independently by pedagogical experts to replicate the structure, difficulty, and knowledge areas stipulated in Transportstyrelsen&apos;s official regulations (TSFS) and the Swedish Road Traffic Ordinance (Trafikförordningen - TrF 1998:1276). They serve solely as preparatory training aids.
              </p>
            </section>

            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">2. Official Examination Bookings</h3>
              <p>
                Gothenburg Dynamics does not administer official theory or practical driving tests. Official Category B theory examinations must be booked directly by candidates or approved driving schools via Trafikverket&apos;s official booking portal (trafikverket.se).
              </p>
            </section>

            <section>
              <h3 className="text-base font-bold text-slate-900 mb-2">3. Trademark Disclosures</h3>
              <p>
                References to &ldquo;Trafikverket&rdquo;, &ldquo;Transportstyrelsen&rdquo;, &ldquo;B-körkort&rdquo;, and official Swedish legal statutes are made strictly for descriptive, identification, and curriculum alignment purposes under Swedish trademark law and fair use doctrine.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
