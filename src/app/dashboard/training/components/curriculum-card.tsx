"use client";

import { ChevronDownSvg, File } from "@/components/svgs";
import { useState } from "react";
import CourseTimeLecturesSection from "./time-lecture-section";
import Image from "next/image";

export default function CurriculumCard() {
  const [isAccordionOpen, setAccordion] = useState(false);

  return (
    <article className="border-b last:border-b-0">
      <button
        className={`{isAccordionOpen ? "rounded-t-xl" : "rounded-xl"} flex w-full items-center justify-between p-5`}
        onClick={() => setAccordion(!isAccordionOpen)}
      >
        <div
          className={`flex items-center gap-x-2 ${isAccordionOpen ? "font-medium text-primary-500" : "text-[#1D2026]"}`}
        >
          <ChevronDownSvg
            className={`transition-all duration-300 ${isAccordionOpen ? "-rotate-180" : ""}`}
            stroke={`${isAccordionOpen ? "#E29A13" : "#6E7485"}`}
          />
          Geting Started
        </div>
        <CourseTimeLecturesSection />
      </button>

      <ul
        className={`grid gap-y-3.5 px-5 pb-5 transition-all duration-300 ${isAccordionOpen ? "block h-auto" : "hidden h-0"}`}
      >
        <li className="text-s flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="relative h-4 w-4 overflow-hidden">
              <Image
                alt=""
                src="/icons/chevron-down.svg"
                fill
                className="-rotate-90"
              />
            </div>
            <p className="text-[#4E5566]">What is webflow?</p>
          </div>
          <p className="text-[#8C94A3]">07:31</p>
        </li>
        <li className="text-s flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <File />
            <p className="text-[#4E5566]">Webflow Terms and Condition</p>
          </div>
          <p className="text-[#8C94A3]">5.35 MB</p>
        </li>
      </ul>
    </article>
  );
}

// I did set text-s here if it is not okay we do the text-sm the way it was.
