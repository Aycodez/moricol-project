"use client";

import NavigateToPrevPage from "@/components/dashboard/prev-page";
import Image from "next/image";
// import StartMassageForm from "./start-massage-form";
import { BadgeSvg, TwoUsersSvg } from "@/components/svgs";
import Button from "@/components/button";
import { PiDownloadSimpleLight, PiUploadSimpleLight } from "react-icons/pi";
import { FiUpload } from "react-icons/fi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MdNoteAlt } from "react-icons/md";

export default function MasseuseAppointment() {
  const searchParams = useSearchParams();
  const extraDetails = searchParams.get("extra");

  return (
    <main>
      <NavigateToPrevPage />

      <div className="mx-auto flex max-w-[818px] justify-end gap-x-16 pt-3">
        <Button variant="text" className="w-fit">
          Download QR Code
        </Button>
        <Button variant="text" className="w-fit">
          See attendance
        </Button>
      </div>

      <div className="mx-auto my-9 max-w-[818px] rounded-3xl bg-gray-50">
        <section className="flex items-center justify-between p-9">
          <Profile />
          <div className="px-5">
            <article className="w-full max-w-[370px] bg-[#F9EBD0] p-2.5">
              <h3 className="font-medium text-[#374151]">Month of September</h3>
              <p className="text-2xl font-medium text-[#374151]">
                <span className="text-[#22C55E]">24</span>/30
              </p>
            </article>
          </div>
        </section>

        <section className="flex items-center justify-center gap-x-14 rounded-t-[40px] bg-gray-600 py-7">
          <div className="flex items-center gap-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-500">
              <TwoUsersSvg />
            </div>
            <div className="text-white">
              <p className="text-xl font-semibold">1000+</p>
              <p className="text-sm">Clients</p>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-500">
              <BadgeSvg />
            </div>
            <div className="text-white">
              <p className="text-xl font-semibold">5 Years</p>
              <p className="text-sm">Experience</p>
            </div>
          </div>
        </section>

        <div className="lg:bg-grey-50 grid gap-y-6 rounded-t-[40px] px-5 pt-7 lg:rounded-t-none lg:px-14">
          <section>
            <div className="grid gap-y-4">
              <Link
                href={""}
                className="flex items-center gap-x-4 rounded-lg border border-[#A0A2B333] bg-white px-3.5 py-2.5"
              >
                <div style={{ color: "#3BC178" }} className={`text-2xl`}>
                  <MdNoteAlt />
                </div>
                <div>
                  <h3 className="font-medium">Request for care plan</h3>
                  <p className="text-xs">
                    You would receive an email of your care plan
                  </p>
                </div>
              </Link>
            </div>

            <div className="mb-6 mt-9 flex w-full text-center">
              <Link
                href="/dashboard/homecare/care-givers/id?extra=received"
                className={`inline-block w-1/2 border-b-[2px] px-2 pb-4 ${
                  extraDetails === "received"
                    ? "border-b-primary-500 text-primary-500"
                    : "border-b-grey-300"
                }`}
              >
                Received
              </Link>
              <Link
                href="/dashboard/homecare/care-givers/id?extra=sent"
                className={`inline-block w-1/2 border-b-[2px] px-2 pb-4 ${
                  extraDetails === "sent"
                    ? "border-b-primary-500 text-primary-500"
                    : "border-b-grey-300"
                }`}
              >
                Sent
              </Link>
            </div>
            {extraDetails === "received" ? <Received /> : <Sent />}
          </section>

          <div className="flex flex-col gap-y-6 lg:mb-20">
            {/* <Button
                variant="outline"
                className="w-full border border-primary-500 text-primary-500"
                onClick={() => {
                  return router.push(
                    "/dashboard/appointments/cancel-appointment",
                  );
                }}
              >
                CANCEL & RESCHEDULE APPOINTMENT
              </Button> */}
          </div>
        </div>
      </div>
    </main>
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
        <p className="text-[#777A95]">Lagos</p>
      </div>
    </article>
  );
}

const Received = () => {
  return (
    <section className="grid gap-y-6">
      <div className="flex items-center justify-between gap-x-6">
        <div className="w-full">
          <h3 className="mb-2 font-medium text-[#1F2937]">Lab Report</h3>
          <div className="flex flex-col items-center rounded-xl border-[1px] border-dashed border-primary-500 bg-[#F2EAEA] pb-3.5 pt-2">
            <PiDownloadSimpleLight className="text-2xl font-bold text-primary-500" />
            <p className="text-sm">Download attachment</p>
          </div>
        </div>
        <div>❌</div>
      </div>
      <div className="flex items-center justify-between gap-x-6">
        <div className="w-full">
          <h3 className="mb-2 font-medium text-[#1F2937]">
            Prescription from doctor
          </h3>
          <div className="flex flex-col items-center rounded-xl border-[1px] border-dashed border-primary-500 bg-[#F2EAEA] pb-3.5 pt-2">
            <PiDownloadSimpleLight className="text-2xl font-bold text-primary-500" />
            <p className="text-sm">Download attachment</p>
          </div>
        </div>
        <div>❌</div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-x-6">
        <div className="w-full">
          <div className="flex flex-col items-center rounded-xl border-[1px] border-dashed border-primary-500 bg-[#F2EAEA] pb-3.5 pt-2">
            <FiUpload className="text-2xl font-bold text-primary-500" />
            <p className="text-sm">Upload Image</p>
          </div>
        </div>
        <div>❌</div>
      </div>
    </section>
  );
};

const Sent = () => {
  return (
    <section className="grid gap-y-6">
      <div className="flex items-center justify-between gap-x-6">
        <div className="w-full">
          <h3 className="mb-2 font-medium text-[#1F2937]">Lab Report</h3>
          <div className="flex flex-col items-center rounded-xl border-[1px] border-dashed border-primary-500 bg-[#F2EAEA] pb-3.5 pt-2">
            <PiUploadSimpleLight className="text-2xl font-bold text-primary-500" />
            <p className="text-sm">Upload attachment</p>
          </div>
        </div>
        <div>❌</div>
      </div>
      <div className="flex items-center justify-between gap-x-6">
        <div className="w-full">
          <h3 className="mb-2 font-medium text-[#1F2937]">
            Prescription from doctor
          </h3>
          <div className="flex flex-col items-center rounded-xl border-[1px] border-dashed border-primary-500 bg-[#F2EAEA] pb-3.5 pt-2">
            <PiUploadSimpleLight className="text-2xl font-bold text-primary-500" />
            <p className="text-sm">Upload attachment</p>
          </div>
        </div>
        <div>❌</div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-x-6">
        <div className="w-full">
          <div className="flex flex-col items-center rounded-xl border-[1px] border-dashed border-primary-500 bg-[#F2EAEA] pb-3.5 pt-2">
            <FiUpload className="text-2xl font-bold text-primary-500" />
            <p className="text-sm">Upload Image</p>
          </div>
        </div>
        <div>❌</div>
      </div>
    </section>
  );
};
