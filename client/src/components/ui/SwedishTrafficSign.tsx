"use client";

import React from "react";

interface SwedishTrafficSignProps {
  code: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function SwedishTrafficSign({
  code,
  size = "md",
  className = "",
}: SwedishTrafficSignProps) {
  const sizeMap = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  const dim = sizeMap[size] || sizeMap.md;

  // Render authentic Swedish Road Sign (TSFS 2019:74 standard)
  switch (code.toUpperCase()) {
    // ------------------------------------------------------------------
    // A20: Varning för vägarbete (Road Work Ahead)
    // ------------------------------------------------------------------
    case "A20":
      return (
        <svg viewBox="0 0 100 90" className={`${dim} ${className} drop-shadow-sm`}>
          {/* Yellow Triangle with Red Border */}
          <polygon points="50,6 94,84 6,84" fill="#facc15" stroke="#dc2626" strokeWidth="9" strokeLinejoin="round" />
          {/* Worker Silhouette with Shovel and Mound */}
          <g fill="#1e293b">
            {/* Head */}
            <circle cx="56" cy="42" r="4.5" />
            {/* Torso & Leg */}
            <path d="M54 48 L46 62 L50 63 L57 53 L62 67 L66 66 L60 50 Z" />
            {/* Arm & Shovel */}
            <path d="M52 50 L40 58 L38 56 L49 48 Z" />
            <line x1="39" y1="57" x2="31" y2="72" stroke="#1e293b" strokeWidth="2" />
            <polygon points="27,70 34,68 31,75" />
            {/* Mound of gravel */}
            <path d="M24 74 Q32 68 40 74 Z" />
          </g>
        </svg>
      );

    // ------------------------------------------------------------------
    // A30: Viltvarning (Moose / Elk)
    // ------------------------------------------------------------------
    case "A30":
      return (
        <svg viewBox="0 0 100 90" className={`${dim} ${className} drop-shadow-sm`}>
          <polygon points="50,6 94,84 6,84" fill="#facc15" stroke="#dc2626" strokeWidth="9" strokeLinejoin="round" />
          {/* Moose Silhouette */}
          <g fill="#1e293b">
            {/* Antlers & Head */}
            <path d="M36 38 L32 32 L35 34 L33 29 L38 33 L42 37 L46 41 L43 45 L38 43 Z" />
            {/* Body */}
            <path d="M42 43 C46 40 54 41 62 45 C66 47 68 53 66 58 L63 59 C58 58 53 59 47 57 L44 59 Z" />
            {/* Forelegs */}
            <path d="M47 57 L46 73 L49 73 L51 58 Z" />
            {/* Hindlegs */}
            <path d="M62 57 L63 73 L66 73 L65 57 Z" />
            {/* Dewlap / Beard */}
            <path d="M41 45 C41 48 43 51 44 51 Z" />
          </g>
        </svg>
      );

    // ------------------------------------------------------------------
    // A10: Varning för vägkorsning (Crossroads Warning)
    // ------------------------------------------------------------------
    case "A10":
      return (
        <svg viewBox="0 0 100 90" className={`${dim} ${className} drop-shadow-sm`}>
          <polygon points="50,6 94,84 6,84" fill="#facc15" stroke="#dc2626" strokeWidth="9" strokeLinejoin="round" />
          {/* Cross */}
          <rect x="46" y="34" width="8" height="34" rx="1" fill="#1e293b" />
          <rect x="33" y="47" width="34" height="8" rx="1" fill="#1e293b" />
        </svg>
      );

    // ------------------------------------------------------------------
    // B1: Väjningsplikt (Give Way / Yield)
    // ------------------------------------------------------------------
    case "B1":
      return (
        <svg viewBox="0 0 100 90" className={`${dim} ${className} drop-shadow-sm`}>
          {/* Inverted Triangle: Pointing Down */}
          <polygon points="50,84 94,6 6,6" fill="#facc15" stroke="#dc2626" strokeWidth="9" strokeLinejoin="round" />
        </svg>
      );

    // ------------------------------------------------------------------
    // B2: Stopplikt (Mandatory Stop Sign)
    // ------------------------------------------------------------------
    case "B2":
      return (
        <svg viewBox="0 0 100 100" className={`${dim} ${className} drop-shadow-sm`}>
          {/* Octagon */}
          <polygon
            points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30"
            fill="#dc2626"
            stroke="#ffffff"
            strokeWidth="3.5"
          />
          {/* STOP Text */}
          <text
            x="50"
            y="61"
            fill="#ffffff"
            fontSize="26"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
            letterSpacing="1"
          >
            STOP
          </text>
        </svg>
      );

    // ------------------------------------------------------------------
    // B4: Huvudled (Priority Road)
    // ------------------------------------------------------------------
    case "B4":
      return (
        <svg viewBox="0 0 100 100" className={`${dim} ${className} drop-shadow-sm`}>
          {/* Yellow Diamond with White Border */}
          <polygon points="50,4 96,50 50,96 4,50" fill="#facc15" stroke="#ffffff" strokeWidth="10" strokeLinejoin="round" />
          <polygon points="50,4 96,50 50,96 4,50" fill="none" stroke="#64748b" strokeWidth="1" strokeLinejoin="round" />
        </svg>
      );

    // ------------------------------------------------------------------
    // C1: Förbud mot infart med fordon (No Entry)
    // ------------------------------------------------------------------
    case "C1":
      return (
        <svg viewBox="0 0 100 100" className={`${dim} ${className} drop-shadow-sm`}>
          <circle cx="50" cy="50" r="46" fill="#dc2626" />
          {/* Swedish Standard: Yellow Horizontal Bar */}
          <rect x="14" y="42" width="72" height="16" rx="2" fill="#facc15" />
        </svg>
      );

    // ------------------------------------------------------------------
    // C3: Förbud mot motordrivet fordon (No Motor Vehicles)
    // ------------------------------------------------------------------
    case "C3":
      return (
        <svg viewBox="0 0 100 100" className={`${dim} ${className} drop-shadow-sm`}>
          <circle cx="50" cy="50" r="46" fill="#facc15" stroke="#dc2626" strokeWidth="9" />
          {/* Car Front Silhouette */}
          <g fill="#1e293b">
            <path d="M30 46 L36 34 C37 32 40 31 50 31 C60 31 63 32 64 34 L70 46 C74 48 76 52 76 57 L76 65 L71 65 L71 69 C71 71 69 72 67 72 L64 72 C62 72 60 71 60 69 L60 65 L40 65 L40 69 C40 71 38 72 36 72 L33 72 C31 72 29 71 29 69 L29 65 L24 65 L24 57 C24 52 26 48 30 46 Z" />
            {/* Windshield cutout */}
            <path d="M36 46 L64 46 L60 36 C59 35 56 34 50 34 C44 34 41 35 40 36 Z" fill="#facc15" />
            {/* Headlights */}
            <circle cx="31" cy="54" r="3" fill="#facc15" />
            <circle cx="69" cy="54" r="3" fill="#facc15" />
          </g>
        </svg>
      );

    // ------------------------------------------------------------------
    // C31: Hastighetsbegränsning 50 (Speed Limit 50)
    // ------------------------------------------------------------------
    case "C31":
      return (
        <svg viewBox="0 0 100 100" className={`${dim} ${className} drop-shadow-sm`}>
          <circle cx="50" cy="50" r="46" fill="#facc15" stroke="#dc2626" strokeWidth="9" />
          <text
            x="50"
            y="64"
            fill="#1e293b"
            fontSize="42"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, sans-serif"
            textAnchor="middle"
            letterSpacing="-1"
          >
            50
          </text>
        </svg>
      );

    // ------------------------------------------------------------------
    // D1: Påbjuden körriktning (Höger) - Mandatory Turn Right
    // ------------------------------------------------------------------
    case "D1":
      return (
        <svg viewBox="0 0 100 100" className={`${dim} ${className} drop-shadow-sm`}>
          <circle cx="50" cy="50" r="46" fill="#0284c7" stroke="#ffffff" strokeWidth="2.5" />
          {/* Curved Right Arrow */}
          <path
            d="M34 68 L34 50 C34 40 40 34 52 34 L62 34"
            fill="none"
            stroke="#ffffff"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <polygon points="58,23 76,34 58,45" fill="#ffffff" />
        </svg>
      );

    // ------------------------------------------------------------------
    // D4: Påbjuden cirkulationsplats (Roundabout Mandatory)
    // ------------------------------------------------------------------
    case "D4":
      return (
        <svg viewBox="0 0 100 100" className={`${dim} ${className} drop-shadow-sm`}>
          <circle cx="50" cy="50" r="46" fill="#0284c7" stroke="#ffffff" strokeWidth="2.5" />
          {/* 3 Circular Arrows */}
          <g fill="#ffffff">
            {/* Top Arc */}
            <path d="M42 22 A 28 28 0 0 1 72 38" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />
            <polygon points="68,26 78,41 63,41" />

            {/* Right-Bottom Arc */}
            <path d="M72 62 A 28 28 0 0 1 40 76" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />
            <polygon points="46,82 34,72 45,67" />

            {/* Left Arc */}
            <path d="M26 50 A 28 28 0 0 1 38 24" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />
            <polygon points="34,20 38,34 26,30" />
          </g>
        </svg>
      );

    // ------------------------------------------------------------------
    // E1: Motorväg (Motorway)
    // ------------------------------------------------------------------
    case "E1":
      return (
        <svg viewBox="0 0 100 100" className={`${dim} ${className} drop-shadow-sm`}>
          <rect x="4" y="8" width="92" height="84" rx="8" fill="#0369a1" stroke="#ffffff" strokeWidth="2.5" />
          {/* Overpass Bridge */}
          <rect x="22" y="38" width="56" height="8" rx="2" fill="#ffffff" />
          {/* Dual Carriageway Lines */}
          <polygon points="34,78 40,78 44,48 40,48" fill="#ffffff" />
          <polygon points="66,78 60,78 56,48 60,48" fill="#ffffff" />
          <polygon points="36,36 40,36 42,20 38,20" fill="#ffffff" />
          <polygon points="64,36 60,36 58,20 62,20" fill="#ffffff" />
        </svg>
      );

    // ------------------------------------------------------------------
    // E11: Gångfartsområde (Home Zone / Walking Pace)
    // ------------------------------------------------------------------
    case "E11":
      return (
        <svg viewBox="0 0 100 100" className={`${dim} ${className} drop-shadow-sm`}>
          <rect x="4" y="8" width="92" height="84" rx="8" fill="#0369a1" stroke="#ffffff" strokeWidth="2.5" />
          {/* House Silhouette */}
          <polygon points="20,40 32,28 44,40 44,60 20,60" fill="#ffffff" />
          {/* Car Silhouette (Right) */}
          <rect x="52" y="62" width="30" height="12" rx="3" fill="#ffffff" />
          <circle cx="58" cy="74" r="3" fill="#0369a1" />
          <circle cx="76" cy="74" r="3" fill="#0369a1" />
          {/* Walking Figures (Left Foreground) */}
          <circle cx="28" cy="62" r="3" fill="#ffffff" />
          <path d="M26 66 L30 66 L32 78 L29 78 L27 71 L25 78 L23 78 Z" fill="#ffffff" />
          {/* Child with Ball */}
          <circle cx="44" cy="67" r="2" fill="#ffffff" />
          <path d="M43 70 L46 70 L47 78 L45 78 L44 74 L42 78 L40 78 Z" fill="#ffffff" />
          <circle cx="49" cy="76" r="1.5" fill="#ffffff" />
        </svg>
      );

    // Default fallback: Clean Transportstyrelsen sign badge with official code
    default:
      return (
        <div
          className={`${dim} ${className} rounded-2xl bg-amber-400 border-2 border-red-600 flex items-center justify-center font-black text-slate-950 text-xs shadow-sm`}
        >
          {code}
        </div>
      );
  }
}

