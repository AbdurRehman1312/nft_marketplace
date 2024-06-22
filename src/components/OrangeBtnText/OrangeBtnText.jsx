import React from 'react'

const OrangeBtnText = ({name, style}) => {
  return (
<button type='button' className={`bg-[#ff8600]  rounded-[30px]  hover:bg-white hover:text-[#ff8600] hover:transition-all hover:ease-in-out hover:duration-500 ${style}`} >
    {name}
        </button>
  )
}

export default OrangeBtnText