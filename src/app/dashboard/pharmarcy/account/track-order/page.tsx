// import SummaryProductCard from "@/components/dashboard/summary-product-card";
import { TruckSvg } from "@/components/svgs";
import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

export default function TrackOrder() {
  return (
    <section className="text-xs">
      <div>
        <button className="pb-5 text-xs font-bold text-primary-500">
          &larr; My Orders
        </button>
      </div>

      <div className="mb-6 flex items-center justify-between border-b border-[#D2D2D2] pb-3">
        <h2 className="shrink-0 text-lg font-semibold text-primary-500">
          Track Order #03984397IB
        </h2>
      </div>

      <section className="mb-3.5 rounded border border-gray-300 p-5 pb-14">
        <h3 className="mb-1.5 font-medium text-primary-500">
          Estimated Time of Delivery{" "}
          <span className="font-normal text-[#6B6B70]">July 22, 2024</span>
        </h3>
        <p className="mb-10 font-medium">Last arrived at FairFax Warehouse</p>

        <ul className="flex justify-center">
          <li>
            <div className="mb-5 flex items-center">
              <Circle bgColor="#E29A13" />
              <Line borderStyle="solid" borderColor="#E29A13" />
            </div>
            <h4 className="text-xs font-medium text-primary-500">
              Order Placed
            </h4>
            <p className="text-[0.625rem] text-[#6B6B70]">July 07, 2024</p>
          </li>
          <li>
            <div className="mb-5 flex items-center">
              <Circle bgColor="#E29A13" />
              <Line borderStyle="solid" borderColor="#E29A13" />
            </div>
            <h4 className="text-xs font-medium text-primary-500">
              Confirmation
            </h4>
            <p className="text-[0.625rem] text-[#6B6B70]">July 08, 2024</p>
          </li>
          <li>
            <div className="mb-5 flex items-center">
              <Circle bgColor="#E29A13" />
              <Line borderStyle="dashed" borderColor="#E6353B" />
            </div>
            <h4 className="text-xs font-medium text-primary-500">Shipped</h4>
            <p className="text-[0.625rem] text-[#6B6B70]">July 09, 2024</p>
          </li>
          <li>
            <div className="mb-5 flex items-center">
              <div className="border-2 border-white">
                <TruckSvg />
              </div>
              <div className="w-[160px] border-[2px] border-dashed border-[#949497]" />
            </div>
            <h4 className="font-mediumtext-[#E6353B] text-xs text-[#E6353B]">
              Out for Delivery
            </h4>
            <p className="text-[0.625rem] text-[#E6353B]">Today</p>
          </li>
          <li>
            <div className="mb-5 flex items-center">
              <div className="h-5 w-5 rounded-full border-2 border-white bg-[#949497]" />
            </div>
            <h4 className="text-xs font-medium text-primary-500">
              Expected Delivery
            </h4>
            <p className="text-[0.625rem] text-[#949497]">July 22, 2024</p>
          </li>
        </ul>
      </section>

      <div className="mb-3.5 flex gap-x-3.5">
        <section className="w-1/2 rounded border border-gray-300 p-5">
          <h3 className="mb-1.5 font-medium text-primary-500">
            Shipping Information
          </h3>
          <p className="mb-1.5 flex">
            <span className="inline-block w-[161px] shrink-0 font-semibold text-[#2C2D33]">
              Delivery Method
            </span>
            <span>Pay on Delivery</span>
          </p>
          <p className="mb-1.5 flex">
            <span className="inline-block w-[161px] shrink-0 font-semibold text-[#2C2D33]">
              Carrier
            </span>
            <span>Gig Logistics</span>
          </p>
          <p className="mb-1.5 flex">
            <span className="inline-block w-[161px] shrink-0 font-semibold text-[#2C2D33]">
              Tracking Number
            </span>
            <span>FXF001278AE</span>
          </p>
          <p className="mb-1.5 flex">
            <span className="inline-block w-[161px] shrink-0 font-semibold text-[#2C2D33]">
              Order Number
            </span>
            <span>#0001278AE</span>
          </p>
          <p className="mb-1.5 flex">
            <span className="inline-block w-[161px] shrink-0 font-semibold text-[#2C2D33]">
              Shipping To
            </span>
            <span>
              Court Estate, Durumi | Federal Capital Territory - ABUJA- DURUMI |
              900103
            </span>
          </p>
        </section>
        <section className="w-1/2 rounded border border-gray-300 p-5">
          <h3 className="mb-1.5 font-medium text-primary-500">
            What to Expect on Delivery Day
          </h3>
          <div className="flex items-center gap-x-3.5">
            <div className="relative h-[147.64px] w-[215.25px] shrink-0">
              <Image
                src="/images/dashboard/delivery-truck.png"
                alt="a red delivery truck"
                fill
              />
            </div>
            <p className="font-semibold text-[#2C2D33]">
              Our delivery agent will deliver order to the address you provided
            </p>
          </div>
        </section>
      </div>

      <section>
        <h2 className="mb-5 text-xs font-bold text-primary-500">
          ITEMS IN YOUR ORDER
        </h2>
        {/* <div className="grid grid-cols-2 gap-7">
          <SummaryProductCard />
          <SummaryProductCard />
          <SummaryProductCard />
        </div> */}
      </section>

      <Link
        className="mt-7 inline-block w-full rounded-lg bg-primary-500 py-3 text-center text-sm font-semibold text-primary-50"
        href={routes.PHARMARCYPRODUCTREVIEW}
      >
        LEAVE A REVIEW
      </Link>
    </section>
  );
}

function Circle({ bgColor }: { bgColor: string }) {
  return (
    <div
      className="h-5 w-5 rounded-full border-2 border-white"
      style={{ background: bgColor }}
    />
  );
}

function Line({
  borderStyle,
  borderColor,
}: {
  borderStyle: string;
  borderColor: string;
}) {
  return (
    <div
      className="w-[160px] border-[2px] border-dashed border-[#949497]"
      style={{ borderStyle: borderStyle, borderColor: borderColor }}
    />
  );
}
