import NavigateToPrevPage from "@/components/dashboard/prev-page";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <NavigateToPrevPage />

      <div className="grid grid-cols-2 gap-5 px-20 py-6">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <Link href={"care-givers/id"}>
      <article className="shadow-custom relative flex max-w-[394px] shrink-0 items-center gap-x-6 rounded bg-white p-2.5 pb-4 shadow-md lg:rounded-xl">
        <div className="relative h-20 w-20 overflow-hidden rounded-xl">
          <Image
            src="/images/dashboard/swedish.png"
            alt="things on things"
            fill
            sizes="80px"
          />
        </div>
        <div>
          <p className="mb-1 text-xs text-success-500">Ongoing</p>
          <h3 className="mb-3 font-medium">Vivian Akpa</h3>
          <p className="font-semibold text-primary-500">WEEKDAYS ONLY</p>
        </div>
      </article>
    </Link>
  );
};
