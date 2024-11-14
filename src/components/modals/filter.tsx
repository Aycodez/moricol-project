"use client";

import { useState } from "react";
import Button from "../button";
import { CancelSvg, FilterSVG } from "../svgs";
import ModalLayout from "../layouts/modal-layout";
import SelectInput from "../auth/select-input";

export default function FilterButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        className="flex max-w-[653px] items-center justify-between"
        onClick={() => setIsModalOpen(true)}
      >
        Filter Location, masseuse & dates
        <FilterSVG />
      </Button>

      {isModalOpen && (
        <ModalLayout>
          <article className="relative w-[949px] rounded-lg bg-white px-4 py-3.5">
            <div className="mb-10">
              <h3 className="right-3.5 top-4 text-center text-lg font-medium text-primary-500">
                FILTER
              </h3>

              <button
                className="absolute right-3.5 top-5 mb-1 ml-auto flex h-5 w-5 items-center justify-center rounded-full border-2 border-secondary-500"
                onClick={() => setIsModalOpen(false)}
              >
                <CancelSvg stroke="#D81302" className="h-3 w-3" />
              </button>
            </div>

            <form>
              <div className="grid grid-cols-2 gap-x-14 gap-y-6">
                <SelectInput label="Massage Type" name="">
                  <option value="">All</option>
                </SelectInput>
                <SelectInput label="Ratings" name="">
                  <option value="">All</option>
                </SelectInput>
                <SelectInput label="Gender" name="">
                  <option value="">All</option>
                </SelectInput>
              </div>
              <Button className="mt-6">Apply Filter</Button>
            </form>
          </article>
        </ModalLayout>
      )}
    </>
  );
}
