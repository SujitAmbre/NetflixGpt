import { useSelector } from "react-redux"
import lang from "../utils/LanguageConstant";
import { useRef } from "react";
import { openai } from "../utils/openAi";
const GptSearchPage = ()=> {
    const searchGptText = useRef(null);
    const currentLang = useSelector((store)=>store?.currentLang.Lang);
   // console.log(currentLang)

    
    const handleclick =async ()=>{
        //console.log(searchGptText.current.value);
        // const chatCompletion = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: searchGptText.current.value }],
        //     model: 'gpt-3.5-turbo',
        //   });
         
    }
    return(
        <>
        <div className="flex items-center justify-center h-screen">
        <form className="max-w-sm mx-auto" onSubmit={(e)=>e.preventDefault()}>
  
  <div className="flex" style={{width:'300px'}}>
    
    <input ref={searchGptText} type="text" id="website-admin" className="rounded-none rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={ lang[currentLang].GptPlaceholder} />
   
    <button onClick={handleclick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {
            lang[currentLang].search
        }
</button>
   
  </div>
</form>
</div>
        </>
    )
}
export default GptSearchPage