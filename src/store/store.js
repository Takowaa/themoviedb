import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './moviesReducers/slice.js'
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
})