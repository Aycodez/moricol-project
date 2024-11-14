import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-20 py-9">
      <section className="mb-6">
        <h1 className="mb-1 text-2xl font-medium leading-9">Welcome, Amaka</h1>
        <p className="text-gray-500">Find your suitable doctors here</p>
      </section>
      <section className="mb-7 border-y border-y-gray-300 py-6">
        <p className="mb-2 text-lg">Schedule a Massage Appointment</p>
        <Link
          href={routes.MASSAGESPECIALISTS}
          className="inline-block w-full max-w-[377px] rounded-lg bg-primary-500 py-3.5 text-center text-white"
        >
          Schedule a Massage Appointment
        </Link>
      </section>
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="shrink-0 text-xl">Top Masseuse</h2>
          <Link
            href={routes.MASSAGESPECIALISTS}
            className="w-fit text-primary-500"
          >
            View all
          </Link>
        </div>
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-9">
          <MasseuseCard />
        </div>
      </section>
    </main>
  );
}

function MasseuseCard() {
  return (
    <Link href={routes.MASSAGESINGLESPECIALIST} className="block">
      <article className="w-[114px] overflow-hidden rounded-b rounded-t-lg border border-[#A0A2B333]">
        <Image src="/images/client.jpg" alt="" width={114} height={143} />
        <div className="py-1 text-center text-xs">
          <p className="mb-1">
            <span>⭐</span>
            <span className="font-medium text-gray-500">4.5</span>
          </p>
          <h3 className="mb-1 text-sm font-medium">Dr. John Doe</h3>
          <p className="text-gray-500">Heart Surgeon</p>
        </div>
      </article>
    </Link>
  );
}
