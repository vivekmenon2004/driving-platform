"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { SwedishTrafficSign } from "@/components/ui/SwedishTrafficSign";

interface PreviewSign {
  code: string;
  category: "Warning" | "Priority" | "Prohibition" | "Mandatory";
  nameEn: string;
  nameSv: string;
  rule: string;
}

export function TrafficSignsPreview() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const signs: PreviewSign[] = [
    {
      code: "A30",
      category: "Warning",
      nameEn: "Wild Animals (Moose / Game)",
      nameSv: "Varning för älg / vilt",
      rule: "High risk of moose or deer on the road, especially at dawn/dusk. Legal duty to report collisions to police (112).",
    },
    {
      code: "A10",
      category: "Warning",
      nameEn: "Crossroads Warning",
      nameSv: "Varning för vägkorsning",
      rule: "Warns of an upcoming junction where the basic priority-to-the-right rule (högerregeln) applies.",
    },
    {
      code: "B1",
      category: "Priority",
      nameEn: "Yield / Give Way",
      nameSv: "Väjningsplikt",
      rule: "You must yield and give way to intersecting traffic. Adjust speed early to demonstrate clear yielding intent.",
    },
    {
      code: "B2",
      category: "Priority",
      nameEn: "Mandatory Stop",
      nameSv: "Stopplikt",
      rule: "Complete standstill (0 km/h) required before the stop line. Rolling stops result in an immediate test failure.",
    },
    {
      code: "B4",
      category: "Priority",
      nameEn: "Priority Road",
      nameSv: "Huvudled",
      rule: "Traffic on this road has right-of-way over all intersecting roads until the end-of-priority sign.",
    },
    {
      code: "C31",
      category: "Prohibition",
      nameEn: "Speed Limit 50 km/h",
      nameSv: "Hastighetsbegränsning 50",
      rule: "Maximum permitted speed is 50 km/h. Standard baseline limit in Swedish built-up areas (tätort).",
    },
    {
      code: "C1",
      category: "Prohibition",
      nameEn: "No Entry for Vehicles",
      nameSv: "Förbud mot infart",
      rule: "Absolute prohibition on entering the road from this direction. Frequently seen on one-way streets.",
    },
    {
      code: "D4",
      category: "Mandatory",
      nameEn: "Mandatory Roundabout",
      nameSv: "Påbjuden cirkulationsplats",
      rule: "Must circulate counter-clockwise. You must yield to all vehicles already inside the circulatory carriageway.",
    },
  ];

  const categories = ["All", "Warning", "Priority", "Prohibition", "Mandatory"];

  const filteredSigns =
    selectedCategory === "All"
      ? signs
      : signs.filter((s) => s.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              selectedCategory === cat
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
            }`}
          >
            {cat === "All" ? "All Categories" : `${cat} Signs`}
          </button>
        ))}
      </div>

      {/* Grid of Signs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {filteredSigns.map((sign) => (
          <div
            key={sign.code}
            className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Sign Visual Icon & Code */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1 shadow-inner">
                  <SwedishTrafficSign code={sign.code} size="md" />
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-100 text-slate-800 border border-slate-200">
                    {sign.code}
                  </span>
                  <div className="text-[10px] font-semibold text-teal-700 mt-1">
                    {sign.category}
                  </div>
                </div>
              </div>

              {/* Title & Swedish Name */}
              <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                {sign.nameEn}
              </h4>
              <p className="text-[11px] font-medium text-slate-400 italic mb-3">
                {sign.nameSv}
              </p>

              {/* Legal Rule */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {sign.rule}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-teal-600">
              <span>TSFS Standard</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Link to Full Catalog */}
      <div className="text-center">
        <Link
          href="/traffic-signs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-sm transition-all active:scale-[0.98]"
        >
          <span>Explore Complete 200+ Swedish Road Signs Library</span>
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

