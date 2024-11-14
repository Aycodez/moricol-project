"use client";

import Button from "@/components/button";
import ModalLayout from "@/components/layouts/modal-layout";
import { CancelSvg } from "@/components/svgs";
import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PaymentSuccessful() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReminderModalOpen, setReminderModal] = useState(false);
  const [isScheduleModalOpen, setScheduleModal] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsModalOpen(true)}>
        Pay ₦5,700 <span>{">"}</span>
      </Button>

      {isModalOpen && (
        <ModalLayout>
          <article className="relative flex w-[777px] flex-col items-center justify-center rounded-lg bg-white py-4">
            <button
              className="absolute right-3.5 top-5 mb-1 ml-auto flex h-5 w-5 items-center justify-center rounded-full border-2 border-secondary-500"
              onClick={() => setIsModalOpen(false)}
            >
              <CancelSvg stroke="#D81302" className="h-3 w-3" />
            </button>
            <Image
              src="/images/dashboard/payment-success.png"
              alt=""
              width={261}
              height={174}
            />
            <h3 className="mb-3.5 font-medium text-[#374151]">
              Successful Transaction
            </h3>
            <p className="mb-4 text-sm text-[#374151]">
              Your appointment is now on your &quot;Upcoming Appointment&quot;
            </p>

            <Link
              href={routes.MASSAGEDASHBOARDHOME}
              className="mb-3.5 w-full max-w-[484px] rounded-lg bg-primary-500 py-3 text-center text-white hover:bg-primary-500/80"
            >
              Go to Dashboard
            </Link>
            <Button
              variant="text"
              onClick={() => {
                setIsModalOpen(false);
                setReminderModal(true);
              }}
            >
              Set a Reminder
            </Button>
          </article>
        </ModalLayout>
      )}

      {isReminderModalOpen && (
        <ModalLayout>
          <article className="relative flex w-[806px] flex-col items-center justify-center rounded-lg bg-white py-12">
            <button
              className="absolute right-3.5 top-5 mb-1 ml-auto flex h-5 w-5 items-center justify-center rounded-full border-2 border-secondary-500"
              onClick={() => setIsModalOpen(false)}
            >
              <CancelSvg stroke="#D81302" className="h-3 w-3" />
            </button>

            <h3 className="mb-3.5 font-medium text-[#374151]">
              Send me a reminder Via
            </h3>

            <form className="w-full max-w-[621px]">
              <section className="mb-7 flex w-full justify-between">
                <div className="flex items-center gap-x-2 font-medium text-gray-600">
                  <input type="checkbox" />
                  <label htmlFor="">Email Notification</label>
                </div>
                <div className="flex items-center gap-x-2 font-medium text-gray-600">
                  <input type="checkbox" />
                  <label htmlFor="">SMS</label>
                </div>
                <div className="flex items-center gap-x-2 font-medium text-gray-600">
                  <input type="checkbox" />
                  <label htmlFor="">Push Notification</label>
                </div>
              </section>
              <Button
                onClick={(e) => {
                  e.preventDefault();

                  setReminderModal(false);
                  setScheduleModal(true);
                }}
              >
                SET REMINDER
              </Button>
            </form>
          </article>
        </ModalLayout>
      )}

      {isScheduleModalOpen && (
        <ModalLayout>
          <article className="flex w-full max-w-[806px] flex-col items-center justify-center rounded-lg bg-white px-7 py-10">
            <div className="relative mb-7 h-32 w-32 overflow-hidden rounded-full">
              <Image src="/images/client.jpg" alt="" fill sizes="128px" />
            </div>
            <h3 className="mb-8 max-w-[635px] text-center text-2xl font-medium">
              Your upcoming massage with{" "}
              <span className="text-primary-500">Abiola Dauda</span> has been
              scheduled
            </h3>

            <div className="mb-7 space-y-3.5 text-center font-medium text-[#667085]">
              <p>22nd Wednesday, June 2023 at 12:30PM CAT</p>
              <p>
                We’ll send you a message when the masseuse confirms your
                appointment
              </p>
            </div>

            <Button onClick={() => setScheduleModal(false)}>OKAY</Button>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
