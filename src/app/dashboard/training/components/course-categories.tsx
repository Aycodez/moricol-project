"use client";

import React, { useState } from "react";
import CourseCard from "./card-course";
import { ChevronDownSvg, FilterSVG, SearchSvg } from "@/components/svgs";

const categories = ["Classroom", "Visual", "Bundle", "Online"];
const suggestions = ["user interface", "user experience"];

export default function CourseCategories() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoriesList = categories.map((c, i) => (
    <li
      key={i}
      className={`w-full border-b pb-1 text-center ${activeCategory === i ? "border-primary-500 text-primary-500" : "border-gray-700 text-gray-700"}`}
    >
      <button onClick={() => setActiveCategory(i)}>{c}</button>
    </li>
  ));

  const suggestionsList = suggestions.map((s, i) => (
    <li key={i} className="">
      {s}
    </li>
  ));

  return (
    <section>
      {/* Filter section */}
      <section className="mb-10 px-14">
        <div className="flex justify-between">
          <div className="flex gap-x-6">
            <FilterBtn />
            <div className="flex w-[26rem] items-center gap-x-3 border border-[#E9EAF0] px-4 py-3 text-[#4E5566] has-[:focus]:border-primary-500 has-[:focus]:bg-primary-50">
              <SearchSvg />
              <input
                type="text"
                placeholder="UI/UX Design"
                className="bg-transparent focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-x-6">
            <p className="text-sm text-[#4E5566]">Sort by:</p>
            <button className="flex w-52 items-center justify-between border border-[#E9EAF0] px-4 py-3 text-[#4E5566]">
              Trending <ChevronDownSvg />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between pb-4 pt-6">
          <div className="flex gap-x-3 text-sm">
            <p className="#1D2026">Suggestion:</p>
            <ul className="flex gap-x-3 text-primary-500">{suggestionsList}</ul>
          </div>

          <p className="text-sm">
            <span className="font-semibold">3,145,684</span> results find for
            “ui/ux design”
          </p>
        </div>
      </section>

      <ul className="mb-8 flex w-full justify-between">{categoriesList}</ul>

      <div className="grid grid-cols-5 gap-x-6 gap-y-7 bg-[#F5F7FA] px-14 py-8">
        {/* <ul className="grid gap-y-6">
          <FilterContainer title="Duration">
            <CheckboxListItem label={{ text: "BUNDLE 1" }} count={345} />
          </FilterContainer>

          <FilterContainer title="Level">
            <CheckboxListItem label={{ text: "BUNDLE 1" }} count={345} />
          </FilterContainer>

          <FilterContainer title="Rating">
            <CheckboxListItem
              label={{ icon: <StarSVG fill="#FD8E1F" />, text: "5 Star" }}
              count={345}
            />
          </FilterContainer>

          <FilterContainer title="Duration">
            <CheckboxListItem label={{ text: "6-12 Months" }} count={345} />
          </FilterContainer>
        </ul> */}
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
}

function FilterBtn() {
  return (
    <button className="flex items-center gap-x-6 border border-primary-500 px-6 py-3">
      <FilterSVG /> <span>Filter</span>
      <span className="bg-primary-500 px-1.5 py-1 text-white">3</span>
    </button>
  );
}

// function FilterContainer({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   const [isFilterOptionOpen, setFilterOption] = useState(true);

//   return (
//     <article className="border border-[#E9EAF0] bg-white">
//       <header className="flex items-center justify-between border-b border-b-[#E9EAF0] px-5 py-6">
//         <h3 className="text-lg font-medium uppercase text-[#1D2026]">
//           {title}
//         </h3>
//         <button onClick={() => setFilterOption(!isFilterOptionOpen)}>
//           <ChevronDownSvg
//             className={`transition-transform duration-300 ease-in-out ${
//               isFilterOptionOpen ? "rotate-180" : ""
//             }`}
//           />
//         </button>
//       </header>

//       {isFilterOptionOpen && (
//         <main className="grid gap-y-2.5 px-5 py-6">
//           <ul>{children}</ul>
//         </main>
//       )}
//     </article>
//   );
// }

// function CheckboxListItem({
//   label,
//   count,
// }: {
//   label: { icon?: React.ReactNode; text: string };
//   count: number;
// }) {
//   const [isChecked, setIsChecked] = useState(false);

//   return (
//     <li className="group flex items-center justify-between text-sm">
//       <label
//         className={`flex cursor-pointer items-center gap-x-3 ${isChecked ? "text-primary-500" : "text-[#4E5566]"}`}
//       >
//         <input
//           type="checkbox"
//           className="h-[18px] w-[18px]"
//           onChange={(e) => setIsChecked(e.target.checked)}
//         />
//         <span className="flex items-center gap-x-1.5">
//           {label.icon}
//           {label.text}
//         </span>
//       </label>

//       <span
//         className={`text-xs ${isChecked ? "font-medium text-[#4E5566]" : "text-[#8C94A3]"}`}
//       >
//         {count}
//       </span>
//     </li>
//   );
// }
