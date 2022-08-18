import Link from 'next/link'
import { useState, useRef } from 'react'
import Button from 'components/general/Button'
import Input from 'components/general/Input'
import SeparateBorder from 'components/general/SeparateBorder'

import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid'

const index = () => {

    const [isVisiblePass, setIsVisiblePass] = useState(true)

    const userRef = useRef()
    
    const ToggleShowPassword = () => {
        setIsVisiblePass(!isVisiblePass)
    }

    const SubmitLogin = (e) => {
        e.preventDefault()
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center m-3">
            <img
                src="/assets/facebook-word.svg"
                alt="facebook"
                className="mt-7 mb-3 w-60"
            />
            <form className="bg-white p-4 w-80 sm:w-96 text-center text-lg shadow-lg rounded-lg" onSubmit={SubmitLogin}>
                {/* TITLE  */}
                <h2 className='mb-3'>Log in to Facebook</h2>

                {/* Email input or number input  */}
                <Input placeholder='Email address or phone number' lg ref={userRef} />

                {/* Password input  */}
                <Input type={isVisiblePass ? 'password' : 'text'} placeholder='Password' lg>
                    <div
                        className='absolute right-2 top-1/2 bg-white p-2 translate-y-[-50%] cursor-pointer' 
                        onClick={ToggleShowPassword}
                    >
                        {isVisiblePass ? <EyeOffIcon className='h-4'/> : <EyeIcon className='h-4'/> }
                    </div>
                </Input>
                
                {/* Login Button */}
                <Button text='Log In' routePath='' className='bg-blue-600 hover:bg-blue-500'lg/>

                {/* forgetten password */}
                <Link href='/login' >
                    <a className='text-sm text-blue-600 hover:underline my-4 block'>Forgotten account?</a>
                </Link>

                {/* separate border  */}
                <SeparateBorder className='cus-border-separate relative w-full border-b border-gray-300 '>
                    <div 
                        className='absolute left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white text-gray-500 text-xs rounded-full p-2'
                    >
                        or
                    </div>
                </SeparateBorder>

                <Link href="/signup">
                    <a>
                        <Button text='Create New Account' className='bg-[#2b9217] w-2/3 text-lg px-1 mt-6' lg/>
                    </a>
                </Link>
                
            </form>
        </div>
    )
}

export default index