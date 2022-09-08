import Image from "next/image";
import React from "react";
import MoreButton from "./MoreButton";
import TrendingCardRow from "./TrendingCardRow";

const TrendingCard = ({ title, icon, trendingData }) => {
  return (
    <div className="w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white">
      <div className="flex items-center justify-between">
        <div className="flex">
          {icon && <Image src={icon} width={25} height={25} alt="Icon" />}
          &nbsp;&nbsp;
        </div>
        <MoreButton />
      </div>
      <br />
      
      {trendingData.map((item, index) => {
        return (
          <TrendingCardRow
            key={index}
            number={item.number}
            symbol={item.symbol}
            name={item.name}
            icon={item.icon}
            isIncrement={item.isIncrement}
            rate={item.rate}
          />
        );
      })}
    </div>
  );
};

export default TrendingCard;
