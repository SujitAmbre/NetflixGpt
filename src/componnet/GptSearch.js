import { useDispatch } from "react-redux"
import { gptShowHid } from "../redux/GptSlice";
import GptSearchPage from "./GptSearchPage";
import GptSuggestions from "./GptSuggestions";
import { addLang } from "../redux/Language";
import { SUPPORTED_LANG } from "../utils/constant";
const GptSearch = ()=>{
    const dispatch = useDispatch();
    const handelclickGpt = ()=>{
        dispatch(gptShowHid(false))
    }
    const handleLangChange = (e)=>{
        dispatch(addLang(e.target.value))
    }
    return(
        <>
         <div className="absolute right-[2%]">
            <select name="LanguageSelect" onChange={(e)=>handleLangChange(e)}>
                {
                    SUPPORTED_LANG.map((item)=>{
                        return(
                            <option value={item.identifire}>{item.name}</option>
                        )
                    })
                }
               
                
            </select>
            <button className="btn py-2 px-6 text-white relative z-10 bg-sky-500/100" onClick={handelclickGpt}>Gpt</button>
        </div>
       <>
       <div className="absolute -z-10">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg" />
       </div>
        <GptSearchPage />
        <GptSuggestions />
       </>
        </>
    )
}
export default GptSearch;