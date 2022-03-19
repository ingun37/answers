import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface Sha1State {
  sha1: string;
}

// Define the initial state using that type
const initialState: Sha1State = {
  sha1: "",
};

export const sha1Slice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSha1: (state, action: PayloadAction<string>) => {
      state.sha1 = action.payload;
    },
  },
});
