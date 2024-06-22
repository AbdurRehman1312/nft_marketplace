import React from 'react'

const OrangeBtnText = ({name, style}) => {
  return (
<button type='button' className={`bg-[#ff8600] rounded-[30px] hover:opacity-80 hover:transition-all hover:ease-in-out hover:duration-500 ${style}`} >
    {name}
        </button>
  )
}

export default OrangeBtnText