import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Test from '../pages/Test';
export default function PublicNavigator() {
    return (
        <div className='w-screen min-h-screen'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/test" element={<Test />} />
                <Route path="/dashboard" element={<Navigate to="/login" />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </div>
    );
}
