import { useState, useEffect, createContext } from 'react';

export const CoinMarketContext = createContext();

export const CoinMarketProvider = ({ children }) => {
    const getTopTenCoins = async () => {
        try {
            const res = await fetch('/api/getTopTen');
            console.log(res);
            const data = await res.json();
            console.log(data);
            return data.data.data;
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <CoinMarketContext.Provider
            value={{
                getTopTenCoins
            }}
        >
            {children}
        </CoinMarketContext.Provider>
    )
}