import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";

export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
  });
  return store;
};

export type MakeStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<MakeStore["getState"]>;
export type AppDispatch = MakeStore["dispatch"];

export const wrapper = createWrapper<MakeStore>(makeStore);
