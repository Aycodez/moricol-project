"use client";
import onlinePharmacyApi from "@/api/online-pharmacy";
// import SelectInput from "@/components/auth/select-input";
import Button from "@/components/button";
import PageToolBar from "@/components/dashboard/pharmacy-page-toolbar";
import ReviewCard from "@/components/dashboard/review-card";
import { HeartSVG, StarSVG } from "@/components/svgs";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { RootState } from "@/lib/store";
import { addToCart, decrement, filterCart } from "@/lib/features/cartSlice";
import { useSnackbar } from "notistack";
interface Attributes {
  value: string;
  price: number;
}
interface Images {
  url: string;
  _id: string;
}

export interface SingleProduct {
  product: {
    attribute: {
      brand: Attributes[];
      color: Attributes[];
      size: Attributes[];
    };

    category: string;
    coverimage: string;
    description: string;
    images: Images[];
    name: string;
    prescription: boolean;
    price: number;
    status: string;
    specification: string;
    sold: number;
    discount_price: number;
    _id: string;
  };
  productreview: string[];
}
export default function ProductPage() {
  const { data: session } = useSession();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const [loaded, setLoaded] = useState<boolean>(false);
  const cart = useAppSelector((state: RootState) => state.drugcart.cart);
  const [quantity, setQuantity] = useState<number>(0);
  const [drug, setDrug] = useState<SingleProduct | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      await onlinePharmacyApi
        .getSingleProduct(session!, id)
        .then((res) => {
          setDrug(res.data);
          setLoaded(true);
        })
        .catch((err) => console.log(err));
      //  .finally(() => setLoaded(true))
    };
    fetchData();
    if (loaded) {
      const index = cart.findIndex(
        (item) => item.productid == drug?.product._id,
      );
      if (index != -1) setQuantity(cart[index].quantity!);
    }
  }, [session, loaded]);

  const saveProduct = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await onlinePharmacyApi
      // @ts-expect-error: id is not found
      .saveProduct(session!, session?.user.id, drug?.product._id)
      .then(() => {
        enqueueSnackbar("Saved successfully!", { variant: "success" });
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar(err, { variant: "error" });
      });
  };

  const handleDecrement = () => {
    setQuantity(quantity == 0 ? quantity : quantity - 1);
    dispatch(
      decrement({
        // @ts-expect-error: id is not found
        price: drug?.product.price,
        // @ts-expect-error: id is not found
        subprice: drug?.product.discount_price,
        // @ts-expect-error: id is not found
        productid: drug?.product._id,
        quantity: quantity - 1,
        // @ts-expect-error: id is not found
        coverimage: drug?.product.coverimage,
        // @ts-expect-error: id is not found
        name: drug?.product.name,
      }),
    );
    dispatch(filterCart());
    console.log("Decreased successfully");
  };

  return (
    <main>
      <PageToolBar />

      <div className="mb-8 grid gap-y-5 px-8">
        <section className="flex items-start justify-between gap-x-8 py-8">
          <div>
            <div className="relative mb-6 h-[537px] w-[537px] overflow-hidden">
              <Image
                // @ts-expect-error: 'coverimage' is not a property of 'drug.product'
                src={drug?.product.coverimage}
                alt=""
                fill
                sizes="537px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="grid grid-cols-6 gap-x-3">
              {drug?.product.images.map((image, i) => (
                <div
                  key={i}
                  className="relative mb-6 h-[79px] w-[79px] border border-[#DBDBDB]"
                >
                  <Image
                    src={image.url}
                    alt=""
                    fill
                    sizes="79px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[464px] grow text-xs text-gray-500">
            {/* Product Name */}
            <h1 className="mb-3 text-xl font-bold text-gray-700">
              {drug?.product.name}
            </h1>

            {/* Brand | Rating | Availability */}
            <p className="mb-1.5">
              Brand:{" "}
              {drug?.product.attribute.brand.map((b, i) => (
                <span key={i} className="text-primary-500">
                  {b.value}
                </span>
              ))}
            </p>
            <div className="mb-2 mt-0.5 flex items-center gap-x-1">
              <StarSVG fill="#E7A542" />
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <p>{drug?.productreview}</p>
            </div>
            <p className="mb-5 text-[#2C2D33]">
              Status:{" "}
              <span className="text-primary-500">{drug?.product.status}</span>
            </p>

            {/* Price */}
            <p className="mb-6 text-lg font-semibold">
              {drug?.product.discount_price != drug?.product.price && (
                <span className="mr-2 line-through">
                  ₦{String(drug?.product.price)}
                </span>
              )}

              <span className="text-secondary-400">
                ₦
                {String(
                  drug?.product.discount_price == drug?.product.price
                    ? drug?.product.price
                    : drug?.product.discount_price,
                )}
              </span>
            </p>

            {/* Color | Size */}
            <div className="mb-7 flex flex-wrap gap-x-7">
              {/* Color */}
              <div className="shrink-0">
                <h3 className="mb-1 text-gray-700">Color</h3>
                <div className="flex flex-wrap gap-x-1.5">
                  {drug?.product.attribute.color.map((col, index) => (
                    <button
                      key={index}
                      className="flex h-8 shrink-0 items-center justify-center rounded border border-[#DEE2E2] bg-white p-2"
                    >
                      {col.value}
                    </button>
                  ))}
                </div>
              </div>
              {/* Sizes */}
              <div className="shrink-0">
                <h3 className="mb-1 text-gray-700">Size</h3>
                <div className="flex flex-wrap gap-x-1.5">
                  {drug?.product.attribute.size.map((s, index) => (
                    <button
                      key={index}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[#DEE2E2] bg-white uppercase"
                    >
                      {s.value}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Cart */}
            <div className="mb-6 flex items-center justify-between rounded border px-5 py-4">
              <p>Quantity</p>
              <div className="flex items-center gap-x-3 rounded border px-3.5 py-2 text-sm">
                <button disabled={quantity == 0} onClick={handleDecrement}>
                  -
                </button>
                <p className="font-bold">{String(quantity)}</p>
                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                    dispatch(
                      addToCart({
                        // @ts-expect-error: id is not found
                        price: drug?.product.price,
                        // @ts-expect-error: id is not found
                        subprice: drug?.product.discount_price,
                        // @ts-expect-error: id is not found
                        productid: drug?.product._id,
                        quantity: quantity + 1,
                        // @ts-expect-error: id is not found
                        coverimage: drug?.product.coverimage,
                        // @ts-expect-error: id is not found
                        name: drug?.product.name,
                      }),
                    );
                    // console.log(cart);
                  }}
                >
                  +
                </button>
              </div>
              <Button
                disabled={quantity > 0}
                onClick={(e) => {
                  e.preventDefault();
                  if (quantity == 0) {
                    setQuantity(quantity + 1);
                    dispatch(
                      addToCart({
                        // @ts-expect-error: id is not found
                        price: drug?.product.price,
                        // @ts-expect-error: id is not found
                        subprice: drug?.product.discount_price,
                        // @ts-expect-error: id is not found
                        productid: drug?.product._id,
                        quantity: quantity + 1,
                        // @ts-expect-error: id is not found
                        coverimage: drug?.product.coverimage,
                        // @ts-expect-error: id is not found
                        name: drug?.product.name,
                      }),
                    );
                  }

                  // console.log(cart);
                }}
                className="w-fit py-3 font-semibold"
              >
                Add to cart
              </Button>
              <button
                onClick={saveProduct}
                className="flex items-center gap-x-2"
              >
                <HeartSVG className="h-4 w-4" fill="black" />
                <p className="text-[#2C2D33]">Add to WishList</p>
              </button>
            </div>

            {/* Location */}
            <div className="mb-6">
              <form>
                <label htmlFor="location" className="mb-1 block">
                  Choose your location
                </label>
                <select
                  name=""
                  id="location"
                  className="rounded-[6px] border px-5 py-3.5"
                >
                  <option value="">Kaduna</option>
                </select>
              </form>
              <p className="mt-3">Estimated delivery 3-7 working days</p>
            </div>

            {/* Benefits */}
            <div className="mb-1.5">
              <h3 className="mb-1.5 font-bold text-gray-700">
                What&apos;s great about it?
              </h3>

              <ul className="ml-4 list-disc">
                <li>Sophisticated wall hung toilet</li>
                <li>Soft close, quick release luxury toilet seat included</li>
                <li>Beautifully made from high quality vitreous china</li>
                <li>Fixings included</li>
                <li>25 year manufacturer guarantes</li>
              </ul>
            </div>

            {/* Categories */}
            <p>
              Categories:{" "}
              <span className="text-primary-500">{drug?.product.category}</span>
            </p>
          </div>
        </section>
        <section className="bg-gray-50">
          <h2 className="border-b border-gray-300 px-12 py-8 text-2xl font-bold text-primary-500">
            Description
          </h2>
          <p className="px-12 py-8">{drug?.product.description}</p>
        </section>
        <section className="bg-gray-50">
          <h2 className="border-b border-gray-300 px-12 py-8 text-2xl font-bold text-primary-500">
            Specification
          </h2>
          <p className="px-12 py-8">{drug?.product.specification}</p>
        </section>
        <section className="bg-gray-50">
          <h2 className="border-b border-gray-300 px-12 py-8 text-2xl font-bold text-primary-500">
            Review
          </h2>
          <div className="grid gap-y-5 pt-8">
            <ReviewCard />
            <ReviewCard />
          </div>
        </section>
      </div>
    </main>
  );
}
