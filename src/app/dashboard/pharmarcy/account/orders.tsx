"use client";

import onlinePharmacyApi from "@/api/online-pharmacy";
import SummaryProductCard from "@/components/dashboard/summary-product-card";
import { DownloadSvg } from "@/components/svgs";
import { routes } from "@/constants/routes";
import useOrders, { OrdersProvider } from "@/hooks/useOrders";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AddressParams } from "./addresses/page";

export interface OrderList {
  data: [
    {
      createdAt: string;
      delivery_address: AddressParams;
      trackingid: string;
      _id: string;
      order_returned: boolean;
      order_paid: boolean;
      paymentid: string;
      status: "delivered" | "pending" | "returned";
      total_amount: number;
      userid: string;
      delivery_fee: number;
      items: [
        {
          price: number;
          productid: {
            coverimage: string;
            name: string;
          };
          quantity: number;
          subprice: number;
          _id: string;
          variant: [
            {
              price: number;
              value: string;
              variant_type: string;
            },
          ];
        },
      ];
    },
  ];
}
export default function MyOrders() {
  const { data: session } = useSession();
  const [item, setItem] = useState<number>(0);
  const [orders, setOrders] = useState<OrderList | null>(null);
  const convertDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await onlinePharmacyApi
        .getAllOrders(
          session!,
          // @ts-expect-error: 'id' is not a property of 'session'
          session?.user.id,
        )
        .then((s) => {
          setOrders(s);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [session]);
  // console.log(orders);
  return (
    <OrdersProvider>
      <OrdersContent />
    </OrdersProvider>
  );

  function OrdersContent() {
    const { state } = useOrders();

    const pageToLoad =
      state === "list" ? (
        <OrdersList />
      ) : state === "pending" ? (
        <PendingDetail />
      ) : state === "delivered" ? (
        <DeliveredDetails />
      ) : state === "returned" ? (
        <ReturnedDetails />
      ) : (
        <div></div>
      );

    return pageToLoad;
  }

  function OrdersList() {
    // console.log(orders);
    return (
      <section className="rounded border border-gray-300">
        <div className="border-b border-gray-300 pt-5">
          <h2 className="inline-block border-b-2 border-b-primary-500 px-6 pb-5 font-semibold text-primary-500">
            My Orders
          </h2>
        </div>

        <ul>
          {orders?.data
            // .sort(() => Math.random() - 0.5)
            .slice(0, 7)
            .map((order, i) => (
              <li
                key={i}
                className="border border-b-gray-300 px-6 py-5 last:border-none"
              >
                <OrderSummary
                  productNames={order.items
                    .filter((e) => e.productid != null)
                    .map((e) => e.productid.name)
                    .join(", ")}
                  imageUrl={order.items[0].productid?.coverimage}
                  index={i}
                  status={order.status}
                  orderDate={order.createdAt}
                  orderId={order._id}
                />
              </li>
            ))}
        </ul>
      </section>
    );
  }

  function OrderSummary({
    status,

    imageUrl,
    productNames,
    orderId,
    orderDate,
    index,
  }: {
    status: "delivered" | "pending" | "returned";

    orderId: string;
    orderDate: string;
    index: number;
    imageUrl: string;
    productNames: string;
  }) {
    const { setState } = useOrders();

    const bgColor =
      status === "delivered"
        ? "#1F922B"
        : status === "pending"
          ? "#E2AC5A"
          : "#59B2F3";

    const statusText =
      status === "delivered"
        ? "Delivered"
        : status === "pending"
          ? "Pending Shipping"
          : "Returned Order";

    const displayOrderCardDetails = (index: number) => {
      setItem(index);
      status === "delivered"
        ? setState("delivered")
        : status === "pending"
          ? setState("pending")
          : setState("returned");
    };

    return (
      <article className="relative flex items-center gap-x-4">
        <div className="relative h-[101.73px] w-[97px] overflow-hidden">
          <Image
            src={imageUrl ?? "/images/dashboard/drug.png"}
            alt=""
            fill
            sizes="60px"
            className="shrink-0"
          />
          <div className="abolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-[#0C0C0D75] p-1.5 text-xs font-bold text-white">
            x1
          </div>
        </div>
        <div>
          <h3 className="mb-2 text-xs">
            {productNames
              ? productNames
              : "Oréal, Revitalift Triple Power, Anti-Aging"}
          </h3>
          <div className="mb-2.5 text-xs text-gray-500">
            <p>
              Order Number:{" "}
              <span className="mb-0.5 text-primary-500">{orderId}</span>
            </p>
            <p>
              Order Date:{" "}
              <span className="text-primary-500">{convertDate(orderDate)}</span>
            </p>
          </div>
          <span
            className="rounded px-3 py-1 text-xs font-bold text-white"
            style={{ background: bgColor }}
          >
            {statusText}
          </span>
        </div>
        <button
          className="absolute right-8 top-0 text-xs font-bold text-[#E31E25]"
          // value={[orderId, userId ]}
          onClick={() => displayOrderCardDetails(index)}
        >
          More Details
        </button>
      </article>
    );
  }

  function PendingDetail() {
    const { setState } = useOrders();

    return (
      <section className="text-xs">
        <div>
          <button
            className="pb-5 text-xs font-bold text-primary-500"
            onClick={() => setState("list")}
          >
            &larr; My Orders
          </button>
        </div>

        <div className="mb-6 flex items-center justify-between border-b border-[#D2D2D2] pb-3">
          <h2 className="shrink-0 text-lg font-semibold text-primary-500">
            Order Details
          </h2>
        </div>

        <section className="my-7 flex justify-between">
          <div className="grid gap-y-0.5">
            <h3 className="font-bold text-primary-500">
              ORDER #{orders?.data[item]._id}
            </h3>
            <p>{orders?.data[item].items.length} Items</p>
            <p>
              Placed on{" "}
              {orders?.data[item].createdAt
                ? convertDate(orders?.data[item].createdAt)
                : ""}
            </p>
            <p>Total: ₦{orders?.data[item].total_amount}</p>
          </div>
          <div className="flex flex-col gap-y-2.5">
            <Link
              href={routes.PHARMARCYORDERTRACKING}
              className="w-fit rounded-lg bg-primary-500 px-5 py-3 font-bold text-white hover:bg-primary-500/90"
            >
              Track Order
            </Link>
            {/* <Button className="w-fit py-2 font-bold" variant="outline">
              Cancel Order
            </Button> */}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="mb-4 font-bold text-primary-500">
            ITEMS IN YOUR ORDER
          </h3>
          <ul className="grid gap-y-1.5">
            {orders?.data[item].items.map((p) => (
              <li key={p._id}>
                <article className="rounded border border-gray-300 px-3.5 py-5">
                  <SummaryProductCard
                    name={p.productid?.name}
                    imageUrl={p.productid?.coverimage}
                    qty={p.quantity}
                    price={p.price}
                  />
                  <p className="mt-5">
                    Our <span className="text-primary-500">return policy</span>{" "}
                    applies to this item
                  </p>
                </article>
              </li>
            ))}

            {/* <li>
              <article className="rounded border border-gray-300 px-3.5 py-5">
                <SummaryProductCard />
                <p className="mt-5">
                  Our <span className="text-primary-500">return policy</span>{" "}
                  applies to this item
                </p>
              </article>
            </li> */}
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
                  <li>Items total: ₦{orders?.data[item].total_amount}</li>
                  <li>Delivery Fees: ₦{orders?.data[item].delivery_fee}</li>
                  <li>
                    Promotional Discount: - ₦59 Come back to add this later cos
                    its not in the response{" "}
                  </li>
                  <li>
                    Total: ₦
                    {orders?.data[item].total_amount ??
                      0 + (orders?.data[item].delivery_fee ?? 0)}
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
            <div className="px-6 py-5">
              {/* <article className="mb-5">
                <h3 className="mb-1.5 font-bold text-primary-500">
                  Billing Address
                </h3>
                <p>C Darl Uzu</p>
                <p>Pay on Delivery</p>
                <p>
                  Court Estate, Durumi | Federal Capital Territory - ABUJA-
                  DURUMI | 900103
                </p>
              </article> */}

              <article className="mb-5 capitalize">
                <h3 className="mb-1.5 font-bold text-primary-500">
                  Delivery Address
                </h3>
                {/* <p className="mb-4">Pay on Delivery</p> */}
                <p>{`${orders?.data[item].delivery_address.address} `}</p>

                <p>
                  {`${orders?.data[item].delivery_address.city} |  
                ${orders?.data[item].delivery_address.state} |
                ${orders?.data[item].delivery_address.country} |
                ${orders?.data[item].delivery_address.postalcode}`}
                  {/* Court Estate, Durumi | Federal Capital Territory - ABUJA-
                  DURUMI | 900103 */}
                </p>
              </article>
            </div>
          </section>
        </div>
        <p>
          <span className="font-bold text-primary-500">Contact Support</span> if
          you can help
        </p>
      </section>
    );
  }

  function DeliveredDetails() {
    const { setState } = useOrders();
    // console.log(orders?.data[item]);

    return (
      <section className="mb-14">
        <div className="">
          <button
            className="pb-5 text-xs font-bold text-primary-500"
            onClick={() => setState("list")}
          >
            &larr; My Orders
          </button>
        </div>

        <div className="flex items-center justify-between border-b border-[#D2D2D2] pb-3">
          <h2 className="shrink-0 text-lg font-semibold text-primary-500">
            Order Items
          </h2>
        </div>

        <table className="my-6 w-full">
          <thead>
            <tr className="bg-gray-100 text-xs text-primary-500">
              <th className="w-1/2 px-6 py-3 text-left">Items in your order</th>
              <th className="w-[10%] text-left">Price</th>
              <th className="w-[10%] text-left">Quantity</th>
              <th className="w-1/5 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders?.data[item].items.map((item, index) => (
              <tr key={index} className="border-b border-b-gray-100 text-xs">
                <td className="flex items-center gap-x-7 px-6 py-3.5">
                  <div className="relative h-[75px] w-[79px] overflow-hidden text-xs">
                    <Image
                      src={
                        item.productid.coverimage ??
                        "/images/dashboard/drug.png"
                      }
                      alt=""
                      className=""
                      fill
                      sizes="79px"
                    />
                  </div>
                  {item.productid.name ?? "Some drug"}
                </td>
                <td className="text-primary-500">₦{item.price}</td>
                <td className="py-3.5">
                  <div className="flex w-fit items-center gap-x-3 rounded border px-3.5 py-2">
                    <p className="font-bold">{item.quantity}</p>
                  </div>
                </td>
                <td>
                  <span className="text-primary-500">{item.subprice}</span>
                  <div className="flex justify-end gap-x-4 font-bold text-primary-500">
                    <Link href={routes.PHARMARCYPRODUCTREVIEW}>
                      Rate this item
                    </Link>
                    <Link href={routes.PHARMARCYRETURNPOLICY}>
                      Return this item
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-6 rounded border bg-[#F1F1F5] px-8 py-7 text-xs text-primary-500">
          <div className="flex justify-between font-bold">
            <h4>Total</h4>
            <p>₦{orders?.data[item].total_amount}</p>
          </div>
        </div>
      </section>
    );
  }

  function ReturnedDetails() {
    const { setState } = useOrders();

    return (
      <section>
        <div>
          <button
            className="pb-5 text-xs font-bold text-primary-500"
            onClick={() => setState("list")}
          >
            &larr; My Orders
          </button>
        </div>

        <div className="mb-6 flex items-center justify-between border-b border-[#D2D2D2] pb-3">
          <h2 className="shrink-0 text-lg font-semibold text-primary-500">
            Returned Items
          </h2>
        </div>

        <div className="grid gap-y-6">
          <ReturnedItemCard returnType="declined" />
          <ReturnedItemCard returnType="approved" />
        </div>
      </section>
    );
  }

  function ReturnedItemCard({
    returnType,
  }: {
    returnType: "declined" | "approved";
  }) {
    const textColor = returnType === "declined" ? "#D81302" : "#22C55E";
    return (
      <article>
        <p
          className="mb-1.5 text-right text-xs capitalize"
          style={{ color: textColor }}
        >
          Return {returnType}
        </p>
        <div className="relative flex gap-x-3 rounded border border-[#CACACA] px-4 py-5 text-xs">
          <div className="relative h-[97.1px] w-[101.73px]">
            <Image src="/images/client.jpg" alt="" fill />
          </div>
          <div>
            <p className="mb-1 text-[#2C2D33]">
              L&apos;Oréal, Revitalift Triple Power, Anti-Aging{" "}
            </p>
            <p className="text-[#636985]">₦759.99</p>
          </div>

          {returnType === "approved" && (
            <button className="absolute bottom-6 right-5 flex flex-col items-center rounded-lg border border-dotted border-primary-500 bg-[#F2EAEA] px-16 py-2 text-sm">
              <DownloadSvg />
              Download Receipt
            </button>
          )}
        </div>
      </article>
    );
  }
}
