import { configureStore } from "@reduxjs/toolkit";

// api
import { questionTyoeApi } from "./service/questionType";
// slice
import filterSlice from "./slice/filterSlice";

export const store = configureStore({
  reducer: {
    [questionTyoeApi.reducerPath]: questionTyoeApi.reducer,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionTyoeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
