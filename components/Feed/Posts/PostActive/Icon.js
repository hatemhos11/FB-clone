
const Icon = ({title, pos, className, ...props}) => {
    return (
        <div
            className={`w-full flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer scale-100 md:scale-110 overflow-hidden px-0 sm:px-4 py-2 ${className}`} 
            {...props}
        >
            <div 
                className='text-gray-500 w-5 h-5 mx-1 ' 
                style={{ backgroundImage: 'url(./assets/Icons.png)', backgroundPosition: `0px ${pos}` }}
            ></div>
            <span className="font-medium text-lg leading-[1.5]">{title}</span>
        </div>

    )
}

export default Icon