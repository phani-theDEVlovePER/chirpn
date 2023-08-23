import React from 'react'
import '../myStyles.css'

const Btn = ({data, bgcolor}) => {
    return (
        <button className='myButton h-[2rem] w-[8rem] lg:h-[3rem] lg:w-[10rem] text-gray-300 font-[700] rounded-sm mt-4 uppercase text-[12px]' style={{backgroundColor: `${bgcolor}`}}>
            {data}
        </button>
    )
}

export default Btn