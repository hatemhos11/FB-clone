
const DegitComponent = ({ src , DegitRest }) => {
    
    return (
        <div className="relative min-w-[50%] flex-1 border cursor-pointer">
            <img src={src}  />
            
            {DegitRest ? (
                <div className="overlay grid place-items-center" >
                    <h2 className="font-bold text-gray-500 hover:text-gray-400 transition-colors text-5xl ">More +{DegitRest}</h2>
                </div>
            )
                : 
            (
                <></>
            )
            }
        </div>
    )
}

export default DegitComponent