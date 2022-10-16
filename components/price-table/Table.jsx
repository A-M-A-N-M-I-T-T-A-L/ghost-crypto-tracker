import React, { useState, useEffect, useContext, useCallback } from "react";
import btc from "../../resources/btc.png";
import { CoinMarketContext } from "../../context/context";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = () => {
  const { getTopTenCoins } = useContext(CoinMarketContext);
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    setData();
  }, []);

  const setData = useCallback(async () => {
    try {
      let apiResponse;
      if (localStorage.getItem("crypto"))
        apiResponse = JSON.parse(localStorage.getItem("crypto"));
      else {
        apiResponse = await getTopTenCoins();
        localStorage.setItem("crypto", JSON.stringify(apiResponse));
        
      }
      const filteredResponse = apiResponse.filter(
        (item) => item.cmc_rank <= 99
      );
      console.log(apiResponse);
      setCoinData(filteredResponse);
    } catch (e) {
      console.log(e.message);
    }
  }, [getTopTenCoins]);

  console.log(coinData);

  return (
    <div className="text-white font-bold mx-1">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-[95%] mx-auto">
          <TableHeader />

          {coinData && coinData ? (
            coinData.map((coin, index) => {
              return (
                <TableRow
                  key={index}
                  starNum={coin.cmc_rank}
                  coinName={coin.name}
                  coinSymbol={coin.symbol}
                  coinIcon={btc}
                  showBuy={true}
                  dRate={coin.quote.USD.percent_change_7d}
                  hRate={coin.quote.USD.percent_change_24h}
                  hRateIsIncrement={
                    coin.quote.USD.percent_change_24h > 0 ? true : false
                  }
                  dRateIsIncrement={
                    coin.quote.USD.percent_change_7d > 0 ? true : false
                  }
                  price={coin.quote.USD.price}
                  marketCapValue={coin.quote.USD.market_cap}
                  volumeCryptoValue={coin.quote.USD.volume_24h}
                  volumeValue={coin.total_supply}
                  circulatingSupply={coin.circulating_supply}
                />
              );
            })
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  );
};

export default Table;
