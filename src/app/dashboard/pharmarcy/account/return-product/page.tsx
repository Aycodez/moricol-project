"use client";

// import SummaryProductCard from "@/components/dashboard/summary-product-card";
// import Quantity from "../../components/increase-decrese-quantity";
import SubmitProposal from "../../modals/refund-process";

export default function ReturnProduct() {
  return (
    <section className="text-xs">
      <div>
        <button
          className="pb-5 text-xs font-bold text-primary-500"
          //   onClick={() => setState("list")}
        >
          &larr; My Orders
        </button>
      </div>

      <div className="mb-6 flex items-center justify-between border-b border-[#D2D2D2] pb-3">
        <h2 className="shrink-0 text-lg font-semibold text-primary-500">
          Return Order
        </h2>
      </div>

      <form>
        <div>
          <label htmlFor="return" className="mb-2 block">
            Reasons for a return
          </label>
          <textarea
            name=""
            id="return"
            className="w-full resize-none rounded-lg border border-[#6B7280] px-4 py-3"
          ></textarea>
        </div>
      </form>

      <section className="my-7 flex justify-between">
        <div className="grid gap-y-0.5">
          <h3 className="font-bold text-primary-500">ORDER #001394834</h3>
          <p>2 Items</p>
          <p>Placed on 05-03-2023</p>
          <p>Total: ₦759.99</p>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="mb-4 font-bold text-primary-500">ITEMS IN YOUR ORDER</h3>
        {/* <ul className="grid gap-y-1.5">
          <li>
            <article className="rounded border border-gray-300 px-3.5 py-5">
              <SummaryProductCard />
              <p className="mb-1 mt-5">Quantity</p>
              <Quantity />
            </article>
          </li>
        </ul> */}
      </section>

      <div className="mb-3.5 flex gap-x-3.5">
        <section className="w-1/2 rounded border border-gray-300">
          <div className="border-b border-gray-300 px-6 pt-5">
            <h2 className="inline-block pb-5 font-bold text-primary-500">
              PAYMENT INFORMATION
            </h2>
          </div>

          <div className="px-6 py-5">
            <article className="mb-5">
              <h3 className="mb-1.5 font-bold text-primary-500">
                Payment Method
              </h3>
              <p>Pay on Delivery</p>
            </article>

            <article className="mb-5">
              <h3 className="mb-1.5 font-bold text-primary-500">
                Payment Details
              </h3>
              <ul className="grid gap-y-0.5">
                <li>Items total: ₦659.99</li>
                <li>Delivery Fees: ₦129.80</li>
                <li>Promotional Discount: - ₦59</li>
                <li>Total: ₦759.99</li>
              </ul>
            </article>
          </div>
        </section>
        <section className="w-1/2 rounded border border-gray-300">
          <div className="border-b border-gray-300 px-6 pt-5">
            <h2 className="inline-block pb-5 font-bold text-primary-500">
              DELIVERY INFORMATION
            </h2>
          </div>
          <div className="px-6 py-5">
            <article className="mb-5">
              <h3 className="mb-1.5 font-bold text-primary-500">
                Billing Address
              </h3>
              <p>C Darl Uzu</p>
              <p>Pay on Delivery</p>
              <p>
                Court Estate, Durumi | Federal Capital Territory - ABUJA- DURUMI
                | 900103
              </p>
            </article>

            <article className="mb-5">
              <h3 className="mb-1.5 font-bold text-primary-500">
                Delivery Address
              </h3>
              <p>C Darl Uzu</p>
              <p>Pay on Delivery</p>
              <p>
                Court Estate, Durumi | Federal Capital Territory - ABUJA- DURUMI
                | 900103
              </p>
            </article>
          </div>
        </section>
      </div>
      <SubmitProposal />
    </section>
  );
}
