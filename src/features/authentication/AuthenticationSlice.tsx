import {createSlice} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../../app/store";
import {LoginRequestParams} from "./AuthModels";
import {authService} from "../../api/ApiService";

const initialState = {
  loading: false,
  error: false,
  accessToken: null,
  refreshToken: null
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialState,
  reducers: {
    loginUserRequested: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginUserError: (state) => {
      state.loading = false;
      state.error = true;
    },
    loginUserSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.accessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
    },
    logoutUserSuccess: (state) => {
      state.loading = false;
      state.error = false;
      state.accessToken = null;
      state.refreshToken = null;
    }
  },
  extraReducers: {}
});

export const loginUser = (loginParams: LoginRequestParams): AppThunk => (dispatch) => {
  dispatch(loginUserRequested())
  authService.userLogin(loginParams)
    .then(data => {
      console.log(`zavanton - login user data`);
      console.log(data);
      dispatch(loginUserSuccess(data));
    })
    .catch(() => dispatch(loginUserError()));
};

export const selectAccessToken = (state: RootState) => state.authentication.accessToken;
export const selectRefreshToken = (state: RootState) => state.authentication.refreshToken;

export const {loginUserRequested, loginUserError, loginUserSuccess, logoutUserSuccess} = authSlice.actions;

export const authReducer = authSlice.reducer;
