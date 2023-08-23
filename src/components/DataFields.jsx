import React from 'react'
import { bigLogo } from '../assets'
import Btn from './Btn'
import DataImage from './DataImage'

const DataFields = ({h1, h2, p1, p2, data, bgcolor, image, image1, image2, image3, order}) => {
    return (
        <section className={`bg-transparent flex flex-col-reverse ${order =='right' ? 'sm:flex-row' : ' sm:flex-row-reverse'}`}>
            <div className='bg-transparent p-8 flex flex-col gap-2 lg:gap-4 sm:w-[50%]'>
                <h2 className='bg-transparent capitalize text-gray-500 font-[600] tracking-wide text-lg lg:text-2xl'>{h1}</h2>

                <h1 className='bg-transparent text-black font-[700] tracking-wide text-3xl lg:text-5xl'>{h2}</h1>

                <p className='bg-transparent font-[500] tracking-wide leading-7 text-gray-800  lg:text-lg'>{p1}</p>
                
                <p className='bg-transparent font-[500] tracking-wide leading-7 text-gray-800  lg:text-lg'>{p2}</p>
                <Btn data={data} bgcolor={bgcolor}/>
            </div>
            {/* <div className='bg-transparent flex items-center justify-center sm:w-[50%]'>
                <img className='bg-transparent w-[22rem]'
                src={image}
                />
            </div> */}
            <DataImage image={image} image1={image1} image2={image2} image3={image3}/>
        </section>
    )
}

export default DataFields