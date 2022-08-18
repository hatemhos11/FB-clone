import { useSession, signIn } from "next-auth/react"
import Image from 'next/image'

const Login = () => {
  const { data: session } = useSession()

  return (
    <div className='flex items-center gap-4 justify-center flex-col h-screen'>
      <Image
        src='/assets/facebook_icon.svg'
        width={350}
        height={350}
        layout='fixed'
        className="mb-3"
      />

      <p>Not signed in</p>
      <button
        onClick={() => signIn()}
        className='p-4 m-4 rounded-full text-4xl bg-blue-800 text-white w-96 hover:opacity-90 transition-opacity'
      >
        Sign in
      </button>
    </div>
  )
}

export default Login