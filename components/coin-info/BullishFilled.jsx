import React from "react";
import ChevronUp from "../../resources/svg/chevronUp";

const BullishFilled = () => {
  return (
    <div className=" flex items-center">
      <ChevronUp fill="#17c784" />
      <small className=" ml-1 text-[#17c784]">Bullish</small>
    </div>
  );
};

export default BullishFilled;
