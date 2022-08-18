import Image from "next/image"
import { useSession, signOut } from "next-auth/react"
import {
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
  CogIcon,
  LogoutIcon

} from '@heroicons/react/solid'
import NavGroup from "/GroupsComponents/Nav/NavGroup"
import NavItem from "GroupsComponents/Nav/NavItem"
import DropmenuGroup from "GroupsComponents/Dropmenu/DropmenuGroup"
import DropmenuItem from "GroupsComponents/Dropmenu/DropmenuItem"
import { arrowIconData } from "./Data"

const RightHead = () => {
  const { data: session } = useSession()
  return (
    <div className="flex">

      <div
        className="hidden sm:inline-flex items-center gap-2 rounded-full p-2 mr-3 hover:bg-gray-200 transition-colors cursor-pointer"
        onClick={signOut}
      >
        <Image
          src={session.user.image}
          width={35}
          height={35}
          layout="fixed"
          className='rounded-full'
        />
        <h1 className="font-medium">{session.user.name.split(' ')[0]}</h1>
      </div>

      <NavGroup>
        <NavItem Icon={ViewGridIcon} >
          <DropmenuGroup>
            {arrowIconData.map(item => {
              return (
                <DropmenuItem className={item.style}>
                  {item.text}
                </DropmenuItem>
              )})
            }
          </DropmenuGroup>
        </NavItem>

        <NavItem Icon={ChatIcon} >
          
        </NavItem>

        <NavItem Icon={BellIcon}>

        </NavItem>

        <NavItem Icon={ChevronDownIcon}  >
          <DropmenuGroup>
            <DropmenuItem>
              <CogIcon className="icon" />
              profile
            </DropmenuItem>

            <DropmenuItem>
              <CogIcon className="icon" />
              settings
            </DropmenuItem>

            <DropmenuItem>
              <LogoutIcon className="icon" />
              signout
            </DropmenuItem>
          </DropmenuGroup>
        </NavItem>
      </NavGroup>

    </div>
  )
}

export default RightHead