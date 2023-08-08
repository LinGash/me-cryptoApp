import { configureStore } from "@reduxjs/toolkit";
import { cryptoCoinsApi } from "./cryptoCoinsApi";
import { cryptoNewsApi } from "./cryptoNewsApi";

const store = configureStore({
	reducer: {
		[cryptoCoinsApi.reducerPath]: cryptoCoinsApi.reducer,
		[cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
	},
});

export default store;
