import React from 'react'

const DataImage = ({ image, image1, image2, image3 }) => {
    return (
        <div className='bg-transparent flex items-center justify-center sm:w-[50%]'>
            {/* <img className='bg-transparent w-[22rem]'
                src={image}
            /> */}
            {
                image
                    ?
                    <img className='bg-transparent w-[22rem]'
                        src={image}
                    />
                    :
                    <div className='relative bg-transparent'>
                        <img className='bg-transparent w-[25rem] lg:w-[30rem] relative'
                            src={image2}
                        />
                        <img className='bg-transparent w-[25rem] lg:w-[30rem] absolute top-0'
                            src={image1}
                        />
                        <img className='mystyles-img bg-transparent w-[25rem] lg:w-[30rem] absolute top-0'
                            src={image3}
                        />
                    </div>
            }

        </div>
    )
}

export default DataImage