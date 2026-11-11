"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { LockIcon, MailIcon, UserIcon, ArrowRightIcon, GlobeIcon } from "@/components/ui/Icons";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialRef = searchParams ? searchParams.get("ref") || "" : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    language: "sv",
    referralCode: initialRef,
    agreeTerms: true,
    telemetryConsent: true,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate registration & redirect to dashboard
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 700);
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md">
      {/* Mobile brand header */}
      <div className="lg:hidden mb-6 text-center">
        <span className="text-xs font-black text-slate-900 uppercase tracking-widest">
          Gothenburg<span className="text-teal-600">Dynamics</span>
        </span>
      </div>

      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-2">
          <span>50-Question Free Trial</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1.5">
          Create Student Account
        </h1>
        <p className="text-xs text-slate-500">
          Get instant access to theory modules, practice questions, and your personal readiness gauge.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Full Name
          </label>
          <div className="relative">
            <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Astrid Berg"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Email Address
          </label>
          <div className="relative">
            <MailIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="astrid@example.se"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Password (Min 8 characters)
          </label>
          <div className="relative">
            <LockIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              required
              minLength={8}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••••••"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            />
          </div>
        </div>

        {/* Study Language Picker */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Preferred Study Language
          </label>
          <div className="relative">
            <GlobeIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={formData.language}
              onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            >
              <option value="sv">Svenska (Swedish — Default)</option>
              <option value="en">English (Official Translation)</option>
              <option value="ar">العربية (Arabic)</option>
              <option value="fa">فارسی (Persian)</option>
              <option value="uk">Українська (Ukrainian)</option>
            </select>
          </div>
        </div>

        {/* Driving School Referral Code */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Driving School Referral Code <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            value={formData.referralCode}
            onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
            placeholder="e.g. GOTHENBURG-AUTO"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 uppercase font-mono transition-all"
          />
        </div>

        {/* GDPR Consents */}
        <div className="space-y-2 pt-2 text-[11px] text-slate-600">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.agreeTerms}
              onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
              className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 mt-0.5"
            />
            <span>
              I accept the{" "}
              <Link href="/terms" className="text-teal-600 underline font-semibold">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-teal-600 underline font-semibold">
                Privacy Policy (GDPR)
              </Link>.
            </span>
          </label>

          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.telemetryConsent}
              onChange={(e) => setFormData({ ...formData, telemetryConsent: e.target.checked })}
              className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 mt-0.5"
            />
            <span>
              Allow my partner driving school to monitor my syllabus progress and readiness score.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-teal-500 hover:bg-teal-600 shadow-sm transition-all active:scale-[0.98] disabled:opacity-50 mt-3 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <span>Creating account...</span>
          ) : (
            <>
              <span>Create Free Account & Start Learning</span>
              <ArrowRightIcon className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
        Already registered?{" "}
        <Link
          href="/login"
          className="font-bold text-teal-600 hover:text-teal-700 hover:underline"
        >
          Sign In here
        </Link>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md text-center py-20 text-xs text-slate-400">
          Loading registration...
        </div>
      }
    >
      <RegisterForm />
    </Suspense>
  );
}
