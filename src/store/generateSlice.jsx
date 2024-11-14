import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "",
  prmpt: "",
};

export const generateSlice = createSlice({
  name: "generate",
  initialState,
  reducers: {
    setPrmpt: (state, action) => {
      const { image, prmpt } = action.payload;

      (state.image = image), (state.prmpt = prmpt);
    },
  },
});

export const { setPrmpt } = generateSlice.actions;
export default generateSlice.reducer;
