"use client";

import { useRouter } from "next/navigation";

export default function NavigateToPrevPage() {
  const router = useRouter();

  return (
    <div className="hidden border-b border-b-gray-300 px-4 py-3 lg:block">
      <button
        className="transtion-all text-18 text-grey-700 group flex gap-x-2 duration-150 hover:opacity-80"
        onClick={() => router.back()}
      >
        <span className="transition-all duration-150 group-hover:-translate-x-0.5">
          &larr;
        </span>
        <span>Back</span>
      </button>
    </div>
  );
}
