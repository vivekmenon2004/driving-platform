"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SearchIcon,
  ArrowRightIcon,
  CrossIcon,
} from "@/components/ui/Icons";
import { SwedishTrafficSign } from "@/components/ui/SwedishTrafficSign";

interface SignItem {
  code: string;
  category: "Warning" | "Priority" | "Prohibition" | "Mandatory" | "Information";
  nameSv: string;
  nameEn: string;
  description: string;
  legalRule: string;
  shape: "triangle-up" | "triangle-down" | "octagon" | "circle" | "square" | "diamond";
  bgColor: string;
  borderColor: string;
  textColor: string;
  symbol: string;
}

export default function TrafficSignsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeSign, setActiveSign] = useState<SignItem | null>(null);

  const signsData: SignItem[] = [
    {
      code: "A20",
      category: "Warning",
      nameSv: "Varning för vägarbete",
      nameEn: "Roadworks Ahead",
      description: "Warns of ongoing roadworks, workers on roadway, loose gravel, or temporary layout changes.",
      legalRule: "Speed must be adjusted immediately. Strict yield duty to road maintenance workers.",
      shape: "triangle-up",
      bgColor: "bg-amber-300",
      borderColor: "border-red-600",
      textColor: "text-slate-950",
      symbol: "🚧",
    },
    {
      code: "A10",
      category: "Warning",
      nameSv: "Varning för vägkorsning",
      nameEn: "Crossroads Warning",
      description: "Warns of an upcoming junction where the priority-to-the-right rule (högerregeln) applies.",
      legalRule: "You must yield to all vehicles arriving from the right unless priority is posted.",
      shape: "triangle-up",
      bgColor: "bg-amber-300",
      borderColor: "border-red-600",
      textColor: "text-slate-950",
      symbol: "➕",
    },
    {
      code: "A30",
      category: "Warning",
      nameSv: "Varning för älg (Vilt)",
      nameEn: "Wild Animals (Moose)",
      description: "Warns of risk of large game (moose, deer, boar) crossing the carriageway, especially at dawn and dusk.",
      legalRule: "High alertness required. Scan tree lines. If collision occurs, police (112) must be notified by law.",
      shape: "triangle-up",
      bgColor: "bg-amber-300",
      borderColor: "border-red-600",
      textColor: "text-slate-950",
      symbol: "🦌",
    },
    {
      code: "B1",
      category: "Priority",
      nameSv: "Väjningsplikt (Give Way)",
      nameEn: "Yield / Give Way",
      description: "Requires the driver to give way to intersecting traffic on the road ahead.",
      legalRule: "Must adjust speed well in advance to show clear intention of yielding. Full stop not strictly required if clear.",
      shape: "triangle-down",
      bgColor: "bg-amber-300",
      borderColor: "border-red-600",
      textColor: "text-slate-950",
      symbol: "▽",
    },
    {
      code: "B2",
      category: "Priority",
      nameSv: "Stopplikt (Stop Duty)",
      nameEn: "Mandatory Stop",
      description: "Mandatory complete stop before the stop line, or immediately before entering the carriageway.",
      legalRule: "Vehicle wheels must come to a complete, full standstill (0 km/h). Rolling stops incur instant test failure & fine.",
      shape: "octagon",
      bgColor: "bg-red-600",
      borderColor: "border-white",
      textColor: "text-white",
      symbol: "STOP",
    },
    {
      code: "B4",
      category: "Priority",
      nameSv: "Huvudled",
      nameEn: "Priority Road",
      description: "Indicates traffic on this road has right-of-way over all intersecting roads.",
      legalRule: "Priority applies until sign B5 (Slut på huvudled). Parking on carriageway is prohibited outside built-up areas.",
      shape: "diamond",
      bgColor: "bg-amber-300",
      borderColor: "border-white",
      textColor: "text-slate-950",
      symbol: "◆",
    },
    {
      code: "C31",
      category: "Prohibition",
      nameSv: "Hastighetsbegränsning 50",
      nameEn: "Maximum Speed Limit 50 km/h",
      description: "Specifies the legal maximum permitted vehicle speed in kilometres per hour.",
      legalRule: "Strict ceiling speed. Fines and licence revocation apply for exceeding by >30 km/h (>20 km/h on 30 km/h roads).",
      shape: "circle",
      bgColor: "bg-amber-300",
      borderColor: "border-red-600",
      textColor: "text-slate-950",
      symbol: "50",
    },
    {
      code: "C1",
      category: "Prohibition",
      nameSv: "Förbud mot fordonstrafik",
      nameEn: "No Vehicles Permitted",
      description: "Prohibits all vehicle traffic in both directions on the roadway.",
      legalRule: "No motorized or non-motorized vehicles may enter, with exceptions only for emergency vehicles.",
      shape: "circle",
      bgColor: "bg-amber-300",
      borderColor: "border-red-600",
      textColor: "text-slate-950",
      symbol: "⛔",
    },
    {
      code: "D1",
      category: "Mandatory",
      nameSv: "Påbjuden körriktning",
      nameEn: "Mandatory Direction (Right)",
      description: "Directs drivers that they are legally obliged to turn in the direction indicated by the arrow.",
      legalRule: "Failure to follow mandatory arrow constitutes illegal maneuver under TrF.",
      shape: "circle",
      bgColor: "bg-blue-600",
      borderColor: "border-white",
      textColor: "text-white",
      symbol: "➔",
    },
    {
      code: "D4",
      category: "Mandatory",
      nameSv: "Cirkulationsplats",
      nameEn: "Roundabout Ahead",
      description: "Mandates one-way counter-clockwise circulation in a roundabout.",
      legalRule: "Must yield (väjningsplikt) to traffic already inside the circle. Must indicate right when exiting.",
      shape: "circle",
      bgColor: "bg-blue-600",
      borderColor: "border-white",
      textColor: "text-white",
      symbol: "🔄",
    },
    {
      code: "E11",
      category: "Information",
      nameSv: "Parkering",
      nameEn: "Parking Allowed",
      description: "Authorizes vehicle parking for up to 24 hours on regular weekdays unless supplementary signs state otherwise.",
      legalRule: "24-hour rule on weekdays. Free unlimited parking on Saturdays and Sundays unless sub-plate indicates fee/limits.",
      shape: "square",
      bgColor: "bg-blue-600",
      borderColor: "border-white",
      textColor: "text-white",
      symbol: "P",
    },
    {
      code: "E1",
      category: "Information",
      nameSv: "Motorväg",
      nameEn: "Motorway",
      description: "Marks the entrance onto a Swedish motorway (motorväg).",
      legalRule: "Only motor vehicles constructed for min 40 km/h permitted. Reversing, stopping, and U-turns strictly illegal.",
      shape: "square",
      bgColor: "bg-emerald-600",
      borderColor: "border-white",
      textColor: "text-white",
      symbol: "🛣️",
    },
  ];

  const categories = ["All", "Warning", "Priority", "Prohibition", "Mandatory", "Information"];

  const filteredSigns = signsData.filter((sign) => {
    const matchesCat = selectedCategory === "All" || sign.category === selectedCategory;
    const matchesSearch =
      sign.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sign.nameSv.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sign.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sign.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200/80 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span>Official TSFS Classifications</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
            Swedish Road Signs Library
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Search, filter, and master all Swedish road signs tested on the B-körkort theory exam. Click any sign to view its statutory rules and exam tips.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <SearchIcon className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by code (A20, B1) or name (Väjningsplikt)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
              />
            </div>

            <div className="text-xs text-slate-500 self-end md:self-center">
              Showing <span className="font-bold text-slate-900">{filteredSigns.length}</span> signs
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-teal-500 text-white shadow-sm"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Signs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredSigns.map((sign) => (
            <div
              key={sign.code}
              onClick={() => setActiveSign(sign)}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:border-teal-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Visual Sign Emulation Badge */}
                <div className="w-full h-36 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-inner p-2">
                  <SwedishTrafficSign code={sign.code} size="lg" />
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200/80">
                    {sign.code}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    {sign.category}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                  {sign.nameSv}
                </h3>
                <p className="text-xs text-slate-500 mb-3">
                  {sign.nameEn}
                </p>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {sign.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-teal-600">
                <span>View Legal Rule</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal Drawer for Sign Detail */}
        {activeSign && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
              <div className="flex items-start justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold bg-teal-50 text-teal-700 px-3 py-1 rounded-xl border border-teal-200">
                    {activeSign.code}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {activeSign.nameSv}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {activeSign.nameEn}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveSign(null)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Close modal"
                >
                  <CrossIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Big Sign Visual */}
              <div className="w-full h-44 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 shadow-inner p-3">
                <SwedishTrafficSign code={activeSign.code} size="xl" />
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Function & Description:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activeSign.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200/80">
                  <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wider mb-1">
                    Statutory Traffic Rule (TrF):
                  </h4>
                  <p className="text-xs text-teal-950 leading-relaxed">
                    {activeSign.legalRule}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveSign(null)}
                  className="w-full py-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
                >
                  Close
                </button>
                <Link
                  href="/register"
                  className="w-full text-center py-3 rounded-xl text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-sm transition-all"
                >
                  Practice This Sign
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center border border-slate-800 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">
            Flashcards & Rapid Quizzes in Student Portal
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Our student portal features interactive digital flashcards and rapid-fire sign identification drills with personal error tracking.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all active:scale-[0.98]"
          >
            <span>Start Learning Road Signs Free</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
