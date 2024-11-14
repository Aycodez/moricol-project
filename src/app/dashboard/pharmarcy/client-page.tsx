"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/util/cn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@/components/button";
import PageToolBar from "@/components/dashboard/pharmacy-page-toolbar";
import ProductCard from "@/components/dashboard/pharmacy-product-card";
import {
  SliderNextButton,
  SliderPrevButton,
} from "@/components/dashboard/slider";
import useFetch from "@/hooks/useFetch";
import onlinePharmacyApi from "@/api/online-pharmacy";
import SliderUtil from "@/components/dashboard/SliderUtil";
export default function HomePage() {
  const { data: bestProducts } = useFetch(onlinePharmacyApi.getBestProducts);
  const { data: newProducts } = useFetch(onlinePharmacyApi.getNewProducts);

  const [showbestSellingProducts, setBestSellingProducts] = useState(false);
  const [shownewProducts, setNewProducts] = useState(false);

  const displayNewProducts = () => setNewProducts(true);
  const displayBestSellingProducts = () => setBestSellingProducts(true);
  const navigateBackToHomePage = () => {
    setBestSellingProducts(false);
    setNewProducts(false);
  };
  function Header() {
    const dashboardCarouselSettings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      initialSlide: 0,
      // nextArrow: (
      //   <NextArrow />
      //   // <SliderNextButton className="absolute -right-5 top-1/2 -translate-y-1/2 border-2 border-white bg-primary-500" />
      // ),
      // prevArrow: (
      //   <PrevArrow />

      //   // <SliderPrevButton className="absolute -left-5 top-1/2 -translate-y-1/2 border-2 border-white bg-primary-500" />
      // ),
    };

    return (
      <div className="w-full max-w-[870px]">
        <Slider {...dashboardCarouselSettings}>
          {Array(3)
            .fill("")
            .map(() => (
              <section
                key={Math.random() * 5}
                className="relative flex h-[282px] items-center rounded-2xl bg-[#212844] text-white"
              >
                <div className="ml-16 mt-8 max-w-[339px]">
                  <h1 className="mb-4 text-xl">
                    Get the best of services with Moricol Online Pharmacy
                  </h1>
                  <ul>
                    <li className="flex items-center gap-x-3 text-2xl font-bold">
                      <BulletPoint />
                      Medications
                    </li>
                    <li className="flex items-center gap-x-3 text-2xl font-bold">
                      <BulletPoint />
                      All Consumables
                    </li>
                  </ul>
                </div>

                <BackgroundIllustrationSVG className="absolute bottom-0 right-4" />

                <Image
                  src="/images/dashboard/female-doctor-looking-her-hand.png"
                  alt="a female doctor looking at her hand"
                  height={302}
                  width={523}
                  className="absolute bottom-0 right-0 z-10"
                />

                <SliderIndicator className="absolute bottom-6 left-16" />
              </section>
            ))}
        </Slider>
        <SliderNextButton className="absolute right-10 top-80 z-[999] mb-5 border-2 border-white bg-primary-500" />

        <SliderPrevButton className="absolute left-8 top-80 z-[999] mb-5 border-2 border-white bg-primary-500" />
      </div>
    );
  }

  function SliderIndicator({ className }: { className?: string }) {
    // of course you are going to map this with the dataset for the carousel
    return (
      <ul className={cn("flex gap-x-1.5", className)}>
        <li>
          <button className="h-[5px] w-6 rounded-full bg-white" />
        </li>
        <li>
          <button className="h-[5px] w-2 rounded-full bg-white" />
        </li>
        <li>
          <button className="h-[5px] w-2 rounded-full bg-white" />
        </li>
        <li>
          <button className="h-[5px] w-2 rounded-full bg-white" />
        </li>
        <li>
          <button className="h-[5px] w-2 rounded-full bg-white" />
        </li>
        <li>
          <button className="h-[5px] w-2 rounded-full bg-white" />
        </li>
      </ul>
    );
  }

  function BulletPoint() {
    return <div className="h-1 w-6 bg-white" />;
  }

  function BackgroundIllustrationSVG({ className }: { className?: string }) {
    return (
      <svg
        width="516"
        height="282"
        viewBox="0 0 516 282"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className)}
      >
        <ellipse cx="258" cy="2.28937" rx="240" ry="151.899" fill="#2C3454" />
        <path
          d="M515.5 2.29114C515.5 47.1512 486.77 87.8371 440.166 117.333C393.569 146.825 329.165 165.082 258 165.082C186.835 165.082 122.431 146.825 75.8338 117.333C29.2304 87.8371 0.5 47.1512 0.5 2.29114C0.5 -42.5689 29.2304 -83.2548 75.8338 -112.751C122.431 -142.243 186.835 -160.5 258 -160.5C329.165 -160.5 393.569 -142.243 440.166 -112.751C486.77 -83.2548 515.5 -42.5689 515.5 2.29114Z"
          stroke="#3C466B"
        />
        <ellipse cx="163" cy="260.203" rx="74" ry="46.519" fill="#2C3454" />
        <path
          d="M251.5 260.204C251.5 275.44 241.742 289.306 225.812 299.389C209.888 309.467 187.859 315.717 163.5 315.717C139.141 315.717 117.112 309.467 101.188 299.389C85.2585 289.306 75.5 275.44 75.5 260.204C75.5 244.968 85.2585 231.102 101.188 221.02C117.112 210.941 139.141 204.691 163.5 204.691C187.859 204.691 209.888 210.941 225.812 221.02C241.742 231.102 251.5 244.968 251.5 260.204Z"
          stroke="#3C466B"
        />
      </svg>
    );
  }

  function AllNewProducts({
    navigateBackToHomePage,
  }: {
    navigateBackToHomePage: () => void;
  }) {
    return (
      <section className="px-16 py-4">
        <div className="flex items-center justify-between border-b border-[#D2D2D2] pb-3">
          <h2 className="shrink-0 text-lg font-semibold text-primary-500">
            New Products
          </h2>
          <Button
            variant="text"
            className="w-fit"
            onClick={navigateBackToHomePage}
          >
            Back
          </Button>
        </div>
        <div className="grid gap-5 py-3 lg:grid-cols-6">
          {newProducts?.data.map((drug, index) => {
            if (drug?.product) {
              // console.log(drug.product);
              return (
                <ProductCard
                  key={index}
                  discount={
                    ((drug.product?.price - drug.product?.discount_price) /
                      drug.product?.price) *
                    100
                  }
                  id={drug.product?._id}
                  prescription={drug.product?.prescription}
                  drugName={drug.product?.name}
                  imageUrl={drug.product?.coverimage}
                  price={drug.product?.price}
                />
              );
            }
          })}
        </div>
      </section>
    );
  }

  function AllBestSellingProducts({
    navigateBackToHomePage,
  }: {
    navigateBackToHomePage: () => void;
  }) {
    return (
      <section className="px-16 py-4">
        <div className="flex items-center justify-between border-b border-[#D2D2D2] pb-3">
          <h2 className="shrink-0 text-lg font-semibold text-primary-500">
            Best Selling Products
          </h2>
          <Button
            variant="text"
            className="w-fit"
            onClick={navigateBackToHomePage}
          >
            Back
          </Button>
        </div>
        <div className="grid justify-between gap-5 py-3 lg:grid-cols-6">
          {bestProducts?.data.map((drug, index) => {
            if (drug?.product) {
              return (
                <ProductCard
                  key={index}
                  discount={
                    ((drug.product?.price - drug.product?.discount_price) /
                      drug.product?.price) *
                    100
                  }
                  id={drug.product?._id}
                  prescription={drug.product?.prescription}
                  drugName={drug.product?.name}
                  imageUrl={drug.product?.coverimage}
                  price={drug.product?.price}
                />
              );
            }
          })}
        </div>
      </section>
    );
  }

  return (
    <main>
      <PageToolBar />

      {!shownewProducts && !showbestSellingProducts && (
        <section className="grid gap-y-9 px-16 py-8 pr-10">
          <Header />

          <section>
            <div className="flex items-center justify-between border-b border-[#D2D2D2] pb-3">
              <h2 className="shrink-0 text-lg font-semibold text-primary-500">
                New Products
              </h2>
              <Button
                variant="text"
                className="w-fit"
                onClick={displayNewProducts}
              >
                View All
              </Button>
            </div>
            <div className="w-full max-w-[900px] pt-5">
              {newProducts?.data && <SliderUtil data={newProducts.data} />}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between border-b border-[#D2D2D2] pb-3">
              <h2 className="shrink-0 text-lg font-semibold text-primary-500">
                Best Selling Products
              </h2>
              <Button
                variant="text"
                className="w-fit"
                onClick={displayBestSellingProducts}
              >
                View All
              </Button>
            </div>
            <div className="w-full max-w-[1200px] pt-5">
              {bestProducts?.data && <SliderUtil data={bestProducts.data} />}
            </div>
          </section>
        </section>
      )}

      {shownewProducts && (
        <AllNewProducts navigateBackToHomePage={navigateBackToHomePage} />
      )}

      {showbestSellingProducts && (
        <AllBestSellingProducts
          navigateBackToHomePage={navigateBackToHomePage}
        />
      )}
    </main>
  );
}
