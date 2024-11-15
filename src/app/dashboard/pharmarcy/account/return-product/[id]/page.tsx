"use client";
import { useParams } from "next/navigation";

import SummaryProductCard from "@/components/dashboard/summary-product-card";
import Quantity from "../../../components/increase-decrese-quantity";
import SubmitProposal from "../../../modals/refund-process";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import onlinePharmacyApi from "@/api/online-pharmacy";
import { Order } from "../../orders";
import { convertDate } from "@/util/get-total";

export default function ReturnProduct() {
  const { id } = useParams();
  const { data: session } = useSession();
  const [orders, setOrders] = useState<Order | null>(null);
  const [reason, setReason] = useState<string>("");

  const [returnItem, setReturnItem] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      await onlinePharmacyApi
        .getSingleOrders(
          session!,
          // @ts-expect-error: 'id' is not a property of 'session'
          session?.user.id,
          id,
        )
        .then((s) => {
          setOrders(s.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [session]);
  // console.log(orders);

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
            value={reason}
            onChange={(e) => {
              e.preventDefault();
              setReason(e.target.value);
            }}
            className="w-full resize-none rounded-lg border border-[#6B7280] px-4 py-3"
          ></textarea>
        </div>
      </form>

      <section className="my-7 flex justify-between">
        <div className="grid gap-y-0.5">
          <h3 className="font-bold text-primary-500">
            ORDER #{orders?._id.slice(0, 8)}
          </h3>
          <p>{orders?.items.length} Items</p>

          <p>Placed on {convertDate(orders?.createdAt ?? "")}</p>
          <p>Total: ₦{orders?.total_amount}</p>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="mb-4 font-bold text-primary-500">ITEMS IN YOUR ORDER</h3>
        <ul className="grid gap-y-1.5">
          {orders?.items.map((item, index) => (
            <li key={item._id} className="flex items-center justify-between">
              <article className="rounded border border-gray-300 px-3.5 py-5">
                <SummaryProductCard
                  name={item.productid.name}
                  imageUrl={item.productid.coverimage}
                  price={item.price}
                  qty={item.quantity}
                />
                <p className="mb-1 mt-5">Quantity</p>
                <Quantity itemqty={item.quantity} price={item.price} />
              </article>

              <button
                className="rounded-md bg-primary-500 p-3 text-white"
                disabled={index == returnItem}
                onClick={() => {
                  setReturnItem(index);
                  // console.log(returnItem);
                }}
              >
                Return this item
              </button>
            </li>
          ))}
        </ul>
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
                <li>Items total: ₦{orders?.total_amount}</li>
                <li>Delivery Fees: ₦{orders?.delivery_fee}</li>

                <li>
                  Total: ₦
                  {(orders?.total_amount ?? 0) + (orders?.delivery_fee ?? 0)}
                </li>
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
          <div className="px-6 py-5 capitalize">
            <article className="mb-5">
              <h3 className="mb-1.5 font-bold text-primary-500">
                Delivery Address
              </h3>
              <p>{`${orders?.delivery_address.firstname} 
                ${orders?.delivery_address.lastname} 
                `}</p>

              <p>
                {`${orders?.delivery_address.address ?? "Court Estate, Durumi"} | 
                  ${orders?.delivery_address.city} -  
                ${orders?.delivery_address.state} -
                ${orders?.delivery_address.country} |
                ${orders?.delivery_address.postalcode}`}
                {/* Court Estate, Durumi | Federal Capital Territory - ABUJA-
                  DURUMI | 900103 */}
              </p>
            </article>
          </div>
        </section>
      </div>
      <SubmitProposal
        returnOrder={{
          //@ts-expect-error: it willl be there
          userid: session?.user.id,
          //@ts-expect-error: it willl be there
          orderid: orders?._id,
          note: reason,
          //@ts-expect-error: it willl be there
          total_fee: orders?.total_amount,
          //@ts-expect-error: it willl be there
          quantity: orders?.items[returnItem].quantity,
          //@ts-expect-error: it willl be there
          subprice: orders?.items[returnItem].subprice,
          //@ts-expect-error: it willl be there
          productid: orders?.items[returnItem].productid._id,
          //@ts-expect-error: it willl be there
          variant: orders?.items[returnItem].variant,
        }}
      />
    </section>
  );
}
