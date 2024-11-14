import NavigateToPrevPage from "@/components/dashboard/prev-page";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import ReviewForm from "./review-form";

export default function Review() {
  return (
    <main>
      <NavigateToPrevPage />

      <div className="mx-auto my-9 max-w-[818px] rounded-3xl bg-gray-50">
        <section className="lg:bg-grey-50 lg:p-7">
          <div className="mx-auto mb-7 flex max-w-[247px] flex-col items-center justify-center text-center">
            <div className="relative mb-6">
              <div className="relative h-28 w-28 overflow-hidden rounded-2xl">
                <Image
                  src="/images/client.jpg"
                  fill
                  alt="Image of client"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <p className="text-grey-700 mb-5 text-xl font-medium">
              How was your experience with{" "}
              <span className="text-primary-500">Abiola Dauda</span>?
            </p>
            <div className="flex gap-x-2.5">
              <button className="text-primary-500">
                <FaStar />
              </button>
              <button className="text-primary-500">
                <FaStar />
              </button>
              <button className="text-primary-500">
                <FaStar />
              </button>
              <button className="text-primary-500">
                <FaStar />
              </button>
              <button className="text-primary-500">
                <FaStar />
              </button>
            </div>
          </div>
          <ReviewForm />
        </section>
      </div>
    </main>
  );
}
