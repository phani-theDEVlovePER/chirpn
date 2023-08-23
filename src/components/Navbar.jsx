import React, { useState } from 'react'
import { logo, menu } from '../assets'
import '../myStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    console.log(nav)

    return (
        <>
            {/* for mobile device */}
            {/* start */}
            <div className='sm:hidden h-[4rem] z-20'>
                <div className='min-w-full h-[4rem] flex items-center justify-between pl-4 pr-4'>
                    <a href='https://www.chirpn.com'>
                        <img src={logo} alt='CHIRPN' className='w-[10rem] cursor-pointer' />
                    </a>
                    <img src={menu} alt='menu' className='w-[2rem] cursor-pointer'
                        onClick={() => setNav(!nav)}
                    />
                </div>

                <ul className={nav ? 'flex flex-col justify-center items-end gap-4 font-[500] p-5 myFonts cursor-pointer sm:hidden overflow-hidden h-[15rem] ease-in-out duration-500 border-t-4 border-myOrange absolute right-0 min-w-full bg-gray-100 ' : 'h-0 ease-in-out duration-500 flex flex-col justify-center items-end overflow-hidden absolute right-0 min-w-full bg-gray-100 '}>
                    <li className='bg-gray-100 hover:bg-gray-300 w-[8rem] rounded-md h-[3rem] pl-2'>Home</li>
                    <li className='bg-gray-100 hover:bg-gray-300 w-[8rem] rounded-md h-[3rem] pl-2'>Our Services</li>
                    <li className='bg-gray-100 hover:bg-gray-300 w-[8rem] rounded-md h-[3rem] pl-2'>Insights</li>
                    <li className='bg-gray-100 hover:bg-gray-300 w-[8rem] rounded-md h-[3rem] pl-2'>About Us</li>
                    <li className='bg-gray-100 hover:bg-gray-300 w-[8rem] rounded-md h-[3rem] pl-2 pb-6'>Contact Us</li>
                </ul>
            </div>
            {/* end */}

            <div className='min-w-full h-[4rem]  hidden sm:flex items-center justify-between pl-4 pr-4 '>
                    <a href='https://www.chirpn.com'>
                        <img src={logo} alt='CHIRPN' className='w-[10rem] cursor-pointer' />
                    </a>
                <ul className='flex items-center gap-3 myFonts font-[600] h-full'>
                    <li className='listItem cursor-pointer active'>Home</li>
                    <li className='listItem cursor-pointer'>Our Services</li>
                    <li className='listItem cursor-pointer'>Insights</li>
                    <li className='listItem cursor-pointer'>About Us</li>
                    <li className='listItem cursor-pointer'>Contact Us</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar