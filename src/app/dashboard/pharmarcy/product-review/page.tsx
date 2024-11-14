import Button from "@/components/button";
import NavigateToPrevPage from "@/components/dashboard/prev-page";
import { StarSVG } from "@/components/svgs";

export default function ProductReview() {
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
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarSVG key={i} className="h-6 w-6" fill="#E29A13" />
                ))}
            </ul>
          </div>
          <div className="mb-3 flex justify-between">
            <label htmlFor="" className="font-medium text-gray-700">
              Write a review for this product
            </label>
            <span className="text-sm">Max 450 Words</span>
          </div>
          <textarea
            name=""
            id=""
            className="h-[229px] w-full resize-none rounded-lg border border-[#A0A2B3] p-4"
          ></textarea>
          <Button className="mt-7">SUBMIT REVIEW</Button>
        </section>
      </main>
    </>
  );
}
