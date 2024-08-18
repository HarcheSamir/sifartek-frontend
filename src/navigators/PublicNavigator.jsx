import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Test from '../pages/Test';
import Navbar from '../components/Navbar';
import Contact from '../pages/Contact/Contact';
import ScrollToTop from '../components/ScrollToTop';
export default function PublicNavigator() {
    return (
        <div className='w-screen h-screen'>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/test" element={<Test />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Navigate to="/login" />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </div>
    );
}
