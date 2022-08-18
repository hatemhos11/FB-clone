import Image from "next/image"
import { DotsHorizontalIcon } from "@heroicons/react/solid"
import { TrashIcon, ClipboardCopyIcon } from "@heroicons/react/outline"
import moment from 'moment'
import DropmenuItem from "GroupsComponents/Dropmenu/DropmenuItem"
import DropmenuGroup from "GroupsComponents/Dropmenu/DropmenuGroup"
import NavItem from "GroupsComponents/Nav/NavItem"

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase"
import { useRef } from "react"
import { useRouter } from "next/router"

const PostCreatorInfo = ({username, ImageProfile, timestamp, postID }) => {
    const router = useRouter()
    const postRef = useRef()

    const HandleCopy = () => {
        navigator.clipboard.writeText(`https://localhost:3000/posts/${postID}`)
    }

    const HandleDelete = async () => {
        await deleteDoc(doc(db, "posts", postID));
        postRef.current.parentNode.style.display = 'none'
    }

        
    return (
        <div className="relative flex items-start justify-between mb-3 " ref={postRef}>

            <div className="flex items-center gap-3">
                <Image 
                    src={ImageProfile}
                    height={50}
                    width={50}
                    layout='fixed'
                    className="rounded-full cursor-pointer"
                    onClick={()=> router.replace('/profile/2332423523523215346')}
                />
                <div>
                    <h2 className="font-medium">{username}</h2>
                    <h5 
                        className="text-gray-400"
                    >
                        {moment.utc(timestamp).local().startOf('seconds').fromNow()}
                    </h5>
                </div>
            </div>

            
            <NavItem Icon={DotsHorizontalIcon}>
                <DropmenuGroup  className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <DropmenuItem onClick={HandleCopy}>
                        <ClipboardCopyIcon className="icon"/>
                        <div>Copy Link</div>
                    </DropmenuItem>
                    <DropmenuItem onClick={HandleDelete}>
                        <TrashIcon className="icon"/>
                        <div>Delete</div>
                    </DropmenuItem>
                </DropmenuGroup>
            </NavItem>

            
        </div>
    )
}

export default PostCreatorInfo