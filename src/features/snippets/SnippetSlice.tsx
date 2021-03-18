import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../../app/store";
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
    snippetsLoadRequested: (state) => {
      state.loading = true;
    },
    snippetsLoadError: (state) => {
      state.error = true;
    },
    snippetsLoadSuccess: (state, action) => {
      state.loading = false;
      snippetAdapter.upsertMany(state, action.payload)
    }
  },
  extraReducers: {}
});

export const {snippetsLoadRequested, snippetsLoadSuccess, snippetsLoadError} = snippetSlice.actions;

export const loadSnippets = (): AppThunk => (dispatch) => {
  dispatch(snippetsLoadRequested());
  axios.get("http://127.0.0.1:9999/api/snippets/")
    .then(response => {
      console.log(response.data);
      dispatch(snippetsLoadSuccess(response.data))
    })
    .catch(error => {
      console.log(`zavanton - error is caught`);
      dispatch(snippetsLoadError())
    })
};

export const {
  selectAll: selectAllSnippets
} = snippetAdapter.getSelectors((state: RootState) => state.snippets);

export const snippetsLoading = (state: RootState) => state.snippets.loading;
export const snippetsLoadFail = (state: RootState) => state.snippets.error;

export const snippetReducer = snippetSlice.reducer;
