import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {snippetReducer} from "../features/snippets/SnippetSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    snippets: snippetReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;


