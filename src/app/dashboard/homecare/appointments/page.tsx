"use client";

import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomecareAppointments() {
  return (
    <div>
      <div
        className="no-scrollbar border-b-grey-300 w-full overflow-x-hidden border-b py-6"
        style={{ maxWidth: "100vw" }}
      >
        <AppointmentBtn />
      </div>

      <div className="grid grid-cols-2 gap-5 px-20 py-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <Link href={"care-givers/id"}>
      <article className="shadow-custom relative flex max-w-[394px] shrink-0 items-center gap-x-6 rounded bg-white p-2.5 pb-4 shadow-md lg:rounded-xl">
        <div className="relative h-20 w-20 overflow-hidden rounded-xl">
          <Image
            src="/images/dashboard/swedish.png"
            alt="things on things"
            fill
            sizes="80px"
          />
        </div>
        <div>
          <p className="mb-1 text-xs text-success-500">Ongoing</p>
          <h3 className="mb-3 font-medium">Vivian Akpa</h3>
          <p className="font-semibold text-primary-500">WEEKDAYS ONLY</p>
        </div>
      </article>
    </Link>
  );
};

const AppointmentBtn = () => {
  const [activeBtn, setActiveBtn] = useState(0);

  const btnTexts = ["Ongoing", "Upcoming", "Past"];

  return (
    <div className="flex items-center justify-center gap-x-4 px-2">
      {btnTexts.map((text, i) => {
        return (
          <Button
            key={i}
            variant="outline"
            className={`w-[147px] border border-primary-500 lg:w-[282px] ${
              activeBtn === i
                ? "bg-primary-500 text-white"
                : "bg-white text-primary-500"
            }`}
            onClick={() => setActiveBtn(i)}
          >
            {text}
          </Button>
        );
      })}
    </div>
  );
};
