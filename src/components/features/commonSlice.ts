import { createSlice } from "@reduxjs/toolkit";
 
 
const commonSlice = createSlice({
  name: "commonslice",
  initialState: {isOpen: false},
  reducers: {
    toggleHamburger: (state: any) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleHamburger } = commonSlice.actions;

export default commonSlice.reducer;

export const isOpen = (state: {isOpen: boolean}) => state.isOpen;
