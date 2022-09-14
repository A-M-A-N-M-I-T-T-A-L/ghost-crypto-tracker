import React from 'react'
import { useContext } from 'react';
import Header from '../../components/Header'
import { CoinMarketContext } from "../../context/context";
import CoinDetails from '../../components/coin-price/CoinDetails';

const price = () => {
  const { coinData } = useContext(CoinMarketContext);
console.log(coinData);

  return (
    <div>
        <Header/>
        <CoinDetails coinName={coinData.coinName} coinSymbol = {coinData.coinSymbol} price={coinData.price} />
    </div>
  )
}

export default price