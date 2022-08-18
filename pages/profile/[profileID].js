import React from 'react'
import Header from 'components/Header/Header'
import { useSession } from "next-auth/react"
import Login from 'components/Login'
import ProfileHead from 'components/profilePage/ProfileHead'

const profileID = () => {
    const { data: session } = useSession()

    if (!session) {
        return <Login />
    };

    return (
    <>
        <Header />
        <div className='max-w-[940px] min-h-screen mx-auto'>
            <ProfileHead />
        </div>
    </>
    )
}

export default profileID