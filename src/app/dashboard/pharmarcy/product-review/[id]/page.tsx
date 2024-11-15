"use client";
import Button from "@/components/button";
import NavigateToPrevPage from "@/components/dashboard/prev-page";
import { StarSVG } from "@/components/svgs";
import { useSession } from "next-auth/react";
import { useState } from "react";

import onlinePharmacyApi, { ReviewProductParams } from "@/api/online-pharmacy";
import { useParams } from "next/navigation";
import { useSnackbar } from "notistack";

export default function ProductReview() {
  const { id } = useParams();
  const { data: session } = useSession();
  const [review, setReview] = useState<ReviewProductParams>({
    //@ts-expect-error: it will
    userid: session?.user.id,
    //@ts-expect-error: it will
    productid: id,
    rating: 5,
    review: "",
  });
  const { enqueueSnackbar } = useSnackbar();

  const submitReview = async () => {
    await onlinePharmacyApi
      .reviewProduct(session!, review)
      .then((res) => {
        enqueueSnackbar({
          variant: "success",
          message: "Review successfully submitted",
        });
        console.log(res);
      })
      .catch((err: Error) => {
        console.log(err);
        enqueueSnackbar({ variant: "error", message: err.message });
      });
  };
  return (
    <>
      <div className="sticky top-[72px]">
        <NavigateToPrevPage />
      </div>
      <main className="py-11">
        <section className="gray-container px-10 py-5">
          <div className="mb-20">
            <h2 className="mb-4 text-center text-lg font-bold text-primary-500">
              LEAVE A REVIEW
            </h2>
            <ul className="flex items-center justify-center gap-x-2.5">
              {Array(review.rating)
                .fill("")
                .map((_, i) => (
                  <StarSVG key={i} className="h-6 w-6" fill="#E29A13" />
                ))}
            </ul>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <label htmlFor="" className="font-medium text-gray-700">
              Write a review for this product
            </label>
            <div className="mb-3 flex items-center gap-x-2">
              <label htmlFor="rating" className="font-medium text-gray-700">
                Rating:
              </label>
              <select
                value={review.rating}
                onChange={(e) =>
                  setReview({ ...review, rating: +e.target.value })
                }
                id="rating"
                name="rating"
                className="w-32 px-2 py-1 text-sm outline-none"
              >
                <option value={1}>1 - Poor</option>
                <option value={2}>2 - Fair</option>
                <option value={3}>3 - Average</option>
                <option value={4}>4 - Good</option>
                <option value={5}>5 - Excellent</option>
              </select>

              <span className="text-sm">Max 450 Words</span>
            </div>
          </div>
          <textarea
            name=""
            id=""
            value={review.review}
            onChange={(e) => {
              setReview({ ...review, review: e.target.value });
            }}
            className="h-[229px] w-full resize-none rounded-lg border border-[#A0A2B3] p-4"
          ></textarea>
          <Button onClick={submitReview} className="mt-7">
            SUBMIT REVIEW
          </Button>
        </section>
      </main>
    </>
  );
}
