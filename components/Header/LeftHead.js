import { useRef } from "react"

import Image from "next/image"
import { SearchIcon } from '@heroicons/react/solid'
import Link from "next/link"

const LeftHead = () => {
  const searchInputRef = useRef()
  const searchIconRef = useRef()

  return (
    <div className="hidden sm:flex items-center gap-4 ">
      <Link href='/'>
        <a>
          <Image
            src="/assets/facebook_icon.svg"
            width={40}
            height={40}
            layout='fixed'
          />
        </a>
      </Link>

      <div className="flex items-center bg-gray-200 rounded-full p-2 overflow-hidden" onClick={()=>{searchInputRef.current.focus(); }}>
        <SearchIcon className="h-5 ml-1 transition-transform" ref={searchIconRef}/>
        <input 
            type="text" 
            placeholder="Search Facebook" 
            ref={searchInputRef} 
            className="bg-transparent ml-0 md:ml-3 focus:ml-3 outline-none transition-transform placeholder:text-transparent md:placeholder:text-gray-400 w-1 md:w-40 focus:w-40 focus:translate-x-[-30px] focus:placeholder:text-gray-300" 
            onFocus={()=> {searchIconRef.current.style.transform = "translateX(-30px)"}}
            onBlur={()=>  {searchIconRef.current.style.transform = "translateX(0)"}}
        />
      </div>

    </div>  
  )
}

export default LeftHead