import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://store-api.softclub.tj/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (body) => ({
        url: "Account/login",
        method: "POST",
        body,
      }),
    }),
    getProducts: builder.query({
      query: () => "Product/get-products",
    }),
    getColors: builder.query({
      query: () => "Color/get-colors",
    }),
    getCategories: builder.query({
      query: () => "Category/get-categories",
    }),
    getSubcategories: builder.query({
      query: () => "SubCategory/get-sub-category",
    }),
    getBrands: builder.query({
      query: () => "Brand/get-brands",
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: "Product/add-product",
        method: "POST",
        body: product,
      }),
    }),
  }),
});

export const {
  useLoginAdminMutation,
  useGetProductsQuery,
  useGetColorsQuery,
  useGetCategoriesQuery,
  useGetSubcategoriesQuery,
  useGetBrandsQuery,
  useAddProductMutation,
} = userApi;
