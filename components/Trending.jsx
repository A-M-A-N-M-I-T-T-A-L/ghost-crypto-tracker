import React,{useState} from 'react'
import fire from '../resources/fire.png'
import btc from '../resources/btc.png'
import usdt from '../resources/usdt.png'
import gainers from '../resources/gainers.png'
import recent from '../resources/recent.png'
import ReactSwitch from 'react-switch'
import Rate from './price-table/Rate'

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
                <p className="text-gray-400">The global crypto market cap is $1.47T, a &nbsp;</p>
                <span>
                    <Rate isIncrement={true}
                    rate = '0.53%' />
                </span>
                <p>&nbsp; increase over the last day.</p>
            </div>
            <br />

            <div className="flex items-center">
                {/* 
                <TrendingCard title = 'Trending' icon={fire} trendingData = {trendingData} /> 
                
                <TrendingCard title = 'Biggest Gainers' icon={gainers} trendingData = {trendingData} /> 

                <TrendingCard title = 'Recently Added' icon={recent} trendingData = {trendingData} /> 
                
                */}
            </div>
        </div>

    </div>
  )
}

export default Trending