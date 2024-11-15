"use client";
import Button from "@/components/button";
import {
  SliderNextButton,
  SliderPrevButton,
} from "@/components/dashboard/slider";
import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import useFetch from "@/hooks/useFetch";
import onlinePharmacyApi from "@/api/online-pharmacy";
import SliderUtil from "@/components/dashboard/SliderUtil";
import { useAppSelector, useAppDispatch } from "@/lib/hook";
import { RootState } from "@/lib/store";
import { clearCart } from "@/lib/features/cartSlice";
import { formatNaira } from "@/util/currency-format";
import { calculateTotal } from "@/util/get-total";
export default function CartPage() {
  const { data: bestProducts } = useFetch(onlinePharmacyApi.getBestProducts);
  const { data: newProducts } = useFetch(onlinePharmacyApi.getNewProducts);
  const cart = useAppSelector((state: RootState) => state.drugcart.cart);
  const dispatch = useAppDispatch();

  return (
    <main className="px-8 py-6">
      <section className="mb-14">
        <div className="flex items-center justify-between border-b border-[#D2D2D2] pb-3">
          <h2 className="shrink-0 text-lg font-semibold text-primary-500">
            Shopping Cart
          </h2>
        </div>

        {cart.length > 0 ? (
          <>
            <table className="my-6 w-full">
              <thead>
                <tr className="bg-gray-100 text-xs text-primary-500">
                  <th className="w-1/2 py-3">Product</th>
                  <th className="w-[10%] text-left">Price</th>
                  <th className="w-[10%] text-left">Quantity</th>
                  <th className="w-1/5 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map(
                  (c, index) =>
                    c.quantity > 0 && (
                      <tr
                        key={index}
                        className="border-b border-b-gray-100 text-xs"
                      >
                        <td className="flex items-center gap-x-7 py-3.5">
                          <div className="relative h-[75px] w-[79px] overflow-hidden text-xs">
                            <Image
                              src={c.coverimage}
                              alt=""
                              className=""
                              fill
                              sizes="79px"
                            />
                          </div>
                          {c.name}
                        </td>
                        <td className="text-primary-500">
                          {formatNaira(c.subprice)}
                        </td>
                        <td className="py-3.5">
                          <div className="flex w-fit items-center gap-x-3 rounded border px-3.5 py-2">
                            <p className="font-bold">{c.quantity}</p>
                          </div>
                        </td>
                        <td>
                          <div className="flex items-center gap-x-7">
                            <span className="text-primary-500">
                              {c.prescription
                                ? "Verification Pending"
                                : formatNaira(c.subprice * c.quantity!)}
                            </span>
                            <button className="relative h-6 w-6 text-lg text-gray-500">
                              <div className="absolute left-1/2 top-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-300" />
                              <div className="absolute left-1/2 top-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gray-300" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ),
                )}
              </tbody>
            </table>
            <>
              <div className="mb-6 flex justify-between">
                <Button
                  variant="outline"
                  className="w-fit border border-[#9F9FA0] py-3 text-xs font-bold"
                >
                  Back to Shopping
                </Button>
                <Button
                  variant="outline"
                  className="w-fit border border-[#9F9FA0] py-3 text-xs font-bold"
                  onClick={() => dispatch(clearCart())}
                >
                  Remove All
                </Button>
              </div>
              <div className="mb-6 rounded border bg-[#F1F1F5] px-8 py-7 text-xs text-primary-500">
                <div className="flex justify-between font-bold">
                  <h4>Total</h4>
                  <p>{formatNaira(calculateTotal(cart))}</p>
                </div>
              </div>
              <div className="flex gap-x-9">
                <form className="grow">
                  <Link
                    href={routes.PHARMARCYCHECKOUT}
                    className="inline-block w-full rounded-lg bg-primary-500 py-3 text-center font-semibold text-white"
                  >
                    Proceed to Checkout
                  </Link>
                </form>
              </div>
            </>
          </>
        ) : (
          <h1 className="py-6 text-center text-2xl text-primary-500">
            Your cart is empty. Add a product!
          </h1>
        )}
      </section>

      <section className="mb-9">
        <div className="flex items-center justify-between border-b border-[#D2D2D2] pb-3">
          <h2 className="shrink-0 font-semibold text-primary-500">
            Saved Items
          </h2>
        </div>

        <div className="relative py-3">
          {/* <ProductCard /> */}
          <SliderNextButton className="absolute -right-5 top-1/2 -translate-y-1/2 opacity-30" />
          <SliderPrevButton className="absolute -left-5 top-1/2 -translate-y-1/2 opacity-30" />
        </div>
      </section>
      <section className="mb-9">
        <div className="flex items-center justify-between border-b border-[#D2D2D2] pb-3">
          <h2 className="shrink-0 font-semibold text-primary-500">
            You may also like
          </h2>
        </div>

        <div className="w-full pt-5">
          {newProducts?.data && <SliderUtil data={newProducts.data} />}
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between border-b border-[#D2D2D2] pb-3">
          <h2 className="shrink-0 font-semibold text-primary-500">
            Recently viewed
          </h2>
        </div>

        <div className="w-full pt-5">
          {bestProducts?.data && <SliderUtil data={bestProducts.data} />}
        </div>
      </section>
    </main>
  );
}
