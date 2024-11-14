"use client";

import Button from "@/components/button";
import NavigateToPrevPage from "@/components/dashboard/prev-page";
import { FilterBoldSVG } from "@/components/svgs/loan-svg";
import { BiSearch } from "react-icons/bi";
import LoanFilterResults from "./filter-results";
import { useState } from "react";
import { LoanCategory } from "@/definition";

function LoanFilterClient({
  categories,
}: {
  categories: LoanCategory[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:space-x-6 lg:flex">
          <div className="lg:w-1/3">
            <label className="block pb-3 text-lg" htmlFor="loan-search">
              Search for a loan
            </label>
            <div className="relative mb-4">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                id="loan-search"
                name="loan-search"
                placeholder="Search for Loan"
                className="w-full rounded-lg border py-2 focus:pl-10 focus:py-2  pl-10 pr-4 text-lg outline-none  focus:border-primary-500"
              />
              <BiSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            </div>
            <span onClick={() => setSearchTerm("")}>
              <Button className="text-md mb-6 flex w-full items-center justify-center gap-x-4 bg-secondary-400 text-white hover:bg-red-600">
                View Categories <FilterBoldSVG />
              </Button>
            </span>
          </div>

          <div className="lg:w-2/3">
            <NavigateToPrevPage />

            <LoanFilterResults loans={categories} searchTerm={searchTerm} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanFilterClient;
