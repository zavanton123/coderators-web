import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../../app/store";
import {categoryService} from "../../api/ApiService";


const categoryAdapter = createEntityAdapter();

const initialState = categoryAdapter.getInitialState({
  loading: false,
  error: false
});


const categorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    categoriesLoadRequest: (state) => {
      state.loading = true;
      state.error = false;
    },
    categoriesLoadError: (state) => {
      state.loading = false;
      state.error = true
    },
    categoriesLoadSuccess: (state, action) => {
      state.loading = false;
      state.error = false;
      categoryAdapter.upsertMany(state, action)
    }
  },
  extraReducers: {}
})

export const {categoriesLoadRequest, categoriesLoadError, categoriesLoadSuccess} = categorySlice.actions;

export const loadCategories = (): AppThunk => (dispatch) => {
  dispatch(categoriesLoadRequest())
  return categoryService.getAllCategories()
    .then(data => dispatch(categoriesLoadSuccess(data)))
    .catch(() => dispatch(categoriesLoadError()));
};

export const {
  selectAll: selectAllCategories
} = categoryAdapter.getSelectors((state: RootState) => state.categories);

export const categoryReducer = categorySlice.reducer;
