import Button from "@/components/button";
import NavigateToPrevPage from "@/components/dashboard/prev-page";
import MasseuseCard from "@/components/massage/masseuse-card";
import FilterButton from "@/components/modals/filter";
import { FavouriteSVG } from "@/components/svgs";

export default function AllMasseuse() {
  return (
    <main>
      <NavigateToPrevPage />

      <div className="px-20">
        <section className="flex items-center justify-center gap-x-3 border-b border-b-gray-300 py-6">
          <FilterButton />
          <Button variant="outline" className="w-fit">
            <FavouriteSVG />
          </Button>
        </section>
        <section className="grid grid-cols-2 gap-x-[122px] gap-y-9">
          <MasseuseCard />
          <MasseuseCard />
          <MasseuseCard />
          <MasseuseCard />
        </section>
      </div>
    </main>
  );
}
