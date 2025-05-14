import { configureStore } from "@reduxjs/toolkit";
import businessReducer from "./slices/businessSlice";
import articleReducer from "./slices/articleSlice";
import rxDBReducer from "./slices/dbSlice";

export const store = configureStore({
  reducer: {
    business: businessReducer,
    article: articleReducer,
    rxDB: rxDBReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
