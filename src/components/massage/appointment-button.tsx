"use client";

import { useEffect, useState, useCallback } from "react";
import Button from "../button";

const btnTexts = ["Pending", "Ongoing", "Upcoming", "Past"];

export default function AppointmentButtons() {
  const [activeBtn, setActiveBtn] = useState(() => {
    if (typeof window !== "undefined") {
      const savedActiveBtn = localStorage.getItem("activeBtn");
      return savedActiveBtn !== null ? parseInt(savedActiveBtn, 10) : 0;
    }
    return 0;
  });

  useEffect(() => {
    localStorage.setItem("activeBtn", String(activeBtn));
  }, [activeBtn]);

  const handleClick = useCallback((index: number) => {
    setActiveBtn(index);
  }, []);

  return (
    <div className="flex space-x-4">
      {btnTexts.map((text, i) => (
        <Button
          key={i}
          variant="outline"
          className={`w-[147px] flex-shrink-0 border border-primary-500 lg:w-[282px] ${
            activeBtn === i
              ? "bg-primary-500 text-white"
              : "bg-white text-primary-500"
          }`}
          onClick={() => handleClick(i)}
        >
          {text}
        </Button>
      ))}
    </div>
  );
}
