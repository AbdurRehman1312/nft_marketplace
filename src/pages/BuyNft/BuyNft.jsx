import React from 'react'
import * as images from "../../assets"
import OrangeBtnText from '@/components/OrangeBtnText/OrangeBtnText'
import GreyButton from '@/components/GreyButton/GreyButton'

const BuyNft = () => {
    return (
        <div className=' md:container md:mx-auto px-3 py-8'>
            <div className='bg-[#262626] rounded-[20px] px-10 py-16 flex justify-between gap-6 md:flex-row flex-col'>
                <div className='flex flex-col gap-4 md:w-[25%] w-full'>
                    <div className='h-[300px] border-4 border-secondary rounded-[35px]'>
                        <img src={images.nft5} alt="" className='w-full h-[100%] object-cover rounded-[30px]' />
                    </div>
                    <h1 className="text-white text-lg md:text-2xl">Animegirl#152</h1>
                    <div className='flex items-center gap-3'>
                        <img src={images.nft2} alt="" className='w-8' />
                        <span className='font-light'>Anime girls</span>
                    </div>
                </div>
                <div className='md:w-[70%] w-full'>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <p className='font-light text-gray-300'>Current price</p>
                            <p className=' text-lg md:text-2xl mt-2'>245,3 DOGE</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <OrangeBtnText name="Buy Now" style="py-3 px-5" />
                            <GreyButton name="Make an Offer" styles={"py-3"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyNft