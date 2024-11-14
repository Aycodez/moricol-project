"use client";
import Button from "@/components/button";
import ModalLayout from "@/components/layouts/modal-layout";
import Image from "next/image";
import React from "react";
interface FailedModalProps {
  closeExistsModal: () => void;
  showExistsModal: boolean;
  title?: string | null;
  description?: string | null;
}
function FailedModal({ closeExistsModal, showExistsModal, title, description }: FailedModalProps) {
  return (
    <>
      {showExistsModal && (
        <ModalLayout>
          <article className="flex w-full max-w-[806px] flex-col items-center justify-center rounded-lg bg-white px-7 py-10">
            <div className="relative mb-7 h-40 w-40 overflow-hidden rounded-full">
              <Image
                src="/images/double-clipboard.png"
                alt=""
                fill
                sizes="128px"
                className="h-full object-contain"
              />
            </div>
            <h3 className="mb-8 max-w-[635px] text-center text-2xl text-secondary-500 font-medium">
              {title || 'This user is not found.'}
            </h3>
            <div className="mb-7 space-y-3.5 text-center font-medium text-[#667085]">
              <p>{description || 'A User needs to be registered on Moricol for them to be able to be added in as a Member.'}</p>
            </div>
            <Button onClick={closeExistsModal}>DONE</Button>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
export default FailedModal;