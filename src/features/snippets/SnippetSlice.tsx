import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {AppThunk} from "../../app/store";
import axios from "axios";

const snippetAdapter = createEntityAdapter();
const initialState = snippetAdapter.getInitialState({
  loading: false,
  error: false
});

export const snippetSlice = createSlice({
  name: 'snippet',
  initialState: initialState,
  reducers: {
    snippetsLoadRequested: (state, action) => {
      state.loading = true;
    },
    snippetsLoadError: (state, action) => {
      state.error = true;
    },
    snippetsLoadSuccess: (state, action) => {
      state.loading = false;
      snippetAdapter.upsertMany(state, action.payload)
    }
  },
  extraReducers: {}
});

export const loadSnippets = (): AppThunk => dispatch => {
  axios.get("http://127.0.0.1:9999/api/snippets/")
    .then(response => {
      console.log(`zavanton - data`);
      console.log(response.data);
    })
};

export const snippetReducer = snippetSlice.reducer;
