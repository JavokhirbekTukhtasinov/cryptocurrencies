import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import thunk from "redux-thunk";
import { cryptoAPI } from "../services/cryptoAPI";
import { cryptoNewsApi } from "../services/newsAPI";
const store = configureStore({
  reducer: {
    [cryptoAPI.reducerPath]: cryptoAPI.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
setupListeners(store.dispatch);
