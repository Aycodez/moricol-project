import NavigateToPrevPage from "@/components/dashboard/prev-page";
import Image from "next/image";
import PaymentForm from "./payment-form";

export default function Payment() {
  return (
    <main>
      <NavigateToPrevPage />

      <section className="mx-auto my-9 max-w-[818px] rounded-3xl bg-gray-50 px-10 py-9">
        <p className="mb-14 text-center">
          Make payment to confirm your appointment with masseuse.
        </p>

        <article className="mb-5 flex items-start gap-x-3.5">
          <div className="relative h-10 w-10">
            <Image
              src="/images/client.jpg"
              alt=""
              fill
              sizes="40px"
              style={{ objectFit: "cover", borderRadius: "20px" }}
              priority
            />
          </div>
          <div className="grid gap-y-2 text-gray-800">
            <h3 className="font-bold">Abiola Dauda</h3>
            <p className="text-sm">
              House 2, Road 4 Abraham Adesanya Estate ajah Lekki lagos
            </p>
            <p className="font-medium">Today, 12:30pm (30mins)</p>
            <p className="font-medium">Swedish Massage</p>
          </div>
        </article>

        <PaymentForm />
      </section>
    </main>
  );
}
