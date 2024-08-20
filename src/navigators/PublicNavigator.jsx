import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Test from '../pages/Test';
import Contact from '../pages/Contact/Contact';
import ScrollToTop from '../components/ScrollToTop';
import Room from '../pages/Room';
import Rooms from '../pages/Rooms';
export default function PublicNavigator() {
    return (
        <div className='w-screen h-screen'>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/test" element={<Test />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/room/:id" element={<Room/>} />
                <Route path="/rooms" element={<Rooms/>} />
                <Route path="/dashboard" element={<Navigate to="/login" />} />
                <Route path="/custom" element={<Navigate to="/login" />} />
                <Route path="/adminRooms" element={<Navigate to="/login" />} />
                <Route path="/inbox" element={<Navigate to="/login" />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </div>
    );
}
