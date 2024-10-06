// Dashboard.tsx
"use client";
import { NextPage } from "next";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const Dashboard: NextPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar for Laptop */}
            <div className="hidden md:block md:w-64">
                <Sidebar />
            </div>

            {/* Mobile Navbar */}
            <div className="w-full md:hidden">
                <Navbar toggleSidebar={toggleSidebar} />
            </div>

            {/* Sidebar for Mobile */}
            <div className={`fixed top-0 left-0 w-64 h-full  z-40 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <Sidebar showLogo={false} />
            </div>
        </div>
    );
};

export default Dashboard;
