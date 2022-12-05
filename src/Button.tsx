import React, { FC } from 'react'

interface props{
    children:string
    
}
const Button: FC<props> = ({children})=> {
    return(
        <div>
            <button className='border border-black bg-red-500 text-white px-2 py-1 rounded-md mt-2'>{children}</button>
        </div>
    )

}
export default Button;