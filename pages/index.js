import Head from 'next/head'
import Header from 'components/Header/Header'
import Feed from 'components/Feed/Feed'
import Sidebar from 'components/Sidebar/Sidebar'
import Contacts from 'components/Contacts/Contacts'
import Login from 'components/Login'
import { useSession } from "next-auth/react"


export default function Home() {

  const { data: session } = useSession()


  if(!session) { 
    return <Login/>
  };

  return (
    <div >
      <Head>
        <title>(1) Facebook</title>
        <link rel="icon" href="/assets/facebook_icon.svg"  />
      </Head>

      <Header />
      <main >
        <div className='flex justify-between MAIN_LAYOUT'>

        {/* SIDEBAR */}
        <Sidebar/>

        {/* TODO FEED */}
        <Feed/>

        {/* TODO WIDGETS */}
        <Contacts/>
        </div>
        
      </main>


      
    </div>
  )
}


