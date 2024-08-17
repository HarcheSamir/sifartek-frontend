import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Test from '../pages/Test';
import NotFound from '../pages/NotFound';
import useAdminStore from '../stores/adminStore';
import Dashboard from '../pages/Dashboard';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
export default function DashboardNavigator() {
  const { logout } = useAdminStore()

  return (
    <div className='w-screen  bg-[#F9FAFB] h-screen flex flex-row relative overflow-hidden '>

      {/*side bar*/}
      <SideBar />


      <div className='lg:w-[calc(100vw-20rem)] w-full h-full flex flex-col'>
        {/*top bar*/}
        <div className='w-full h-24 bg-white py-4 '>
          <TopBar/>
        </div>
        {/*pages*/}
        <div className=' h-full '>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/test" element={<Test />} />
            <Route path="/login" element={<Navigate to="/dashboard" />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>


      </div>


    </div>
  );
}
