import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const SalesByCategoryChart = ({ title, number, percentageChange }) => {
  useEffect(() => {
    const options = {
      chart: { 
        type: 'bar', 
        height: '100%', 
        width: '100%', 
        sparkline: { enabled: true },
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          borderRadius: 4
        }
      },
      series: [{
        data: [20, 30, 25, 35, 28, 30] // Hardcoded data
      }],
      colors: ['#1A56DB'],
      xaxis: { crosshairs: { width: 1 } },
      yaxis: { show: false },
      grid: { show: false },
      tooltip: { enabled: false }
    };

    const chart = new ApexCharts(document.querySelector('#sales-category-chart'), options);
    chart.render();

    return () => chart.destroy();
  }, []);

  // Determine the color based on the percentage change
  const changeColor = percentageChange > 0 ? 'text-green-500' : 'text-red-500';
  const arrow = percentageChange > 0 ? '▲' : '▼';

  return (
    <div className=" w-full h-full flex items-center justify-center">
      <div className="flex w-[80%] h-[50%] justify-between items-center">
        <div>
          <p className="text-gray-500 text-xl font-semibold">{title}</p>
          <div className="text-3xl font-semibold">{number}</div>
          <div className={`text-sm mt-2 ${changeColor} flex items-center`}>
            <span>{arrow}</span>
            <span className="ml-1">{percentageChange}% Since last month</span>
          </div>
        </div>
        <div id="sales-category-chart" style={{ height: '100px', width: '200px' }}></div>
      </div>
    </div>
  );
};

export default SalesByCategoryChart;
