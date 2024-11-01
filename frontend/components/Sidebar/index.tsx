'use client';
import React from 'react';
import Link from "next/link";

interface SidebarProps {
    showLogo?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ showLogo = true }) => {
    return (
        <div className="w-64 h-full blurred-bg p-4">
            {showLogo && (
                <Link href={"/"} >
                <div className="flex items-center mb-8" style={{height: '40px'}}>
                    <h2 className="text-[1.7rem] select-none cursor-pointer font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 animate-pulse">
                        HamSupportX
                    </h2>
                </div>
                </Link>
            )}
            {!showLogo && (
                <div className="mb-8" style={{height: '40px'}}></div>
            )}

            <nav className="space-y-2">
                <Link href={"/dashboard/home"} >
                    <div className="flex items-center h-10 rounded p-2 hover:bg-gray-800">
                        <div className="mr-3">
                            <i className="fas fa-home"></i>
                        </div>
                        <p className="text-gray-300 h-full">Home</p>
                    </div>
                </Link>

                <Link href={"/dashboard/explore"} >
                    <div className="flex items-center h-10 rounded p-2 hover:bg-gray-800">
                        <div className="mr-3">
                            <i className="fas fa-th"></i>
                        </div>
                        <p className="text-gray-300 h-full">Explore</p>
                    </div>
                </Link>
            </nav>

            <div className="mt-8">
                <h3 className="text-gray-500 uppercase text-xs font-semibold mb-2">Monetize</h3>
                <nav className="space-y-2">
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
