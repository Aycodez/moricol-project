import Image from "next/image";

import { StarSVG } from "@/components/svgs";
import Button from "@/components/button";

export default function TrainingProfileTeachers() {
  return (
    <main className="px-14 py-12">
      <section className="mb-10">
        <h2 className="mb-6 text-center text-2xl font-semibold text-[#1D2026]">
          Instructors (678)
        </h2>
      </section>

      <section>
        <div className="grid grid-cols-4 gap-6">
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
          <InstructorCard />
        </div>
      </section>
    </main>
  );
}

function InstructorCard() {
  return (
    <article className="w-full border border-[#E9EAF0] bg-white">
      <div className="relative h-[312px] overflow-hidden">
        <Image src="/images/dashboard/drug.png" fill alt="" sizes="312px" />
      </div>

      <div>
        <div className="px-5 py-4 text-center">
          <h3 className="mb-1 text-lg font-medium leading-6 text-[#1D2026]">
            David Luis
          </h3>
          <p className="text-sm leading-5 text-[#8C94A3]">Software Developer</p>
        </div>
      </div>
      <div className="border-t border-t-[#E9EAF0] px-5 py-4">
        <div className="mb-4 flex justify-between text-sm font-medium text-[#4E5566]">
          <p className="flex items-center gap-x-1">
            <StarSVG fill="#FD8E1F" /> 5.0
          </p>
          <p>
            343,334 <span className="text-sm font-normal">Students</span>
          </p>
        </div>

        <Button
          className={`rounded-none border-none bg-primary-100 px-4 font-semibold text-primary-500 hover:bg-primary-500 hover:text-white`}
        >
          Send Message
        </Button>
      </div>
    </article>
  );
}
