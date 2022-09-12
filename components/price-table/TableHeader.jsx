import React from "react";
import ChevronDown from "../../resources/svg/chevronDown";
import Info from "../../resources/svg/info";

const TableHeader = () => {
  return (
    <tbody>
      <tr>
        <th> </th>
        <th className="flex items-center">
          <b># &nbsp;</b>
          <ChevronDown />
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>24h %</th>
        <th>7d %</th>
        <th>
          <div className="flex items-center">
            <p className="mr-2">Market Cap</p>
            <Info />
          </div>
        </th>
        <th>
          <div className="flex items-center">
            <p className="mr-2">Volume</p>
            <Info />
          </div>
        </th>
        <th>
          <div className="flex items-center">
            <p className="mr-2">Circulating Supply</p>
            <Info />
          </div>
        </th>
        <th>Last 7 Days</th>
      </tr>
    </tbody>
  );
};

export default TableHeader;
