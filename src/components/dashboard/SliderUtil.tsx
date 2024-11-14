"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./pharmacy-product-card";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export interface Product {
  product: {
    _id: string;
    coverimage: string;
    name: string;
    price: number;
    prescription: boolean;
    discount_price: number;
  };
}

export const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="absolute -right-5 top-20 z-[999] mb-5">
      <button
        onClick={onClick}
        className="rounded-full bg-gray-500 bg-opacity-40 p-2"
      >
        <GrFormNext size={20} />
      </button>
    </div>
  );
};
export const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="absolute top-20 z-[999] mb-5">
      <button
        onClick={onClick}
        className="rounded-full bg-gray-500 bg-opacity-40 p-2"
      >
        <GrFormPrevious size={25} />
      </button>
    </div>
  );
};
const SliderUtil = ({ data }: { data: Array<Product> }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infiinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto w-full">
      <Slider {...settings}>
        {data.length >= 5
          ? data?.map((drug, index) => {
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
            })
          : Array(5)
              .fill("")
              .map((drug, index) => (
                <ProductCard
                  key={index}
                  discount={
                    ((data[0].product?.price -
                      data[0].product?.discount_price) /
                      data[0].product?.price) *
                    100
                  }
                  id={data[0].product?._id}
                  prescription={data[0].product?.prescription}
                  drugName={data[0].product?.name}
                  imageUrl={data[0].product?.coverimage}
                  price={data[0].product?.price}
                />
              ))}
      </Slider>
    </div>
  );
};

export default SliderUtil;
