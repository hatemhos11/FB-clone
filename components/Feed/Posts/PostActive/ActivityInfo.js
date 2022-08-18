import Image from "next/image"

const ActivityInfo = ({likes}) => {

    return (
        <div className="my-1 flex items-center justify-between text-gray-500">
            <div className="flex items-center gap-1 text-sm sm:text-md">
                <Image
                    src='/assets/reactsFB/like.svg'
                    width={25}
                    height={25}
                    layout='fixed'
                    className="scale-75 sm:scale-100"
                />
                <span className="cursor-pointer hover:underline">{likes}</span>
            </div>
            <div className="flex gap-4">
                <div className="cursor-pointer hover:underline">0 Comments</div>
                <div className="cursor-pointer hover:underline">0 Share</div>
            </div>
        </div>
    )
}

export default ActivityInfo