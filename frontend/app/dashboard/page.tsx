"use client";

import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import React, { useState} from "react";
import ConnectButtonC from "@/components/ConnectButton";

const Dashboard= ({ children }: any)  => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex h-screen">
            <div className="hidden md:block absolute top-5 right-3">
                <ConnectButtonC/>
            </div>
            {/* Sidebar*/}
            <div className="hidden md:block md:w-64">
                <Sidebar />
            </div>

            {/* Mobile Navbar */}
            <div className="w-full md:hidden fixed top-0 z-50">
                <Navbar toggleSidebar={toggleSidebar} />
            </div>

            {/* Sidebar for Mobile */}
            <div
                className={`fixed top-0 left-0 w-64 h-full z-40 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
            >
                <Sidebar showLogo={false} />
            </div>

            {/* Main content */}
            <div className={`flex-grow mt-16 md:mt-0`}>
                {children}
            </div>
        </div>
    );
};

export default Dashboard;
