"use client"
import type { NextPage } from 'next';
import {useState} from "react";
import Sidebar from "@/components/Sidebar";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Explore: NextPage = () => {

    const [sidebarHidden, setSidebarHidden] = useState(true);

    const creators = [
        {
            id: 1,
            name: 'Simple Politics',
            description: 'Helping people have better conversations about politics',
            supporters: 6182,
            logo: 'https://placehold.co/40x40',
        },
        {
            id: 2,
            name: 'Cara',
            description: 'Building a new platform for artists',
            supporters: 6182,
            logo: 'https://placehold.co/40x40',
        },
        {
            id: 3,
            name: 'Beach Talk Radio',
            description: 'A Dinky Little Podcast',
            supporters: 1609,
            logo: 'https://placehold.co/40x40',
        },
        {
            id: 4,
            name: 'Tanaka san',
            description: 'Teaching Japanese on YouTube & Instagram',
            supporters: 512,
            logo: 'https://placehold.co/40x40',
        },
        {
            id: 5,
            name: 'Crypto Insights',
            description: 'Deep dives into crypto projects',
            supporters: 2300,
            logo: 'https://placehold.co/40x40',
        },
        {
            id: 6,
            name: 'Daily Code',
            description: 'Sharing daily coding challenges',
            supporters: 1450,
            logo: 'https://placehold.co/40x40',
        },
        {
            id: 7,
            name: 'Eco Warriors',
            description: 'Saving the planet one tree at a time',
            supporters: 2700,
            logo: 'https://placehold.co/40x40',
        },
        {
            id: 8,
            name: 'Fitness Journey',
            description: 'Helping people reach their fitness goals',
            supporters: 980,
            logo: 'https://placehold.co/40x40',
        },
        {
            id: 9,
            name: 'Tech Gadgets',
            description: 'Exploring the latest in tech',
            supporters: 3650,
            logo: 'https://placehold.co/40x40',
        },
        {
            id: 10,
            name: 'Mindful Living',
            description: 'Promoting mindfulness and mental wellness',
            supporters: 1570,
            logo: 'https://placehold.co/40x40',
        },
    ];

    const handleToggle = () => {
        setSidebarHidden(!sidebarHidden);
    };


    return (
        <div>
            <div
                className="fixed top-0 left-0 right-0 bg-gray-900 shadow-lg p-4 md:hidden flex justify-between items-center z-50">
                <button className="bg-gray-800 text-white p-2 rounded" id="mobileSidebarToggle">
                    <i className="fas fa-bars">
                    </i>
                </button>
                <button className="bg-gray-800 text-white p-2 rounded" id="mobileProfileToggle">
                    <i className="fas fa-user">
                    </i>
                </button>
            </div>

            <div className="fixed top-16 right-4 bg-gray-900 rounded-lg shadow-lg py-2 hidden" id="mobileProfileMenu">
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
            <div className="flex flex-col md:flex-row mt-16 md:mt-0">
               <Sidebar/>
                <div className="flex-1 p-4 md:p-8 ml-0 md:ml-0">
                    <div className="flex justify-end items-center mb-4">
                        <div className="relative ml-4 hidden md:block">
                            <button className="bg-gray-800 text-white p-2 rounded-full" id="profileToggle">
                                <i className="fas fa-user">
                                </i>
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg py-2 hidden"
                                 id="profileMenu">
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
                        </div>
                    </div>
                    <div className="flex space-x-8 mb-4">
                        <a className="text-white font-semibold border-b-2 border-white" href="#">
                            Explore creators
                        </a>
                        <a className="text-gray-500" href="#">
                            Following
                        </a>
                    </div>
                    <div className="relative w-full flex items-center mb-8">
                        <input className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10 w-full"
                               placeholder="Search 1,000,000+ creators" type="text"/>
                        <i className="fas fa-search absolute left-3 top-2.5 text-gray-500">
                        </i>
                    </div>
                    <h2 className="text-2xl font-semibold mb-4 gradient-text">
                        Trending creators this week
                    </h2>
                    <div className="blurred-bg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {creators.map((creator) => (
                                <div key={creator.id} className="creator-card">
                                  <span className="text-xl font-semibold mr-4">
                                    #{creator.id}
                                  </span>
                                  <img alt={`${creator.name} logo`} className="rounded-full" src={creator.logo} />
                                  <div>
                                    <h3 className="font-semibold">{creator.name}</h3>
                                    <p className="text-gray-400">{creator.description}</p>
                                    <p className="text-gray-400">
                                        <i className="fas fa-heart mr-1"></i>
                                        {creator.supporters} Supporters
                                    </p>
                                  </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <button className="fixed top-4 left-4 md:hidden z-50 bg-gray-800 text-white p-2 rounded"
                        id="sidebarToggle">
                    <i className="fas fa-bars">
                    </i>
                </button>
            </div>


            <div>
                <button
                    className="fixed top-4 left-4 md:hidden z-50 bg-gray-800 text-white p-2 rounded"
                    id="sidebarToggle"
                    onClick={handleToggle}
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className={`sidebar ${sidebarHidden ? 'sidebar-hidden' : ''}`}>Sidebar content</div>
            </div>
        </div>
    )

}


export default Explore;