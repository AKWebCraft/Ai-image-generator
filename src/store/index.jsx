import { configureStore } from "@reduxjs/toolkit";
import generate from "../store/generateSlice";

const store = configureStore({
  reducer: { generate },
});

export default store;
