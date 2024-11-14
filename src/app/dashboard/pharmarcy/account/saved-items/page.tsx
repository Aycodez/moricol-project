"use client";
// import ProductCard from "@/components/dashboard/pharmacy-product-card";
// import onlinePharmacyApi, { SingProductParams } from "@/api/online-pharmacy";
// import { useSession } from "next-auth/react";
// import {  useState } from "react";
// import { SingleProduct } from "../../product/[id]/page";

export interface SavedProducts {
  productid: string;
  _id: string;
  userid: string;
}

export default function SavedItems() {
  // const { data: session } = useSession();
  // const [savedProducts, setSavedProducts] = useState<SingleProduct[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await onlinePharmacyApi
  //       .getSavedProduct(session!, session?.user.id!)
  //       .then((res) => {
  //         getAllSavedProducts(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   fetchData();
  // }, [session]);
  // console.log(savedProducts);

  return (
    <div className="grid grid-cols-4 justify-between gap-x-6">
      {/* <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard /> */}
      SavedItems
    </div>
  );

  // function  fetchProduct(productid: string) {
  //   const [product, setProduct] = useState<SingProductParams | null>(null);

  //       const response = await onlinePharmacyApi.getSingleProduct(
  //         session!,
  //         productid,
  //       );
  //       setProduct(response);
  //     };
  //     fetchData();

  //   return product!.data;
  // }

  // function getAllSavedProducts(savedProducsts: SavedProducts[]) {
  //   let products = [];
  //   for (let index = 0; index < savedProducsts.length; index++) {
  //     products.push(fetchProduct(savedProducsts[index].productid));
  //   }

  //   // return products;
  //   setSavedProducts(products);
  // }
}
