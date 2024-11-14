import Button from "@/components/button";
import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function LoanVerification() {
  return (
    <>

      <div className="flex h-[80vh] flex-col items-center justify-center rounded-lg p-8">
        <div className="relative mb-8 h-[150px] w-[150px]">
          <Image
            fill
            src={"/images/verify.png"}
            alt="loan verification"
            className="h-full w-full object-contain"
          />
        </div>
        <h3 className="mb-4 text-center text-xl font-semibold text-gray-800">
          We are Verifying your information
        </h3>
        <p className="mb-6 max-w-md text-center text-gray-600">
          This usually takes between 5 minutes to an hour, but it can sometimes
          take up to 48hours. We will email you to let you know if you’re
          eligible or please check back later
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

export default LoanVerification;
