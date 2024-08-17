import React from 'react';
import ContactTable from '../components/ContactTable';
import StatsCarousel from '../components/StatsCarousel';
import StatsCard from '../components/StatsCard';
import SalesByCategoryChart from '../components/SalesByCategoryChart';

export default function Inbox() {
  return (
    <div className="p-6  w-full h-full overflow-y-auto ">
      <div className='w-full h-full'>
        <div className='w-full bg-white rounded-xl  shadow-lg flex flex-col'>
          <p className='ml-8 mt-4 font-lato text-3xl font-semibold text-zinc-800'>Contacts</p>
          <ContactTable />
        </div>
        <div className='flex flex-col w-full py-4 sm:flex-row mt-4'>
          <div className='w-full sm:w-1/2'>
            <StatsCarousel items={items} />
          </div>
          <div className='  w-full sm:w-1/2  rounded-xl overflow-hidden bg-white shadow'>
            <SalesByCategoryChart title="New products"
              number="2,340"
              percentageChange="12.5" />

          </div>
        </div>
        <div className='h-[5rem]' />

      </div>

    </div>
  );
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