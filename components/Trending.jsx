import React,{useState} from 'react'
import fire from '../resources/fire.png'
import btc from '../resources/btc.png'
import usdt from '../resources/usdt.png'
import gainers from '../resources/gainers.png'
import recent from '../resources/recent.png'
import ReactSwitch from 'react-switch'

const Trending = () => {
    const [checked, setChecked] = useState(false);

  return (
    <div className='text-white'>
        <div className='mx-auto max-w-screen-2xl '>
            <div className="flex justify-between">
                <h1 className='text-3xl text-white'>Todays Cryptocurrency Prices</h1>

                <div className="flex">
                    <p className="text-gray-400">Highlights &nbsp;</p>
                    <ReactSwitch checked = {checked} onChange={()=>{setChecked(prev => !prev)}} />
                </div>
            </div>
            <br />
            <div className="flex">
                <p className="text-gray-400">The global crypto market cap is $1.47T, a </p>
                <span>
                    {/* Rate */}
                </span>
            </div>
        </div>

    </div>
  )
}

export default Trending