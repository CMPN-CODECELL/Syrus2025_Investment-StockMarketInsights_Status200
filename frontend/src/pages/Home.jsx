import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // Required for Chart.js v4

// Hardcoded stock data for demonstration
const stocksData = [
  {
    name: 'Axis Bank',
    open: 100,
    high: 110,
    low: 95,
    close: 105,
    current: 108,
  },
  {
    name: 'Kotak',
    open: 2200,
    high: 2250,
    low: 2190,
    close: 2225,
    current: 2230,
  },
  {
    name: 'Sbi Life',
    open: 400,
    high: 410,
    low: 395,
    close: 405,
    current: 403,
  },
  {
    name: 'SBI Life',
    open: 15,
    high: 16,
    low: 14.5,
    close: 15.2,
    current: 15.1,
  },
  {
    name: 'HDFC',
    open: 2500,
    high: 2550,
    low: 2490,
    close: 2530,
    current: 2525,
  },
];

// Helper to generate random data for the chart
const generateRandomData = (points = 7, min = 0, max = 100) => {
  const data = [];
  for (let i = 0; i < points; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return data;
};

const HomePage = () => {
  return (
    <div className="flex w-full min-h-screen bg-gray-100 text-gray-800">
      {/* Left Sidebar (Navbar) */}
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h1 className="text-3xl font-bold">AutoTrade</h1>
        </div>
        <ul className="p-4 space-y-4">
          <li className="hover:text-blue-500 cursor-pointer text-xl">Trades</li>
          <li className="hover:text-blue-500 cursor-pointer text-xl">Invest</li>
          <li className="hover:text-blue-500 cursor-pointer text-xl">Portfolio</li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <h2 className="flex text-2xl justify-center font-semibold mb-4 pb-5">Welcome to AutoTrade</h2>

        {/* Stock Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stocksData.map((stock) => {
            // Generate chart data for each stock
            const chartData = {
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [
                {
                  label: stock.name,
                  data: generateRandomData(7, stock.low, stock.high),
                  fill: false,
                  borderColor: '#3b82f6', // Tailwind's "blue-500"
                  tension: 0.2,
                },
              ],
            };

            return (
              <div
                key={stock.name}
                className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
              >
                <div>
                  <h3 className="flex text-lg justify-center font-bold mb-2">{stock.name} {stock.current}</h3>
                  <div className="mb-2">
                    <span className="font-medium">Open:</span> {stock.open}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">High:</span> {stock.high}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">Low:</span> {stock.low}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium">Close:</span> {stock.close}
                  </div>

                </div>

                {/* Chart for each stock */}
                <div className="h-32">
                  <Line
                    data={chartData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { display: false },
                      },
                      scales: {
                        y: {
                          beginAtZero: false,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
