import { useEffect } from "react";
import Image from "next/image";
import Rate from "../price-table/Rate";
import RateFilled from "./RateFilled";
import DropDownBtn from "./DropDownBtn";
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
import usd from "../../resources/usd.png";

const styles = {
  coinDetails: "min-h-screen text-white",
  coinDetailsLinks: "flex mt-3 flex-wrap",
  greyBtn: "mr-3 mb-3 bg-slate-800 px-3 py-1 rounded-xl",
  borderLeft: "ml-10 pl-5 w-full border-l border-gray-800",
  title: "border-gray-400 whitespace-nowrap mr-2",
  coinDetailsWrapper: "coin-details flex max-w-screen-2xl m-auto pt-20",
  coinSymbol: "bg-slate-800 flex items-center px-2 rounded-xl",
  coinInfo: "flex justify-between mt-10 p-4 border-t border-gray-800",
  coinRates: "w-full flex items-start justify-between",
  flexBetween: "flex justify-between",
};

const CoinDetails = ({ coinName, coinSymbol, price }) => {
  const getCoinDetails = () => {
    let coinDetail = JSON.parse(localStorage.getItem("price"));
    if (!coinName) coinName = coinDetail.coinName;
    if (!coinSymbol) coinSymbol = coinDetail.coinSymbol;
    if (!price) price = coinDetail.price;
  };

  useEffect(() => {
    if (coinName)
      localStorage.setItem(
        "price",
        JSON.stringify({ coinName, coinSymbol, price })
      );
    else getCoinDetails();
  }, []);

  const getCoinIcon = () => {
    switch (coinName) {
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
  const coinIcon = getCoinIcon();

  return (
    <main className={styles.coinDetails}>
      <div>
        <div className={styles.coinDetailsWrapper}>
          <div className=" flex flex-col w-fit">
            <div className="flex items-center">
              <Image src={coinIcon} width={50} height={50} layout="fixed" />
              &nbsp; &nbsp;
              <div>
                <div className="flex">
                  <p className="text-3xl">{coinName}</p>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <p className={styles.coinSymbol}>{coinSymbol}</p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={styles.coinDetails}>
              <div className={styles.greyBtn}>Alchemy</div>
              <div className={styles.greyBtn}>Explores</div>
              <div className={styles.greyBtn}>Community</div>
              <div className={styles.greyBtn}>Chat</div>
              <div className={styles.greyBtn}>Source Code</div>
              <div className={styles.greyBtn}>Whitepaper</div>
            </div>
            <br />
            Topics
            <div className={styles.coinDetails}>
              <div className={styles.greyBtn}>Mineable</div>
              <div className={styles.greyBtn}>PoW Tokens</div>
              <div className={styles.greyBtn}>SHA-256</div>
              <div className={styles.greyBtn}>Store of Value</div>
            </div>
          </div>

          <div className="-ml-16">
            <div className={styles.coinRates}>
              <div>
                <p className="text-gray-400">
                  {coinName} ({coinSymbol})
                </p>
                <div className="flex my-3">
                  <h1 className="text-4xl">${price}</h1>
                  <RateFilled />
                </div>
                <div className="flex items-start">
                  <p className=" text-gray-400">15.26 ETH</p>
                  &nbsp; &nbsp; &nbsp;
                  <Rate isIncrement={false} rate="0.53%" />
                </div>
                <div className="flex items-start">
                  <p className=" text-gray-400">24.33 BTC</p>
                  &nbsp; &nbsp; &nbsp;
                  <Rate isIncrement={true} rate="0.89%" />
                </div>
              </div>

              <div className="flex">
                <DropDownBtn label="Buy" />
                <DropDownBtn label="Exchange" />
                <DropDownBtn label="Gaming" />
                <DropDownBtn label="Earn Crypto" />
              </div>
            </div>

            <div className={styles.coinInfo}>
              <div>
                <div>
                  <small className={styles.title}>Market Cap</small>
                </div>
                <small>$731,935,983,865</small>
                <Rate isIncrement={true} rate="0.53%" />
              </div>

              <div className={styles.borderLeft}>
                <div>
                  <small className={styles.title}>
                    Fully Diluted Market Cap
                  </small>
                </div>
                <small>$811,236,224,810</small>
                <Rate isIncrement={true} rate="0.53%" />
              </div>

              <div className={styles.borderLeft}>
                <div>
                  <small className={styles.title}>
                    Volume &nbsp;
                    <small className={styles.coinSymbol}>BTC</small>
                  </small>
                </div>
                <small>$24,143,175,384</small>
                <Rate isIncrement={true} rate="0.92%" />
              </div>
              <br />
              <div className={styles.borderLeft}>
                <div>
                  <small className={styles.title}>Volume / Market Cap</small>
                </div>
                <small>0.3315</small>
              </div>
            </div>

            <div className={styles.borderLeft}>
              <div>
                <div>
                  <small className={styles.title}>Circulating Supply</small>
                </div>
                <small>18,929,850.00</small>
              </div>
              <br />
              <div>
                <div className={styles.flexBetween}>
                  <div>
                    <small className={styles.title}>Max Supply</small>
                  </div>
                  <div>
                    <small>21,000,000</small>
                  </div>
                </div>
                <div className={styles.flexBetween}>
                  <div>
                    <small className={styles.title}>Total Supply</small>
                  </div>
                  <div>
                    <small>18,983,912</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoinDetails;
