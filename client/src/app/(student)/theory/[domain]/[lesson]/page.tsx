"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  BookmarkIcon,
  BookmarkFilledIcon,
  VolumeIcon,
} from "@/components/ui/Icons";
import RoadScenarioDiagram from "@/components/ui/RoadScenarioDiagram";

export default function LessonReaderPage() {
  const params = useParams();
  const domain = (params?.domain as string) || "trafikregler";
  const lesson = (params?.lesson as string) || "lesson-1";

  const [isCompleted, setIsCompleted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [userNotes, setUserNotes] = useState(
    "Priority to the right applies in residential areas unless indicated by priority road sign (B4) or yield sign (B1). Always watch for vehicles emerging from minor roads on the right."
  );
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress] = useState(35);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* 1. Breadcrumbs & Lesson Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/theory" className="hover:text-teal-600 transition-colors">
            Theory
          </Link>
          <span>/</span>
          <Link
            href={`/theory/${domain}`}
            className="hover:text-teal-600 capitalize transition-colors"
          >
            {domain}
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold capitalize">{lesson}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              isBookmarked
                ? "bg-amber-100 text-amber-800 border border-amber-300"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            {isBookmarked ? (
              <BookmarkFilledIcon className="w-3.5 h-3.5 text-amber-600" />
            ) : (
              <BookmarkIcon className="w-3.5 h-3.5 text-slate-500" />
            )}
            <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsCompleted(!isCompleted)}
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              isCompleted
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-teal-500 text-white hover:bg-teal-600 shadow-sm"
            }`}
          >
            <CheckCircleIcon className="w-3.5 h-3.5 text-white" />
            <span>{isCompleted ? "Completed" : "Mark as Completed"}</span>
          </button>
        </div>
      </div>

      {/* 2. Main Lesson Article */}
      <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8">
        {/* Title & Citation Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-800 border border-teal-200 mb-3">
            <span>Statutory Citation: TrF 3 kap. 18 §</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            The Priority to the Right Rule (Högerregeln)
          </h1>
          <div className="flex items-center gap-4 text-xs text-slate-400 mt-2">
            <span className="flex items-center gap-1">
              <ClockIcon className="w-3.5 h-3.5" />
              12 min reading time
            </span>
            <span>•</span>
            <span>Swedish Road Traffic Ordinance (Trafikförordningen)</span>
          </div>
        </div>

        {/* Audio Narration Bar */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className="w-10 h-10 rounded-xl bg-teal-500 text-white flex items-center justify-center flex-shrink-0 hover:bg-teal-600 transition-colors shadow-xs"
            aria-label={isPlayingAudio ? "Pause narration" : "Play narration"}
          >
            {isPlayingAudio ? (
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-white translate-x-0.5" viewBox="0 0 24 24">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            )}
          </button>
          <div className="flex-1">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 mb-1">
              <span className="flex items-center gap-1.5">
                <VolumeIcon className="w-3.5 h-3.5 text-teal-600" />
                <span>Swedish &amp; English Professional Voice Narration</span>
              </span>
              <span>04:12 / 12:00</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-teal-500 h-full rounded-full transition-all"
                style={{ width: `${audioProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Realistic Road Scenario Diagram */}
        <div className="max-w-2xl mx-auto">
          <RoadScenarioDiagram
            type="junction"
            caption="TrF 3 kap. 18 § Scenario: Uncontrolled 4-way intersection. Vehicle A (Teal) must yield to Vehicle B (Red) arriving from the right."
          />
        </div>

        {/* Content Paragraphs */}
        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
          <p>
            Under <strong>TrF 3 kap. 18 §</strong>, when vehicles approach an intersection simultaneously from different directions, a driver has a statutory duty to give way to vehicles approaching from their right, unless otherwise indicated by road signs or road markings.
          </p>

          <h3 className="text-base font-bold text-slate-900 pt-2">
            1. Core Principles of Högerregeln
          </h3>
          <p>
            The priority-to-the-right rule is the default priority system throughout Sweden and across the European Union. You must assume högerregeln applies whenever there are <strong>no traffic lights</strong>, <strong>no give way signs (B1)</strong>, <strong>no stop signs (B2)</strong>, and when you are <strong>not driving on a designated priority road (B4)</strong>.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
            <h4 className="text-xs font-bold text-amber-900 mb-1">
              Important Common Trap on the Trafikverket Exam:
            </h4>
            <p className="text-[11px] text-amber-800 leading-normal">
              Many candidates mistakenly assume that a wider street or a paved street always has priority over a narrower or unpaved street. In Sweden, size and surface do <em>not</em> determine priority. Unless an explicit sign or exit rule applies, högerregeln is strictly enforced.
            </p>
          </div>

          <h3 className="text-base font-bold text-slate-900 pt-2">
            2. When Does Högerregeln NOT Apply? (The Exit Rule)
          </h3>
          <p>
            The priority-to-the-right rule does <strong>not</strong> apply when a driver is exiting from specific minor locations. Under <strong>TrF 3 kap. 21 § (Utfartsregeln)</strong>, you must give way to all traffic when exiting from:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
            <li>A parking space, parking garage, or property driveway</li>
            <li>A petrol station or service area</li>
            <li>A pedestrian zone (gågata) or home zone (gångfartsområde)</li>
            <li>A path, cycle track, or terrain road</li>
          </ul>
        </div>

        {/* Interactive In-Lesson Notes Area */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span>Personal Study Notes</span>
            </h3>
            <span className="text-[10px] text-slate-400">Auto-saved to your study profile</span>
          </div>
          <textarea
            value={userNotes}
            onChange={(e) => setUserNotes(e.target.value)}
            rows={3}
            className="w-full p-3 rounded-xl border border-slate-200 bg-white text-xs text-slate-800 focus:outline-none focus:border-teal-500 transition-colors"
            placeholder="Type your notes on this lesson..."
          />
        </div>

        {/* CTA: Related Questions & Navigation */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <Link
            href="/practice?domain=trafikregler"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-colors"
          >
            <span>Practice 40+ Questions on Högerregeln</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href={`/theory/${domain}`}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Chapter Index
            </Link>
            <Link
              href={`/theory/${domain}/lesson-2`}
              className="px-4 py-2.5 rounded-xl bg-slate-900 text-xs font-bold text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
            >
              <span>Next Lesson</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
