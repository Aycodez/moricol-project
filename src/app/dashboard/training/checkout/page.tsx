import {
  CreditCardSvg,
  GreenCheckmarCircle,
  PaypalSvg,
} from "@/components/svgs";
import CourseTimeLecturesSection from "../components/time-lecture-section";
import Image from "next/image";
import PrevPageBtn from "../view-course/prev-page-btn";

export default function BuyCourse() {
  return (
    <main>
      <section className="mb-6 flex items-center justify-between bg-[#F5F7FA] px-8 py-5">
        <div className="flex gap-x-4">
          <PrevPageBtn />
          <div>
            <h1 className="mb-3 text-lg font-medium text-[#1D2026]">
              Complete Website Responsive Design: from Figma to Webflow to
              Website Design
            </h1>
            <CourseTimeLecturesSection />
          </div>
        </div>
        <p className="text-2xl text-primary-500">PRICE: ₦20,000</p>
      </section>

      <section className="mb-4 flex flex-col items-center justify-between gap-y-4 bg-[#F5F7FA] px-8 py-10">
        <h1 className="text-2xl font-semibold text-[#1D2026]">Buy Course</h1>
        {/* <BreadCrumb /> */}
        <p className="text-sm text-[#6E7485]">
          Home / Course / Complete Web... Design / Buy Course
        </p>
      </section>

      <section className="mb-16 flex items-start justify-between gap-x-6 px-14 py-6">
        {/* Right hand side */}
        <div className="w-full max-w-[648px]">
          <h3 className="mb-6 text-lg font-medium text-[#1D2026]">
            Payment Method
          </h3>

          <div className="grid gap-y-4">
            <div className="flex justify-between border px-6 py-3.5 text-[#4E5566]">
              <Image src="/logo/Visa.png" alt="" width={32} height={10.67} />
              <p>4855 **** **** ****</p>
              <p>04/24</p>
              <p>Vako Shvili</p>
            </div>
            <div className="flex justify-between border px-6 py-3.5 text-[#4E5566]">
              <Image
                src="/logo/master-card.png"
                alt=""
                width={32}
                height={10.67}
              />
              <p>4855 **** **** ****</p>
              <p>04/24</p>
              <p>Vako Shvili</p>
            </div>
            <div className="flex gap-x-6 border px-6 py-3.5 text-[#4E5566]">
              <PaypalSvg />
              <p>
                You will be redirected to the PayPal site after reviewing your
                order.
              </p>
            </div>
            <div className="flex items-center justify-between border border-[#23BD33] px-6 py-3.5 text-[#4E5566]">
              <div className="flex items-center gap-x-6">
                <CreditCardSvg stroke="#E29A13" className="h-5 w-5" />
                <p>New Payment Cards</p>
              </div>
              <GreenCheckmarCircle />
            </div>

            <section className="mt-3 grid gap-y-4">
              <TextInput name="" label="Name" placeholder="Name of card" />
              <TextInput name="" label="Card Number" placeholder="Label" />
              <div className="flex gap-x-4">
                <TextInput name="" label="MM/YY" placeholder="MM / YY" />
                <TextInput name="" label="CVC" placeholder="Security Code" />
              </div>
            </section>

            <div className="mt-3 flex gap-x-2.5">
              <input
                type="checkbox"
                id="rememberCard"
                className="h-5 w-5"
                checked
              />
              <label htmlFor="rememberCard" className="text-sm text-[#4E5566]">
                Remember this card, save it on my card list
              </label>
            </div>
          </div>
        </div>

        <article className="w-full max-w-[536px] shrink-0 shadow-md">
          <section className="border-b p-6">
            <h3 className="mb-4 text-lg font-medium text-[#1D2026]">Course</h3>

            <div className="flex items-center gap-x-3">
              <div className="relative h-[75px] w-[100px] shrink-0">
                <Image
                  src="/images/client.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p className="mb-1 text-xs text-[#A1A5B3]">
                  Course by:{" "}
                  <span className="text-[#4E5566]">Courtney Henry</span>
                </p>
                <h4 className="mb-3 w-[376px] truncate text-sm text-[#1D2026]">
                  Graphic Design Masterclass - Learn GREAT Design
                </h4>
                <p className="text-sm font-medium text-primary-500">₦13.00</p>
              </div>
            </div>
          </section>
          <section className="grid gap-y-4 p-6">
            <h3 className="text-lg font-medium text-[#1D2026]">
              Order Summary{" "}
            </h3>
            <p className="flex items-center justify-between text-sm">
              <span className="text-[#6E7485]">Subtotal</span>
              <span className="text-[#1D2026]">₦61.97 NAIRA</span>
            </p>
            <p className="flex items-center justify-between text-sm">
              <span className="text-[#6E7485]">Coupon Discount</span>
              <span className="text-[#1D2026]">8%</span>
            </p>
            <hr />
            <p className="flex items-center justify-between text-[#202029]">
              Total:{" "}
              <span className="text-2xl font-semibold">₦75.00 NAIRA</span>
            </p>
          </section>
          <section className="p-6 pt-0">
            <button className="w-full bg-primary-500 py-3 text-lg font-semibold text-white">
              Complete Payment
            </button>
          </section>
        </article>
      </section>
    </main>
  );
}

function TextInput({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <div className="w-full">
      <label className="mb-1.5 block text-sm text-[#1D2026]">{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="w-full border px-4 py-3 text-[#8C94A3]"
      />
    </div>
  );
}
