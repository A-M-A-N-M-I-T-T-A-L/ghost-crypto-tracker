import React, { useContext } from "react";
import Image from "next/image";
import { CoinMarketContext } from "../../context/context";
import convertLogo from "../../resources/converter.png";
import btc from "../../resources/btc.png";
import eth from "../../resources/eth.png";
import usdc from "../../resources/usdc.png";
import usdt from "../../resources/usdt.png";
import xrp from "../../resources/xrp.png";
import ada from "../../resources/cardano.png";
import sol from "../../resources/solana.png";
import bnb from "../../resources/bnb.png";
import dot from "../../resources/dot.png";
import busd from "../../resources/busd.png";
import usd from '../../resources/usd.png'

const PriceConverter = () => {
  const { coinData } = useContext(CoinMarketContext);

  const from = coinData.coinName;
  const to = "US Dollar";
  const fromSymbol = coinData.coinSymbol;
  const toSymbol = "USD";
  const price = coinData.price ? coinData.price : 0;

  const formatNum = (num) => Number(num.toFixed(3));

  const styles = {
    converter:
      "flex items-center justify-between bg-[#171924] border border-gray-500/10 p-5 rounded-xl min-w-min",
    convertButton:
      " bg-[#1d4ed8] p-2 px-5 w-min rounded-xl mt-5 cursor-pointer hover:opacity-60",
  };

  const coinIcon = () => {
    switch (from) {
      case "Bitcoin":
        return btc;

      case "Ethereum":
        return eth;

      case "Tether":
        return usdt;

      case "USD Coin":
        return usdc;

      case "BNB":
        return bnb;

      case "Binance USD":
        return busd;

      case "XRP":
        return xrp;

      case "Cardano":
        return ada;

      case "Solana":
        return sol;

      case "Polkadot":
        return dot;

      default:
        return btc;
    }
  };

  const fromLogo = coinIcon();

  return (
    <div>
      <h2>
        {fromSymbol} to {toSymbol} converter
      </h2>
      <br />
      <div className={styles.converter}>
        <div>
          <div className="flex">
            <div className={styles.converter}>
              <Image
                src={fromLogo}
                alt={fromSymbol}
                width={40}
                height={40}
                layout="fixed"
              />
            </div>
            &nbsp; &nbsp;
            <div className="flex flex-col justify-center items-center">
              <p>{fromSymbol}</p>
              <h4>{from}</h4>
            </div>
          </div>
        </div>
          <p className="text-3xl">1</p>

        <div className="flex">
          &nbsp; &nbsp;
          <div className="flex items-center">
            <Image
              src={convertLogo}
              alt="Converter"
              width={40}
              height={40}
              layout="fixed"
            />
          </div>
          &nbsp; &nbsp;
          <div className="flex">
          </div>
          </div>
          <Image
              src={usd}
              width={40}
              height={40}
              layout="fixed"
            />
            <div>
              <p>{toSymbol}</p>
              <h4>{to}</h4>
            </div>
        <p className="text-3xl">${formatNum(price)}</p>
      </div>

      <div className={styles.convertButton}>Convert</div>
    </div>
  );
};

export default PriceConverter;
