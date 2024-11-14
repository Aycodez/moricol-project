"use client";

import Image from "next/image";
import { StarSVG } from "../svgs";
import { cn } from "@/util/cn";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

export default function ProductCard({
  id,
  drugName,
  imageUrl,
  price,
  bestSelling,
  prescription,
  discount,
}: {
  id: string;
  drugName: string;
  price: number;
  imageUrl: string;
  bestSelling?: boolean;
  prescription: boolean;
  discount: number;
}) {
  const router = useRouter();

  const navigateToPrescriptionPageOrProductDetailsPage = () => {
    if (prescription) {
      router.push(routes.PHARMARCYPRESCRIPTION + `/${id}`);
    } else {
      router.push(routes.PHARMARCYPRODUCT + `/${id}`);
    }
  };

  return (
    <article
      // className="relative max-w-[151.24px] cursor-pointer text-center"
      className="relative ml-5 cursor-pointer text-center"
      onClick={navigateToPrescriptionPageOrProductDetailsPage}
    >
      <div className="relative h-[214.51px] overflow-hidden px-5">
        {/* <div className="relative h-[214.51px] w-[151.24px] overflow-hidden"> */}
        <Image
          src={imageUrl}
          alt="Doctor profile"
          fill
          sizes="151px"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="py-3">
        <h3 className="mb-0.5 text-sm">{drugName}</h3>
        {bestSelling && (
          <div className="mb-1 mt-0.5 flex justify-center gap-x-1">
            <StarSVG fill="#E7A542" />
            <StarSVG />
            <StarSVG />
            <StarSVG />
            <StarSVG />
          </div>
        )}
        <p className="font-bold text-primary-500">{String(price)}</p>
      </div>

      <DiscountBadge content={discount} className="absolute -left-2 top-2" />
    </article>
  );
}

function DiscountBadge({
  className,
  content,
}: {
  className: string;
  content: number;
}) {
  return (
    content != 0 && (
      <div
        className={cn(
          "rounded bg-[#F1CCCE] px-2 py-1 font-semibold text-secondary-400",
          className,
        )}
      >
        -{String(Math.floor(content))}%
      </div>
    )
  );
}
