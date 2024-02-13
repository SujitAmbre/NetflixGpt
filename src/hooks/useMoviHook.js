import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux/Movieslice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const MoviHook = (videoId)=> {
    const dispatch = useDispatch();
    const fetchData = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`,API_OPTION);
        const apiData = await data.json();
        console.log(apiData.results, "apidata")
       const filterListMovi = apiData.results.filter((video) => {return video.type === "Trailer"})
        dispatch(addTrailerVideo(filterListMovi[0].key))

    }
    useEffect(()=>{
        fetchData();

    },)
}
export default MoviHook;