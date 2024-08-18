import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Test from '../pages/Test';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import Inbox from '../pages/Inbox';
import Custom from '../pages/Custom'
import useLayoutStore from '../stores/layoutStore';
import ScrollToTop from '../components/ScrollToTop';
export default function DashboardNavigator() {
  const { sideBar } = useLayoutStore()
  return (
    <div className='w-screen  bg-[#F9FAFB] h-screen flex flex-row relative overflow-hidden '>
      <ScrollToTop />
      {/*side bar*/}
      <div className={`min-h-full bg-white z-50 shrink-0 border-r-3 border-zinc-100  w-0 lg:w-[20rem] duration-500 ${sideBar ? 'fixed top-0 left-0 h-full w-[20rem]' : 'w-0'}`}>
        <SideBar />

      </div>


      <div className='lg:w-[calc(100vw-20rem)] w-full h-full flex flex-col'>
        {/*top bar*/}
        <div className='w-full h-24 bg-white py-4 '>
          <TopBar />
        </div>
        {/*pages*/}
        <div className=' h-full '>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/test" element={<Test />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/login" element={<Navigate to="/dashboard" />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>


      </div>


    </div>
  );
}
