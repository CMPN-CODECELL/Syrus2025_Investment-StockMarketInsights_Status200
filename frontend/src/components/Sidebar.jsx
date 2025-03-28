// src/components/Sidebar.js
import React from "react";

const Sidebar = ({ stocks, selectedStock, onSelectStock }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen p-4">
      <h2 className="text-lg font-bold mb-4">Watchlist</h2>
      <ul>
        {Object.keys(stocks).map((stockName) => (
          <li
            key={stockName}
            className={`cursor-pointer mb-2 p-2 rounded hover:bg-gray-100 ${
              selectedStock === stockName ? "bg-gray-100" : ""
            }`}
            onClick={() => onSelectStock(stockName)}
          >
            {stockName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
