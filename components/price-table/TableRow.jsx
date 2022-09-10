import Image from "next/image";
import React from "react";
import Star from "../../resources/svg/star";
import More from "../../resources/svg/more";
import { useRouter } from "next/router";

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

const getRandomGraph = ()=>{
    const rndInt = Math.floor(Math.random() * graphImages.length)
}

  return (
    <div>
      <Image
        src={
          "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg"
        }
        width={50}
        height={50}
        layout="fixed"
        className="filter grayscale-1 hue-rotate-90 "
      />
    </div>
  );
};

export default TableRow;
