import { HeartSVG } from "@/components/svgs";
import WishlistCourseCard from "../../components/wishlist-course-card";
import Link from "next/link";
import { routes } from "@/constants/routes";

export default function TrainingProfileWishlists() {
  return (
    <main className="px-14 py-12">
      <section className="mb-10">
        <h2 className="mb-6 text-2xl font-semibold text-[#1D2026]">
          Wishlists (3)
        </h2>
      </section>

      <section>
        <div className="border border-[#E9EAF0]">
          <div className="grid grid-cols-[3fr_1fr_2fr] border-b border-b-[#E9EAF0] px-6 py-5 text-sm font-medium text-[#4E5566]">
            <h3>COURSE</h3>
            <h3>PRICES</h3>
            <h3>ACTION</h3>
          </div>
          <Wishlists />
          <Wishlists />
          <Wishlists />
          <Wishlists />
        </div>
      </section>
    </main>
  );
}

function Wishlists() {
  return (
    <article className="grid grid-cols-[3fr_1fr_2fr] items-center border-b border-b-[#E9EAF0] px-6 py-6 last:border-none">
      <WishlistCourseCard />
      <div className="text-lg font-medium text-primary-500">₦37.00</div>
      <div className="flex gap-x-3">
        <Link
          href={routes.TRAININGCHECKOUT}
          className="flex h-12 w-[176px] items-center justify-center bg-[#F5F7FA] text-center font-semibold text-[#1D2026]"
        >
          Buy Now
        </Link>
        <button className="h-12 w-[176px] bg-primary-500 font-semibold text-white">
          Add To Cart
        </button>
        <button className="h-12 bg-primary-100 px-3 font-semibold text-white">
          <HeartSVG fill="#E29A13" className="h-6 w-6" />
        </button>
      </div>
    </article>
  );
}
