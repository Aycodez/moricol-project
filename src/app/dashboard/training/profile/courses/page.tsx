import { ChevronDownSvg, SearchSvg } from "@/components/svgs";
import CourseCard from "../../components/card-course";

const filterOptions = [
  { title: "Sort by", option: ["Latest"] },
  { title: "Status", option: ["All Courses"] },
  { title: "Teacher", option: ["All Teachers"] },
];

export default function TrainingProfileCourses() {
  const filterButtons = filterOptions.map(({ option, title }) => (
    <div key={title} className="flex flex-col gap-y-2">
      <p className="text-sm text-[#4E5566]">{title}:</p>
      <button className="flex w-52 items-center justify-between border border-[#E9EAF0] px-4 py-3 text-[#4E5566]">
        {option[0]} <ChevronDownSvg />
      </button>
    </div>
  ));

  return (
    <main className="px-14 py-12">
      <section className="mb-10">
        <h2 className="mb-6 text-2xl font-semibold text-[#1D2026]">
          Courses (678)
        </h2>

        <div className="flex gap-x-6">
          <div className="flex grow flex-col gap-y-2">
            <p className="text-sm text-[#4E5566]">Search:</p>
            <div className="flex items-center gap-x-3 border border-[#E9EAF0] px-4 py-3 text-[#4E5566] has-[:focus]:border-primary-500 has-[:focus]:bg-primary-50">
              <SearchSvg />
              <input
                type="text"
                placeholder="UI/UX Design"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {filterButtons}
        </div>
      </section>

      <section className="grid grid-cols-5 gap-6">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>
    </main>
  );
}
