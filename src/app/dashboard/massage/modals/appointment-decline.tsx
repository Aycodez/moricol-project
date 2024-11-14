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
