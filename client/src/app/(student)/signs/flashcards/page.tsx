"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RefreshCwIcon, CheckIcon, CrossIcon } from "@/components/ui/Icons";
import { SwedishTrafficSign } from "@/components/ui/SwedishTrafficSign";

interface Flashcard {
  id: number;
  code: string;
  iconSymbol: string;
  category: string;
  swedishName: string;
  englishName: string;
  legalRule: string;
  statute: string;
}

const FLASHCARDS: Flashcard[] = [
  {
    id: 1,
    code: "B1",
    iconSymbol: "▽",
    category: "Väjningspliktsmärken (Priority Sign)",
    swedishName: "Väjningsplikt",
    englishName: "Give Way / Yield",
    legalRule: "You must yield the right of way to vehicles approaching on the crossing road. Stop only if necessary to give way.",
    statute: "TrF 3 kap. 19 §",
  },
  {
    id: 2,
    code: "B2",
    iconSymbol: "STOP",
    category: "Väjningspliktsmärken (Priority Sign)",
    swedishName: "Stopplikt",
    englishName: "Mandatory Stop",
    legalRule: "You must come to a complete standstill at the stop line before proceeding, even if no other vehicles are in sight.",
    statute: "TrF 3 kap. 19 §",
  },
  {
    id: 3,
    code: "B4",
    iconSymbol: "◇",
    category: "Väjningspliktsmärken (Priority Sign)",
    swedishName: "Huvudled",
    englishName: "Priority Road",
    legalRule: "Cross-traffic must yield to you. Parking is prohibited along this road outside built-up areas.",
    statute: "TrF 3 kap. 18 §",
  },
  {
    id: 4,
    code: "A20",
    iconSymbol: "🚧",
    category: "Varningsmärken (Warning Sign)",
    swedishName: "Varning för vägarbete",
    englishName: "Road Work Ahead",
    legalRule: "Reduced speed required. Be vigilant for road workers, gravel, loose stones, and altered lane layouts.",
    statute: "TSFS 2019:74",
  },
  {
    id: 5,
    code: "A30",
    iconSymbol: "🦌",
    category: "Varningsmärken (Warning Sign)",
    swedishName: "Viltvarning (Älg)",
    englishName: "Wild Animals (Moose/Elk)",
    legalRule: "High collision hazard, especially at dusk and dawn. Scan roadsides and tree margins actively.",
    statute: "TSFS 2019:74",
  },
  {
    id: 6,
    code: "C1",
    iconSymbol: "⛔",
    category: "Förbudsmärken (Prohibitory Sign)",
    swedishName: "Förbud mot infart med fordon",
    englishName: "No Entry for Any Vehicle",
    legalRule: "Vehicles may not enter from this direction. One-way traffic oncoming.",
    statute: "TSFS 2019:74",
  },
  {
    id: 7,
    code: "C31",
    iconSymbol: "50",
    category: "Förbudsmärken (Prohibitory Sign)",
    swedishName: "Hastighetsbegränsning 50",
    englishName: "Speed Limit 50 km/h",
    legalRule: "Maximum permitted speed is 50 km/h. Default speed limit in Swedish urban areas unless marked otherwise.",
    statute: "TrF 3 kap. 17 §",
  },
  {
    id: 8,
    code: "D4",
    iconSymbol: "🔄",
    category: "Påbudsmärken (Mandatory Sign)",
    swedishName: "Påbjuden cirkulationsplats",
    englishName: "Mandatory Roundabout",
    legalRule: "Vehicles must follow roundabout direction (counter-clockwise). Yield to vehicles already circulating inside.",
    statute: "TrF 3 kap. 22 §",
  },
];

export default function SignFlashcardsPage() {
  const [deck, setDeck] = useState<Flashcard[]>(FLASHCARDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [learningCount, setLearningCount] = useState(0);

  const currentCard = deck[currentIndex];

  const handleNext = (known: boolean) => {
    if (known) {
      setKnownCount((prev) => prev + 1);
    } else {
      setLearningCount((prev) => prev + 1);
    }

    setIsFlipped(false);
    if (currentIndex + 1 < deck.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCount(0);
    setLearningCount(0);
  };

  const handleShuffle = () => {
    setDeck([...deck].sort(() => Math.random() - 0.5));
    handleRestart();
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* Header & Breadcrumb */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/signs" className="hover:text-teal-600 transition-colors">
            Traffic Signs Library
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Sign Flashcards Deck</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShuffle}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-white border border-slate-200 transition-colors"
            title="Shuffle Deck"
          >
            <RefreshCwIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Counter */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between text-xs font-bold">
        <span className="text-slate-600">
          Card {currentIndex + 1} of {deck.length}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-emerald-600">Mastered: {knownCount}</span>
          <span className="text-amber-600">Learning: {learningCount}</span>
        </div>
      </div>

      {/* 3D Flashcard Container */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="w-full min-h-[380px] sm:min-h-[420px] bg-white rounded-3xl p-8 sm:p-12 border-2 border-slate-200/80 shadow-md cursor-pointer hover:border-teal-400 transition-all flex flex-col items-center justify-center text-center relative select-none"
      >
        <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Click to Flip
        </span>

        {!isFlipped ? (
          /* FRONT: Sign Visual & Code */
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-teal-50 text-teal-800 border border-teal-200">
              Code: {currentCard.code}
            </span>

            <div className="w-40 h-40 mx-auto rounded-3xl bg-slate-50 border border-slate-200 flex items-center justify-center p-4 shadow-inner">
              <SwedishTrafficSign code={currentCard.code} size="xl" />
            </div>

            <div>
              <p className="text-xs text-slate-400 font-medium">
                Tap card to reveal Swedish statutory rule and legal obligations
              </p>
            </div>
          </div>
        ) : (
          /* BACK: Swedish Name, Category, Legal Rule & Statute */
          <div className="space-y-4 max-w-md">
            <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">
              {currentCard.category}
            </div>

            <h2 className="text-2xl font-black text-slate-900">
              {currentCard.swedishName}
            </h2>
            <p className="text-sm font-semibold text-teal-700">
              {currentCard.englishName}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left text-xs text-slate-700 leading-relaxed">
              <p className="font-bold text-slate-900 mb-1">Legal Duty:</p>
              {currentCard.legalRule}
            </div>

            <p className="text-[11px] font-semibold text-slate-400">
              Statutory Basis: {currentCard.statute}
            </p>
          </div>
        )}
      </div>

      {/* Answer Controls */}
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => handleNext(false)}
          className="py-3.5 px-4 rounded-2xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
        >
          <CrossIcon className="w-4 h-4 text-rose-600" />
          <span>Need Practice</span>
        </button>

        <button
          type="button"
          onClick={() => handleNext(true)}
          className="py-3.5 px-4 rounded-2xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-bold shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
        >
          <CheckIcon className="w-4 h-4 text-white" />
          <span>I Knew This</span>
        </button>
      </div>

      {/* Return CTA */}
      <div className="text-center pt-4">
        <Link
          href="/signs"
          className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
        >
          ← Return to Traffic Signs Library
        </Link>
      </div>
    </div>
  );
}
