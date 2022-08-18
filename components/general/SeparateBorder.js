const SeparateBorder = ({className,children, ...props}) => {
    return (
        <div
            className={`w-full border-b border-gray-300 ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

export default SeparateBorder