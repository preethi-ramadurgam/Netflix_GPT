import { createSlice } from "@reduxjs/toolkit";
const MovieSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:function(state,action){
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:function(state,action){
            state.popularMovies=action.payload;
        },
        addTrailerVideo:function(state,action){
            state.trailerVideo=action.payload;
        }
    }
})
export const {addNowPlayingMovies, addTrailerVideo,addPopularMovies} = MovieSlice.actions;
export default MovieSlice.reducer;