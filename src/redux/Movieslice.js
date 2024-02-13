import { createSlice } from "@reduxjs/toolkit";

const MoviSlice = createSlice({
    name:'MoviList',
    initialState:{nowPlaying:null,moviTrailer:null},
    reducers: {
        addNowPlay(state, action){
            state.nowPlaying = action.payload;
        },
        addTrailerVideo(state,action){
            state.moviTrailer = action.payload;
        }
      }
})
export const {addNowPlay, addTrailerVideo}= MoviSlice.actions;
export default MoviSlice.reducer;