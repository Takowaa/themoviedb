import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosApi} from "../../services/request.js";


export const getMovies = createAsyncThunk("moviesReducers/getMovies", async ({page,sortBy}) =>{
  const {data} = await axiosApi(`3/discover/movie?page=${page}&sort_by=${sortBy}`)
  return data
})

export const getOneMovies = createAsyncThunk("moviesReducers/getOneMovies", async (id,{rejectWithValue}) =>{
 try {
   const {data} = await axiosApi(`3/movie/${id}`)
   return data
 }catch (error){
   return rejectWithValue(error.response.data)
 }

})

export const getActors = createAsyncThunk('movieReducerGetActors',async (id) =>{
  const {data} = await axiosApi(`3/movie/${id}/credits`)
  return data
})

