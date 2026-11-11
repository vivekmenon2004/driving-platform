"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LockIcon, MailIcon, ArrowRightIcon } from "@/components/ui/Icons";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("student@example.se");
  const [password, setPassword] = useState("password123");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    setTimeout(() => {
      setIsLoading(false);
      // Student login redirects directly to Student Learning Dashboard
      router.push("/dashboard");
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md">
      {/* Mobile brand header */}
      <div className="lg:hidden mb-6 text-center">
        <span className="text-xs font-black text-slate-900 uppercase tracking-widest">
          Gothenburg<span className="text-teal-600">Dynamics</span>
        </span>
      </div>

      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
          <span>Student Portal Access</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
          Student Sign In
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Sign in to access your Swedish B-körkort theory lessons, practice drills, and 70-question mock exam simulator.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
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
              placeholder="student@example.se"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-slate-700">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-[11px] font-semibold text-teal-600 hover:text-teal-700 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <LockIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-60"
        >
          {isLoading ? (
            <span>Signing in...</span>
          ) : (
            <>
              <span>Sign In to Student Portal</span>
              <ArrowRightIcon className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-500">
          New to Gothenburg Dynamics?{" "}
          <Link
            href="/register"
            className="font-bold text-teal-600 hover:text-teal-700 hover:underline"
          >
            Create your student account
          </Link>
        </p>
      </div>
    </div>
  );
}
