import React, { useState } from 'react'

const NavItem = ({Icon, children}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <Icon onClick={()=>setIsOpen(!isOpen)} className='icon relative'/>
            {isOpen && children}
        </div>
    )
}

export default NavItem