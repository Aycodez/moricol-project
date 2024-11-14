"use client";

import Button from "@/components/button";
import ModalLayout from "@/components/layouts/modal-layout";
import { CancelSvg } from "@/components/svgs";
import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ViewRescheduleButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeclineModalOpen, setDeclineModal] = useState(false);

  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        className="absolute right-5 top-3 text-sm font-medium text-primary-500"
        onClick={openModal}
      >
        View
      </button>

      {isModalOpen && (
        <ModalLayout>
          <article className="relative w-[949px] rounded-lg bg-white px-4 py-3.5">
            <button
              className="absolute right-3.5 top-5 mb-1 ml-auto flex h-5 w-5 items-center justify-center rounded-full border-2 border-secondary-500"
              onClick={() => setIsModalOpen(false)}
            >
              <CancelSvg stroke="#D81302" className="h-3 w-3" />
            </button>

            <div className="mb-6">
              <h3 className="text-[#111827]">Rescheduled Date:</h3>
              <p className="text-sm text-gray-500">
                November 12, 2023 09:00 AM - 10:00 AM
              </p>
            </div>

            <div>
              <h3 className="text-[#111827]">Reason for rescheduling:</h3>
              <div className="rounded-lg border border-[#6B7280] px-4 py-3 text-xs">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Feugiat eget
                  vestibulum phasellus posuere adipiscing ac ultrices. Risus
                  semper habitant sem accumsan quam est. Enim eget etiam tortor
                  aenean placerat ultricies. Massa convallis diam elementum at
                  elit arcu ultrices semper. Ornare ut sodales neque ridiculus.
                  Purus feugiat sapien augue nullam. Ornare nulla in senectus
                  vitae tempus posuere. Parturient faucibus ullamcorper laoreet
                  egestas vel molestie consectetur. Ullamcorper sed consectetur
                  in aliquam. Sapien diam lectus scelerisque commodo interdum
                  condimentum sit sit tincidunt. Id tortor nullam sollicitudin
                  ipsum libero turpis felis elit. Sit eget felis lacus amet
                  aliquam. Nibh morbi laoreet vulputate lacus. Pellentesque
                  ullamcorper aliquet ultricies pulvinar orci laoreet. Netus eu
                  scelerisque quam consectetur quis. Arcu id purus tellus
                  sollicitudin ut et feugiat sem. At massa dictum quisque purus
                  elit lorem vitae placerat. Eget erat odio at mauris et vitae
                  ultrices nulla euismod. Risus arcu gravida scelerisque risus
                  quam. Scelerisque ac venenatis nisl sed nullam facilisis
                  imperdiet posuere. Ornare velit aliquet in fusce dolor
                  maecenas. In vel a odio cras vulputate cursus lectus sapien
                  massa.
                </p>
              </div>

              <div className="mt-10 flex gap-x-12">
                <Button>ACCEPT APPOINTMENT</Button>
                <Button
                  className="bg-secondary-500 hover:bg-secondary-500/80"
                  onClick={() => {
                    setIsModalOpen(false);
                    setDeclineModal(true);
                  }}
                >
                  DECLINE APPOINTMENT
                </Button>
              </div>
            </div>
          </article>
        </ModalLayout>
      )}

      {isDeclineModalOpen && (
        <ModalLayout>
          <article className="relative flex w-[777px] flex-col items-center justify-center rounded-lg bg-white py-4">
            <button
              className="absolute right-3.5 top-5 mb-1 ml-auto flex h-5 w-5 items-center justify-center rounded-full border-2 border-secondary-500"
              onClick={() => setDeclineModal(false)}
            >
              <CancelSvg stroke="#D81302" className="h-3 w-3" />
            </button>
            <Image
              src="/images/dashboard/payment-success.png"
              alt=""
              width={261}
              height={174}
            />
            <h3 className="mb-3.5 max-w-[510px] text-center font-medium text-[#374151]">
              Sorry you had to decline, but you can now go ahead and choose
              another masseuse of your choice
            </h3>

            <Link
              href={routes.MASSAGEDASHBOARDHOME}
              className="mb-3.5 w-full max-w-[484px] rounded-lg bg-primary-500 py-3 text-center text-white hover:bg-primary-500/80"
            >
              Go to Dashboard
            </Link>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
