import Link from "next/link";
import CourseCategories from "./components/course-categories";
import { routes } from "@/constants/routes";

export default function Home() {
  return (
    <main>
      <section className="mb-6 flex items-start justify-between px-14 py-8">
        <div className="font-semibold">
          <h1 className="mb-4 text-2xl text-[#1D2026]">Browse top category</h1>
          <p className="text-gray-500">
            Choose a path you would like to learn from
          </p>
        </div>
        <div>
          <Link
            href={routes.TRAININGPROFILECOURSES}
            className="font-semibold text-primary-500"
          >
            My Enrolled Courses
          </Link>
        </div>
      </section>

      <CourseCategories />
    </main>
  );
}
