import { Session } from "next-auth";
import { createClientAxios } from "./axios-client";
import { handleAxiosError } from "./index";
import { productCategoryParams } from "@/hooks/useFetch";
import { SingleProduct } from "@/app/dashboard/pharmarcy/product/[id]/page";
import { OrderList } from "@/app/dashboard/pharmarcy/account/orders";
import { SavedProducts } from "@/app/dashboard/pharmarcy/account/saved-items/page";
import { AddressParams } from "@/app/dashboard/pharmarcy/account/addresses/page";

export interface SavedProdParams {
  data: SavedProducts[];
}
export interface SingProductParams {
  data: SingleProduct;
}
export interface CreateDrugOrderRequestParams {
  userId: string;
  patientName: string;
  patientAdresss: string;
  patientPhoneNumber: string;
  drugName: string;
  drugId: string;
  price: number;
  qty: number;
  session: Session;
}
export interface CreateAddressParams {
  userid: string;
  phone: string;
  email: string;
  firstname: string;
  lastname: string;
  address: string;
  postalcode: string;
  state: string;
  city: string;
  country: string;
  latitiude: string;
  longitude: string;
  addressid?: string;
}
interface DefaultAdressParams {
  data: AddressParams[];
}
export interface SubCategoryParams {
  data: [
    {
      category: string;
      subcategory: string;
    },
  ];
}
export interface SubSubCategoryParams {
  data: [
    {
      category: string;
      subcategory: string;
    },
  ];
}
const onlinePharmacyUrl = "/user/pharmacy";
// endpoints to receive data from the server
const apiEndpoints = {
  productCategory: {
    retrieveBestProduct: onlinePharmacyUrl + "/best/selling/product",
    retrieveNewProduct: onlinePharmacyUrl + "/new/product",
    retrieveSingleProduct: onlinePharmacyUrl + "/retrieve/single/product",
    retrieveAllProduct: onlinePharmacyUrl + "/retrieve/all/product",
    retrieveAllCategory: onlinePharmacyUrl + "/category",
    retrieveSubCategory: onlinePharmacyUrl + "/subcategory",
    retrieveInnerCategory: onlinePharmacyUrl + "/innercategory",
  },
  address: {
    createAddress: onlinePharmacyUrl + "/create/address",
    updateAddress: onlinePharmacyUrl + "/update/address",
    getAddress: onlinePharmacyUrl + "/retrieve/default/address",
    getAllAddresses: onlinePharmacyUrl + "/retrieve/all/address",
    getSingleAddresses: onlinePharmacyUrl + "/retrieve/single/address",
    setDefaultAddress: onlinePharmacyUrl + "/set/default/address",
    deleteAddress: onlinePharmacyUrl + "/default/address",
  },
  orders: {
    getAllOrders: onlinePharmacyUrl + "/retrieve/all/order",
    createOrder: onlinePharmacyUrl + "/create/order",
    getSingleOrder: onlinePharmacyUrl + "/retrieve/single/order",
    useCoupon: "/user/user/ordercoupon",
  },
  savedProduct: {
    getSavedProducts: onlinePharmacyUrl + "/retrieve/save/product",
    save: onlinePharmacyUrl + "/save/product",
  },
};

// post request functions  to retrive data from the server
const onlinePharmacyApi = {
  getAddress: async (
    session: Session,
    userid: string,
  ): Promise<DefaultAdressParams> => {
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + apiEndpoints.address.getAddress,
        {
          userid,
        },
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, "Error getting address");
      throw new Error(errorMessage);
    }
  },
  getallAddress: async (
    session: Session,
    userid: string,
  ): Promise<DefaultAdressParams> => {
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + apiEndpoints.address.getAllAddresses,
        {
          userid,
        },
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, "Error getting address");
      throw new Error(errorMessage);
    }
  },
  createAddress: async (session: Session, userDetails: CreateAddressParams) => {
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + apiEndpoints.address.createAddress,
        {
          ...userDetails,
        },
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(
        error,
        "Error creating new drug order",
      );
      throw new Error(errorMessage);
    }
  },
  updateAddress: async (session: Session, userDetails: CreateAddressParams) => {
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + apiEndpoints.address.updateAddress,
        {
          ...userDetails,
        },
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(
        error,
        "Error creating new drug order",
      );
      throw new Error(errorMessage);
    }
  },
  saveProduct: async (session: Session, userid: string, productid: string) => {
    console.log(session, userid, productid);
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + apiEndpoints.savedProduct.save,
        {
          userid,
          productid,
        },
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(
        error,
        "Error creating saving product",
      );
      throw new Error(errorMessage);
    }
  },

  getAllCategories: async (
    session: Session,
  ): Promise<productCategoryParams> => {
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL +
          apiEndpoints.productCategory.retrieveAllCategory,
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, "Error fetching categories");
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  },

  getSubCategories: async (
    session: Session,
    category: string,
  ): Promise<SubCategoryParams> => {
    console.log(category);
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL +
          apiEndpoints.productCategory.retrieveSubCategory,

        {
          category,
        },
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, "Error fetching categories");
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  },
  getAllOrders: async (
    session: Session,
    userid: string,
  ): Promise<OrderList> => {
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + apiEndpoints.orders.getAllOrders,

        {
          userid,
        },
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, "Error fetching categories");
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  },
  createOrder: async (
    session: Session,
    userid: string,
  ): Promise<SubCategoryParams> => {
    console.log(userid);
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + apiEndpoints.orders.createOrder,

        {
          userid,
        },
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, "Error fetching categories");
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  },
  getSingleOrders: async (
    session: Session,
    userid: string,
  ): Promise<SubCategoryParams> => {
    console.log(userid);
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + apiEndpoints.orders.getSingleOrder,

        {
          userid: "6682b79b25997aa350a38418",
          total_amount: 1500,
          delivery_fee: 500,
          prescription_needed: false,
          couponid: null,
          coupon_used: false,
          trackingid: "6682b79b25997aa350a38418",
          items: [
            {
              quantity: 2,
              price: 500,
              subprice: 1000,
              productid: "6729b4e2f440c1f8565d84a4",
              variant: [
                {
                  variant_type: "size",
                  value: "sm",
                  price: 50,
                },
                {
                  variant_type: "color",
                  value: "red",
                  price: 50,
                },
                {
                  variant_type: "brand",
                  value: "dangote",
                  price: 100,
                },
              ],
            },
            {
              quantity: 2,
              price: 500,
              subprice: 1000,
              productid: "672359317164d55e41f5d9d1",
              variant: [
                {
                  variant_type: "size",
                  value: "sm",
                  price: 50,
                },
                {
                  variant_type: "color",
                  value: "red",
                  price: 50,
                },
                {
                  variant_type: "brand",
                  value: "dangote",
                  price: 100,
                },
              ],
            },
          ],
          addressid: "66e27c16b9f51f1a6670fda4",
          report: [{ name: "polie", upload: "ioieue" }],
          nin: "",
        },
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, "Error fetching categories");
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  },
  useCoupon: async (
    session: Session,
    userid: string,
  ): Promise<SubCategoryParams> => {
    console.log(userid);
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + apiEndpoints.orders.useCoupon,

        {
          userid,
        },
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, "Error fetching categories");
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  },
  getInnerCategories: async (
    session: Session,
    category: string,
    subcategory: string,
  ): Promise<SubSubCategoryParams> => {
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL +
          apiEndpoints.productCategory.retrieveInnerCategory,

        {
          category,
          subcategory,
        },
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, "Error fetching categories");
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  },
  // getAllProducts: async (
  //   session: Session,
  //   params: object,
  // ): Promise<string[]> => {
  //   const axios = createClientAxios({ session: session });
  //   const data = JSON.stringify(params);
  //   try {
  //     const response = await axios.post(
  //       process.env.NEXT_PUBLIC_API_URL +
  //         apiEndpoints.productCategory.retrieveAllProduct,

  //       data,
  //     );
  //     return response.data;
  //   } catch (error) {
  //     const errorMessage = handleAxiosError(error, "Error fetching Products");
  //     console.log(errorMessage);
  //     throw new Error(errorMessage);
  //   }
  // },
  getNewProducts: async (session: Session): Promise<productCategoryParams> => {
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL +
          apiEndpoints.productCategory.retrieveNewProduct,
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, "Error fetching Products");
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  },
  getBestProducts: async (session: Session): Promise<productCategoryParams> => {
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL +
          apiEndpoints.productCategory.retrieveBestProduct,
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, "Error fetching Products");
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  },
  getSingleProduct: async (
    session: Session,

    productid: string | string[],
  ): Promise<SingProductParams> => {
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL +
          apiEndpoints.productCategory.retrieveSingleProduct,

        {
          productid,
        },
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, "Error fetching categories");
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  },
  getSavedProduct: async (session: Session, userid: string) => {
    console.log(userid);
    const axios = createClientAxios({ session: session });

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL +
          apiEndpoints.savedProduct.getSavedProducts,

        {
          userid,
        },
      );
      return response.data;
    } catch (error) {
      const errorMessage = handleAxiosError(error, "Error fetching categories");
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  },
};

export default onlinePharmacyApi;
