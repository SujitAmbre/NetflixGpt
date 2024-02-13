import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name:"Gpt",
    initialState:{ShowGpt:false},
    reducers:{
        gptShowHid(state,action){
            state.ShowGpt= !state.ShowGpt;
        }
    }
})
export const {gptShowHid} = GptSlice.actions;
export default GptSlice.reducer;
