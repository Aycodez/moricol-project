"use client";

import { useRouter } from "next/navigation";
import { ArrowRightSvg } from "./svgs";

export default function NavigationBackBtn() {
  const router = useRouter();

  return (
    <button
      className="flex items-center gap-x-2 text-sm font-bold text-primary-500"
      onClick={() => router.back()}
    >
      <ArrowRightSvg className="h-4 w-4" /> Go Back
    </button>
  );
}
