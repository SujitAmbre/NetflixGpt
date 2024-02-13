import { useSelector } from "react-redux";
import MoviHook from "../hooks/useMoviHook";
const MoviBack = ({id})=> {
    MoviHook(id);
    const moviTrailerd = useSelector((store)=>store.moviData.moviTrailer)
    return(
        <>
        <iframe className="w-screen aspect-video" src={`https://www.youtube.com/embed/${moviTrailerd}?autoplay=1&mute=1`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </>
    )
}
export default MoviBack;