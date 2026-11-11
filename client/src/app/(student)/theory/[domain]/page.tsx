"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@/components/ui/Icons";

interface LessonItem {
  id: string;
  slug: string;
  title: string;
  trfCitation: string;
  estimatedMinutes: number;
  completed: boolean;
  type: "text" | "video" | "interactive";
}

interface ChapterGroup {
  id: string;
  title: string;
  lessons: LessonItem[];
}

const DOMAIN_DATA: Record<
  string,
  {
    title: string;
    swedishTitle: string;
    description: string;
    chapters: ChapterGroup[];
  }
> = {
  trafikregler: {
    title: "Traffic Rules & Priority",
    swedishTitle: "Trafikregler",
    description:
      "Master the fundamental Swedish traffic laws, priority-to-the-right, roundabouts, and expressway rules under the Traffic Ordinance (Trafikförordningen).",
    chapters: [
      {
        id: "c1",
        title: "Chapter 1: Priority Rules & Intersections",
        lessons: [
          {
            id: "l1",
            slug: "lesson-1",
            title: "The Priority to the Right Rule (Högerregeln) & Exceptions",
            trfCitation: "TrF 3 kap. 18 §",
            estimatedMinutes: 12,
            completed: true,
            type: "interactive",
          },
          {
            id: "l2",
            slug: "lesson-2",
            title: "The Exit Rule (Utfartsregeln) & Driveway Priority",
            trfCitation: "TrF 3 kap. 21 §",
            estimatedMinutes: 10,
            completed: true,
            type: "text",
          },
          {
            id: "l3",
            slug: "lesson-3",
            title: "Give Way (Väjningsplikt) & Stop Sign Mandatory Halts",
            trfCitation: "TrF 3 kap. 19 § & TSFS 2012:60",
            estimatedMinutes: 14,
            completed: true,
            type: "video",
          },
          {
            id: "l4",
            slug: "lesson-4",
            title: "Turning Across Approaching Traffic (Svängningsregeln)",
            trfCitation: "TrF 3 kap. 24 §",
            estimatedMinutes: 8,
            completed: true,
            type: "text",
          },
        ],
      },
      {
        id: "c2",
        title: "Chapter 2: Roundabout Circulation",
        lessons: [
          {
            id: "l5",
            slug: "lesson-5",
            title: "Approaching, Entering & Yielding at Swedish Roundabouts",
            trfCitation: "TrF 3 kap. 22 §",
            estimatedMinutes: 15,
            completed: true,
            type: "video",
          },
          {
            id: "l6",
            slug: "lesson-6",
            title: "Multi-Lane Selection & Indicating to Exit",
            trfCitation: "TrF 3 kap. 65 §",
            estimatedMinutes: 12,
            completed: false,
            type: "interactive",
          },
        ],
      },
      {
        id: "c3",
        title: "Chapter 3: Speed Limits & Overtaking",
        lessons: [
          {
            id: "l7",
            slug: "lesson-7",
            title: "Speed Adaptation to Road Conditions & Basic Speed Limits",
            trfCitation: "TrF 3 kap. 14 §",
            estimatedMinutes: 10,
            completed: false,
            type: "text",
          },
          {
            id: "l8",
            slug: "lesson-8",
            title: "Prohibitions and Requirements for Safe Overtaking",
            trfCitation: "TrF 3 kap. 32-38 §",
            estimatedMinutes: 14,
            completed: false,
            type: "text",
          },
        ],
      },
    ],
  },
  trafiksakerhet: {
    title: "Road Safety & Defensive Driving",
    swedishTitle: "Trafiksäkerhet",
    description:
      "Understand reaction times, stopping distances, winter skid avoidance, and vulnerable road user safety.",
    chapters: [
      {
        id: "c1",
        title: "Chapter 1: Stopping Distance & Braking Physics",
        lessons: [
          {
            id: "l1",
            slug: "lesson-1",
            title: "Reaction Distance, Time & Distraction Factors",
            trfCitation: "TrF 2 kap. 1 §",
            estimatedMinutes: 12,
            completed: true,
            type: "interactive",
          },
          {
            id: "l2",
            slug: "lesson-2",
            title: "Braking Distance and the Speed-Squared Law",
            trfCitation: "Transportstyrelsen Safety Handbok",
            estimatedMinutes: 15,
            completed: true,
            type: "interactive",
          },
        ],
      },
      {
        id: "c2",
        title: "Chapter 2: Winter Driving & Skid Recovery",
        lessons: [
          {
            id: "l3",
            slug: "lesson-3",
            title: "Identifying Black Ice and Frost on Bridges",
            trfCitation: "TSFS 2009:19",
            estimatedMinutes: 14,
            completed: false,
            type: "video",
          },
        ],
      },
    ],
  },
  fordonskannedom: {
    title: "Vehicle Knowledge & Handling",
    swedishTitle: "Fordonskännedom & Manövrering",
    description: "Vehicle safety inspection, winter tyre requirements, braking systems, and trailer towing limits.",
    chapters: [
      {
        id: "c1",
        title: "Chapter 1: Safety Inspection (Säkerhetskontroll)",
        lessons: [
          {
            id: "l1",
            slug: "lesson-1",
            title: "External Walkaround Inspection & Light Checks",
            trfCitation: "TSFS 2012:60",
            estimatedMinutes: 15,
            completed: true,
            type: "video",
          },
        ],
      },
    ],
  },
  miljo: {
    title: "Environment & Eco-Driving",
    swedishTitle: "Miljö & Ecodriving",
    description: "Eco-driving techniques, engine braking, catalytic converter warm-up, and environmental zones.",
    chapters: [
      {
        id: "c1",
        title: "Chapter 1: Ecodriving Principles",
        lessons: [
          {
            id: "l1",
            slug: "lesson-1",
            title: "Shifting Strategy, Engine Braking & RPM Optimization",
            trfCitation: "TrF 4 kap. 10 §",
            estimatedMinutes: 12,
            completed: true,
            type: "text",
          },
        ],
      },
    ],
  },
  personliga: {
    title: "Personal Capabilities & Human Factors",
    swedishTitle: "Personliga förutsättningar",
    description: "Driver fatigue, zero-tolerance alcohol and drug laws, and social psychology on the road.",
    chapters: [
      {
        id: "c1",
        title: "Chapter 1: Alcohol, Drugs & Fatigue",
        lessons: [
          {
            id: "l1",
            slug: "lesson-1",
            title: "Sweden's 0.2 Per Mille BAC Limit & Consequences",
            trfCitation: "Lag (1951:649) om straff för vissa trafikbrott",
            estimatedMinutes: 16,
            completed: true,
            type: "interactive",
          },
        ],
      },
    ],
  },
};

export default function DomainNavigatorPage() {
  const params = useParams();
  const domainKey = (params?.domain as string) || "trafikregler";
  const domain = DOMAIN_DATA[domainKey] || DOMAIN_DATA["trafikregler"];

  const allLessons = domain.chapters.flatMap((c) => c.lessons);
  const completedCount = allLessons.filter((l) => l.completed).length;
  const progressPercent = Math.round((completedCount / (allLessons.length || 1)) * 100);

  return (
    <div className="space-y-8">
      {/* Breadcrumb & Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-4">
          <Link href="/theory" className="hover:text-teal-600 transition-colors">
            Theory Learning Centre
          </Link>
          <span>/</span>
          <span className="text-slate-900">{domain.title}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 mb-2">
              <span>{domain.swedishTitle}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {domain.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              {domain.description}
            </p>
          </div>

          <div className="text-right flex-shrink-0">
            <p className="text-xs font-bold text-slate-900">{progressPercent}% Completed</p>
            <p className="text-[11px] text-slate-400">
              {completedCount} of {allLessons.length} lessons finished
            </p>
            <div className="w-36 bg-slate-100 rounded-full h-2 overflow-hidden mt-2">
              <div
                className="bg-teal-500 h-full rounded-full transition-all"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Chapters & Lessons Hierarchy */}
      <div className="space-y-6">
        {domain.chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6"
          >
            <h2 className="text-base font-bold text-slate-900 mb-4">
              {chapter.title}
            </h2>

            <div className="space-y-3">
              {chapter.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/theory/${domainKey}/${lesson.slug}`}
                  className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50/40 hover:bg-teal-50/40 hover:border-teal-200 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                        lesson.completed
                          ? "bg-teal-500 text-white"
                          : "border-2 border-slate-300 text-transparent"
                      }`}
                    >
                      <CheckCircleIcon className="w-4 h-4 text-white" />
                    </div>

                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {lesson.title}
                      </h3>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-0.5">
                        <span className="font-semibold text-slate-600">{lesson.trfCitation}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <ClockIcon className="w-3 h-3" />
                          {lesson.estimatedMinutes} mins
                        </span>
                        <span>•</span>
                        <span className="capitalize">{lesson.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all">
                    <span className="hidden sm:inline">
                      {lesson.completed ? "Review Lesson" : "Start Lesson"}
                    </span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
