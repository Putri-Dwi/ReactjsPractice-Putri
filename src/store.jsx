import { configureStore } from "@reduxjs/toolkit";
import counterWithoutToolkitSlice from './features/counterWithoutToolkitSlice'
import counterWithToolkitSlice from './features/counterWithToolkitSlice'
import usersWithAsyncThunkSlice from './features/usersWithAsyncThunkSlice'

const store = configureStore({
  reducer: {
    counterReducer: counterWithoutToolkitSlice,
    counterToolkitReducer: counterWithToolkitSlice,
    usersReducer: usersWithAsyncThunkSlice
  }
})

export default store