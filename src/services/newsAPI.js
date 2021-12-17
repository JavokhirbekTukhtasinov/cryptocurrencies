// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const newsHeader = {
//   "x-bingapis-sdk": "true",
//   "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
//   "x-rapidapi-key": "1aea29f33bmsh975b8df4d8fda53p112dbejsneaef1d9207ae",
// };

// const baseUrl = "https://bing-news-search1.p.rapidapi.com";

// const createRequest = (url) => ({ url, newsHeader });

// export const newsAPI = createApi({
//   reducerPath: "news-api",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getNews: builder.query({
//       query: ({ count, newsCategory }) =>
//         createRequest(
//           `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
//         ),
//     }),
//   }),
// });

// export const { useGetNewsQuery } = newsAPI;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "1aea29f33bmsh975b8df4d8fda53p112dbejsneaef1d9207ae",
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
