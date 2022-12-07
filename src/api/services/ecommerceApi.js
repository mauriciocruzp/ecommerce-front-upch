import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://127.0.0.1:8080/api';

// Define a service using a base URL and expected endpoints
export const ecommerceApi = createApi({
  reducerPath: 'ecommerceApi',
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/product',
    }),
    getProductById: builder.query({
      query: (id) => `/product/${id}`,
    }),
    getCategories: builder.query({
      query: () => '/category',
    }),
    getProductStatus: builder.query({
      query: () => '/product-status',
    }),
    getOrder: builder.query({
      query: () => '/order',
    }),
    getAddressById: builder.query({
      query: (id) => `/address/${id}`
    }),
    getAddressesByUserId: builder.query({
      query: (id) => `/address?userId=${id}`
    }),
    getOrdersByUserId: builder.query({
      query: (id) => `/order/all/user/`
    }),
    getOrderById: builder.query({
      query: (id) => `/order/${id}`
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useGetProductStatusQuery,
  useGetOrderQuery,
  useGetAddressByIdQuery,
  useGetAddressesByUserIdQuery,
  useGetOrdersByUserIdQuery,
  useGetOrderByIdQuery,
} = ecommerceApi;
