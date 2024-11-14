"use client";

import { useState } from "react";

export default function Quantity() {
  const [quantity, setQuantity] = useState(1);

  const reduceQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <article className="flex gap-x-8 items-center">
      <div className="flex w-fit items-center gap-x-8 rounded border border-gray-500 px-2.5 py-1.5 text-sm">
        <button className="text-lg" onClick={reduceQuantity}>
          -
        </button>{" "}
        <span>{quantity}</span>{" "}
        <button className="text-lg" onClick={increaseQuantity}>
          +
        </button>
      </div>
      <p className="font-bold text-base">₦{344 * quantity}</p>
    </article>
  );
}
