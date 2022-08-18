import TextContent from './PostContent/TextContent'
import DegitContent from './PostContent/DegitContent'

const PostContent = ({PostText,postImage}) => {
    return (
        <div>
            <TextContent PostText={PostText}/>
            <DegitContent postImage={postImage}/>
        </div>
    )
}

export default PostContent