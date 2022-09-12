import { useState, useEffect, createContext } from 'react';

export const CoinMarketContext = createContext();

export const CoinMarketProvider = ({ children }) => {
    const getTopTenCoins = async () => {
        try {
            const res = await fetch('/api/getTopTen');
            const { data } = await res.json();
            return data.data;
        } catch (e) {
            console.log(e.message);
        }
    }

    const [coinData, setCoinData] = useState({})

    return (
        <CoinMarketContext.Provider
            value={{
                getTopTenCoins, coinData, setCoinData
            }}
        >
            {children}
        </CoinMarketContext.Provider>
    )
}