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
      let apiResponse = await getTopTenCoins();
      const filteredResponse = apiResponse.filter(
        (item) => item.cmc_rank <= 10
      );
      setCoinData(filteredResponse);
    } catch (e) {
      console.log(e.message);
    }
  }, [getTopTenCoins]);

  console.log(coinData);

  return (
    <div className="text-white font-bold">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-[95%] mx-auto">
          <TableHeader/>

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
                  hRateIsIncrement={true}
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
