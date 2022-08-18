import { UsersIcon, DesktopComputerIcon, CalendarIcon, ClockIcon } from '@heroicons/react/solid'
import { UserGroupIcon, ShoppingBagIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { useSession } from "next-auth/react"
import SidebarRow from "./SidebarRow"
import Image from 'next/image'

function Sidebar() {

  const { data: session } = useSession()

  return (
    <aside
      className='hidden lg:block w-1/3 max-w-[330px] overflow-auto mr-3'
      style={{ Height: 'calc(100vh - 71px)' }}
    >

      {/* IMAGE  */}
      <div
        className="flex items-center gap-4 rounded-md p-2 m-2 my-4 hover:bg-gray-200 transition-colors cursor-pointer"
      >
        <Image
          src={session.user.image}
          width={35}
          height={35}
          layout="fixed"
          className='rounded-full'
        />
        <h1 className="font-medium">{session.user.name}</h1>
      </div>

      {/* SIDEBAR ROWS  */}
      <SidebarRow Icon={UsersIcon} title='Freinds' />
      <SidebarRow Icon={UserGroupIcon} title='Groups' />
      <SidebarRow Icon={ShoppingBagIcon} title='Marketplace' />
      <SidebarRow Icon={DesktopComputerIcon} title='Watch' />
      <SidebarRow Icon={CalendarIcon} title='Events' />
      <SidebarRow Icon={ClockIcon} title='Memories' />
      <SidebarRow Icon={ChevronDownIcon} title='See More' />
    </aside>

  )
}

export default Sidebar