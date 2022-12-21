import React, { FC } from 'react'

interface props{
    children:string
    className:string
    onClick?:React.MouseEventHandler
    
    
}
const Button: FC<props> = ({children, className, ...rest })=> {
    return(
        <div>
            <button {...rest} className={' border border-black bg-red-500 text-white px-2 py-1 rounded-md mt-2 ' + className }>{children}</button>
        </div>
    )

}
export default Button;