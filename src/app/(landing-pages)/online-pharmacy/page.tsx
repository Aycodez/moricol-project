// 'use client'
// import onlinePharmacyApi from "@/api/online-pharmacy";
// import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";

export default function OnlinePharmarcy() {
  // const { data: cats } = useFetch(onlinePharmacyApi.getAllCategories);
  // console.log(cats)
  return (
    <>
      <header className="flex items-center justify-between gap-x-20 bg-[#2C315F] px-4 py-6 text-white lg:py-12 lg:pl-20">
        <div className="max-w-[686px]">
          <h1 className="mb-4 text-center text-4xl font-bold lg:mb-8 lg:text-left lg:text-5xl lg:leading-[3.5rem]">
            Your Online Pharmacy Oasis.
          </h1>
          <p className="text-center lg:text-left">
            Dive into a world of pharmaceutical convenience with Moricol. Our
            online pharmacy platform is your oasis for hassle-free prescription
            management, quick deliveries, and a personalized healthcare
            experience.
          </p>
          <div className="mt-9 flex gap-x-2.5">
            <Link
              href="/dashboard/pharmarcy"
              className="inline-block w-full max-w-[293px] rounded-lg bg-primary-500 px-4 py-3 text-center text-primary-50 lg:px-9"
            >
              GET STARTED
            </Link>
            <button className="w-full max-w-[293px] rounded-lg border border-primary-500 bg-white px-4 py-3 text-primary-500 lg:px-9">
              LOGIN
            </button>
          </div>
        </div>
        <Image
          className="hidden lg:flex"
          src="/images/online-pharmarcy.png"
          alt=""
          width={600}
          height={600}
        />
      </header>
      <main>
        <section className="p-10 text-3xl font-medium lg:p-20 lg:text-4xl">
          <h2 className="mb-6 text-center lg:text-left">
            Explore our Product Categories
          </h2>

          <div className="mx-auto grid grid-cols-1 justify-between gap-y-4 lg:grid-cols-5 lg:gap-x-6">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <div className="mx-auto" key={i}>
                  <Image
                    src="/images/pharmcat.webp"
                    alt=""
                    width={236.5}
                    height={354}
                  />
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
