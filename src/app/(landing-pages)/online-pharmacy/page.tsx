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
      <header className="flex items-center justify-between gap-x-20 bg-[#2C315F] py-12 pl-20 text-white">
        <div className="max-w-[686px]">
          <h1 className="mb-8 text-5xl font-bold leading-[3.5rem]">
            Your Online Pharmacy Oasis.
          </h1>
          <p>
            Dive into a world of pharmaceutical convenience with Moricol. Our
            online pharmacy platform is your oasis for hassle-free prescription
            management, quick deliveries, and a personalized healthcare
            experience.
          </p>
          <div className="mt-9 flex gap-x-2.5">
            <Link
              href="/dashboard/pharmarcy"
              className="inline-block w-full max-w-[293px] rounded-lg bg-primary-500 px-9 py-3 text-center text-primary-50"
            >
              GET STARTED
            </Link>
            <button className="w-full max-w-[293px] rounded-lg border border-primary-500 bg-white px-9 py-3 text-primary-500">
              LOGIN
            </button>
          </div>
        </div>
        <Image
          src="/images/online-pharmarcy.png"
          alt=""
          width={600}
          height={600}
        />
      </header>
      <main>
        <section className="p-20 text-4xl font-medium">
          <h2 className="mb-6">Explore our Product Categories</h2>

          <div className="flex flex-wrap justify-between gap-x-6">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <div key={i}>
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
