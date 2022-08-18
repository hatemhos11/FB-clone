import PostActive from "./PostActive"
import PostContent from "./PostContent"
import PostCreatorInfo from "./PostCreatorInfo"
import { collection, getDocs, orderBy, query, Timestamp } from "firebase/firestore";
import { db, dbPosts } from "../../../firebase";
import { useEffect, useState } from "react";

const Posts = () => {
    const [posts , setPosts] = useState([])

    async function GetPosts() {
        const querySnapshot = await getDocs(query(collection(db, "posts"), orderBy("timestamp", 'desc')))
        setPosts( querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}) ))
    }

    

    useEffect(() => {
        GetPosts()
    }, [])
    
    useEffect(() => {
        console.log(posts)
    }, [posts])



return (
    <div className="max-w-lg mx-auto">
        {posts.map(post => (
            <div key={post.id} className="bg-white mx-auto my-5 py-3 px-5  shadow-border rounded-xl transition-all">
                <PostCreatorInfo username={post.user} ImageProfile={post.imgProfile} postID={post.id} timestamp={post.timestamp} />
                <PostContent PostText={post.postText} postImage={post.imgPost} />
                <PostActive />
            </div>
        ))}
    </div>
)
}

export default Posts