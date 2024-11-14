import Button from "@/components/button";
import NavigationBackBtn from "@/components/nav-back-btn";
import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";




export function DeclinedLoanComponent() {
  return (
    <>
      <div className="border-b border-gray-300 px-4 py-2">
        <NavigationBackBtn />
      </div>
      <div className="flex h-[80vh] flex-col items-center justify-center rounded-lg p-8">
        <div className="relative mb-8 h-[150px] w-[150px]">
          <Image
            fill
            src={"/images/declined.png"}
            alt="loan verification"
            className="h-full w-full object-contain"
          />
        </div>
        <h3 className="mb-4 text-center text-xl font-semibold text-gray-800">
          Oops, we apologize
        </h3>
        <p className="mb-6 max-w-md text-center text-gray-600">
          We&apos;re sorry but we can&apos;t offer you any loan at this time
          because your details does not match our requirement. Try applying
          again with the right information
        </p>

        <Link
          href={routes.LOANDASHBOARDHOME as string}
          className="w-full max-w-[350px]"
        >
          <Button className="mt-10 w-full lg:max-w-[360px]">DONE</Button>
        </Link>
      </div>
    </>
  );
}