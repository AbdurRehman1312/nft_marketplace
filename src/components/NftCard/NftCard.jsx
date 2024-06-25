import React from 'react'
import * as images from "../../assets"
import { Badge } from "@/components/ui/badge"
import OrangeBtnArrow from '../OrangeBtnArrow/OrangeBtnArrow'
import { Link } from 'react-router-dom'

const NftCard = ({ buy = false, badge = true, highlighted = true, styles, nftimg, desc = true, nftName, nftCaption, boughtOrFloor, category }) => {
    return (
        <div className={`lg:w-[30%] xl:w-[23%] md:h-[250px] h-[300px] md:w-[30%] w-full relative rounded-[30px] border-4 ${styles} ${highlighted ? 'border-orange-500' : 'border-secondary'} overflow-hidden`}>
            {badge ? (<Badge className="text-nowrap">{category}</Badge>) : null}
            <img src={images[nftimg]} alt="" className='w-full h-full object-cover rounded-[25px]' />
            {desc ? (<div className='bg-light-gradient rounded-b-[25px] absolute bottom-0 left-0 right-0 w-full h-[35%] m-0 z-[2] flex justify-center items-center'>
                <div className='flex justify-between items-end gap-3 w-full lg:px-10 pl-8 md:pr-4 pr-2'>
                    <div className='flex flex-col'>
                        <h1 className='text-white font-semibold'>{nftName}</h1>
                        <p className='text-white font-extralight'>{nftCaption}</p>
                        {buy ? (<h1 className='text-white font-semibold'>{boughtOrFloor}</h1>) : null}
                    </div>
                    <Link to='/marketplace' className='text-white text-sm font-semibold'><OrangeBtnArrow /></Link>
                </div>
            </div>) : null}
        </div>
    )
}

export default NftCard
