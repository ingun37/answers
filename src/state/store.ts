import { configureStore } from "@reduxjs/toolkit";
import { sha1Slice } from "./slice";
// ...

export const store = configureStore({
  reducer: {
    sha1: sha1Slice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
