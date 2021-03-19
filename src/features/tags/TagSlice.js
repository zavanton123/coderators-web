import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {tagService} from "../../api/ApiService";

const tagAdapter = createEntityAdapter();

const initialState = tagAdapter.getInitialState({
  loading: false,
  error: false
})

export const loadTags = createAsyncThunk('tags/load', async () => {
  let tags = await tagService.getAllTags();
  console.log(`zavanton - tas`);
  console.log(tags);
  return tags;
})

const tagSlice = createSlice({
  name: 'tags',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadTags.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      tagAdapter.upsertMany(state, action);
    });
    builder.addCase(loadTags.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(loadTags.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  }


  // extraReducers: {
  //   [loadTags.fulfilled]: (state, action) => {
  //     tagAdapter.upsertMany(state, action);
  //   }
  // }

  // extraReducers: builder => {
  //   builder.addCase([loadTags.pending], (state, action) => {
  //     tagAdapter.upsertMany(state, action.payload);
  //   });
  // }
})

export const {
  selectAll: selectAllTags
} = tagAdapter.getSelectors((state) => state.tags);


export const tagReducer = tagSlice.reducer;
