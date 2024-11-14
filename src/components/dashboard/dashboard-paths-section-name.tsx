"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import routes_names from "@/constants/routes-names";

function DashboardPathsSectionName() {
  const [sectionName, setSectionName] = useState("Dashboard");
  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname;
    if (currentPath.includes("/offer")) {
      return setSectionName("Loan Offer");
    }
    if (currentPath.includes("loan/apply")) {
      return setSectionName("Apply for a Loan");
    }
    const foundRoute = routes_names.find((route) => route.path === currentPath);
    if (foundRoute) {
      setSectionName(foundRoute.name);
    }
  }, [pathname]);

  return (
    <h1 className="text-md font-semibold text-white md:text-lg">
      {sectionName}
    </h1>
  );
}

export default DashboardPathsSectionName;
