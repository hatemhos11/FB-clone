import { useState } from "react"
import ActivityInfo from "./PostActive/ActivityInfo"
import ActivityReact from "./PostActive/ActivityReact"

const PostActive = () => {
    const [likes, setLikes] = useState(0)

    
    return (
        <div className="mt-3">
            <ActivityInfo likes={likes}/>
        <div className="border border-separate my-2  w-full"></div>
            <ActivityReact setLikes={setLikes}/>
        </div>
    )
}

export default PostActive