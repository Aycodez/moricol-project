"use client";

import { useState } from "react";
import Button from "@/components/button";
import { Card, CardContent } from "@/components/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface Appointment {
  id: number;
  doctorName: string;
  time: string;
  date: Date;
}

const appointments: Appointment[] = [
  {
    id: 1,
    doctorName: "Dr. Brycen Bradford",
    time: "12 PM",
    date: new Date(2023, 8, 2),
  },
  // Add more appointments as needed
];

interface CalendarViewProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const CalendarView = ({
  currentDate,
  setCurrentDate,
  selectedDate,
  setSelectedDate,
}: CalendarViewProps) => {
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  );
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDay = firstDayOfMonth.getDay();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  return (
    <Card className="w-full max-w-64">
      <CardContent className="w-full p-2">
        <div className="mb-4 flex items-center justify-between gap-4">
          <Button variant="outline" onClick={prevMonth} className="w-fit p-2">
            {" "}
            {/* Updated variant */}
            <BsArrowLeft className="h-4 w-4" />
          </Button>
          <span className="bold w-full text-center text-sm font-semibold">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <Button variant="outline" onClick={nextMonth} className="w-fit p-2">
            {" "}
            {/* Updated variant */}
            <BsArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {daysOfWeek.map((day) => (
            <div key={day + "fc"} className="text-xs text-gray-500">
              {day}
            </div>
          ))}
          {Array.from({ length: startingDay }).map((_, index) => (
            <div key={`empty-${index}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, index: number) => {
            const day = index + 1;
            const date = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day,
            );
            const isSelected =
              selectedDate &&
              date.toDateString() === selectedDate.toDateString();
            const hasAppointment = appointments.some(
              (apt) => apt.date.toDateString() === date.toDateString(),
            );
            return (
              <Button
                key={day}
                variant={isSelected ? "primary" : "outline"} // Updated variant
                className={`p-1 ${hasAppointment ? "bg-primary-500" : ""} flex items-center justify-center text-xs`}
                onClick={() => setSelectedDate(date)}
              >
                {day}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

interface DayViewProps {
  selectedDate: Date;
  appointments: Appointment[];
}

const DayView = ({ selectedDate, appointments }: DayViewProps) => {
  const timeSlots = [
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
  ];

  return (
    <Card className="w-full md:flex-grow">
      <CardContent className="p-2">
        <Select defaultValue={selectedDate.toDateString()}>
          <SelectTrigger className="mb-4 w-full">
            <SelectValue>{selectedDate.toDateString()}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={selectedDate.toDateString()}>
              {selectedDate.toDateString()}
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="mb-4 grid grid-cols-7 gap-4">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <div key={day + index} className="text-center">
              <div className="text-sm text-gray-500">{day}</div>
              <div
                className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${index === 4 ? "bg-primary-500 text-white" : ""}`}
              >
                {new Date(
                  selectedDate.getTime() -
                    selectedDate.getDay() * 86400000 +
                    index * 86400000,
                ).getDate()}
              </div>
            </div>
          ))}
        </div>
        {timeSlots.map((time) => {
          const appointment = appointments.find(
            (apt) =>
              apt.time === time &&
              apt.date.toDateString() === selectedDate.toDateString(),
          );
          return (
            <div key={time} className="mb-4 flex items-center">
              <div className="mr-1 w-16 text-xs text-gray-500">{time}</div>
              {appointment ? (
                <div className="flex-grow rounded bg-primary-100 p-2">
                  <span className="font-bold">{appointment.doctorName}</span>
                </div>
              ) : (
                <div className="flex-grow border-t border-gray-200" />
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default function AppointmentScheduler() {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 8, 1)); // September 2023
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 8, 2)); // September 2, 2023

  return (
    <div className="mx-auto">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <CalendarView
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <DayView selectedDate={selectedDate} appointments={appointments} />
      </div>
    </div>
  );
}
