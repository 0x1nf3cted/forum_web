import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Auth, RootState } from "../../../data";

const initialState: Auth = {
  user: { username: "pablo" },
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
        refresh_token : string;
        email: string;
      }>
    ) => {
      const { email, access_token, refresh_token } = action.payload;
      state.user = {username: email};
      state.access_token = access_token;
      state.refresh_token = refresh_token;
    },
    logOut: (state) => {
      state.user = {username: ""};
      state.access_token = "";
      state.refresh_token = "";
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.access_token;
