import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const TrafficChannelsChart = () => {
  useEffect(() => {
    const options = {
      colors: ['#1A56DB', '#FDBA8C', '#17B0BD'],
      series: [60, 30, 10],
      chart: { type: 'donut', height: 160, fontFamily: 'Inter, sans-serif', foreColor: '#4B5563', toolbar: { show: false } },
      labels: ['Desktop', 'Tablet', 'Phone'],
      plotOptions: { pie: { donut: { size: '70%' } } },
      stroke: { show: true, colors: '#ffffff' },
      states: { hover: { filter: { type: 'darken', value: 1 } } },
      dataLabels: { enabled: false },
      legend: { show: false },
      tooltip: {
        fillSeriesColor: false,
        style: { fontSize: '14px', fontFamily: 'Inter, sans-serif' }
      }
    };

    const chart = new ApexCharts(document.querySelector('#traffic-by-device'), options);
    chart.render();

    return () => chart.destroy();
  }, []);

  return <div id="traffic-by-device" />;
};

export default TrafficChannelsChart;
