import { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlay } from "../redux/Movieslice";
import { Link, useNavigate } from "react-router-dom";
import MoviBackground from "./MoviBackground";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
const Movi = () => {
    const dispatch = useDispatch();
    const statusGpt = useSelector((store)=> store.showGtp.ShowGpt);
   
    const getMovi = async() =>{
        const  data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION);
        const json = await data.json();
       const finalResult = json.results.filter((movi)=>{
            return movi.vote_count >= 1200;
        })
        dispatch(addNowPlay(finalResult));
    }
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(()=>{
        if(token ===null) {
            navigate('/');

          }
        getMovi();
    }, [])
  
    
   
return(
    <>
       {
        statusGpt ? ( <GptSearch />) :
        (
            <>
            <MoviBackground />
            <SecondaryContainer />
            </>
        )
      
        }
    </>
)
}
export default Movi;