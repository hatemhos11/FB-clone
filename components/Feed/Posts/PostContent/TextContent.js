import { useEffect, useRef , useState } from "react"

const TextContent = ({PostText}) => {
    // const [text, setText] = useState('')
        
    // const restText = useRef()
    // const moreSpan = useRef()

    // const HandleClick = () => {
    //     restText.current.style.display = 'inline'
    //     moreSpan.current.style.display = 'none'
    // }

    // useEffect(()=>{
    //     setText(PostText)
    // },[])

    return (
        <p dir="auto" className='my-3' >
            {PostText}
        </p>
    )
}

export default TextContent