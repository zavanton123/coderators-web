import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../../app/store";
import {snippetService} from "../../api/ApiService";


// entity adapter is used for normalizing data
const snippetAdapter = createEntityAdapter();

const initialState = snippetAdapter.getInitialState({
  currentSnippet: null,
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
    },
    snippetLoadRequested: (state) => {
      state.loading = true;
      state.error = false;
      state.currentSnippet = null;
    },
    snippetLoadError: (state) => {
      state.loading = false;
      state.error = true;
      state.currentSnippet = null;
    },
    snippetLoadSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      state.currentSnippet = action.payload;
    },
  },
  extraReducers: {}
});

export const {
  snippetsLoadRequested, snippetsLoadSuccess, snippetsLoadError,
  snippetLoadRequested, snippetLoadError, snippetLoadSuccess
} = snippetSlice.actions;

export const loadSnippets = (): AppThunk => (dispatch) => {
  dispatch(snippetsLoadRequested());
  snippetService.getAllSnippets()
    .then(data => dispatch(snippetsLoadSuccess(data)))
    .catch(() => dispatch(snippetsLoadError()))
};

export const loadSnippetById = (id: number): AppThunk => (dispatch) => {
  dispatch(snippetLoadRequested());
  snippetService.getSnippetById(id)
    .then(data => dispatch(snippetLoadSuccess(data)))
    .catch(() => dispatch(snippetLoadError()));
}

export const {
  selectAll: selectAllSnippets
} = snippetAdapter.getSelectors((state: RootState) => state.snippets);

export const snippetsLoading = (state: RootState) => state.snippets.loading;
export const snippetsLoadFail = (state: RootState) => state.snippets.error;

export const snippetReducer = snippetSlice.reducer;
