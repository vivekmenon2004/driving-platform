"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MailIcon, ArrowRightIcon, CheckCircleIcon } from "@/components/ui/Icons";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
          Reset Password
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Enter your registered email address and we&apos;ll dispatch a secure recovery link.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mx-auto">
            <CheckCircleIcon className="w-8 h-8 text-teal-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Recovery Email Dispatched
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
            If an account exists for <span className="font-bold text-slate-900">{email}</span>, you will receive password reset instructions within 2 minutes.
          </p>
          <div className="pt-4">
            <Link
              href="/login"
              className="text-xs font-bold text-teal-600 hover:text-teal-700 hover:underline"
            >
              ← Back to Sign In
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <MailIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="astrid@example.se"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-teal-500 hover:bg-teal-600 shadow-sm transition-all active:scale-[0.98] mt-2 flex items-center justify-center gap-2"
          >
            <span>Send Recovery Link</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>

          <div className="pt-4 text-center">
            <Link
              href="/login"
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Remembered your password? Sign in
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}

