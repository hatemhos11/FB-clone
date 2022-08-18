import { useRouter } from "next/router"
import * as style from './general.module.css'

const Button = ({text, routePath, ...props}) => {
    const router = useRouter()
    
    return (
        <button className={`${style.Button} ${props.className}`}>
            {text}
        </button>
    )
}

export default Button