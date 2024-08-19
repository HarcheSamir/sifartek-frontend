import React from 'react'
import StatsCarousel from '../components/StatsCarousel'
import StatsCard from '../components/StatsCard';
import MainChart from '../components/MainChart';
import SalesByCategoryChart from '../components/SalesByCategoryChart';
import TrafficChannelsChart from '../components/TrafficChannelsChart';
import SalesByCategoryPieChart from '../components/SalesByCategoryPieChart';
export default function Dashboard() {
  return (
    <div className='h-full  flex flex-col   relative px-4 overflow-y-auto  '>
      <div className='h-full w-full'>
        <div className=' w-full '> <StatsCarousel items={items} /></div>
        <div className='grid grid-cols-6 sm:h-[40%vh] sm:grid-rows-2  gap-2 w-full'>
          <div className='w-full rounded-xl row-span-2 overflow-hidden shadow bg-white col-span-6  sm:col-span-4'>
            <MainChart />
          </div>
          <div className='sm:col-span-2 py-8 sm:py-0 col-span-6 row-span-1  rounded-xl overflow-hidden bg-white shadow'>
            <SalesByCategoryChart
              title="New products"
              number="2,340"
              percentageChange="12.5"
            />
          </div>
          <div className='sm:col-span-2 py-8 sm:py-0 col-span-6  row-span-1  rounded-xl overflow-hidden bg-white shadow'>
            <SalesByCategoryPieChart />

          </div>

        </div>
        <div className='h-40'></div>
      </div>

    </div>

  )
}
const items = [
  < StatsCard
    title="Total Images"
    value="36,578 GB"
    trendPercentage="+32.40%"
    trendText="last month"
    trendDirection="up"
    progressValue={36}
  />
  , <StatsCard
    title="Storage Usage"
    value="18,342 GB"
    trendPercentage="-14.20%"
    trendText="last month"
    trendDirection="down"
    progressValue={53}
  />,
  <StatsCard
    title="Total Downloads"
    value="45,123"
    trendPercentage="+8.75%"
    trendText="last month"
    trendDirection="up"
    progressValue={80}
  />,
  <StatsCard
    title="New Users"
    value="7,845"
    trendPercentage="+12.30%"
    trendText="last week"
    trendDirection="up"
    progressValue={10}
  />,
  <StatsCard
    title="Server Uptime"
    value="99.97%"
    trendPercentage="-0.02%"
    trendText="last month"
    trendDirection="down"
    progressValue={99}
  />,
  <StatsCard
    title="Active Subscriptions"
    value="12,678"
    trendPercentage="-4.85%"
    trendText="last month"
    trendDirection="down"
    progressValue={80}
  />,
  <StatsCard
    title="Daily Visits"
    value="158,432"
    trendPercentage="+3.45%"
    trendText="yesterday"
    trendDirection="up"
    progressValue={78}
  />



];