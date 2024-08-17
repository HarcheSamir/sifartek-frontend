import React from 'react';
import { IoIosTrendingUp, IoIosTrendingDown } from 'react-icons/io';
import CircularProgress from './CircularProgress';

const StatsCard = ({ title, value, trendPercentage, trendText, trendDirection, progressValue }) => {
  const isTrendingUp = trendDirection === 'up';
  const trendColor = isTrendingUp ? 'text-green-600' : 'text-red-600';
  const percentageColor = isTrendingUp ? 'text-green-500' : 'text-red-500';
  const TrendIcon = isTrendingUp ? IoIosTrendingUp : IoIosTrendingDown;

  return (
    <div className=" bg-white shadow pl-6 py-8 pr-4 relative items-center  w-[min(350px,95%)] rounded-lg flex flex-row justify-between">
      <div>
        <p className="text-zinc-400 font-semibold text-lg">{title}</p>
        <p className="text-zinc-800 font-rubik font-semibold text-2xl">{value}</p>
        <div className="flex items-end mt-3">
          <TrendIcon className={`${trendColor} text-xl`} />
          <p className={`${percentageColor} text-xl font-bold`}>{trendPercentage}</p>
          <p className="text-zinc-500 font-semibold pl-3 whitespace-nowrap">{trendText}</p>
        </div>
      </div>
      <div className="w-[100px]">
        <CircularProgress value={progressValue} max={100} />
      </div>
    </div>
  );
};

export default StatsCard;
