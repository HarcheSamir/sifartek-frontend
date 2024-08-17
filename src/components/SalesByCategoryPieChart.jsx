import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const SalesByCategoryPieChart = () => {
    useEffect(() => {
        const options = {
            chart: {
                type: 'pie',
                height: '100%',
                width: '100%',
                sparkline: { enabled: true },
                toolbar: { show: false }
            },
            series: [44, 55, 13, 33], // Example data
            colors: ['#1A56DB', '#FEB019', '#FF4560', '#775DD0'],
            labels: ['Category A', 'Category B', 'Category C', 'Category D'],
            legend: { show: false },
            tooltip: { enabled: false },
            dataLabels: { enabled: false },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 80,
                        height: 80,
                    }
                }
            }]
        };

        const chart = new ApexCharts(document.querySelector('#sales-category-pie-chart'), options);
        chart.render();

        return () => chart.destroy();
    }, []);

    return (
        <div className=" w-full h-full flex items-center justify-center">
            <div className="flex w-[80%] h-[50%] justify-between items-center">
                <div>
                    <h4 className="text-gray-500 text-xl whitespace-nowrap font-semibold">New products</h4>
                    <div className="text-3xl font-semibold">2,340</div>
                    <div className="text-sm text-green-500 flex items-center mt-2">
                        <span>▲</span>
                        <span className="ml-1">12.5% Since last month</span>
                    </div>
                </div>
                <div  id="sales-category-pie-chart"></div>
            </div>
        </div>
    );
};

export default SalesByCategoryPieChart;
