import { HomeIcon, FlagIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/solid'
import HeaderIcon from './HeaderIcon'

const CenterHead = () => {
  return (
    <div className='flex justify-center w-full'>
      <div className="flex space-evenly">
        <HeaderIcon active Icon={HomeIcon} />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
      </div>
    </div>
)
}

export default CenterHead