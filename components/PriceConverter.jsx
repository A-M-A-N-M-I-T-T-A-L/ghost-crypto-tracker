import React from "react";
import Image from "next/image";
import converter from "../resources/converter.png";
import btc from "../resources/btc.png";
import eth from "../resources/eth.png";
import usdc from "../resources/usdc.png";
import usdt from "../resources/usdt.png";
import xrp from "../resources/xrp.png";
import ada from "../resources/cardano.png";
import sol from "../resources/solana.png";
import bnb from "../resources/bnb.png";
import tera from "../resources/tera.png";
import avalanche from "../resources/avalanche.png";

const styles = {
  converter:
    "flex items-center justify-between bg-[#171924] border border-gray-500/10 p-5 rounded-xl",
  convertButton:
    " bg-[#1d4ed8] p-2 px-5 w-min rounded-xl mt-5 cursor-pointer hover:opacity-60",
};

const PriceConverter = ({
  from,
  to,
  fromSymbol,
  toSymbol,
  fromLogo,
  toLogo,
  price,
}) => {
  const coinIcon = () => {
    switch (from) {
      case "Bitcoin":
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
            layout=""
          />
        );

      case "Ethereum":
        return (
          <Image
            src={eth}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
            layout=""
          />
        );

      case "Tether":
        return (
          <Image
            src={usdt}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
            layout=""
          />
        );

      case "USD Coin":
        return (
          <Image
            src={usdc}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
            layout=""
          />
        );

      case "BNB":
        return (
          <Image
            src={bnb}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
            layout=""
          />
        );

      case "Binance USD":
        return (
          <Image
            src={busd}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
            layout=""
          />
        );

      case "XRP":
        return (
          <Image
            src={xrp}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
            layout=""
          />
        );

      case "Cardano":
        return (
          <Image
            src={ada}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
            layout=""
          />
        );

      case "Solana":
        return (
          <Image
            src={sol}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
            layout=""
          />
        );

      case "Polkadot":
        return (
          <Image
            src={dot}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
            layout=""
          />
        );

      default:
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
            layout=""
          />
        );
    }
  };

  return (
    <div>
      <Image
        src={eth}
        className="rounded-full"
        width={50}
        height={50}
        alt=""
        layout=""
      />
    </div>
  );
};

export default PriceConverter;
