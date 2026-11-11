import React, { Suspense } from "react";
import { StudentNavbar } from "@/components/layout/StudentNavbar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      <Suspense fallback={<header className="h-18 bg-white border-b border-slate-200" />}>
        <StudentNavbar />
      </Suspense>

      {/* Main Student Portal Content */}
      <main className="flex-1 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400">Loading learning session...</div>}>
            {children}
          </Suspense>
        </div>
      </main>
    </div>
  );
}
