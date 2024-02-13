import { useDispatch } from "react-redux"
import { gptShowHid } from "../redux/GptSlice";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const MoviTitle = ({original_title, overview})=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies(['name']);
    const handelclickGpt = ()=>{
        dispatch(gptShowHid(true))
    }
    const handelSignOut =()=> {
        localStorage.removeItem("token");
        navigate('/');
    }
    return(
        <>
        <div className="absolute right-[2%]">
            <button className="btn py-2 px-6 text-white relative z-10 bg-sky-500/100" onClick={handelclickGpt}>Gpt</button>
        </div>
        <div className="absolute right-[8%]">
            <button className="btn py-2 px-6 text-white relative z-10 bg-sky-500/100" onClick={handelSignOut}>Signout</button>
        </div>
        <div className="w-screen aspect-video absolute  bg-opacity-50 bg-gradient-to-r from-black pt-[25%] px-12">
            <h2 className="text-6xl font-bold text-white">{original_title}</h2>
            <p className="w-80 py-6 text-lg w-1/4 text-white">{overview}</p>
        </div>
        </>
    )
}
export default MoviTitle;