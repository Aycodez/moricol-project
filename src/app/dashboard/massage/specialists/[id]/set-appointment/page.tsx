import NavigateToPrevPage from "@/components/dashboard/prev-page";
import SetAppointmentForm from "./set-appointment-form";

export default function SetAppointment() {
  return (
    <main>
      <NavigateToPrevPage />

      <div className="mx-auto my-9 max-w-[818px]">
        <div className="mb-3 px-5">
          <h2 className="mb-1 font-medium">Set Appointment</h2>
          <p className="text-sm text-gray-500">
            This will be the information your massuese would see
          </p>
        </div>

        <section className="rounded-3xl bg-gray-50 py-3">
          <SetAppointmentForm />
        </section>
      </div>
    </main>
  );
}
