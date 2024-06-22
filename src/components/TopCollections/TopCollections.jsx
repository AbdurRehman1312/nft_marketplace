import React from 'react'
import NftCard from '../NftCard/NftCard'

const TopCollections = () => {
    return (
        <>
            <div className=' md:container md:mx-auto px-3 py-8'>
                <h1 className='font-semibold md:text-xl text-lg'>Top collections</h1>
            </div>
            <div>
                <NftCard />
            </div>
        </>
    )
}

export default TopCollections