import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {AppThunk, RootState} from "../../app/store";
import {categoryService} from "../../api/ApiService";
import {Category} from "./CategoryModels";


const categoryAdapter = createEntityAdapter({
  // selectId: (category) => category.id,
  sortComparer: (first: Category, second: Category) => Number(second.created_at > first.created_at)
});

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
    },
    categoryAddSuccess: (state, action) => {
      categoryAdapter.addOne(state, action.payload);
    },
    categoryUpdateSuccess: (state, action) => {
      categoryAdapter.updateOne(state, action.payload)
    },
  },
  extraReducers: {}
})

export const {
  categoriesLoadRequest, categoriesLoadError, categoriesLoadSuccess,
  categoryAddSuccess, categoryUpdateSuccess
} = categorySlice.actions;

export const loadCategories = (): AppThunk => (dispatch) => {
  dispatch(categoriesLoadRequest())
  return categoryService.getAllCategories()
    .then(data => dispatch(categoriesLoadSuccess(data)))
    .catch(() => dispatch(categoriesLoadError()));
};

export const addCategory = (name: string): AppThunk => dispatch => {
  categoryService.addCategory(name)
    .then(data => dispatch(categoryAddSuccess(data)))
}

export const updateCategory = (id: number, name: string): AppThunk => dispatch => {
  categoryService.updateCategory(id, name)
    .then(data => dispatch(categoryUpdateSuccess(data)))
}

export const {
  selectById: selectCategoryById,
  selectAll: selectAllCategories
} = categoryAdapter.getSelectors((state: RootState) => state.categories);

export const categoryReducer = categorySlice.reducer;
