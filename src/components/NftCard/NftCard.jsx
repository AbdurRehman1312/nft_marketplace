import React from 'react'
import * as images from "../../assets"
import { Badge } from "@/components/ui/badge"
import OrangeBtnArrow from '../OrangeBtnArrow/OrangeBtnArrow'
import { Link } from 'react-router-dom'
const NftCard = ({ buy = false, badge = true }) => {
    return (
        <div className='lg:w-[30%] xl:w-[20%] md:h-[250px] h-[300px] md:w-[30%] w-full mx-auto relative rounded-[40px] border-4 border-orange-500 overflow-hidden'>
            {badge ? (<Badge className="">Hot</Badge>) : null}
            <img src={images.nft1} alt="" className='w-full h-full object-cover rounded-[35px]' />
            <div className='bg-light-gradient rounded-b-[35px] absolute bottom-0 left-0 right-0 w-full h-[35%] m-0 z-[2] flex justify-center items-center'>
                <div className='flex justify-between items-end gap-3 w-full lg:px-10 pl-8 md:pr-4 pr-2'>
                    <div className='flex flex-col'>
                        <h1 className='text-white font-semibold'>Animegirl#152</h1>
                        <p className='text-white font-extralight'>Anime girls</p>
                        {buy ? (<h1 className='text-white font-semibold'>Bought at: 2.1 ETH</h1>) : null}
                    </div>
                    <Link to='/marketplace' className='text-white text-sm font-semibold'><OrangeBtnArrow /></Link>
                </div>
            </div>

        </div>

    )
}

export default NftCard