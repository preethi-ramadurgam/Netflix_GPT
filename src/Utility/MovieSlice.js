import { createSlice } from "@reduxjs/toolkit";
const MovieSlice=createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:function(state,action){
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:function(state,action){
            state.trailerVideo=action.payload;
        }
    }
})
export const {addNowPlayingMovies, addTrailerVideo} = MovieSlice.actions;
export default MovieSlice.reducer;