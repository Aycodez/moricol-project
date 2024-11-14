"use client";
import Button from "@/components/button";
import ModalLayout from "@/components/layouts/modal-layout";
import { routes } from "@/constants/routes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaSpinner } from "react-icons/fa6";

function ApplySuccessModal({ loading, upload, isModalOpen, setIsModalOpen }: { loading: boolean, upload: () => Promise<void>, isModalOpen: boolean, setIsModalOpen: (value: boolean) => void }) {

  const router = useRouter();

  return (
    <>
      <Button type="button" onClick={upload} className="disabled:bg-gray-500 disabled:text-gray-300 flex items-center justify-center" disabled={loading}>
        {loading ? <span className="flex items-center gap-2"><FaSpinner className="animate-spin" /> <span>Uploading...</span></span> : 'CONTINUE'}
      </Button>

      {isModalOpen && (
        <ModalLayout>
          <article className="flex w-full max-w-[806px] flex-col items-center justify-center rounded-lg bg-white px-7 py-10">
            <div className="relative mb-7 h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/images/SUCCESS.png"
                alt=""
                fill
                sizes="128px"
                className="h-full object-contain"
              />
            </div>
            <h3 className="mb-8 max-w-[635px] text-center text-2xl font-medium">
              Application Successful!
            </h3>

            <div className="mb-7 space-y-3.5 text-center font-medium text-[#667085]">
              <p>Your application has been submitted successfully.</p>
            </div>

            <Button onClick={() => { router.push(routes.RECRUITMENT_JOBS); setIsModalOpen(false); }}>OKAY</Button>
          </article>
        </ModalLayout>
      )}
    </>
  );
}

export default ApplySuccessModal;
