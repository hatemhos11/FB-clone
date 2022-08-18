import Image from 'next/future/image'

const Stories = () => {
    const storiesData = [
        {
            username: 'Ilon Mask',
            ProfileImage: '/assets/Stories/ilon-mask.jpg',
            storyImage: '/assets/Stories/ilon-mask.jpg'
        },
        {
            username: 'Bill Gates',
            ProfileImage: '/assets/Stories/mark.jpg',
            storyImage: '/assets/Stories/mark.jpg'
        },
        {
            username: 'Ilon Mask',
            ProfileImage: '/assets/Stories/ilon-mask.jpg',
            storyImage: '/assets/Stories/ilon-mask.jpg'
        },
        {
            username: 'Bill Gates',
            ProfileImage: '/assets/Stories/bill-gates.jpg',
            storyImage: '/assets/Stories/bill-ates.jpg'
        },
        {
            username: 'Steve Jobs',
            ProfileImage: '/assets/Stories/steve-jobs.jpg',
            storyImage: '/assets/Stories/steve-jobs.jpg'
        },

    ]


    return (
        <div className="flex gap-3 justify-center select-none mb-5">
            
            {storiesData.map(x => {
                return (
                    <div className=" relative cursor-pointer overvlow-none " key={Math.random()}>
                        <Image
                            src={x.ProfileImage}
                            priority
                            height={200}
                            width={110}
                            className='h-28 w-28 md:h-52 rounded-full md:rounded-xl transition-all object-cover overflow-hidden '
                        />
                        <div className="absolute inset-0 z-10 OVERLAY bg-black opacity-0 hover:opacity-10 rounded-full md:rounded-xl  bottom-1 transition-opacity"></div>
                        <div className="absolute bottom-3 ml-3 text-white font-medium hidden md:block">{x.username}</div>
                        <div className="absolute top-3 left-3 h-12 border-4 border-blue-600 rounded-full hidden md:block">
                            <Image 
                                src={x.ProfileImage}
                                height={40}
                                width={40}
                                className='rounded-full w-10 h-10 object-cover' 
                            />

                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Stories