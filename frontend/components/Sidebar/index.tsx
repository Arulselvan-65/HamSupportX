// Sidebar.tsx
'use client';
import React from 'react';

interface SidebarProps {
    showLogo?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ showLogo = true }) => {
    return (
        <div className="w-64 h-full blurred-bg p-4">
            {showLogo && (
                <div className="flex items-center mb-8" style={{height: '40px'}}>
                    <h2 className="text-[1.7rem] font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 animate-pulse">
                        HamSupportX
                    </h2>
                </div>
            )}
            {!showLogo && (
                <div className="mb-8" style={{height: '40px'}}></div>
            )}

            <nav className="space-y-4">
                <a className="flex items-center text-gray-300 hover:text-white" href="#">
                    <i className="fas fa-home mr-3"></i>
                    Home
                </a>
                <a className="flex items-center text-gray-300 hover:text-white" href="#">
                    <i className="fas fa-eye mr-3"></i>
                    View Page
                </a>
                <a className="flex items-center text-gray-300 hover:text-white bg-gray-800 p-2 rounded" href="#">
                    <i className="fas fa-th mr-3"></i>
                    Explore Creators
                </a>
            </nav>

            <div className="mt-8">
                <h3 className="text-gray-500 uppercase text-xs font-semibold mb-2">Monetize</h3>
                <nav className="space-y-4">
                    <a className="flex items-center text-gray-300 hover:text-white" href="#">
                        <i className="fas fa-heart mr-3"></i>
                        Supporters
                    </a>
                    <a className="flex items-center text-gray-300 hover:text-white" href="#">
                        <i className="fas fa-lock mr-3"></i>
                        Memberships
                    </a>
                    <a className="flex items-center text-gray-300 hover:text-white" href="#">
                        <i className="fas fa-shopping-bag mr-3"></i>
                        Shop
                    </a>
                    <a className="flex items-center text-gray-300 hover:text-white" href="#">
                        <i className="fas fa-pen mr-3"></i>
                        Publish
                    </a>
                </nav>
            </div>

            <div className="mt-8">
                <h3 className="text-gray-500 uppercase text-xs font-semibold mb-2">Settings</h3>
                <nav className="space-y-4">
                    <a className="flex items-center text-gray-300 hover:text-white" href="#">
                        <i className="fas fa-image mr-3"></i>
                        Buttons & Graphics
                    </a>
                    <a className="flex items-center text-gray-300 hover:text-white" href="#">
                        <i className="fas fa-bolt mr-3"></i>
                        Integrations
                    </a>
                    <a className="flex items-center text-gray-300 hover:text-white" href="#">
                        <i className="fas fa-dollar-sign mr-3"></i>
                        Payouts
                    </a>
                    <a className="flex items-center text-gray-300 hover:text-white" href="#">
                        <i className="fas fa-cog mr-3"></i>
                        Settings
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
