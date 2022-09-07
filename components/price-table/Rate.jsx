import React from "react";
import ChevronDown from "../../resources/svg/chevronDown";
import ChevronUp from "../../resources/svg/chevronUp";

const Rate = ({ isIncrement, rate }) => {
  const styles = {
    rate: "rate flex items-center",
    red: "ml-1 text-[#ea3943]",
    green: "ml-1 text-[#17c784]",
  };

  return (
    <div className={styles.rate}>
      {isIncrement ? (
        <ChevronUp fill={"#17c784"} />
      ) : (
        <ChevronDown fill={"#ea3943"} />
      )}
      <p className={isIncrement ? styles.green : styles.red}>{rate}</p>
    </div>
  );
};

export default Rate;
