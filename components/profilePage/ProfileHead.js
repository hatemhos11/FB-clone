import Image from 'next/image'
import React from 'react'
import {ChatIcon, UserAddIcon} from '@heroicons/react/solid'
import InputBox from 'components/Feed/InputBox/InputBox'
import Posts from 'components/Feed/Posts/Posts'

const ProfileHead = () => {

    return (
        <div className='relative'>
            {/* Wallpaper */}
            <div className='relative top-0 rounded-b-xl h-[340px] overflow-hidden '>
                <Image 
                    src='/assets/qoba.jpg'
                    layout='fill'
                    objectFit='cover'
                    className='w-full h-full'
                />
            </div>

            <div className='px-8'>
                {/* imageProfile & Name & add Friend Button */}
                <div className="flex w-full">
                    <div className='relative flex-shrink-0 w-40 h-40 rounded-full border-4 border-white -mt-[9.5%] overflow-hidden shadow-lg'>
                        <Image
                            src='/assets/me.jpeg'
                            alt='image'
                            layout='fill'
                            className=''
                        />
                    </div>
                    <div className='flex flex-auto justify-between mt-7'>
                        <h2 className="font-bold text-3xl ml-5">Hatem Elsharkawy</h2>
                        <div className='flex gap-2'>
                            <button className='flex justify-center items-center whitespace-nowrap w-24 h-9 rounded-md bg-gray-300 hover:opacity-90'>
                                <UserAddIcon className='h-6'/>
                                Add
                            </button>
                            <button className='flex justify-center items-center text-sm w-24 h-9 rounded-md bg-blue-600 text-white hover:opacity-90'>
                                <ChatIcon className='h-6'/>
                                Message
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-separate my-5 bg-gray-300 w-full h-[1px]"></div>

                <div className="flex font-medium mb-5">
                    <div className='text-blue-700 border-b-4 border-blue-700 hover:bg-gray-200 py-2 px-4 cursor-pointer'>
                        المنشورات
                    </div>
                    <div className='text-gray-500  hover:bg-gray-200 py-2 px-4 rounded-lg cursor-pointer'>
                        حول
                    </div>
                    <div className=' text-gray-500 hover:bg-gray-200 py-2 px-4 rounded-lg cursor-pointer'>
                        المزيد
                    </div>

                </div>
                <div className='grid grid-cols-2 gap-x-4'>
                    <div>
                        <InputBox />
                        <Posts />
                    </div>
                    <div className='relative top-0 bg-white'>
                        <div className=''>sldkf</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileHead