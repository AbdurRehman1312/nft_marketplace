import React from 'react'

const GreyButton = ({name, styles, onClick}) => {
    return (
        <button className={`bg-secondary py-2 px-4 rounded-full text-base hover:opacity-90 hover:transition-all hover:ease-in-out hover:duration-500 ${styles}`} onClick={onClick}>
            {name}
        </button>
    )
}

export default GreyButton