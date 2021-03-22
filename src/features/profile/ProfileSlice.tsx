import {createSlice} from "@reduxjs/toolkit";
import {AppThunk} from "../../app/store";
import {profileService} from "../../api/ApiService";

const initialState = {
  email: null,
  id: -1,
  username: null
}

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    fetchProfileSuccess: (state, action) => {
      const {email, id, username} = action.payload;
      state.email = email;
      state.id = id;
      state.username = username;
    },
    clearProfile: (state) => {
      state.email = null;
      state.id = -1;
      state.username = null;
    }
  },
  extraReducers: {}
});

export const {fetchProfileSuccess, clearProfile} = profileSlice.actions;

export const fetchProfile = (): AppThunk => dispatch => {
  profileService.fetchInfo()
    .then(data => dispatch(fetchProfileSuccess(data)))
    .catch(error => console.log(`zavanton - error: ${error}`));
}

export const profileReducer = profileSlice.reducer;
