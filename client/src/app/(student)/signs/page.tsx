"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  FlameIcon,
  BookmarkIcon,
  BookmarkFilledIcon,
} from "@/components/ui/Icons";
import { SwedishTrafficSign } from "@/components/ui/SwedishTrafficSign";

interface TrafficSignItem {
  code: string;
  category: "warning" | "priority" | "prohibitory" | "mandatory" | "information";
  swedishName: string;
  englishName: string;
  lawRef: string;
  description: string;
  accuracy: number; // e.g. 92%
  bookmarked: boolean;
  shape: "triangle-up" | "triangle-down" | "circle-red" | "circle-blue" | "diamond" | "octagon" | "square-blue";
  iconSymbol: string;
}

const TRAFFIC_SIGNS_DATA: TrafficSignItem[] = [
  {
    code: "A20",
    category: "warning",
    swedishName: "Varning för vägarbete",
    englishName: "Road Work Ahead",
    lawRef: "TSFS 2019:74",
    description: "Warns of road work, maintenance personnel, or machinery on or near the roadway. Speed must be adapted.",
    accuracy: 94,
    bookmarked: true,
    shape: "triangle-up",
    iconSymbol: "🚧",
  },
  {
    code: "A30",
    category: "warning",
    swedishName: "Varning för älg (Viltvarning)",
    englishName: "Wild Animals (Moose / Elk)",
    lawRef: "TSFS 2019:74",
    description: "High collision risk with large wildlife. Extra vigilance required at dusk and dawn near forested stretches.",
    accuracy: 88,
    bookmarked: false,
    shape: "triangle-up",
    iconSymbol: "🦌",
  },
  {
    code: "B1",
    category: "priority",
    swedishName: "Väjningsplikt",
    englishName: "Give Way / Yield",
    lawRef: "TrF 3 kap. 19 §",
    description: "Mandatory duty to yield to all intersecting vehicles before proceeding into the intersection.",
    accuracy: 96,
    bookmarked: false,
    shape: "triangle-down",
    iconSymbol: "▽",
  },
  {
    code: "B2",
    category: "priority",
    swedishName: "Stopplikt",
    englishName: "Stop Sign",
    lawRef: "TrF 3 kap. 19 §",
    description: "Mandatory complete halt at the stop line, or directly before the roadway if no stop line is marked.",
    accuracy: 98,
    bookmarked: false,
    shape: "octagon",
    iconSymbol: "STOP",
  },
  {
    code: "B4",
    category: "priority",
    swedishName: "Huvudled",
    englishName: "Priority Road",
    lawRef: "TrF 3 kap. 18 §",
    description: "You are on a priority road. Approaching cross-traffic must give way. Parking is prohibited along priority roads outside built-up areas.",
    accuracy: 82,
    bookmarked: true,
    shape: "diamond",
    iconSymbol: "◇",
  },
  {
    code: "C1",
    category: "prohibitory",
    swedishName: "Förbud mot infart med fordon",
    englishName: "No Entry for Any Vehicle",
    lawRef: "TSFS 2019:74",
    description: "Prohibits entry of all vehicular traffic from this direction. Often found at the exit of one-way streets.",
    accuracy: 91,
    bookmarked: false,
    shape: "circle-red",
    iconSymbol: "⛔",
  },
  {
    code: "C3",
    category: "prohibitory",
    swedishName: "Förbud mot trafik med motordrivet fordon",
    englishName: "No Motor Vehicles Allowed",
    lawRef: "TSFS 2019:74",
    description: "Prohibits entry of all motor vehicles with more than two wheels, including passenger cars and trucks.",
    accuracy: 85,
    bookmarked: false,
    shape: "circle-red",
    iconSymbol: "🚗",
  },
  {
    code: "C31",
    category: "prohibitory",
    swedishName: "Hastighetsbegränsning 50 km/h",
    englishName: "Maximum Speed Limit 50 km/h",
    lawRef: "TrF 3 kap. 17 §",
    description: "Statutory speed cap. You must not exceed 50 km/h under ideal road conditions.",
    accuracy: 99,
    bookmarked: false,
    shape: "circle-red",
    iconSymbol: "50",
  },
  {
    code: "D1",
    category: "mandatory",
    swedishName: "Påbjuden körriktning (Höger)",
    englishName: "Mandatory Turn Right",
    lawRef: "TSFS 2019:74",
    description: "Vehicles must follow the direction indicated by the arrow (turn right).",
    accuracy: 95,
    bookmarked: false,
    shape: "circle-blue",
    iconSymbol: "➔",
  },
  {
    code: "D4",
    category: "mandatory",
    swedishName: "Påbjuden cirkulationsplats",
    englishName: "Mandatory Roundabout Circulation",
    lawRef: "TrF 3 kap. 22 §",
    description: "Drivers must circulate counter-clockwise around the central island.",
    accuracy: 92,
    bookmarked: true,
    shape: "circle-blue",
    iconSymbol: "🔄",
  },
  {
    code: "E1",
    category: "information",
    swedishName: "Motorväg",
    englishName: "Motorway",
    lawRef: "TrF 9 kap. 1 §",
    description: "Indicates start of a motorway. Minimum designed speed capability 40 km/h. Stopping, reversing, and turning are prohibited.",
    accuracy: 94,
    bookmarked: false,
    shape: "square-blue",
    iconSymbol: "🛣️",
  },
  {
    code: "E11",
    category: "information",
    swedishName: "Gångfartsområde",
    englishName: "Home Zone / Walking Pace Area",
    lawRef: "TrF 8 kap. 1 §",
    description: "Vehicles must not exceed walking pace (approx 5-7 km/h). Drivers must yield to all pedestrians.",
    accuracy: 79,
    bookmarked: true,
    shape: "square-blue",
    iconSymbol: "🚶",
  },
];

export default function TrafficSignsLibraryPage() {
  const [signs, setSigns] = useState<TrafficSignItem[]>(TRAFFIC_SIGNS_DATA);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleBookmark = (code: string) => {
    setSigns((prev) =>
      prev.map((s) => (s.code === code ? { ...s, bookmarked: !s.bookmarked } : s))
    );
  };

  const filteredSigns = signs.filter((sign) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "bookmarked" ? sign.bookmarked : sign.category === selectedCategory);

    const matchesSearch =
      !searchQuery ||
      sign.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sign.swedishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sign.englishName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* 1. Page Header with Quick CTAs for Flashcards and Quiz */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 mb-3">
              <span>TSFS 2019:74 Road Regulations</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Traffic Signs Library
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Categorized Swedish road signs with official regulatory codes (A, B, C, D, E),
              legal rules, and personal accuracy tracking.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/signs/flashcards"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold text-slate-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 transition-all active:scale-[0.98]"
            >
              <span>Digital Flashcards</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/signs/quiz"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-sm transition-all active:scale-[0.98]"
            >
              <FlameIcon className="w-4 h-4 text-white" />
              <span>Rapid Sign Quiz</span>
            </Link>
          </div>
        </div>

        {/* Search & Category Filter Tabs */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative max-w-sm w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by code (e.g. A20, B1) or name..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:bg-white transition-colors"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3 top-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
            {[
              { id: "all", label: "All Signs" },
              { id: "warning", label: "Warning (A)" },
              { id: "priority", label: "Priority (B)" },
              { id: "prohibitory", label: "Prohibitory (C)" },
              { id: "mandatory", label: "Mandatory (D)" },
              { id: "information", label: "Information (E)" },
              { id: "bookmarked", label: "Bookmarked" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Signs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSigns.map((sign) => (
          <div
            key={sign.code}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-teal-300 hover:shadow-md transition-all group"
          >
            <div>
              {/* Card Top: Code badge, accuracy, and bookmark toggle */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200">
                  {sign.code}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                    {sign.accuracy}% Accuracy
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleBookmark(sign.code)}
                    className="p-1.5 text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
                    aria-label="Bookmark Sign"
                  >
                    {sign.bookmarked ? (
                      <BookmarkFilledIcon className="w-4 h-4 text-amber-500" />
                    ) : (
                      <BookmarkIcon className="w-4 h-4 text-slate-300 hover:text-slate-500" />
                    )}
                  </button>
                </div>
              </div>

              {/* Sign Visual Graphic: 100% authentic Swedish TSFS Vector Sign */}
              <div className="my-3 py-6 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-teal-50/20 transition-colors">
                <SwedishTrafficSign code={sign.code} size="lg" />
              </div>

              {/* Names and Swedish Law Ref */}
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {sign.englishName}
              </h3>
              <p className="text-xs font-medium text-slate-500 italic mb-2">
                {sign.swedishName}
              </p>
              <p className="text-[11px] text-slate-600 leading-relaxed mb-4">
                {sign.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
              <span className="font-semibold text-slate-400">{sign.lawRef}</span>
              <Link
                href={`/practice?search=${sign.code}`}
                className="font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
              >
                <span>Drill Sign</span>
                <ArrowRightIcon className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
