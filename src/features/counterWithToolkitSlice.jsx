import { createSlice } from "@reduxjs/toolkit";

const counterWithToolkitSlice = createSlice({
  name: 'counterToolkit',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },

  },
})

export const {increment, decrement} = counterWithToolkitSlice.actions
export default counterWithToolkitSlice.reducer