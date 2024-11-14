import { StarSVG } from "@/components/svgs";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard() {
  return (
    <Link href={"training/course/1"} className="block">
      <article className="border bg-white">
        {/* Image */}
        <div className="relative h-[11.7rem]">
          <Image
            src="/images/dashboard/drug.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Details */}
        <div className="p-3.5 font-medium">
          {/* Badge */}
          <div className="mb-2.5 flex items-center justify-between">
            <span className="bg-[#F9EBD0] px-1.5 py-1 text-[10px] font-medium text-[#714D0A]">
              CORE & MANDATORY
            </span>
            <p className="text-xs text-[#E29A13]">LEVEL 2</p>
          </div>

          {/* Title */}
          <h3 className="text-sm text-[#1D2026]">
            Award in Effective Communication and Aromatics
          </h3>
        </div>

        {/* Footer */}
        <div className="flex justify-between border-t border-t-[#E9EAF0] p-3.5 text-sm text-[#4E5566]">
          <p className="flex items-center gap-x-1">
            <StarSVG fill="#FD8E1F" /> 5.0
          </p>
          <p>
            265.7K <span className="#8C94A3">students</span>
          </p>
        </div>
      </article>
    </Link>
  );
}
