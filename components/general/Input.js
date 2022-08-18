import React, { useState } from "react"
import * as style from './general.module.css'

const Input = ({placeholder ,type ,validateType , children, sm, lg, ...props}, ref) => {
    const [validateMsg , setValidateMsg] = useState('')

    const CheckValidate = (e) => {
        console.log(e.target.value)
        if(validateType === 'name') nameValidation();
        if(validateType === 'email') return;
        if(validateType === 'password') return;
    }

    function nameValidation(){
        setValidateMsg('slkdjf')
    }
    function emailValidation(){

    }
    function passwordValidation(){
    
    }

    return (
        <div className={style.InputParent}>
            <input 
                type={type??'text'}
                placeholder={placeholder}
                className={`${sm && 'p-1 my-1 text-sm'} ${lg && 'p-3 my-2 '} ${style.Input} ${props.className}`}
                ref={ref}
                onBlur={CheckValidate}
                {...props}
            />
            {children}
            {/* <div className="text-red-600">
                <p>{validateMsg}</p>
            </div> */}
        </div>
    )
}
const forward = React.forwardRef(Input)
export default forward

