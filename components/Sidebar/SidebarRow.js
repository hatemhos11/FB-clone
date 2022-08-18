import React from 'react'

const SidebarRow = ({Icon, title}) => {
    return (
        <div className='flex items-center gap-4 p-2 mx-2 font-medium rounded-md hover:bg-gray-300 cursor-pointer'>
            <Icon className='h-7 text-blue-600'/>
            <div>{title}</div>
        </div>
    )
}

export default SidebarRow