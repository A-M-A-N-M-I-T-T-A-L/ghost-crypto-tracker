import React from 'react'
import RightArrow from '../resources/svg/rightArrow';

const MoreButton = () => {
  return (
    <div>
        <button className=' text-[#6188ff] flex items-center cursor-pointer whitespace-nowrap justify-between'>
            More <RightArrow />
        </button>
    </div>
  )
}

export default MoreButton