import MoviCard from "./MoviCard";

const MoviList = ({ title, moviVideoData }) => {
 //   console.log(moviVideoData);
    return (
        <>
            <h2>{title}</h2>
            <div className="flex overflow-x-scroll">
                <div className="flex flex-wrap justify-center gap-16 w-screen">
            {
                moviVideoData?.map((item) => {
                    //console.log(item);
                    return (
                     
                        <MoviCard key={item.id} title={item.original_title} movipicture={item.poster_path} />
                    
                    )
                })
            }
            </div>
                </div>
        </>
    )
}
export default MoviList;