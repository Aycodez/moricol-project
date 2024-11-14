import Image from "next/image";
import {
  ArrowRightSvg,
  CheckSquareOffsetSvg,
  PlaySVG,
  TrophySvg,
} from "@/components/svgs";
import { SummaryCardProps } from "@/definition";
import { routes } from "@/constants/routes";
import Link from "next/link";

export default function TrainingProfile() {
  return (
    <main className="px-14 py-12">
      <section className="mb-10">
        <h2 className="mb-6 text-2xl font-semibold text-[#1D2026]">
          Dashboard
        </h2>

        <div className="flex gap-x-6">
          <SummaryCard
            color="#F9EBD0"
            icon={<PlaySVG />}
            total={678}
            title="Enrolled Courses"
          />
          <SummaryCard
            color="#E1F7E3"
            icon={<TrophySvg />}
            total={6}
            title="Completed Courses"
          />
          <SummaryCard
            color="#EBEBFF"
            icon={<CheckSquareOffsetSvg />}
            total={67}
            title="Active Courses"
          />
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="mb-6 text-2xl font-semibold text-[#1D2026]">
            Let’s start learning, Kevin
          </h2>

          <div className="flex gap-x-2">
            <button className="flex h-10 w-10 items-center justify-center bg-primary-100">
              <ArrowRightSvg />
            </button>
            <button className="flex h-10 w-10 items-center justify-center bg-primary-100">
              <ArrowRightSvg className="-rotate-180" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 justify-between gap-x-6">
          <MyCourseCard />
          <MyCourseCard startedCourse />
          <MyCourseCard />
          <MyCourseCard startedCourse />
        </div>
      </section>
    </main>
  );
}

function SummaryCard({ color, icon, total, title }: SummaryCardProps) {
  return (
    <article
      className="flex w-full max-w-[312px] items-center gap-x-6 p-6"
      style={{ background: color }}
    >
      <div className="flex h-[60px] w-[60px] items-center justify-center bg-white">
        {icon}
      </div>
      <div>
        <p className="mb-1.5 text-2xl text-[#1D2026]">{total}</p>
        <p className="text-sm text-[#4E5566]">{title}</p>
      </div>
    </article>
  );
}

function MyCourseCard({ startedCourse }: { startedCourse?: boolean }) {
  return (
    <article className="border border-[#E9EAF0] bg-white">
      {/* Image */}
      <div className="relative h-[13.75rem]">
        <Image
          src="/images/dashboard/drug.png"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="mb-1.5 text-xs text-[#6E7485]">
          Award in Effective Communication and Aromatics
        </h3>
        <p className="text-sm font-medium text-[#1D2026]">1. Introductions</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-t-[#E9EAF0] p-4 text-sm text-[#4E5566]">
        <Link
          href={routes.TRAININGVIEWCOURSE}
          className={`inline-block rounded-none border-none bg-primary-100 px-4 py-3 text-center font-semibold text-primary-500 hover:bg-primary-500 hover:text-white ${startedCourse ? "w-fit" : "w-full"}`}
        >
          Watch Lecture
        </Link>
        {startedCourse && (
          <p className="font-medium text-[#23BD33]">61% Completed</p>
        )}
      </div>
    </article>
  );
}
