import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Auth, RootState } from "../../../data";

const initialState: Auth = {
  access_token: "",
  refresh_token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        access_token: string;
        refresh_token: string;
      }>
    ) => {
      console.log(action.payload.access_token)
       state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
    logOut: (state) => {
      state.access_token = "";
      state.refresh_token = "";
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.access_token;
