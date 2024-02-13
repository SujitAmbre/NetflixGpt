import { useSelector } from "react-redux";
import MoviList from "./MoviList";

const SecondaryContainer = ()=>{
    const moviList = useSelector((store)=>store.moviData.nowPlaying);
    //console.log(moviList)
    return(
        <>
            <MoviList title="Now Playing" moviVideoData = {moviList} />
        </>
    )
}
export default SecondaryContainer;