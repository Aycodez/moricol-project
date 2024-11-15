"use client";

import { useEffect, useState } from "react";
import PageToolBar from "@/components/dashboard/pharmacy-page-toolbar";
import RangeSlider from "@/components/dashboard/range-slider";
// import ProductCard from "@/components/dashboard/pharmacy-product-card";
import onlinePharmacyApi, {
  AllProductsParams,
  SubCategoryParams,
  SubSubCategoryParams,
} from "@/api/online-pharmacy";
import { useSession } from "next-auth/react";
import { productCategoryParams } from "@/hooks/useFetch";
import { Attributes, Images } from "../product/[id]/page";
import ProductCard from "@/components/dashboard/pharmacy-product-card";

export interface AllProducts {
  attribute: {
    brand: Attributes[];
    color: Attributes[];
    size: Attributes[];
  };

  category: string;
  coverimage: string;
  description: string;
  images: Images[];
  name: string;
  prescription: boolean;
  price: number;
  status: string;
  specification: string;
  sold: number;
  discount_price: number;
  _id: string;
}

export default function CategoryPage() {
  const { data: session } = useSession();
  const [category, setCategory] = useState<{ _id: string; category: string }>();
  const [subCategory, setSubCategory] = useState<{
    _id: string;
    subcategory: string;
  } | null>();
  const [subSubCategory, setSubSubCategory] = useState<{
    _id: string;
    innercategory: string;
  } | null>();
  const [displayProducts, setDisplayProducts] = useState(false);
  const [cats, setCats] = useState<productCategoryParams>();
  const [allProducts, setAllProducts] = useState<AllProducts[]>();

  const [subCategoryData, setSubCategoryData] =
    useState<SubCategoryParams | null>(null);
  const [subSubCategoryData, setSubSubCategoryData] =
    useState<SubSubCategoryParams | null>(null);

  const fetchProducts = async (params: AllProductsParams) => {
    await onlinePharmacyApi
      .getAllProducts(session!, {
        ...params,
      })
      .then((products) => {
        setAllProducts(products.data);
        console.log(products);
        console.log(allProducts);
      })
      .catch((err) => console.log(err));
  };

  const fetchSubCategories = async (categoryid: string) => {
    await onlinePharmacyApi
      .getSubCategories(session!, categoryid)
      .then((c) => {
        setSubCategoryData(c);
      })
      .catch((err) => console.log(err));
  };
  const fetchInnerCategories = async (
    category: string,
    subcategory: string,
  ) => {
    await onlinePharmacyApi
      .getInnerCategories(session!, category, subcategory)
      .then((c) => {
        setSubSubCategoryData(c);
        // console.log(subSubCategoryData);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const fetchData = async () => {
      await onlinePharmacyApi
        .getAllCategories(session!)
        .then((c) => {
          setCats(c);
          setCategory(c.data[0]);
          fetchSubCategories(c.data[0]._id);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [session]);

  const resetSubCategories = (categoryid?: string) => {
    setSubCategory(null);
    setSubSubCategory(null);
    setSubSubCategoryData(null);

    if (categoryid) fetchSubCategories(categoryid);
  };

  const navigateToLevel = (
    level: "category" | "subCategory" | "subSubCategory",
  ) => {
    switch (level) {
      case "category":
        resetSubCategories();
        break;
      case "subCategory":
        setSubSubCategory(null);
        break;
      case "subSubCategory":
        break;
    }
  };

  const renderHeader = () => {
    return (
      <h2 className="mb-5 font-bold capitalize text-primary-500">
        <span
          onClick={() => navigateToLevel("category")}
          className="cursor-pointer hover:underline"
        >
          {category?.category}
        </span>
        {subCategory && (
          <>
            {" / "}
            <span
              onClick={() => navigateToLevel("subCategory")}
              className="inline-block cursor-pointer hover:underline"
              style={{ textTransform: "capitalize" }}
            >
              {subCategory.subcategory}
            </span>
          </>
        )}
        {subSubCategory && (
          <>
            {" / "}
            <span
              onClick={() => navigateToLevel("subSubCategory")}
              className="inline-block cursor-pointer capitalize hover:underline"
              style={{ textTransform: "capitalize" }}
            >
              {subSubCategory.innercategory}
            </span>
          </>
        )}
      </h2>
    );
  };

  const renderContent = () => {
    if (subSubCategory !== null) {
      // return <div>Drugs</div>;
      return allProducts?.map((drug) => (
        <li key={drug._id} className="capitalize">
          <button
            onClick={() => setDisplayProducts(true)}
            className="capitalize"
          >
            {drug.name}
          </button>
        </li>
      ));
    } else if (subCategory !== null) {
      //@ts-expect-error: therell be length
      return subSubCategoryData?.data.length > 0 ? (
        subSubCategoryData?.data.map((subSubCat) => (
          <li key={subSubCat._id} className="capitalize">
            <button
              onClick={() => {
                setSubSubCategory(subSubCat);
                fetchProducts({
                  //@ts-expect-error: 'id will be available'
                  category: category?._id,
                  //@ts-expect-error: 'id will be available'
                  subcategory: subCategory?._id,
                  innercategory: subSubCat._id,
                  brand: "",
                  color: "",
                  price: 0,
                  rating: 0,
                });
              }}
              className="capitalize"
            >
              {subSubCat.innercategory}
            </button>
          </li>
        ))
      ) : (
        <div>No Inner category for this subcategory</div>
      );
    } else {
      return subCategoryData?.data.map((subCat) => (
        <li key={subCat.subcategory} className="capitalize">
          <button
            onClick={() => {
              setSubCategory(subCat);
              fetchInnerCategories(
                // @ts-expect-error: 'theres gonna be an id'
                category?._id,
                subCat._id,
              );
            }}
            className="capitalize"
          >
            {subCat.subcategory}
          </button>
        </li>
      ));
    }
  };

  return (
    <main>
      <PageToolBar />

      {!displayProducts ? (
        <div className="flex p-8">
          <aside className="grid gap-y-3 text-sm">
            {/* Categories */}
            <div className="bg-gray-100 p-5">
              <h2 className="mb-3 text-primary-500">CATEGORIES</h2>
              <ul className="grid gap-y-5">
                {cats?.data.map((cat) => (
                  <li key={cat._id}>
                    <button
                      onClick={() => {
                        setCategory(cat);
                        resetSubCategories(cat._id);
                      }}
                      className="capitalize"
                    >
                      {cat.category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="grow border border-gray-300 px-8 py-6">
            {renderHeader()}
            <ul className="grid grid-cols-2 text-gray-500">
              {renderContent()}
            </ul>
          </section>
        </div>
      ) : (
        <CategoryProducts
          setCategory={setCategory}
          resetSubCategories={resetSubCategories}
        />
      )}
    </main>
  );

  function CategoryProducts({
    setCategory,
    resetSubCategories,
  }: {
    setCategory: (para: { _id: string; category: string }) => void;
    resetSubCategories: () => void;
  }) {
    const getFilterColors = () => {
      const colors: string[] = [];
      allProducts?.map((item) =>
        item.attribute.color.map((i) => {
          if (!colors.includes(i.value.toLowerCase()))
            colors.push(i.value.toLowerCase());
        }),
      );

      return colors;
    };
    const getFilterBrands = () => {
      const brands: string[] = [];
      allProducts?.map((item) =>
        item.attribute.brand.map((i) => {
          if (!brands.includes(i.value.toLowerCase()))
            brands.push(i.value.toLowerCase());
        }),
      );

      return brands;
    };

    return (
      <div className="flex p-8">
        <aside className="grid gap-y-3 text-sm">
          {/* Categories */}
          <div className="bg-gray-100 p-5">
            <h2 className="mb-3 text-primary-500">CATEGORIES</h2>
            <ul className="grid gap-y-5">
              {cats?.data.map((cat) => (
                <li key={cat._id}>
                  <button
                    onClick={() => {
                      setCategory(cat);
                      resetSubCategories();
                      setDisplayProducts(false);
                    }}
                    className="capitalize"
                  >
                    {cat.category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div className="bg-gray-100 p-5">
            <h2 className="mb-5">BY BRANDS</h2>

            <div className="mb-6 h-7 border border-[#D1D1D1] bg-white"></div>
            <ul className="grid gap-y-1.5">
              {getFilterBrands().map((name, index) => (
                <li
                  key={index}
                  className="flex items-center gap-x-1.5 capitalize"
                >
                  <input type="checkbox" /> {name}{" "}
                  <span className="text-[#666666]">(2)</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="bg-gray-100 p-5">
            <h2 className="mb-5">BY PRICE</h2>
            <RangeSlider />
          </div>

          {/* Review */}
          {/* <div className="bg-gray-100 p-5">
          <h2 className="mb-5">BY REVIEW</h2>

          <ul className="grid gap-y-1.5">
            {[
              { rate: 5, number: 3 },
              { rate: 2, number: 2 },
            ].map(({ number }, i) => (
              <li key={i} className="flex items-center gap-x-1.5">
                <input type="checkbox" />

                <span className="text-[#666666]">({number})</span>
              </li>
            ))}
          </ul>
        </div> */}

          {/* Color */}
          <div className="bg-gray-100 p-5">
            <h2 className="mb-5">BY COLOR</h2>

            <ul className="flex flex-wrap gap-x-2">
              {getFilterColors().map((product, i) => (
                <li key={i}>
                  <button
                    className={
                      "flex h-8 shrink-0 items-center justify-center rounded border border-[#DEE2E2] bg-white p-2"
                    }
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <section className="grow px-6">
          <h2 className="mb-5 text-2xl font-semibold capitalize">
            {subSubCategory?.innercategory}
          </h2>
          <div className="grid grid-cols-3 gap-5">
            {allProducts?.map((p) => (
              <ProductCard
                key={p._id}
                id={p._id}
                drugName={p.name}
                price={p.price}
                imageUrl={p.coverimage}
                prescription={p.prescription}
                discount={((p.price - p.discount_price) / p.price) * 100}
              />
            ))}
          </div>
        </section>
      </div>
    );
  }
}
