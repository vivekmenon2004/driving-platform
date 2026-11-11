"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SignpostRegIcon,
  ShieldSafetyIcon,
  KeyIcon,
  LeafEcoIcon,
  PersonCircumstanceIcon,
  ArrowRightIcon,
  ClockIcon,
} from "@/components/ui/Icons";

interface Chapter {
  id: string;
  title: string;
  lessonCount: number;
  completedLessons: number;
  readTime: string;
  topics: string[];
}

interface DomainData {
  slug: string;
  title: string;
  swedishTitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  estimatedHours: string;
  totalLessons: number;
  completedLessons: number;
  chapters: Chapter[];
}

const THEORY_DOMAINS: DomainData[] = [
  {
    slug: "trafikregler",
    title: "Traffic Rules & Priority",
    swedishTitle: "Trafikregler",
    description:
      "Statutory road rules from the Swedish Traffic Ordinance (TrF), priority-to-the-right (högerregeln), roundabouts, speed limits, and parking regulations.",
    icon: SignpostRegIcon,
    color: "teal",
    estimatedHours: "14 hours",
    totalLessons: 22,
    completedLessons: 18,
    chapters: [
      {
        id: "c1",
        title: "Basic Rules of the Road & Högerregeln (Priority to the Right)",
        lessonCount: 5,
        completedLessons: 5,
        readTime: "2.5 hrs",
        topics: ["Fundamental rule of care", "Priority to the right (TrF 3:18)", "Exit rule (Utfartsregeln)", "Turning across traffic"],
      },
      {
        id: "c2",
        title: "Roundabout Circulation & Multi-Lane Manoeuvres",
        lessonCount: 6,
        completedLessons: 6,
        readTime: "3.0 hrs",
        topics: ["Roundabout approach & entry", "Lane positioning for left turns", "Mandatory right turn indication on exit", "Cyclists and pedestrians at roundabouts"],
      },
      {
        id: "c3",
        title: "Motorways, Expressways & Acceleration Ramps",
        lessonCount: 5,
        completedLessons: 4,
        readTime: "2.5 hrs",
        topics: ["Motorway regulations & prohibitions", "Speed adaptation on acceleration lane (TrF 3:65)", "Overtaking rules on highways", "Emergency stopping and breakdown"],
      },
      {
        id: "c4",
        title: "Parking, Stopping & Date Parking Rules (Datumparkering)",
        lessonCount: 6,
        completedLessons: 3,
        readTime: "3.0 hrs",
        topics: ["Prohibited stopping zones", "Distance to intersections and crossings", "Datumparkering rules explained", "Parking discs & parking meters"],
      },
    ],
  },
  {
    slug: "trafiksakerhet",
    title: "Road Safety & Defensive Driving",
    swedishTitle: "Trafiksäkerhet",
    description:
      "Stopping distances, reaction time, child restraint safety, winter road hazards, wildlife collisions, and defensive observation techniques.",
    icon: ShieldSafetyIcon,
    color: "blue",
    estimatedHours: "12 hours",
    totalLessons: 19,
    completedLessons: 14,
    chapters: [
      {
        id: "c1",
        title: "Stopping Distance, Reaction Distance & Braking Physics",
        lessonCount: 5,
        completedLessons: 5,
        readTime: "2.5 hrs",
        topics: ["Reaction distance calculation", "Braking distance physics (speed squared)", "Stopping distance on ice and gravel", "Emergency braking with ABS"],
      },
      {
        id: "c2",
        title: "Winter Driving, Black Ice & Skid Control",
        lessonCount: 5,
        completedLessons: 4,
        readTime: "3.0 hrs",
        topics: ["Black ice detection & bridge decks", "Front-wheel vs rear-wheel skid handling", "Winter tyre regulations (TSFS 2009:19)", "Studded vs friction tyre pros & cons"],
      },
      {
        id: "c3",
        title: "Vulnerable Road Users & Pedestrian Crossings",
        lessonCount: 5,
        completedLessons: 3,
        readTime: "2.5 hrs",
        topics: ["Zebra crossing strict obligations (TrF 3:61)", "Bicycle crossings vs bicycle passages", "School buses & children warning signals", "Equestrians and farm vehicles"],
      },
      {
        id: "c4",
        title: "Wildlife Hazards & Accident Emergency Procedures",
        lessonCount: 4,
        completedLessons: 2,
        readTime: "2.0 hrs",
        topics: ["Elk and roe deer migration times", "Reporting wildlife collisions (112 & marker tape)", "Warning triangle placement distances", "First aid and L-ABC protocol"],
      },
    ],
  },
  {
    slug: "fordonskannedom",
    title: "Vehicle Knowledge & Handling",
    swedishTitle: "Fordonskännedom & Manövrering",
    description:
      "Vehicle dynamics, braking systems, safety inspection checklist, winter tyre requirements, trailer weights, and lighting rules.",
    icon: KeyIcon,
    color: "amber",
    estimatedHours: "10 hours",
    totalLessons: 16,
    completedLessons: 10,
    chapters: [
      {
        id: "c1",
        title: "Vehicle Safety Inspection (Säkerhetskontroll)",
        lessonCount: 4,
        completedLessons: 3,
        readTime: "2.0 hrs",
        topics: ["Under-the-bonnet fluid checks", "Internal safety checks (brakes, servo, wipers)", "External lighting inspection", "Emergency equipment"],
      },
      {
        id: "c2",
        title: "Tyres, Tread Depth & Pressure",
        lessonCount: 4,
        completedLessons: 3,
        readTime: "2.0 hrs",
        topics: ["Summer tyre minimum tread (1.6 mm)", "Winter tyre minimum tread (3.0 mm)", "Tyre pressure influence on braking & fuel", "Aquaplaning risk factors"],
      },
      {
        id: "c3",
        title: "Vehicle Lighting Rules & Auxiliary Lights",
        lessonCount: 4,
        completedLessons: 2,
        readTime: "2.0 hrs",
        topics: ["Daytime running lights (DRL) vs dipped beam", "Fog lights regulations", "High beam usage & dipping rules", "Hazard warning flasher legal use"],
      },
      {
        id: "c4",
        title: "Weights, Loading & Category B Trailers",
        lessonCount: 4,
        completedLessons: 2,
        readTime: "2.0 hrs",
        topics: ["Kerb weight, total weight, max load", "Light trailer definition (max 750 kg or 3,500 kg total)", "Nose weight (kultryck) and sway prevention", "Cargo securing obligations"],
      },
    ],
  },
  {
    slug: "miljo",
    title: "Environment & Eco-Driving",
    swedishTitle: "Miljö & Ecodriving",
    description:
      "Eco-driving techniques, gear shifting strategies, vehicle emissions, environmental zones (miljözoner), and tyre resistance.",
    icon: LeafEcoIcon,
    color: "emerald",
    estimatedHours: "6 hours",
    totalLessons: 9,
    completedLessons: 8,
    chapters: [
      {
        id: "c1",
        title: "Eco-Driving Shifting Techniques & Engine Braking",
        lessonCount: 5,
        completedLessons: 5,
        readTime: "2.5 hrs",
        topics: ["Skipping gears (e.g. 2nd to 4th)", "Early upshifting below 2,000 RPM", "Engine braking and zero-consumption fuel cutoff", "Speed smoothing & defensive anticipation"],
      },
      {
        id: "c2",
        title: "Emissions, Catalytic Converters & Environmental Zones",
        lessonCount: 4,
        completedLessons: 3,
        readTime: "2.0 hrs",
        topics: ["CO2 vs harmful emissions (NOx, particles)", "Catalytic converter warm-up period", "Environmental zones classes 1, 2, and 3", "Engine block heater benefits"],
      },
    ],
  },
  {
    slug: "personliga",
    title: "Personal Capabilities & Human Factors",
    swedishTitle: "Personliga förutsättningar",
    description:
      "Alcohol and drug limits, blood alcohol concentration (BAC), fatigue warning signs, peer pressure, stress, and tunnel vision.",
    icon: PersonCircumstanceIcon,
    color: "purple",
    estimatedHours: "8 hours",
    totalLessons: 11,
    completedLessons: 6,
    chapters: [
      {
        id: "c1",
        title: "Alcohol, Narcotics & Sweden's Strict Zero-Tolerance Laws",
        lessonCount: 4,
        completedLessons: 3,
        readTime: "2.5 hrs",
        topics: ["Statutory limits: 0.2 per mille & 1.0 per mille", "Alcohol combustion rate (cannot be rushed)", "Morning-after impairment hazards", "Prescription medication warning triangles"],
      },
      {
        id: "c2",
        title: "Driver Fatigue, Micro-sleep & Circadian Rhythms",
        lessonCount: 4,
        completedLessons: 2,
        readTime: "2.0 hrs",
        topics: ["Early signs of sleepiness", "The danger zone: 02:00–05:00 and after meals", "Effective counter-measures (power nap vs false caffeine sense)", "Legal accountability for driving tired"],
      },
      {
        id: "c3",
        title: "Social Psychology, Group Pressure & Risk Perception",
        lessonCount: 3,
        completedLessons: 1,
        readTime: "1.5 hrs",
        topics: ["Young driver statistical over-representation", "Passenger and peer influence", "Overconfidence bias", "Stress and tunnel vision reduction"],
      },
    ],
  },
];

export default function TheoryLearningPage() {
  const [openDomain, setOpenDomain] = useState<string>("trafikregler");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDomains = THEORY_DOMAINS.filter((domain) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      domain.title.toLowerCase().includes(q) ||
      domain.swedishTitle.toLowerCase().includes(q) ||
      domain.chapters.some((c) =>
        c.title.toLowerCase().includes(q) || c.topics.some((t) => t.toLowerCase().includes(q))
      )
    );
  });

  return (
    <div className="space-y-8">
      {/* 1. Page Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 text-teal-700 border border-teal-200 mb-3">
              <span>Official Category B Syllabus</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Theory Learning Centre
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Complete theoretical curriculum mapped directly to the Swedish Transport Agency
              (Transportstyrelsen) syllabus across 5 regulatory domains.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/practice"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Practice Drills
            </Link>
            <Link
              href="/signs"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 shadow-sm transition-colors"
            >
              Signs Library
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-6 pt-6 border-t border-slate-100">
          <div className="relative max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chapters, TrF rules, priority, winter tyres..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:bg-white transition-colors"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3.5 top-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 2. 5 Domains Accordion / Browser */}
      <div className="space-y-4">
        {filteredDomains.map((domain) => {
          const isOpen = openDomain === domain.slug;
          const Icon = domain.icon;
          const percent = Math.round((domain.completedLessons / domain.totalLessons) * 100);

          return (
            <div
              key={domain.slug}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
            >
              {/* Header Card (Click to expand/collapse) */}
              <div
                onClick={() => setOpenDomain(isOpen ? "" : domain.slug)}
                className="p-6 cursor-pointer hover:bg-slate-50/60 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-teal-50 text-teal-600 border border-teal-100 flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {domain.swedishTitle}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
                        <ClockIcon className="w-3.5 h-3.5" />
                        {domain.estimatedHours} study time
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900">{domain.title}</h2>
                    <p className="text-xs text-slate-500 max-w-2xl mt-0.5 line-clamp-1 sm:line-clamp-none">
                      {domain.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 self-end md:self-center">
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-900">{percent}% Complete</p>
                    <p className="text-[11px] text-slate-400">
                      {domain.completedLessons} of {domain.totalLessons} lessons
                    </p>
                    <div className="w-28 bg-slate-100 rounded-full h-1.5 overflow-hidden mt-1.5">
                      <div
                        className="bg-teal-500 h-full rounded-full"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>

                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Accordion Body: Chapters & Topics */}
              {isOpen && (
                <div className="border-t border-slate-100 bg-slate-50/50 p-6 space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Course Chapters & Syllabus Units
                    </h3>
                    <Link
                      href={`/theory/${domain.slug}`}
                      className="text-xs font-bold text-teal-600 hover:text-teal-700 inline-flex items-center gap-1"
                    >
                      <span>Open Full Domain Navigator</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {domain.chapters.map((chapter) => (
                      <div
                        key={chapter.id}
                        className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md">
                              {chapter.lessonCount} Lessons • {chapter.readTime}
                            </span>
                            <span className="text-[11px] font-bold text-slate-500">
                              {chapter.completedLessons}/{chapter.lessonCount} done
                            </span>
                          </div>

                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">
                            {chapter.title}
                          </h4>

                          <ul className="space-y-1 mb-4">
                            {chapter.topics.map((t, idx) => (
                              <li key={idx} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href={`/theory/${domain.slug}/lesson-1`}
                          className="pt-3 border-t border-slate-100 text-xs font-bold text-teal-600 hover:text-teal-700 flex items-center justify-between"
                        >
                          <span>Start Chapter Lessons</span>
                          <ArrowRightIcon className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
