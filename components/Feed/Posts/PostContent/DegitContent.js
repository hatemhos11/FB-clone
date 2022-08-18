import Image from "next/image"
import DegitComponent from "./DegitComponent"


const DegitContent = ({postImage}) => {

    return (
    <>
        {postImage && <div className="flex flex-wrap select-none">
            <DegitComponent key={Math.random()} src={postImage} />

            {/* {[postImage].slice(0,4).map((IMG, index) => {
                // this is Last Photo in post ( add overlay and More+ here )
                if(index === 3 ) {
                    return <DegitComponent key={Math.random()} src={IMG} DegitRest={[postImage].length - 4 > 0 ? images.length - 4 : 0}/>
                }

                return (
                    <DegitComponent key={Math.random()} src={IMG} />
                )
            })} */}
        </div>
        }
    </>
    )
}

export default DegitContent