import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type TUser = {
  userId: string
  role: string
  email:string
  iat: number
  exp: number
}

type TAuthState = {
  user: null | TUser;
  token: null | string
}

const initialState: TAuthState = {
  user: null,
  token: null
}

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload
      state.user = user;
      state.token = token
    },

    logout: (state) => {
      state.user = null;
      state.token = null
    }
  }
})

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer

export const currentUser = (state: RootState) => state.auth.user
export const token = (state: RootState) => state.auth.token
export const selectUserRole = (state: RootState) => state.auth.user?.role;