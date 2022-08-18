import Icon from "./Icon"
import { useState } from "react"

const ActivityReact = ({setLikes}) => {
    
    const [isLike, setIsLike] = useState(false)

    const HandleLike = () =>{
        if(!isLike){
            setLikes(prev => prev + 1)
        }else{
            setLikes(prev => prev - 1)
        }
        setIsLike(!isLike)
    }

    return (
        <div className="flex items-center justify-between">
            {/* Like  */}
            <Icon 
                title='Like' 
                pos={isLike ? '-302px' : '-321px'} 
                style={{filter: isLike && 'invert(39%) sepia(57%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(200%) saturate(147.75%) hue-rotate(202deg) brightness(97%) contrast(96%)'}} 
                className={isLike ? 'bg-transparent hover:bg-transparent' : ''}
                onClick={HandleLike}
            />
            {/* Comment  */}
            <Icon 
                title='Comment' 
                pos='-283px' 
            />
            {/* Share  */}
            <Icon 
                title='Share' 
                pos='-340px' 
            />
        </div>
    )
}

export default ActivityReact