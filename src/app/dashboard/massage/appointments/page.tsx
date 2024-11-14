import Button from "@/components/button";
import NavigateToPrevPage from "@/components/dashboard/prev-page";
import AppointmentButtons from "@/components/massage/appointment-button";
import { CalendarSvg, GridViewSvg } from "@/components/svgs";
import Image from "next/image";
import Link from "next/link";
import ViewRescheduleButton from "../modals/view-reschedule";

export default function MassageAppointments() {
  return (
    <main className="min-h-screen bg-gray-100">
      <NavigateToPrevPage />

      <section className="border-b border-b-gray-300 px-20 py-6">
        <div className="mb-6 text-right">
          <Button className="max-w-[504px]">CREATE NEW APPOINTMENT</Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="mb-3 px-5">
            <h2 className="mb-1 font-medium">Set Appointment</h2>
            <p className="text-sm text-gray-500">
              This will be the information your massuese would see
            </p>
          </div>

          <div className="flex h-10 items-center justify-between gap-x-5 rounded-full border border-[#D0D5DD] px-2.5 py-2">
            <button>
              <GridViewSvg />
            </button>
            <div className="h-5 border-r border-r-[#D0D5DD]" />
            <button>
              <CalendarSvg />
            </button>
          </div>
        </div>
      </section>

      <section className="no-scrollbar border-grey-300 overflow-x-auto border-b px-20 py-8">
        <AppointmentButtons />
      </section>

      <section className="px-20 py-5 text-gray-500">
        <p className="mb-9 w-[680px]">
          Note: When a masseuse accepts your appointments, you can now go ahead
          and pay for the service and your appointments will automatically be on
          “Upcoming”
        </p>

        <div className="grid grid-cols-2">
          <AppointmentCard appointmentType="Pending" />
          <AppointmentCard appointmentType="Rescheduled Appointment" />
        </div>
      </section>
    </main>
  );
}

const AppointmentCard = ({ appointmentType }: { appointmentType: string }) => {
  const color =
    appointmentType.toLowerCase() === "rescheduled appointment"
      ? "text-success-500"
      : "text-primary-500";

  return (
    <article className="shadow-custom relative max-w-[394px] rounded bg-white p-2.5 pb-4 lg:rounded-xl">
      <Link href="appointments/1" className="block">
        <section className="flex items-end gap-x-6">
          <div className="relative h-20 w-20 overflow-hidden rounded-xl">
            <Image
              src="/images/client.jpg"
              alt="Doctor profile"
              fill
              sizes="90px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div>
            <p className={`mb-1 text-[0.625rem] ${color}`}>{appointmentType}</p>
            <h3 className="mb-2 font-medium text-[#374151]">Vivian Akpa</h3>
            <p className="text-sm">June 12, 09:00 AM - 10:00 AM</p>
          </div>
        </section>
      </Link>

      {appointmentType.toLowerCase() === "rescheduled appointment" && (
        <ViewRescheduleButton />
      )}
    </article>
  );
};
