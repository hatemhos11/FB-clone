import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { VideoCameraIcon, CameraIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { dbPosts } from "../../../firebase"
import { addDoc } from 'firebase/firestore'

const InputBox = () => {
    const InputRef = useRef()
    const ImageRef = useRef()

    
    

    const { data: session } = useSession()
    
    const [imageURL, setImageURL] = useState(null)
    
    
    const sendPost = (e) => {
        e.preventDefault()
        
        if (!InputRef.current.value.trim()) return;
        addDoc(dbPosts, {
            postText: InputRef.current.value,
            user: session.user.name,
            email: session.user.email,
            imgProfile: session.user.image,
            imgPost: imageURL,
            timestamp: new Date().getTime()
        })

        InputRef.current.value = '';
        setImageURL(null)
        alert('تم اضافة المنشور بنجاح!')
    }

    const HandleImagePicker = (e) => {
        console.log(e.target.value)
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setImageURL(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImageURL(null)
        ImageRef.current.value = null
    }

    return (
        <div className="bg-white rounded-xl p-3 shadow-border mb-5 max-w-lg mx-auto">
            <form className="flex items-center gap-4" onSubmit={sendPost}>
                <Image
                    src={session.user.image}
                    height={50}
                    width={50}
                    className='rounded-full'
                />
                <input
                    type="text"
                    className="rounded-full bg-gray-200 hover:bg-gray-300 transition-colors p-2 px-4 w-full outline-none cursor-pointer "
                    placeholder={`What's on your mind, ${session.user.name}`}
                    ref={InputRef}
                />
                {imageURL && (
                    <span>
                        <img
                            src={imageURL}
                            className="h-14 hover:opacity-70 cursor-no-drop object-cover"
                            onClick={removeImage}
                        />
                    </span>
                )
                }
            </form>

            <div className="border border-separate m-4"></div>

            <div className="flex items-center mb-1 text-gray-500 ">
                <div className="relative flex flex-col md:flex-row items-center justify-center w-1/3 p-2 cursor-pointer hover:bg-gray-200 transition-colors rounded-md">
                    <VideoCameraIcon color='#C45448' className="h-7" /> <span>Live Video</span>
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-center w-1/3 p-2  cursor-pointer hover:bg-gray-200 transition-colors rounded-md">
                    <CameraIcon color='#78B8A7' className="h-7" /> <span>Photo/Video</span>
                    <input ref={ImageRef} type="file" className="absolute inset-0 opacity-0" onChange={HandleImagePicker} />
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-center w-1/3 p-2  cursor-pointer hover:bg-gray-200 transition-colors rounded-md">
                    <EmojiHappyIcon color='yellow' className="h-7" /> <span>Feeling/Activity</span>
                </div>
            </div>

        </div>
    )
}

export default InputBox