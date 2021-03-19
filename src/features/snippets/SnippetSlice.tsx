import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../../app/store";
import {snippetService} from "../../api/ApiService";

// entity adapter is used for normalizing data
const snippetAdapter = createEntityAdapter();

const initialState = snippetAdapter.getInitialState({
  loading: false,
  error: false
});

export const snippetSlice = createSlice({
  name: 'snippets',
  initialState: initialState,
  reducers: {
    snippetsLoadRequested: (state) => {
      state.loading = true;
      state.error = false;
    },
    snippetsLoadError: (state) => {
      state.loading = false;
      state.error = true;
    },
    snippetsLoadSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      snippetAdapter.upsertMany(state, action)
    }
  },
  extraReducers: {}
});

export const {snippetsLoadRequested, snippetsLoadSuccess, snippetsLoadError} = snippetSlice.actions;

export const loadSnippets = (): AppThunk => (dispatch) => {
  dispatch(snippetsLoadRequested());
  snippetService.getAllSnippets()
    .then(response => {
      dispatch(snippetsLoadSuccess(response.data))
    })
    .catch(error => {
      dispatch(snippetsLoadError())
    })
};

export const {
  selectAll: selectAllSnippets
} = snippetAdapter.getSelectors((state: RootState) => state.snippets);

export const snippetsLoading = (state: RootState) => state.snippets.loading;
export const snippetsLoadFail = (state: RootState) => state.snippets.error;

export const snippetReducer = snippetSlice.reducer;
