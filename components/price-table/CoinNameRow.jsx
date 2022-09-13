import Image from "next/image";
import React from "react";
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

const styles = {
  coinNameRow: "flex items-center",
  buyButton:
    " bg-[#1a1f3a] text-[#6188ff] p-1 px-3 text-sm rounded-lg cursor-pointer hover:opacity-60",
};

const CoinNameRow = ({ name, icon, clicked }) => {
  const coinIcon = () => {
    switch (name) {
      case "Bitcoin":
        return (
          <Image src={btc} className="rounded-full" width={20} height={20} />
        );

      case "Ethereum":
        return (
          <Image
            src={eth}
            className="rounded-full"
            width={20}
            height={20}
            layout="fixed"
          />
        );

      case "Tether":
        return (
          <Image src={usdt} className="rounded-full" width={20} height={20} />
        );

      case "USD Coin":
        return (
          <Image src={usdc} className="rounded-full" width={20} height={20} />
        );

      case "BNB":
        return (
          <Image src={bnb} className="rounded-full" width={20} height={20} />
        );

      case "Binance USD":
        return (
          <Image src={busd} className="rounded-full" width={20} height={20} />
        );

      case "XRP":
        return (
          <Image src={xrp} className="rounded-full" width={20} height={20} />
        );

      case "Cardano":
        return (
          <Image src={ada} className="rounded-full" width={20} height={20} />
        );

      case "Solana":
        return (
          <Image src={sol} className="rounded-full" width={20} height={20} />
        );

      case "Polkadot":
        return (
          <Image src={dot} className="rounded-full" width={20} height={20} />
        );

      default:
        return (
          <Image src={btc} className="rounded-full" width={20} height={20} />
        );
    }
  };

  return (
    <div className={styles.coinNameRow}>
      <div className="flex gap-1 mr-2" onClick={clicked}>
        <div className="mr-2 ">{coinIcon()}</div>
        {name}
      </div>

      <p>
        {name === "Bitcoin" || name === "Ethereum" || name === "Tether" ? (
          <span className={styles.buyButton}>Buy</span>
        ) : (
          <></>
        )}
      </p>
    </div>
  );
};

export default CoinNameRow;
