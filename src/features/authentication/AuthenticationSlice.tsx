import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

const initialState = {
  accessToken: null,
  refreshToken: null
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.accessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
    },
    logoutUser: (state, action) => {
      state.accessToken = null;
      state.refreshToken = null;
    }
  },
  extraReducers: {}
});

export const selectAccessToken = (state: RootState) => state.authentication.accessToken;
export const selectRefreshToken = (state: RootState) => state.authentication.refreshToken;

export const {loginUser, logoutUser} = authSlice.actions;

export const authReducer = authSlice.reducer;
