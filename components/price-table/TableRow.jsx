import Image from "next/image";
import React,{useContext} from "react";
import Star from "../../resources/svg/star";
import More from "../../resources/svg/more";
import { useRouter } from "next/router";
import Rate from "./Rate";
import CoinNameRow from "./CoinNameRow";
import { CoinMarketContext } from "../../context/context";

const styles = {
  tableRow: "text-white border-b-2 border-gray-800 text-[0.93rem]",
  graphRed: "filter grayscale-1 hue-rotate-[309deg]",
  graphGreen: "filter grayscale-1 hue-rotate-90",
};

const TableRow = ({
  starNum,
  coinName,
  coinSymbol,
  coinIcon,
  showBuy,
  dRate,
  hRate,
  hRateIsIncrement,
  dRateIsIncrement,
  price,
  marketCapValue,
  volumeCryptoValue,
  volumeValue,
  circulatingSupply,
}) => {
  const graphImages = [
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1839.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4687.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4943.svg",
  ];

  const getRandomGraph = () => {
    const rndInt = Math.floor((Math.random() * 100) % graphImages.length);
    return graphImages[rndInt];
  };

  const router = useRouter();

  const { setCoinData } = useContext(CoinMarketContext);

  const viewCoinDetails = () => {
    setCoinData({ coinName, coinSymbol, price });
    router.push(`/currencies/info`);
  };

  const viewPrice = () => {
    router.push(
      `/currencies/price?symbol=${coinSymbol}&coin=${coinName}&price=${price}`
    );
  };

  const formatNum = (num) => Number(num.toFixed(2)).toLocaleString();

  return (
    <tbody className={styles.tableRow}>
      <tr>
        <td>
          <Star />
        </td>

        <td>{starNum}</td>

        {coinIcon ? (
          <td className="cursor-pointer">
            <CoinNameRow
              name={coinName}
              icon={coinIcon}
              clicked={viewCoinDetails}
            />
          </td>
        ) : (
          <></>
        )}

        <td className="cursor-pointer" onClick={viewPrice}>
          <p>${formatNum(price)}</p>
        </td>

        <td>
          <Rate isIncrement={hRateIsIncrement} rate={`${formatNum(hRate)}%`} />
        </td>

        <td>
          <Rate isIncrement={dRateIsIncrement} rate={`${formatNum(dRate)}%`} />
        </td>

        <td>
          <div>
            <p>${formatNum(marketCapValue)}</p>
          </div>
        </td>

        <td>
          <div>
            <p>{formatNum(volumeValue)}</p>
            <p className="text-gray-400">
              {formatNum(volumeCryptoValue)} {coinSymbol}
            </p>
          </div>
        </td>

        <td>
          <div>
            <p>{formatNum(circulatingSupply)}</p>
          </div>
        </td>

        <td>
          <Image
            src={getRandomGraph()}
            width={150}
            height={60}
            alt="Graph"
            layout="fixed"
            className={dRate > 0 ? styles.graphGreen : styles.graphRed}
          />
        </td>

        <td>
          <More />
        </td>
      </tr>
    </tbody>
  );
};

export default TableRow;
