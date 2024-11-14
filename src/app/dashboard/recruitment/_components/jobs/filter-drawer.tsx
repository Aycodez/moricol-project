import { Label } from "@radix-ui/react-label";
import { BiX } from "react-icons/bi";
import { FilterValues } from "@/definition";
import { Loader2 } from "lucide-react";

interface FilterDrawerProps {
  showFilterPanel: boolean;
  setShowFilterPanel: (show: boolean) => void;
  filterValues: FilterValues | null;
  loadingFilterValues: boolean;
  filtersSelected: FilterValues;
  updateSelectedFilters: (category: keyof FilterValues, value: number | string) => void;
  handleSubmitFilters: () => void;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  showFilterPanel,
  setShowFilterPanel,
  filterValues,
  loadingFilterValues,
  filtersSelected,
  updateSelectedFilters,
  handleSubmitFilters
}) => {
  if (!showFilterPanel) return null;



  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="absolute bottom-0 right-0 top-0 w-full overflow-y-auto bg-white p-4 md:w-80">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button onClick={() => setShowFilterPanel(false)}>
            <BiX size={24} />
          </button>
        </div>
        {loadingFilterValues && <div className="flex justify-center items-center h-[50vh]"><Loader2 className="animate-spin" /></div>}
        {!loadingFilterValues && filterValues && <div className="mb-4">
          <Label className="mb-2 font-medium">Job Types</Label>
          {filterValues?.job_types.map((type: string) => (
            <label key={type} className="mb-2 flex items-center">
              <input
                type="checkbox"
                className="mr-2 capitalize"
                checked={filtersSelected.job_types.includes(type as "fulltime" | "parttime" | "contract")}
                onChange={() => updateSelectedFilters("job_types", type)}
              />
              {type}
            </label>
          ))}
        </div>}
        {!loadingFilterValues && filterValues && <div className="mb-4">
          <Label className="mb-2 font-medium">Job Titles</Label>
          {filterValues?.job_titles.map((title: string) => (
            <label key={title} className="mb-2 flex items-center">
              <input
                type="checkbox"
                className="mr-2 capitalize"
                checked={filtersSelected.job_titles.includes(title)}
                onChange={() => updateSelectedFilters("job_titles", title)}
              />
              {title}
            </label>
          ))}
        </div>}
        {!loadingFilterValues && filterValues && <div>
          <Label className="mb-2 font-medium">Min Salary</Label>
          {filterValues?.min_salaries.map((range: number) => (
            <label key={range} className="mb-2 flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filtersSelected.min_salaries.includes(range)}
                onChange={() => updateSelectedFilters("min_salaries", range)}
              />
              {range}
            </label>
          ))}
        </div>}
        {!loadingFilterValues && filterValues && <div>
          <Label className="mb-2 font-medium">Max Salary</Label>
          {filterValues?.max_salaries.map((range: number) => (
            <label key={range} className="mb-2 flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={filtersSelected.max_salaries.includes(range)}
                onChange={() => updateSelectedFilters("max_salaries", range)}
              />
              {range}
            </label>
          ))}
        </div>}
        <div className="mt-4 flex justify-between">
          <button
            className="rounded-lg bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-600"
            onClick={() => {
              setShowFilterPanel(false);
              handleSubmitFilters();
            }}
          >
            Done
          </button>
          <button className="text-yellow-500 hover:underline">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;
