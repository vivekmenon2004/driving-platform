"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircleIcon } from "@/components/ui/Icons";

export default function SecurityAndGDPRPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [exportMessage, setExportMessage] = useState<string | null>(null);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordSaved(true);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setTimeout(() => setPasswordSaved(false), 3000);
  };

  const handleExportData = (format: "json" | "csv") => {
    setExportMessage(`Generating your GDPR data export in ${format.toUpperCase()} format. Download will start shortly.`);
    setTimeout(() => setExportMessage(null), 4000);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* 1. Header & Sub-Nav */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 mb-2">
            <span>Security & Compliance</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Security & GDPR Compliance
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Update account security credentials, review active device sessions, and exercise your GDPR data rights.
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
            className="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
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
            className="px-4 py-2 rounded-xl bg-slate-900 text-white shadow-xs"
          >
            Security & GDPR Data
          </Link>
        </div>
      </div>

      {/* 2. Change Password Card */}
      <form
        onSubmit={handlePasswordSubmit}
        className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4"
      >
        <h2 className="text-base font-bold text-slate-900">Change Password</h2>

        {passwordSaved && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
            <span>Password updated successfully!</span>
          </div>
        )}

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-teal-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-teal-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-teal-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex justify-end">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all"
          >
            Update Password
          </button>
        </div>
      </form>

      {/* 3. Active Sessions List */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Active Login Sessions</h2>
            <p className="text-xs text-slate-500">Devices currently signed into your account</p>
          </div>
          <button
            type="button"
            onClick={() => alert("Signed out of all other sessions!")}
            className="text-xs font-bold text-rose-600 hover:text-rose-700"
          >
            Sign Out Other Devices
          </button>
        </div>

        <div className="divide-y divide-slate-100 text-xs">
          <div className="py-3 flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-900 flex items-center gap-2">
                <span>Chrome on Windows 11</span>
                <span className="text-[10px] bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded-full font-bold">
                  Current Session
                </span>
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">Gothenburg, Sweden • IP: 192.168.1.xxx</p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-600">Active Now</span>
          </div>

          <div className="py-3 flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-900">Mobile Safari on iOS 18 (iPhone)</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Stockholm, Sweden • Last seen 2 hours ago</p>
            </div>
            <button
              type="button"
              onClick={() => alert("Session terminated")}
              className="text-slate-400 hover:text-rose-600 text-xs font-bold"
            >
              Terminate
            </button>
          </div>
        </div>
      </div>

      {/* 4. GDPR Personal Data Export & Deletion */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
        <div>
          <h2 className="text-base font-bold text-slate-900">GDPR Data Portability & Rights</h2>
          <p className="text-xs text-slate-500">
            Export a copy of all your study progress, quiz scores, and personal notes under Article 20 of GDPR.
          </p>
        </div>

        {exportMessage && (
          <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold">
            {exportMessage}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => handleExportData("json")}
            className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-800 transition-colors"
          >
            Export JSON Archive
          </button>
          <button
            type="button"
            onClick={() => handleExportData("csv")}
            className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-800 transition-colors"
          >
            Export CSV Test History
          </button>
        </div>

        {/* Account Deletion (Right to Erasure) */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xs font-bold text-rose-900">
              Delete Account & Personal Data (GDPR Article 17)
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Permanently delete your user profile, active study passes, and all test records. This cannot be undone.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsDeleteModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 text-xs font-bold transition-colors self-start sm:self-auto"
          >
            Request Deletion
          </button>
        </div>
      </div>

      {/* Deletion Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>

            <h3 className="text-lg font-black text-slate-900">
              Permanently Delete Account?
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed">
              In accordance with GDPR Article 17 (Right to Erasure), all your personal information, test histories, and active study pass tokens will be permanently scrubbed from our PostgreSQL databases.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-3">
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(false)}
                className="py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  alert("Account deletion request submitted. You will receive a confirmation email.");
                  setIsDeleteModalOpen(false);
                }}
                className="py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md"
              >
                Confirm Deletion
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

