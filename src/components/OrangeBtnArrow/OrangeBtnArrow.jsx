import React from 'react'
import * as images from "../../assets"
const OrangeBtnArrow = () => {
  return (
<button type='button' className='bg-[#ff8600] rounded-full hover:opacity-80 flex flex-shrink-0  hover:transition-all hover:ease-in-out hover:duration-500'>
    <img src={images.arrowRight} alt="" className='w-8 ' />
    {/* <img src={images.arrowOrange} alt="" className='w-8 hidden group-hover:block' /> */}
</button>

  )
}

export default OrangeBtnArrow