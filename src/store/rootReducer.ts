import { combineReducers } from "@reduxjs/toolkit";
import slices from "./slices";

const rootReducer = Object.keys(slices).reduce(
  (acc: { [key: string]: any }, el) => {
    const slice = slices[el as keyof typeof slices];
    acc[slice.name] = slice.reducer;

    return acc;
  },
  {}
);

export default combineReducers(rootReducer);
