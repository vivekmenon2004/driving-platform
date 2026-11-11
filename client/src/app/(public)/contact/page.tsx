"use client";

import React, { useState } from "react";
import {
  MailIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@/components/ui/Icons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Student Support / Question Bank",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span>Gothenburg Headquarters</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
            Contact & Support
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have a question about our syllabus, your study pass, or interested in a driving school partnership? We’re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block mb-1">
                Office Information
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Gothenburg Dynamics AB
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Swedish Organisation No: 559000-0000
              </p>
            </div>

            <div className="space-y-5 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Headquarters</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Lindholmspiren 5<br />
                    417 56 Göteborg, Sweden
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <MailIcon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Enquiries</h4>
                  <p className="text-slate-600">
                    support@gothenburgdynamics.se<br />
                    partners@gothenburgdynamics.se
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Response SLA</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Mon – Fri: 08:30 – 17:00 CET<br />
                    Average response time: &lt; 2 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong className="text-slate-700 block mb-0.5">Need Trafikverket Test Booking?</strong>
              Please note that official theory test reservations are booked exclusively directly via{" "}
              <a
                href="https://www.trafikverket.se"
                target="_blank"
                rel="noreferrer"
                className="text-teal-600 underline font-semibold"
              >
                Trafikverket.se
              </a>.
            </div>
          </div>

          {/* Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
                  <CheckCircleIcon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Message Sent Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. A Gothenburg Dynamics support specialist will review your ticket and respond within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 transition-all border border-teal-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600 block mb-1">
                    Send a Message
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Submit a Support Ticket
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Erik Lindqvist"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="erik@example.se"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Topic / Category
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                  >
                    <option>Student Support / Question Bank</option>
                    <option>Study Pass & Billing Query</option>
                    <option>100% Pass Guarantee Claim</option>
                    <option>Driving School Partnership Application</option>
                    <option>General Feedback / Technical Issue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your question or issue in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-teal-500 hover:bg-teal-600 shadow-sm transition-all active:scale-[0.98]"
                >
                  Submit Ticket
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
