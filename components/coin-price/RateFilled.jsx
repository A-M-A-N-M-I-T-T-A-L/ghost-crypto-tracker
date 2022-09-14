import React from "react";
import ChevronUp from "../../resources/svg/chevronUp";

// const styles = {
//   rateFilled: "bg-green-600 flex items-center px-3 ml-3 rounded-xl",
// };

const RateFilled = () => {
  return (
    <div className="bg-green-600 flex items-center px-3 ml-3 rounded-xl">
      <ChevronUp />
      <small className="pl-1">23.32%</small>
    </div>
  );
};

export default RateFilled;
