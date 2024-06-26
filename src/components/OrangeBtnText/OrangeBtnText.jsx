import React from 'react'

const OrangeBtnText = ({name, style, onClick}) => {
  return (
<button type='button' className={`bg-[#ff8600] rounded-[30px] hover:opacity-80 hover:transition-all hover:ease-in-out hover:duration-500 ${style}`} onClick={onClick} >
    {name}
        </button>
  )
}

export default OrangeBtnText