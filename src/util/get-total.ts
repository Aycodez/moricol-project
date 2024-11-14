import { Product } from "@/lib/features/cartSlice";

export const calculateTotal = (list: Product[]) => {
  let total = 0;
  list.forEach((o) => {
    total += o.quantity * o.subprice;
  });
  return total;
};
