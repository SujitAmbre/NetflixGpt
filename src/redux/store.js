import { configureStore } from "@reduxjs/toolkit";
import Moviereducer from "./Movieslice";
import GptSlice from "./GptSlice";
import Language from "./Language";
const Store = configureStore({
    reducer:{
    "moviData":Moviereducer,
    "showGtp": GptSlice,
    "currentLang":Language,
    }   

})
export default Store;