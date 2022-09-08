import Image from "next/image";
import React from "react";
import Rate from "./price-table/Rate";

const TrendingCardRow = ({ number, symbol, name, icon, isIncrement, rate }) => {
  return (
    <div className="flex items-center justify-between mb-4 text-lg">
      <p className="opacity-40">{number}</p>
      <div className="w-full flex">
        <div className="mx-5">
          {icon && <Image src={icon} width={20} height={20} layout="fixed" />}
        </div>
        <p className="font-bold">
          {name}
          <span className="text-gray-400 ml-1">{symbol}</span>
        </p>
      </div>
      <Rate isIncrement={isIncrement} rate={rate} />
    </div>
  );
};

export default TrendingCardRow;
