import Image from "next/image";
import { StarSVG } from "@/components/svgs";

export default function WishlistCourseCard() {
  return (
    <article className="flex gap-x-5 text-[#1D2026]">
      <div className="relative h-[120px] w-40 overflow-hidden">
        <Image
          src="/images/dashboard/drug.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="mb-2 flex items-center gap-x-2 text-sm font-medium">
            <StarSVG fill="#FD8E1F" />
            <p>
              4.6 <span className="text-[#8C94A3]">(451434 Review)</span>
            </p>
          </div>
          {/* Course title */}
          <h3 className="mb-6 w-[312px] font-medium">
            The Ultimate Drawing Course - Beginner to Advanced
          </h3>
        </div>

        {/* if there are more than two authors use the dot separator else comot am */}
        <div className="text-sm text-[#4E5566]">
          <span className="mr-1.5 text-[#A1A5B3]">Course by:</span>
          Harry Potter{" "}
          <div className="mx-1.5 inline-block h-1 w-1 rounded-full bg-[#4E5566]" />{" "}
          Joen Mosil
        </div>
      </div>
    </article>
  );
}
