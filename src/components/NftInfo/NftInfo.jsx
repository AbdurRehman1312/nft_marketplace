import React from 'react'
import * as images from "../../assets"
const NftInfo = () => {
  return (
    <>
      <section className='px-10'>
        <div className=' flex flex-col md:flex-row  items-center gap-10 md:gap-5 lg:gap-0 mt-6'>
          <div className='flex flex-col gap-4 w-full md:w-[40%] lg:w-[45%] xl:w-[50%]'>
            <div className='flex items-center gap-4'>
            <h1 className='text-white text-2xl font-semibold'>Less Than Three</h1>
            <img src={images.globe} alt="" className='w-4' />
            <img src={images.twitter} alt="" className='w-4' />
            </div>
            <p className='text-white text-sm md:w-[80%] w-full lg:w-[60%] limit_text font-extralight'>Unde Rufinus ea tempestate praefectus praetorio ad discrimen trusus est ultimum. ire enim ipse compellebatur ad militem, quem exagitabat inopia...</p>
          </div>
          <div className='flex items-center justify-center md:justify-between w-full flex-wrap md:flex-nowrap gap-3 md:gap-0 md:w-[60%] lg:w-[55%] xl:w-[50%]'>
               <div className='flex flex-col items-center gap-3'>
                 <h1 className=' text-base text-gray-400 font-semibold'>Volume</h1>
                 <p className='text-white lg:text-xl xl:text-2xl text-nowrap'>5.4 ETH</p>
               </div>
               <div className='flex flex-col items-center gap-3'>
                 <h1 className=' text-base text-gray-400 font-semibold'>Floor price</h1>
                 <p className='text-white lg:text-xl xl:text-2xl text-nowrap'>0.352 ETH</p>
               </div>
               <div className='flex flex-col items-center gap-3'>
                 <h1 className=' text-base text-gray-400 font-semibold'>Best offer</h1>
                 <p className='text-white lg:text-xl xl:text-2xl text-nowrap'>0.289 ETH</p>
               </div>
               <div className='flex flex-col items-center gap-3'>
                 <h1 className=' text-base text-gray-400 font-semibold'>Listed</h1>
                 <p className='text-white lg:text-xl xl:text-2xl text-nowrap'>4%</p>
               </div>
               <div className='flex flex-col items-center gap-3'>
                 <h1 className=' text-base text-gray-400 font-semibold'>Holders</h1>
                 <p className='text-white lg:text-xl xl:text-2xl text-nowrap'>145</p>
               </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NftInfo