'use client';
import { useState } from "react";
import ConnectButtonC from "@/components/ConnectButton";

const Navbar: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!profileMenuOpen);
    };

    return (
        <>
            <div>
                {/* Mobile Navbar */}
                <div
                    className="relative top-0 left-0 right-0 bg-black p-4 md:hidden flex items-center z-50">
                    <button className="text-white p-2 rounded cursor-pointer" onClick={toggleSidebar}>
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="flex justify-center w-full">
                        <h2 className="text-1xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 animate-pulse">
                            HamSupportX
                        </h2>
                    </div>

                </div>

                {/* Mobile Profile Menu */}
                {profileMenuOpen && (
                    <div className="fixed top-16 right-4 bg-gray-900 rounded-lg shadow-lg py-2 z-50">
                        <a className="block px-4 py-2 text-gray-300 hover:bg-gray-800" href="#">
                            Profile
                        </a>
                        <a className="block px-4 py-2 text-gray-300 hover:bg-gray-800" href="#">
                            Settings
                        </a>
                        <a className="block px-4 py-2 text-gray-300 hover:bg-gray-800" href="#">
                            Logout
                        </a>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
