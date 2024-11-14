"use client";

import { useState } from "react";

export default function Accordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isAccordionOpen, setAccordion] = useState(false);

  return (
    <article>
      <button
        className={`flex w-full items-center justify-between bg-white px-8 py-5 text-lg font-medium ${isAccordionOpen ? "rounded-t-xl" : "rounded-xl"}`}
        onClick={() => setAccordion(!isAccordionOpen)}
      >
        {question}
        <svg
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${isAccordionOpen ? "-rotate-90" : "rotate-90"}`}
        >
          <path
            d="M0.111328 10.6385L4.70343 6.03637L0.111328 1.43424L1.52506 0.0205078L7.54092 6.03637L1.52506 12.0522L0.111328 10.6385Z"
            fill="#C026D3"
          />
        </svg>
      </button>
      <p
        className={`rounded-b-xl bg-primary-50 p-7 transition-all duration-300 ${isAccordionOpen ? "block h-auto" : "hidden h-0"}`}
      >
        {answer}
      </p>
    </article>
  );
}
