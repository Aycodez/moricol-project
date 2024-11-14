"use client";

import Button from "@/components/button";
import ModalLayout from "@/components/layouts/modal-layout";
import { CancelSvg, CompletedSvg } from "@/components/svgs";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { useState } from "react";

export default function EndMassageButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>END MASSAGE</Button>

      {isModalOpen && (
        <ModalLayout>
          <article className="relative flex w-[806px] flex-col items-center justify-center rounded-lg bg-white py-7">
            <button
              className="absolute right-3.5 top-5 mb-1 ml-auto flex h-5 w-5 items-center justify-center rounded-full border-2 border-secondary-500"
              onClick={() => setIsModalOpen(false)}
            >
              <CancelSvg stroke="#D81302" className="h-3 w-3" />
            </button>

            <h3 className="mb-3 text-2xl font-medium text-gray-800">
              Completed
            </h3>

            <CompletedSvg />

            <div className="mb-7 mt-8 space-y-2 text-center">
              <p>Your appointment booking has successfully ended.</p>
              <p>
                Kindly leave a review for this masseuse so we can know how to
                serve you better
              </p>
            </div>

            <Link
              href={routes.MASSAGEREVIEW}
              className="mb-3.5 w-full max-w-[484px] rounded-lg bg-primary-500 py-3 text-center text-white hover:bg-primary-500/80"
            >
              Leave a Review
            </Link>
            <Link
              href={routes.MASSAGEAPPOINTMENTS}
              className="text-primary-500"
            >
              Go Back
            </Link>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
