import React from 'react'
const MarketNftLogo = ({image}) => {
    return (
        <>
            <div className='h-[60vh] relative md:container md:mx-auto px-3'>
                <div className='bg-dark-gradient3 m-0 z-[2]'>
                    <div className=' absolute bottom-[-8%]'>
                        <div className='w-full'>
                            <img src={image} alt="" className='w-32' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarketNftLogo