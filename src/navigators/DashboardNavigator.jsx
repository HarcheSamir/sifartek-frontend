import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Test from '../pages/Test';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import SideBar from '../layout/SideBar';
import TopBar from '../layout/TopBar';
import Inbox from '../pages/Inbox';
import Custom from '../pages/Custom'
import useLayoutStore from '../stores/layoutStore';
import ScrollToTop from '../components/ScrollToTop';
import AdminRooms from '../pages/AdminRooms';
export default function DashboardNavigator() {
  const { sideBar } = useLayoutStore()
  return (
    <div className='w-screen  bg-[#F9FAFB] h-screen flex flex-row relative overflow-hidden '>
      <ScrollToTop />
      {/*side bar*/}
      <div className={`min-h-full bg-white z-50 shrink-0 border-r-3 border-zinc-100  w-0 lg:w-[15rem] duration-500 ${sideBar ? 'fixed top-0 left-0 h-full w-[15rem]' : 'w-0'}`}>
        <SideBar />

      </div>


      <div className='lg:w-[calc(100vw-15rem)] lg:relative h-full fixed top-0 left-0 w-full flex flex-col'>
        {/*top bar*/}
        <div className='w-full h-[50px] bg-white py-4 '>
          <TopBar />
        </div>
        {/*pages*/}
        <div className={`h-full`}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/test" element={<Test />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/adminRooms" element={<AdminRooms/>} />
            <Route path="/login" element={<Navigate to="/dashboard" />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="*" element={<NotFound navbar={false} />} />
          </Routes>
        </div>


      </div>


    </div>
  );
}
