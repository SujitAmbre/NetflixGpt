import { Link } from "react-router-dom";
import { MOVI_IMG_URL } from "../utils/constant";

const MoviCard = ({title, movipicture}) => {
    return (
        <>
            <div class="max-w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <img class="rounded-t-lg" src={`${MOVI_IMG_URL}/${movipicture}`} alt="" />

                <div class="p-5">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                   
                </div>
            </div>
        </>
    )
}
export default MoviCard;