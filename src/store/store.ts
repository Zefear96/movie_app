import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { userApi } from "./actions/userActions";
import { movieApi } from "./actions/movieActions";

const store = configureStore({
	reducer: {
		[userApi.reducerPath]: userApi.reducer,
		[movieApi.reducerPath]: movieApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(userApi.middleware)
			.concat(movieApi.middleware),
});

setupListeners(store.dispatch);

export default store;
