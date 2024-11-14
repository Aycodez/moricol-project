"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import { BiSearch } from "react-icons/bi";
import { Input } from "@/components/input";
import FilterModal from "./filter-modal";
import { FilterSVG } from "@/components/svgs";
import Link from "next/link";
import { routes } from "@/constants/routes";

interface Appointment {
  id: number;
  doctorName: string;
  doctorImage: string;
  status: "Accepted" | "Declined" | "Ongoing" | "Completed";
  date: string;
  time: string;
  category: "ongoing" | "upcoming" | "past";
}

const appointments: Appointment[] = [
  {
    id: 1,
    doctorName: "Dr. Brycen Bradford",
    doctorImage: "/images/client.jpg",
    status: "Accepted",
    date: "June 12",
    time: "09:00 AM - 10:00 AM",
    category: "upcoming",
  },
  {
    id: 2,
    doctorName: "Dr. Tierra Riley",
    doctorImage: "/images/client.jpg",
    status: "Completed",
    date: "June 12",
    time: "09:00 AM - 10:00 AM",
    category: "past",
  },
  {
    id: 2,
    doctorName: "Dr. Tierra Riley",
    doctorImage: "/images/client.jpg",
    status: "Declined",
    date: "June 12",
    time: "09:00 AM - 10:00 AM",
    category: "past",
  },
  {
    id: 3,
    doctorName: "Vivian Akpa",
    doctorImage: "/images/client.jpg",
    status: "Ongoing",
    date: "June 12",
    time: "09:00 AM - 10:00 AM",
    category: "ongoing",
  },
  {
    id: 4,
    doctorName: "Dr. Brycen Bradford",
    doctorImage: "/images/client.jpg",
    status: "Accepted",
    date: "June 12",
    time: "09:00 AM - 10:00 AM",
    category: "upcoming",
  },
  {
    id: 5,
    doctorName: "Dr. Tierra Riley",
    doctorImage: "/images/client.jpg",
    status: "Ongoing",
    date: "June 12",
    time: "09:00 AM - 10:00 AM",
    category: "ongoing",
  },
];

const AppointmentCard = ({ appointment }: { appointment: Appointment }) => (
  <Card className="mb-4">
    <CardContent className="flex items-center p-2">
      <img
        src={appointment.doctorImage}
        alt={appointment.doctorName}
        className="mr-2 h-16 w-16 rounded-full"
      />
      <div className="flex-grow">
        <div className="flex items-start justify-between">
          <div>
            <span
              className={`text-xs ${
                appointment.status === "Accepted"
                  ? "text-green-800"
                  : appointment.status === "Declined"
                    ? "text-red-800"
                    : "text-blue-800"
              }`}
            >
              {appointment.status}
            </span>
            <h3 className="font-semibold">{appointment.doctorName}</h3>
            <p className="text-xs text-gray-500">
              {appointment.date}, {appointment.time}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function AppointmentsList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const filteredAppointments = appointments.filter((appointment) =>
    appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="mx-auto">
      <hr />
      <div className="relative m-auto max-w-lg flex-grow py-4">
        <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <Input
          type="text"
          placeholder="Search for Appointments"
          className="w-full py-2 pl-10 pr-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400"
          onClick={() => setShowModal(true)}
        >
          <FilterSVG />
        </button>
      </div>
      <FilterModal show={showModal} onClose={() => setShowModal(false)} />
      <hr />
      <br />
      <Tabs defaultValue="ongoing" className="w-full">
        <TabsList className="mb-4 grid w-full grid-cols-3 gap-2 md:gap-5">
          <TabsTrigger
            className="md:text-md rounded-lg border text-sm data-[state=active]:bg-primary-500 data-[state=active]:text-white"
            value="ongoing"
          >
            Ongoing
          </TabsTrigger>
          <TabsTrigger
            className="md:text-md rounded-lg border text-sm data-[state=active]:bg-primary-500 data-[state=active]:text-white"
            value="upcoming"
          >
            Upcoming
          </TabsTrigger>
          <TabsTrigger
            className="md:text-md rounded-lg border text-sm data-[state=active]:bg-primary-500 data-[state=active]:text-white"
            value="past"
          >
            Past
          </TabsTrigger>
        </TabsList>
        {["ongoing", "upcoming", "past"].map((category) => (
          <TabsContent
            key={category}
            value={category}
            className="grid grid-cols-1 gap-x-5 lg:grid-cols-3"
          >
            {filteredAppointments
              .filter((appointment) => appointment.category === category)
              .map((appointment) => (
                <Link
                  key={appointment.id}
                  href={routes.TELEMEDICINE_APPOINTMENTS + "/" + appointment.id}
                >
                  <AppointmentCard appointment={appointment} />
                </Link>
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
