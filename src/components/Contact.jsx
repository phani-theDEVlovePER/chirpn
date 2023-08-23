import React from 'react'
import { contactbg, wave } from '../assets'

const Contact = () => {
    return (
        <section className='h-[40rem] min-w-full relative bg-transparent bg-cover bg-no-repeat text-white p-6 flex items-center' style={{ backgroundImage: `url(${contactbg})` }}>
            <div className=' w-[100%] ss:w-[70%] sm:w-[57%] md:w-[50%] lg:w-[40%] flex flex-col items-start gap-8'>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-gray-500 font-[600] text-xl tracking-wide'>Let's meet up!</h2>
                    <h1 className='font-[700] text-4xl tracking-wider'>Contact</h1>
                    <p className='tracking-wide'>Chirpn has offices in Australia, India, USA. We can be reached at <a className='text-blue-400'>info@chirpn.com</a> for any queries, comments or feedback.</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h1 className='font-[500] text-xl tracking-wide'>Australia</h1>
                    <p className='font-[400] tracking-wide'>1503,275 Alfred Street, <br /> North Sydeny, NSW - 2060, Austraila</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-[500] text-xl tracking-wide'>U.S.A</h1>
                    <p className='font-[400] tracking-wide'>676 Fernleaf Dr, <br /> Milpits, CA, USA 95035</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-[500] text-xl tracking-wide'>India</h1>
                    <p className='font-[400] tracking-wide'>EFC Center, JK Infotech 2, Behind KPIT, Unit 1101, Rajiv Gandhi info Tech Park, MIDC, Phase 1, Hinjewadi, Pune </p>
                </div>
            </div>
        </section>
    )
}

export default Contact