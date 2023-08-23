import React from 'react'
import '../myStyles.css'
import { combo } from '../assets'
import Btn from './Btn'

const Hero = () => {
    return (
        <>
            <section className='bg-transparent'>
            {/* <section className='h-[90vh] min-w-[98vw] pagebg mt-4'> */}
                <div className='w-full h-full bg-transparent flex gap-8 sm:gap-4 flex-col sm:flex-row items-center justify-center mt-[6rem]'>
                    <div className='bg-transparent h-full w-full pl-20 sm:pl-12 lg:pl-[4.5rem] flex flex-col items-start justify-center'>
                        <h1 className='fontStyle text-[44px] md:text-[56px] lg:text-[80px] lg:leading-[6.5rem]'>Technology</h1>
                        <h1 className='fontStyle text-[44px] md:text-[56px] lg:text-[80px] lg:leading-[6.5rem]'>Solutions</h1>
                        <h1 className='fontStyle text-[44px] md:text-[56px] lg:text-[80px] lg:leading-[6.5rem]'>Made</h1>
                        <h1 className='fontStyle text-[#13abf4] text-[44px] lg:text-[80px] lg:leading-[6.5rem] md:text-[56px]'>Simple</h1>
                        <Btn data={'Tell me how'} bgcolor={'#ee5222'}/>
                    </div>
                    <div className='bg-transparent h-full w-[100%] flex items-center justify-center relative'>
                        <img
                            className='bg-transparent w-[30rem] lg:pr-[3rem] lg:w-[45rem]'
                            src={combo} alt='bg'
                        />
                        {/* <img 
                    className='bg-transparent absolute w-[28rem]'
                    src={superHero}
                    />
                    <img 
                    className='bg-transparent absolute w-[20rem]'
                    src={superHero}
                    /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero