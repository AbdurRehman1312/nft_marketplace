import React from 'react'
const MarketNftLogo = ({image}) => {
    return (
        <>
            <div className='h-[60vh] relative'>
                <div className=''>
                    <div className='bg-dark-gradient3 absolute bottom-0 w-full m-0 z-[2] '>
                        <div className='w-full lg:px-10 pl-8'>
                            <img src={image} alt="" className='w-32' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MarketNftLogo