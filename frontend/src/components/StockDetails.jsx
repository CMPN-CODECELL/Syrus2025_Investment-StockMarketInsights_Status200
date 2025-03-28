// src/components/StockDetails.js
import React from "react";

const StockDetails = ({ stockName, currentPrice }) => {
  return (
    <div className="bg-white rounded shadow p-4 mb-4">
      <h2 className="text-xl font-bold mb-2 text-red-800">{stockName}</h2>
      <p className="text-gray-700 text-lg">
        Current Price: <span className="font-semibold">₹{currentPrice}</span>
      </p>
    </div>
  );
};

export default StockDetails;
