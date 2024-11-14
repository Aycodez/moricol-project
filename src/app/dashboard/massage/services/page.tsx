import Link from "next/link";
import NavigateToPrevPage from "@/components/dashboard/prev-page";
import MassageServiceCard from "@/components/massage/massage-service-card";
import { services } from "@/constants";
import { UsersSVG } from "@/components/svgs";
import { routes } from "@/constants/routes";

export default function MassageServices() {
  return (
    <main>
      <NavigateToPrevPage />

      <div className="px-20 py-5">
        <section className="mb-12 border-b border-y-gray-300 pb-6">
          <p className="mb-2 text-xl">Schedule a Massage Appointment</p>
          <Link
            href={routes.MASSAGESPECIALISTS}
            className="inline-block w-full max-w-[377px] rounded-lg bg-primary-500 py-3.5 text-center text-white"
          >
            Schedule a Massage Appointment
          </Link>
        </section>
        <section className="grid max-w-[768px] grid-cols-4 gap-x-4 gap-y-9">
          <Link href="specialists">
            <article className="flex h-[172.1px] flex-col items-center justify-center gap-y-5 rounded bg-[#BD3D44] font-semibold text-white">
              <UsersSVG />
              <p>All Masseuse</p>
            </article>
          </Link>
          {services.map(({ id, bg, service }) => (
            <MassageServiceCard key={id} bg={bg} service={service} id={id} />
          ))}
        </section>
      </div>
    </main>
  );
}
