"use client";

import React from "react";

interface RoadScenarioDiagramProps {
  type: "junction" | "roundabout" | "tyre" | "pedestrian" | "highway" | "custom";
  caption?: string;
  className?: string;
}

export function RoadScenarioDiagram({
  type,
  caption,
  className = "",
}: RoadScenarioDiagramProps) {
  return (
    <div className={`rounded-2xl border border-slate-700/60 bg-[#0f172a] p-4 text-white overflow-hidden ${className}`}>
      <div className="max-w-lg mx-auto aspect-video bg-[#1e293b] rounded-xl border border-slate-700/80 relative flex items-center justify-center p-2 shadow-inner overflow-hidden select-none">
        {/* ------------------------------------------------------------------ */}
        {/* Scenario 1: 4-Way Uncontrolled Intersection (Högerregeln) */}
        {/* ------------------------------------------------------------------ */}
        {type === "junction" && (
          <svg viewBox="0 0 320 200" className="w-full h-full max-h-52">
            {/* Grass terrain */}
            <rect width="320" height="200" fill="#14532d" />

            {/* Sidewalks / Curbs */}
            <rect x="110" y="0" width="100" height="200" fill="#64748b" />
            <rect x="0" y="50" width="320" height="100" fill="#64748b" />

            {/* Asphalt Roads */}
            <rect x="116" y="0" width="88" height="200" fill="#1e293b" />
            <rect x="0" y="56" width="320" height="88" fill="#1e293b" />

            {/* Road Markings - Dashed Center Lines */}
            <line x1="160" y1="0" x2="160" y2="56" stroke="#ffffff" strokeWidth="2" strokeDasharray="8,6" />
            <line x1="160" y1="144" x2="160" y2="200" stroke="#ffffff" strokeWidth="2" strokeDasharray="8,6" />
            <line x1="0" y1="100" x2="116" y2="100" stroke="#ffffff" strokeWidth="2" strokeDasharray="8,6" />
            <line x1="204" y1="100" x2="320" y2="100" stroke="#ffffff" strokeWidth="2" strokeDasharray="8,6" />

            {/* Zebra Crossing on South Road */}
            <g fill="#ffffff">
              <rect x="120" y="152" width="6" height="18" />
              <rect x="130" y="152" width="6" height="18" />
              <rect x="140" y="152" width="6" height="18" />
              <rect x="150" y="152" width="6" height="18" />
              <rect x="164" y="152" width="6" height="18" />
              <rect x="174" y="152" width="6" height="18" />
              <rect x="184" y="152" width="6" height="18" />
              <rect x="194" y="152" width="6" height="18" />
            </g>

            {/* Vehicle A (You): Approaching North from bottom */}
            <g transform="translate(168, 116)">
              {/* Headlights beam */}
              <polygon points="0,0 20,-30 4,-30" fill="#fef08a" opacity="0.3" />
              {/* Car Body */}
              <rect x="0" y="0" width="22" height="36" rx="4" fill="#0d9488" stroke="#ffffff" strokeWidth="1.5" />
              {/* Windshield */}
              <rect x="2" y="8" width="18" height="8" rx="2" fill="#0f172a" />
              {/* Tail Lights */}
              <circle cx="4" cy="34" r="1.5" fill="#ef4444" />
              <circle cx="18" cy="34" r="1.5" fill="#ef4444" />
              <text x="11" y="24" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">YOU</text>
            </g>

            {/* Vehicle B: Approaching from Right (East) */}
            <g transform="translate(230, 68)">
              {/* Headlights beam */}
              <polygon points="0,0 -30,-4 -30,12" fill="#fef08a" opacity="0.3" />
              {/* Car Body */}
              <rect x="0" y="0" width="36" height="22" rx="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
              {/* Windshield */}
              <rect x="8" y="2" width="8" height="18" rx="2" fill="#0f172a" />
              <text x="22" y="14" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">CAR B</text>
            </g>

            {/* Priority Yield Curved Path */}
            <path d="M 179 116 L 179 90" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4,4" />
            <polygon points="175,90 179,80 183,90" fill="#38bdf8" />

            {/* Corner Badge Callout */}
            <rect x="8" y="8" width="120" height="24" rx="6" fill="#0f172a" opacity="0.85" stroke="#334155" />
            <text x="16" y="24" fill="#38bdf8" fontSize="9" fontWeight="bold">TrF 3:18 § HÖGERREGELN</text>
          </svg>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* Scenario 2: Roundabout 2-Lane Multi-Exit Navigation */}
        {/* ------------------------------------------------------------------ */}
        {type === "roundabout" && (
          <svg viewBox="0 0 320 200" className="w-full h-full max-h-52">
            <rect width="320" height="200" fill="#14532d" />

            {/* Roundabout Outer Asphalt Circle */}
            <circle cx="160" cy="100" r="82" fill="#1e293b" stroke="#64748b" strokeWidth="4" />
            {/* Lane Dividing Dashed Circle */}
            <circle cx="160" cy="100" r="58" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="6,6" />
            {/* Central Island */}
            <circle cx="160" cy="100" r="34" fill="#15803d" stroke="#facc15" strokeWidth="3" />

            {/* Approach road from bottom */}
            <rect x="136" y="140" width="48" height="60" fill="#1e293b" />
            <line x1="160" y1="140" x2="160" y2="200" stroke="#ffffff" strokeWidth="2" strokeDasharray="6,6" />

            {/* Exit road to the left */}
            <rect x="0" y="76" width="90" height="48" fill="#1e293b" />
            <line x1="0" y1="100" x2="90" y2="100" stroke="#ffffff" strokeWidth="2" strokeDasharray="6,6" />

            {/* Exit road to the top */}
            <rect x="136" y="0" width="48" height="60" fill="#1e293b" />
            <line x1="160" y1="0" x2="160" y2="60" stroke="#ffffff" strokeWidth="2" strokeDasharray="6,6" />

            {/* Left-turn Trajectory in Left Lane */}
            <path
              d="M 148 185 L 148 140 C 148 120 120 120 120 100 C 120 70 148 60 160 55"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="3"
              strokeDasharray="4,4"
            />
            {/* Car on entry */}
            <rect x="139" y="160" width="18" height="28" rx="4" fill="#0d9488" stroke="#ffffff" strokeWidth="1" />
            <text x="148" y="178" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">YOU</text>

            {/* Roundabout Sign Indicator */}
            <circle cx="190" cy="175" r="10" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
            <path d="M 186 172 A 4 4 0 1 1 194 175" fill="none" stroke="#ffffff" strokeWidth="1.5" />

            <rect x="8" y="8" width="140" height="22" rx="5" fill="#0f172a" opacity="0.85" stroke="#334155" />
            <text x="14" y="23" fill="#2dd4bf" fontSize="8.5" fontWeight="bold">TrF 3:22 § ROUNDABOUT LANES</text>
          </svg>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* Scenario 3: Winter Tyre Tread Depth Gauge Inspection */}
        {/* ------------------------------------------------------------------ */}
        {type === "tyre" && (
          <svg viewBox="0 0 320 200" className="w-full h-full max-h-52">
            {/* Background Studio Light */}
            <rect width="320" height="200" fill="#0f172a" />
            <circle cx="160" cy="100" r="90" fill="#1e293b" opacity="0.6" />

            {/* Tyre Cross Section */}
            <rect x="40" y="120" width="240" height="50" rx="8" fill="#020617" stroke="#334155" strokeWidth="3" />

            {/* Tread Grooves */}
            <rect x="80" y="80" width="30" height="50" rx="4" fill="#1e293b" />
            <rect x="145" y="80" width="30" height="50" rx="4" fill="#1e293b" />
            <rect x="210" y="80" width="30" height="50" rx="4" fill="#1e293b" />

            {/* Tread Blocks */}
            <rect x="45" y="80" width="30" height="50" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <rect x="112" y="80" width="30" height="50" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <rect x="178" y="80" width="30" height="50" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <rect x="245" y="80" width="30" height="50" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="2" />

            {/* Sipes (small winter slits) */}
            <line x1="50" y1="95" x2="70" y2="95" stroke="#334155" strokeWidth="1.5" />
            <line x1="50" y1="110" x2="70" y2="110" stroke="#334155" strokeWidth="1.5" />
            <line x1="117" y1="95" x2="137" y2="95" stroke="#334155" strokeWidth="1.5" />
            <line x1="117" y1="110" x2="137" y2="110" stroke="#334155" strokeWidth="1.5" />

            {/* Depth Gauge Placed in Center Groove */}
            <g transform="translate(150, 30)">
              {/* Gauge Shaft */}
              <rect x="7" y="0" width="6" height="85" fill="#cbd5e1" stroke="#0f172a" strokeWidth="1" />
              {/* Gauge Base Collar */}
              <rect x="-8" y="50" width="36" height="8" rx="2" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
              {/* Measurement Scale */}
              <line x1="13" y1="15" x2="17" y2="15" stroke="#0f172a" strokeWidth="1.5" />
              <line x1="13" y1="25" x2="17" y2="25" stroke="#0f172a" strokeWidth="1.5" />
              <line x1="13" y1="35" x2="19" y2="35" stroke="#dc2626" strokeWidth="2" />
              <text x="23" y="38" fill="#facc15" fontSize="10" fontWeight="bold">3.0 mm MIN</text>
            </g>

            {/* Winter Badge */}
            <rect x="8" y="8" width="160" height="24" rx="6" fill="#0f172a" stroke="#334155" />
            <text x="14" y="24" fill="#38bdf8" fontSize="8.5" fontWeight="bold">❄ TSFS 2009:19 WINTER TYRE</text>
          </svg>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* Scenario 4: Pedestrian Zebra Crossing with Sightline Obstruction */}
        {/* ------------------------------------------------------------------ */}
        {type === "pedestrian" && (
          <svg viewBox="0 0 320 200" className="w-full h-full max-h-52">
            <rect width="320" height="200" fill="#1e293b" />
            {/* Sidewalks */}
            <rect x="0" y="0" width="320" height="40" fill="#475569" />
            <rect x="0" y="160" width="320" height="40" fill="#475569" />

            {/* Zebra Crossing */}
            <g fill="#ffffff">
              <rect x="180" y="44" width="12" height="22" />
              <rect x="180" y="72" width="12" height="22" />
              <rect x="180" y="100" width="12" height="22" />
              <rect x="180" y="128" width="12" height="22" />
            </g>

            {/* Pedestrian Silhouette on Sidewalk */}
            <circle cx="186" cy="24" r="5" fill="#facc15" />
            <line x1="186" y1="29" x2="186" y2="38" stroke="#facc15" strokeWidth="3" />

            {/* Parked Delivery Van Right Before Crossing */}
            <rect x="110" y="44" width="54" height="28" rx="4" fill="#94a3b8" stroke="#ffffff" strokeWidth="1" />
            <text x="137" y="62" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">PARKED VAN</text>

            {/* Sightline Block Red Arc */}
            <line x1="164" y1="72" x2="186" y2="38" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />

            {/* Approaching Driver (You) */}
            <g transform="translate(40, 105)">
              <rect x="0" y="0" width="44" height="26" rx="4" fill="#0d9488" stroke="#ffffff" strokeWidth="1.5" />
              <polygon points="44,2 80,-8 80,34 44,24" fill="#fef08a" opacity="0.2" />
              <text x="22" y="16" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">YOU</text>
            </g>

            {/* Stop line */}
            <line x1="150" y1="40" x2="150" y2="160" stroke="#ffffff" strokeWidth="3" />

            <rect x="8" y="8" width="155" height="22" rx="5" fill="#0f172a" stroke="#334155" />
            <text x="14" y="23" fill="#facc15" fontSize="8.5" fontWeight="bold">TrF 3:61 § PEDESTRIAN CROSSING</text>
          </svg>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* Scenario 5: Motorway E4 Acceleration Ramp Merging */}
        {/* ------------------------------------------------------------------ */}
        {type === "highway" && (
          <svg viewBox="0 0 320 200" className="w-full h-full max-h-52">
            <rect width="320" height="200" fill="#0f172a" />
            {/* Motorway Lanes */}
            <rect x="0" y="30" width="320" height="70" fill="#1e293b" />
            <line x1="0" y1="65" x2="320" y2="65" stroke="#ffffff" strokeWidth="2" strokeDasharray="12,8" />

            {/* Acceleration Ramp Merging from Bottom-Left */}
            <polygon points="0,170 120,135 240,100 0,100" fill="#1e293b" />
            <line x1="0" y1="100" x2="240" y2="100" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="4,6" />

            {/* Highway Traffic (Left Lane) */}
            <rect x="180" y="40" width="38" height="20" rx="4" fill="#64748b" stroke="#ffffff" strokeWidth="1" />
            <text x="199" y="54" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">110 km/h</text>

            {/* You in Acceleration Lane */}
            <rect x="60" y="115" width="38" height="20" rx="4" fill="#0d9488" stroke="#ffffff" strokeWidth="1.5" />
            <text x="79" y="129" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">YOU</text>

            {/* Merging Trajectory Arc */}
            <path d="M 98 125 Q 160 115 220 75" fill="none" stroke="#2dd4bf" strokeWidth="2.5" strokeDasharray="4,4" />

            <rect x="8" y="8" width="165" height="22" rx="5" fill="#0f172a" stroke="#334155" />
            <text x="14" y="23" fill="#2dd4bf" fontSize="8.5" fontWeight="bold">TrF 3:65 § HIGHWAY ACCELERATION</text>
          </svg>
        )}
      </div>

      {caption && (
        <p className="text-xs text-slate-300 text-center mt-2.5 font-medium">
          {caption}
        </p>
      )}
    </div>
  );
}

export default RoadScenarioDiagram;
