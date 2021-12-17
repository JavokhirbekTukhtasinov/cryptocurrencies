import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "1aea29f33bmsh975b8df4d8fda53p112dbejsneaef1d9207ae",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoHeaders });

export const cryptoAPI = createApi({
  reducerPath: "crypto-api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCrcy: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
    getCryptoDetails: builder.query({
      query: ({ coinId }) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`coin/${coinId}/history/${timePeriod}`),
    }),
  }),
});
export const {
  useGetCrcyQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoAPI;
