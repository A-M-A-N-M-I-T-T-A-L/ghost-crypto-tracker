import Image from 'next/image'
import React from 'react'

const CoinNameRow = ({name, icon, clicked}) => {
  return (
    <div className='flex gap-1' onClick={clicked}>
        <Image src={icon} width={20} height={20} layout="fixed" />
        {name}
    </div>
  )
}

export default CoinNameRow