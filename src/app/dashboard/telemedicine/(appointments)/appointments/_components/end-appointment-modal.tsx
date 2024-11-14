"use client";
import Button from "@/components/button";
import ModalLayout from "@/components/layouts/modal-layout";
import Image from "next/image";
import React, { useState } from "react";
import CommunicationOption from "../../../_components/communication-option";
import { CheckCheck } from "lucide-react";

function EndAppointmentModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsModalOpen(true)}>
        <CommunicationOption
          icon={<CheckCheck className="text-green-500" />}
          title="Close Appointment"
          description="End appointment"
        />
      </div>
      {isModalOpen && (
        <ModalLayout>
          <article className="flex w-full max-w-[806px] flex-col items-center justify-center rounded-lg bg-white px-7 py-10">
            <h3>COMPLETED</h3>
            <div className="relative mb-7 h-20 w-20">
              <Image
                src="/images/end-app.png"
                alt=""
                fill
                sizes="128px"
                className="h-full object-contain"
              />
            </div>
            <h3 className="mb-8 max-w-[635px] text-center text-2xl font-medium">
              Your appointment booking has successfully ended.
            </h3>

            <div className="mb-7 space-y-3.5 text-center font-medium text-[#667085]">
              <p>
                Kindly leave a review for this doctor so we can know how to
                serve you better
              </p>
            </div>

            <Button onClick={() => setIsModalOpen(false)}>OKAY</Button>
          </article>
        </ModalLayout>
      )}
    </>
  );
}

export default EndAppointmentModal;
