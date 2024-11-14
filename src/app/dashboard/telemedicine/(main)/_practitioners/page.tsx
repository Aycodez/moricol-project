"use client";
import { Input } from "@/components/input";
import { Card } from "@/components/card";
import { BiSearch } from "react-icons/bi";
import { FilterSVG } from "@/components/svgs";
import { useState } from "react";
import FilterModal from "../../(appointments)/appointments/_components/filter-modal";
import { FaHeartCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import { routes } from "@/constants/routes";

export default function AllPractitioners() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mx-auto xl:container">
      <h1 className="mb-6 text-2xl font-bold">All Practitioners</h1>
      <div className="m-auto flex max-w-lg items-center justify-center gap-2">
        <div className="relative flex-grow py-4">
          <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
          <Input
            type="text"
            placeholder="Search for Appointments"
            className="w-full py-2 pl-10 pr-4"
          />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400"
            onClick={() => setShowModal(true)}
          >
            <FilterSVG />
          </button>
        </div>
        <Link
          href={routes.TELEMEDICINE_PRACTITIONERS_FAVORITES}
          className="rounded border border-gray-500 p-1"
        >
          <FaHeartCircleCheck className="text-3xl text-primary-500" />
        </Link>
      </div>
      <FilterModal show={showModal} onClose={() => setShowModal(false)} />

      <div className="grid grid-cols-1 gap-x-8 divide-y bg-white md:grid-cols-2 xl:grid-cols-3">
        {Array(16)
          .fill(null)
          .map((_, index) => (
            <Card
              key={index + "f"}
              className="flex items-center space-x-4 rounded-none border-0 px-4 shadow-none"
            >
              <img
                src="/images/client.jpg"
                alt="Dr. Mahmud Nik Hasan"
                className="h-20 w-20 rounded-full object-cover"
              />
              <div className="flex min-h-20 flex-grow flex-col justify-between py-4">
                <Link
                  className="hover:underline"
                  href={routes.TELEMEDICINE_PRACTITIONERS + "/id"}
                >
                  <h2 className="font-semibold">Dr. Mahmud Nik Hasan</h2>
                </Link>
                <div className="flex items-center space-x-1 text-sm">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">4.5</span>
                </div>
                <div className="mt-auto flex justify-between text-xs">
                  <p className="text-gray-600">Cardiologist</p>
                  <Link
                    className="hover:underline"
                    href={routes.TELEMEDICINE_PRACTITIONERS_REVIEWS}
                  >
                    <p className="text-primary-500">(41 Reviews)</p>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
