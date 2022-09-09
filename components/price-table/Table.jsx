import React, { useState, useEffect, useContext, useCallback } from "react";
import btc from "../../resources/btc.png";
import { CoinMarketContext } from "../../context/context";

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

  return <div>Table</div>;
};

export default Table;
