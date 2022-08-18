import Link from 'next/link'
const HeaderIcon = ({Icon,active}) => {
  return (
    <Link href="/" >
      <a className={active && `ACTIVE-ICON`}>
        {<Icon 
          className="
                    lg:h-12 md:h-14 lg:px-10 sm:px-2 py-2 rounded-sm h-14 px-3
                    hover:text-blue-600 hover:bg-gray-300
                    cursor-pointer transition-colors
                    "
        />}
      </a>
    </Link>
  )
}

export default HeaderIcon