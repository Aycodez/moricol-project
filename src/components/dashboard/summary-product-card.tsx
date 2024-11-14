import Image from "next/image";
export interface SummaryProduct {
  name: string;
  imageUrl: string | null;
  qty: number;
  price: number;
}
export default function SummaryProductCard({
  name,
  imageUrl,
  qty,
  price,
}: SummaryProduct) {
  return (
    <article className="flex items-center gap-x-4">
      <div className="relative h-[58px] w-[60px] overflow-hidden">
        <Image
          src={imageUrl ?? "/images/dashboard/drug.png"}
          alt=""
          fill
          sizes="60px"
          className="shrink-0"
        />
      </div>
      <div>
        <h3 className="text-xs">{name ? name : "Some drug"}</h3>
        <div className="mt-3 text-xs text-gray-500">
          <p>{price}</p>
          <p>Quantity: {qty}</p>
        </div>
      </div>
    </article>
  );
}
