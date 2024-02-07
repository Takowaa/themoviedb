import { createSlice } from '@reduxjs/toolkit';
import {getActors, getMovies, getOneMovies} from "./action.js";

const initialState = {
  movies: {
    total: 0,
    rows:[],
  },
  movieDetails: {
    loading: "idle",
    data: null,
    error: null,
  },
  actors: null,
}

export const counterSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.fulfilled, (state, action) => {
      state.movies.total = action.payload.total_results;
      state.movies.rows = action.payload.results
    })
      .addCase(getOneMovies.pending,(state) =>{
        state.movieDetails.loading = "pending"
    })
      .addCase(getOneMovies.fulfilled,(state,action) =>{
        state.movieDetails.loading = 'succeeded'
        state.movieDetails.data = action.payload
      })
      .addCase(getOneMovies.rejected,(state,action) =>{
        state.movieDetails.loading = "failed"
        state.movieDetails.error = action.payload.status_message
      })
      .addCase( getActors.fulfilled, (state,action ) =>{
        state.actors = action.payload.cast
      })
  },
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
