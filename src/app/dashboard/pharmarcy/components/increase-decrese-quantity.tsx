"use client";

import { useState } from "react";

export default function Quantity({
  itemqty,
  // quantity,
  // setQuantity,
  price,
}: {
  price: number;
  // quantity: number;
  // setQuantity: (qty: number) => void;
  itemqty: number;
}) {
  const [quantity, setQuantity] = useState(1);
  const reduceQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity < itemqty) setQuantity(quantity + 1);
  };

  return (
    <article className="flex items-center gap-x-8">
      <div className="flex w-fit items-center gap-x-8 rounded border border-gray-500 px-2.5 py-1.5 text-sm">
        <button className="text-lg" onClick={reduceQuantity}>
          -
        </button>{" "}
        <span>{quantity}</span>{" "}
        <button className="text-lg" onClick={increaseQuantity}>
          +
        </button>
      </div>
      <p className="text-base font-bold">₦{price * quantity}</p>
    </article>
  );
}
