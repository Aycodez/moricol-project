"use client";

import Button from "@/components/button";
import SummaryProductCard from "@/components/dashboard/summary-product-card";

import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";

import { useAppSelector } from "@/lib/hook";
import { formatNaira } from "@/util/currency-format";
import { calculateTotal } from "@/util/get-total";
import { useEffect, useState } from "react";
import { AddressParams } from "../account/addresses/page";
import onlinePharmacyApi from "@/api/online-pharmacy";
import { useSession } from "next-auth/react";
import Address from "../components/Address";

export default function Checkout() {
  const { data: session } = useSession();
  const [address, setAddress] = useState<AddressParams[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await onlinePharmacyApi
        .getallAddress(
          session!,
          // @ts-expect-error: 'id' is not a property of 'session'
          session?.user.id,
        )
        .then((s) => {
          setAddress(s.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [session]);
  const cart = useAppSelector((state) => state.drugcart.cart);
  return (
    <main className="px-8 py-6 pb-20">
      <section className="mb-9">
        <div className="flex items-center justify-between border-b border-[#D2D2D2] pb-3">
          <h1 className="shrink-0 text-lg font-semibold text-primary-500">
            Checkout
          </h1>
        </div>
      </section>

      <div className="flex items-start gap-x-8">
        <section className="grow">
          <section className="mb-9">
            <div className="flex items-center justify-between border-b border-[#D2D2D2] pb-3">
              <h2 className="shrink-0 font-semibold text-primary-500">
                Delivery Address
              </h2>
            </div>
            <div className="mb-4 grid grid-cols-1 gap-y-4 py-5">
              {address?.map((a, i) => (
                <Address
                  key={i}
                  index={i}
                  firstname={a.firstname}
                  lastname={a.lastname}
                  defaultaddress={a.defaultaddress}
                  address={a.address}
                  phone={a.phone}
                  postalcode={a.postalcode}
                  state={a.state}
                  city={a.city}
                  country={a.country}
                  _id={a._id}
                />
              ))}
            </div>
          </section>
          <section>
            <div className="mb-6 flex items-center justify-between border-b border-[#D2D2D2] pb-3">
              <h2 className="shrink-0 font-semibold text-primary-500">
                Payment Options
              </h2>
            </div>

            <div className="flex items-center gap-x-2">
              <input type="radio" id="paystack" />
              <label htmlFor="paystack" className="flex items-center gap-x-0.5">
                <div className="relative h-3.5 w-3.5 overflow-hidden">
                  <Image
                    src="/images/paystack.png"
                    alt=""
                    fill
                    sizes="14px"
                    className="h-auto w-3.5"
                  />
                </div>
                PayStack
              </label>
            </div>
          </section>
        </section>
        <section className="grid w-[372px] shrink-0 gap-y-2">
          <h2 className="shrink-0 font-semibold text-primary-500">
            Order Summary
          </h2>

          <article className="rounded border border-[#9F9FA0] bg-gray-100">
            <div className="grid gap-y-5 px-5 py-6">
              {cart.map((product, i) => (
                <SummaryProductCard
                  key={i}
                  name={product.name}
                  imageUrl={product.coverimage}
                  qty={product.quantity}
                  price={product.subprice}
                />
              ))}
            </div>

            <div className="gap-y-2.5 border-y border-y-gray-300 px-6 py-6 text-primary-500">
              <p className="flex justify-between">
                Subtotal <span>{formatNaira(calculateTotal(cart))}</span>
              </p>
              <p className="flex justify-between">
                Delivery Fees <span>₦210 Come back to this</span>
              </p>
            </div>
            <div className="px-5 py-6">
              <p className="flex justify-between font-bold text-primary-500">
                Total <span>{formatNaira(calculateTotal(cart))}</span>
              </p>
            </div>
          </article>
          <article className="rounded border border-[#9F9FA0] bg-gray-100">
            <p className="px-5 py-3 text-xs">
              Have a coupon?{" "}
              <span className="text-primary-500">
                Click here to enter your code
              </span>
            </p>
          </article>
          <article className="rounded border border-[#9F9FA0] p-5 text-xs">
            <p className="mb-2.5">
              If you have a coupon code, please apply it below.
            </p>
            <input
              type="text"
              placeholder="Coupon Code"
              className="mb-3 w-full rounded border bg-gray-100 px-5 py-3"
            />
            <Button
              variant="outline"
              className="w-fit py-2.5 text-xs font-bold"
            >
              Apply Coupon
            </Button>
          </article>
          <Link
            href={routes.PHARMARCYPAYMENT}
            className="inline-block rounded-lg bg-primary-500 py-3 text-center font-semibold text-white"
          >
            Place Order
          </Link>
        </section>
      </div>
    </main>
  );
}
