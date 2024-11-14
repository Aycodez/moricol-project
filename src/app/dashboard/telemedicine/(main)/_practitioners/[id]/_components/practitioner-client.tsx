"use client";

import { BadgeSvg, TwoUsersSvg } from "@/components/svgs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Phone, MessageSquare, Video } from "lucide-react";
import Button from "@/components/button";
import { routes } from "@/constants/routes";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
];

export default function PractitionersPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const generateCalendarDays = () => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      return date;
    });
  };
  return (
    <div>
      <div className="mx-auto max-w-[818px] rounded-3xl bg-white">
        <section className="p-4">
          <Profile />
        </section>

        <section className="flex items-center justify-center gap-x-6 rounded-t-[40px] bg-gray-600 py-7">
          <div className="flex items-center gap-x-2 sm:gap-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
              <TwoUsersSvg />
            </div>
            <div className="text-white">
              <p className="font-semibold md:text-lg">1000+</p>
              <p className="text-xs">Patients</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 sm:gap-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
              <BadgeSvg />
            </div>
            <div className="text-white">
              <p className="font-semibold md:text-lg">5 Years</p>
              <p className="text-xs">Experience</p>
            </div>
          </div>
        </section>

        <section className="py-4">
          <div className="grid gap-y-6 px-5">
            <article>
              <h3 className="mb-3 text-lg font-medium">About Doctor</h3>
              <p className="text-gray-500">
                Dr. Tierra Riley is the top most Cardiologist specialist in
                Dhaka Medical College Hospital at Accra. SHe achived several
                awards for her wonderful contribution in her own field. SHe is
                available for private consultation.
              </p>
            </article>
            <div>
              <h3 className="mb-2 font-bold">Languages(s)</h3>
              <p className="mb-4 text-sm">English, Igbo, Pidgin</p>

              <h3 className="mb-2 font-bold">Time Frame</h3>
              <p className="mb-4 text-sm">30 Minutes</p>

              <h3 className="mb-2 font-bold">Pricing (Individual)</h3>
              <p className="mb-4 text-sm">₦5,000.00 Only</p>
            </div>

            {/* Calendar */}
            <div className="mb-4 overflow-hidden">
              <h3 className="mb-2 font-bold">October, 2023</h3>
              <div className="flex gap-2 overflow-x-scroll">
                {generateCalendarDays().map((date, index) => (
                  <Button
                    key={index}
                    variant={
                      date.toDateString() === selectedDate.toDateString()
                        ? "primary"
                        : "outline"
                    }
                    className="flex h-[60px] w-[60px] flex-col items-center p-4 hover:bg-primary-500 hover:text-white"
                    onClick={() => setSelectedDate(date)}
                  >
                    <span className="text-xs">{days[date.getDay()]}</span>
                    <span className="text-lg">{date.getDate()}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          {/* Time Slots */}
          <div className="mb-4 bg-primary-300/10 p-4">
            <h3 className="mb-2 font-bold">Available Time</h3>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time, index) => (
                <Button
                  key={index}
                  variant={time === selectedTime ? "primary" : "outline"}
                  onClick={() => setSelectedTime(time)}
                  className={`${time !== selectedTime ? "bg-white" : ""} hover:bg-primary-500 hover:text-white`}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid gap-y-6 px-5">
            {/* Communication Options */}
            <div className="mb-4 space-y-4">
              <h3>You get to:</h3>
              <div className="flex items-center space-x-2 rounded-lg bg-gray-50 p-2">
                <div className="rounded-lg bg-white p-2">
                  <Phone className="text-blue-500" />
                </div>
                <div>
                  <p className="font-bold">Voice Call</p>
                  <p className="text-muted-foreground text-sm">
                    Can make a Appointment with doctor.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 rounded-lg bg-gray-50 p-2">
                <div className="rounded-lg bg-white p-2">
                  <MessageSquare className="text-primary-500" />
                </div>
                <div>
                  <p className="font-bold">Message</p>
                  <p className="text-muted-foreground text-sm">
                    Can message doctor.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2 rounded-lg bg-gray-50 p-2">
                <div className="rounded-lg bg-white p-2">
                  <Video className="text-purple-500" />
                </div>
                <div>
                  <p className="font-bold">Video Call</p>
                  <p className="text-muted-foreground text-sm">
                    Can make a Video Call with Clients
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href={`${routes.TELEMEDICINE_PRACTITIONERS}/id/book-appointment`}
              className="transition-color inline-block w-full max-w-[640px] rounded-lg border border-primary-500 bg-primary-500 px-4 py-3 text-center text-white duration-300 hover:border-primary-500/80 hover:bg-primary-500/80"
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <article className="flex shrink-0 items-center gap-x-3">
      <Image
        src="/images/client.jpg"
        alt=""
        width={90}
        height={90}
        className="h-[90px] w-[90px] rounded-xl"
      />
      <div>
        <h3 className="mb-0.5 text-lg font-medium text-gray-700">
          Bolaji Samuel
        </h3>
        <div className="mb-2 text-sm font-medium text-gray-500">
          ⭐ <span>4.5</span>
        </div>
        <p className="text-[#777A95]">Doctor</p>
      </div>
    </article>
  );
}
