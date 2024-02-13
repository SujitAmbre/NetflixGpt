import { useEffect } from "react";
import { useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";
import MoviBack from "./MoviBack";
import MoviTitle from "./MoviTitle";
const MoviBackground = ()=> {
    const moviApiData = useSelector((store) => store?.moviData?.nowPlaying);
    if(!moviApiData) return;
    
   const {id, original_title, overview} =moviApiData[0];

    return(
        <>  
            <MoviTitle original_title={original_title} overview={overview} />
            <MoviBack id={id} />
        </>
    )
}
export default MoviBackground;