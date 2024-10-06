"use client"
import type { NextPage } from 'next';
import {useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Dashboard from "@/app/dashboard/page";

const Explore: NextPage = () => {

    const [activeTab, setActiveTab] = useState('explore');

    const creators = [
        { rank: 1, name: "Simple Politics", description: "Helping people have better conversations about politics", supporters: 6182, img: "https://placehold.co/40x40" },
        { rank: 2, name: "Cara", description: "building a new platform for artists", supporters: 6182, img: "https://placehold.co/40x40" },
        { rank: 3, name: "Beach Talk Radio", description: "A Dinky Little Podcast", supporters: 1609, img: "https://placehold.co/40x40" },
        { rank: 4, name: "Tanaka san", description: "teaching Japanese on YouTube & Instagram", supporters: 512, img: "https://placehold.co/40x40" },
        { rank: 5, name: "Kaleigh Cohen", description: "creating indoor cycling and strength workouts on...", supporters: 3491, img: "https://placehold.co/40x40" },
        { rank: 6, name: "Drumscribe", description: "posting drum play-through videos with sheet music...", supporters: 672, img: "https://placehold.co/40x40" },
        { rank: 7, name: "Mind Over This Matrix", description: "creating Manifestation and Self Improvement content...", supporters: 426, img: "https://placehold.co/40x40" },
        { rank: 8, name: "Sørina Higgins", description: "writing Short Stories, Academic Books, & Popular...", supporters: 44, img: "https://placehold.co/40x40" }
    ];


    return (
        <Dashboard>
            <div className="flex justify-center">
            <div className="p-4 md:p-6 bg-black min-h-screen md:w-9/12 w-full">
                <div className="flex justify-center md:justify-between items-center mb-6 mt-6 md:mt-16">
                    <div className="flex space-x-8">
                        <button
                            className={`text-white font-semibold ${activeTab === 'explore' ? 'active' : ''}`}
                            onClick={() => setActiveTab('explore')}
                        >
                            Explore creators
                        </button>
                        <button
                            className={`text-gray-500 ${activeTab === 'following' ? 'active' : ''}`}
                            onClick={() => setActiveTab('following')}
                        >
                            Following
                        </button>
                    </div>
                </div>
                <div className="relative mb-6">
                    <input type="text" placeholder="Search 100+ creators"
                           className="w-full pl-10 pr-4 py-2 rounded-full search-input text-white focus:outline-none focus:ring-2 focus:ring-gray-700"/>
                    <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
                </div>
                <h2 className="text-2xl md:text-2xl font-semibold mb-4 text-bold mt-3">Trending creators this week</h2>


                <div className="p-4 md:p-6 rounded-lg text-white bg-[#1a1b1b]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {creators.map((creator, index) => (

                            <div className="flex creator-card items-center bg-gray-100 tw-rounded-2xl p-2 mr-5 transition duration-200 ease-in max-w-sm" key={creator.rank}>
                                <div className="text-sm text-white">#{creator.rank}</div>
                                <img src={creator.img} alt={`Profile picture of ${creator.name}`} className="w-12 ml-4 h-12 rounded-full bg-black flex items-center justify-center text-white text-2xl font-bold" />
                                <div className="ml-3">
                                    <div className="text-lg font-semibold text-white">{creator.name}</div>
                                    <div className="text-sm text-gray-500 line-clamp-2">{creator.description}</div>
                                    <div className="flex items-center text-sm text-gray-500 mt-1">
                                        <i className="fas fa-heart mr-1"></i> {creator.supporters} Supporters
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </Dashboard>
    )

}


export default Explore;