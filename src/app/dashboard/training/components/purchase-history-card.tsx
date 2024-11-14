"use client";

import { useState } from "react";
import {
  ArrowRightSvg,
  CreditCardSvg,
  DollarSignSvg,
  PlaySVG,
} from "@/components/svgs";
import WishlistCourseCard from "./wishlist-course-card";

export default function PurchaseHistoryCard() {
  const [isAccordionIsOpen, setAccordion] = useState(false);

  return (
    <article className="border border-[#E9EAF0]">
      <div className="flex items-center justify-between border-b border-b-[#E9EAF0] p-6">
        <PaymentDetailContent size="18px" />
        <button
          className={`p-3 ${isAccordionIsOpen ? "bg-primary-500" : "bg-[#F5F7FA]"}`}
          onClick={() => setAccordion(!isAccordionIsOpen)}
        >
          <ArrowRightSvg
            className={`transition-all duration-300 ${isAccordionIsOpen ? "rotate-90" : "-rotate-90"}`}
            stroke={isAccordionIsOpen ? "#ffffff" : "#1D2026"}
          />
        </button>
      </div>

      {/* Accordion */}
      <section
        className={`flex justify-between p-6 transition ${isAccordionIsOpen ? "block" : "hidden"}`}
      >
        {/* Payment history accordon right hand side */}
        <ul className="grid gap-y-6">
          <li className="flex items-center gap-x-11">
            <WishlistCourseCard />
            <p className="text-xl font-medium text-primary-500">₦13.99</p>
          </li>
        </ul>

        {/* Payment history accordion left hand side */}
        <div className="flex flex-col justify-center border-l border-l-[#E9EAF0] pl-12">
          <PaymentDetailContent size="20px" />

          {/* Card Details */}
          <div className="mt-6 flex items-center justify-between text-sm text-[#1D2026]">
            <p>Kelvin Gilbert</p>
            <p className="text-lg">4142 *** *** ***</p>
            <p>04/24</p>
          </div>
        </div>
      </section>
    </article>
  );
}

function PaymentDetailContent({ size }: { size: string }) {
  return (
    <div>
      <p className="mb-3 text-[#1D2026]" style={{ fontSize: size }}>
        1st Septembar, 2021 at 11:30 PM
      </p>
      <div className="flex gap-x-4 text-sm text-[#4E5566]">
        <p className="flex items-center gap-x-1.5">
          <PlaySVG className="h-5 w-5" stroke="#564FFD" fill="" /> 3 Courses
        </p>
        <p className="flex items-center gap-x-1.5">
          <DollarSignSvg /> ₦75.00 NAIRA
        </p>
        <p className="flex items-center gap-x-1.5">
          <CreditCardSvg /> Credit Card
        </p>
      </div>
    </div>
  );
}
