"use client";

import React, { useState } from "react";
import AppointmentScheduler from "./appointments-scheduler";
import Button from "@/components/button";
import { BiCalendar, BiListUl } from "react-icons/bi";
import AppointmentsList from "./appointments-list";

function AppointmentView() {
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar");

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <Button className="ml-auto w-fit bg-primary-500 text-white hover:bg-primary-600">
          Schedule a Doctor&apos;s Appointment
        </Button>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Appointments</h2>
          <p className="text-sm text-gray-500">See all your appointments</p>
        </div>
        <div className="flex items-center rounded-full border">
          <Button
            variant="outline"
            className={`p-1 ${viewMode === "list" ? "text-primary-500" : "text-gray-500"} rounded-0 rounded-l-full border-0 px-2`}
            onClick={() => setViewMode("list")}
          >
            <BiListUl className="h-5 w-5" />
          </Button>
          <div className="h-5 border" />
          <Button
            variant="outline"
            className={`p-1 ${viewMode === "calendar" ? "text-primary-500" : "text-gray-500"} rounded-0 rounded-r-full border-0 px-2`}
            onClick={() => setViewMode("calendar")}
          >
            <BiCalendar className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {viewMode === "calendar" && <AppointmentScheduler />}
      {viewMode === "list" && <AppointmentsList />}
    </div>
  );
}

export default AppointmentView;
