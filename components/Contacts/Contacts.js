import React from 'react'
import { VideoCameraIcon, DotsHorizontalIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import ContactIcon from './ContactIcon'

const Contacts = () => {
    return (
        <div className='hidden md:block w-1/3 max-w-[330px] lg:w-1/4 opacity-70 ml-10 my-4'>

            <div className='CONTACT_HEADER flex items-center justify-between'>
                <h2 className='font-bold text-xl'>Contacts</h2>
                <div className='icons flex items-center'>
                    <ContactIcon Icon={VideoCameraIcon}/>
                    <ContactIcon Icon={SearchIcon}/>
                    <ContactIcon Icon={DotsHorizontalIcon}/>                  
                </div>
            </div>

            <div className='CONTACT_BODY '>
                
            </div>

        </div>
    )
}

export default Contacts