"use client";
import NavigationBackBtn from "@/components/nav-back-btn";
import { usePathname } from "next/navigation";
import React from "react";

function BackBTNonDetails() {
  const pathname = usePathname();
  const isPathDetails =
    pathname.includes("/details/") ||
    pathname.includes("/apply/") ||
    pathname.includes("/jobs/resume");
  return isPathDetails ? (
    <div className="border-b border-gray-300 px-4 py-2">
      <NavigationBackBtn />
    </div>
  ) : null;
}

export default BackBTNonDetails;
