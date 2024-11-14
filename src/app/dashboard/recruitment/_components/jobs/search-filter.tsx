import { Input } from "@/components/input";

import { BiFilter, BiLocationPlus } from "react-icons/bi";
import FilterDrawer from "./filter-drawer";
import Link from "next/link";
import { routes } from "@/constants/routes";
import jobsApi from "@/api/jobs";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { FilterValues } from "@/definition";


const SearchAndFilter = ({ handleFilterJobs }: { handleFilterJobs: (filterSelected: FilterValues) => void }) => {

  const { data: session } = useSession();
  const [filterValues, setFilterValues] = useState<FilterValues | null>(null);
  const [loadingFilterValues, setLoadingFilterValues] = useState(false);


  const getFilterValues = useCallback(async () => {
    try {
      setLoadingFilterValues(true);
      const { data: response } = await jobsApi.jobPostFilterData({ session: session as Session });
      setFilterValues(response as FilterValues);
    } catch (error) {
      console.error("Error fetching filter values:", error);
    } finally {
      setLoadingFilterValues(false);
    }
  }, []);

  useEffect(() => {
    getFilterValues();
  }, [getFilterValues]);

  const [showFilterPanel, setShowFilterPanel] = useState(false);

  const [filterParams, setFilterParams] = useState<FilterValues>({
    job_types: [],
    job_titles: [],
    min_salaries: [],
    max_salaries: [],
    state: '',
    job_level: []
  });

  const updateSelectedFilters = (category: keyof FilterValues, value: number | string) => {

    const isNewValue = !filterParams[category].includes(value as never);
    if (category === 'state') {
      setFilterParams((prevFilters) => ({
        ...prevFilters,
        state: value as string
      }));
    }

    if (isNewValue && category !== 'state') {
      const categoryArray = filterParams[category] as string[] | number[];
      categoryArray.push(value as never);
      setFilterParams((prevFilters) => ({
        ...prevFilters,
        [category]: categoryArray
      }));
    }

    if (!isNewValue && category !== 'state') {
      const categoryArray = filterParams[category] as string[] | number[];
      const filteredArray = categoryArray.filter(item => item !== value);
      setFilterParams((prevFilters) => ({
        ...prevFilters,
        [category]: filteredArray as string[] | number[]
      }));
    }

  };

  const handleSubmitFilters = () => {
    return handleFilterJobs(filterParams);
  }


  return (
    <div className="mb-4 flex flex-col space-y-2 rounded bg-white p-2 shadow lg:mb-6 lg:flex-row lg:space-x-4 lg:space-y-0">
      {/* <div className="flex flex-1 items-center rounded-lg">
        <div className="relative flex-1">
          <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Job Title"
            className="w-full rounded-lg py-2 pl-10 pr-3  focus:pl-10 focus:outline-none"
          />
        </div>
      </div> */}
      <div className="flex flex-1 relative items-center rounded-lg">
        <BiLocationPlus className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="State/Location"
          className="w-full rounded-lg py-2 pl-10 pr-3  focus:pl-10 focus:outline-none"
          onChange={(e) => updateSelectedFilters("state", e.target.value)}
        />
        <button
          className="ml-2 flex h-[36px] items-center justify-center rounded p-4 text-primary-500 transition duration-300 hover:bg-gray-200"
          onClick={() => setShowFilterPanel(true)}
        >
          <BiFilter size={25} />
        </button>
      </div>

      <div className="flex space-x-2">
        <Link href={routes.RECRUITMENT_PREVIEW_FOREIGN_RESUME} className="flex-1 w-full">
          <button className="w-full rounded-lg bg-yellow-500 px-4 py-3 text-white transition duration-300 hover:bg-yellow-600 md:flex-none">
            FOREIGN JOB ROLE
          </button>
        </Link>
        <Link href={routes.RECRUITMENT_EMPLOYER} className="flex-1 w-full">
          <button className="w-full rounded-lg bg-yellow-500 px-4 py-3 text-white transition duration-300 hover:bg-yellow-600 md:flex-none">
            POST A JOB
          </button>
        </Link>
      </div>
      <FilterDrawer
        showFilterPanel={showFilterPanel}
        setShowFilterPanel={setShowFilterPanel}
        filterValues={filterValues}
        filtersSelected={filterParams}
        loadingFilterValues={loadingFilterValues}
        updateSelectedFilters={updateSelectedFilters}
        handleSubmitFilters={handleSubmitFilters}
      />
    </div>
  );
};

export default SearchAndFilter;
