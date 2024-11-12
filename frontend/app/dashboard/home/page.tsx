import {NextPage} from "next";
import Dashboard from "@/app/dashboard/page";
import shareLight from "@/assets/icons/share-light.png";
import shareDark from "@/assets/icons/share-dark.png";
import heartPng from "@/assets/icons/heart-png.png";
import Image from "next/image";


const Home : NextPage = () =>{

    return(
        <>
            <Dashboard>
                <div className="flex flex-col justify-center items-center min-h-screen ">
                    <div className="w-full max-w-3xl mt-10">
                        <div className="bg-[#1a1b1b] rounded-lg shadow p-4 mx-2 sm:p-6">
                            <div className="flex sm:flex-row items-center justify-between">
                                <div className="flex items-center">
                                    <img alt="Profile picture"
                                         className="hidden md:block w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                                         height="50"
                                         src="https://storage.googleapis.com/a1aa/image/PC3yCtLwbFrGKZ5InL8un4dVJE4zGPttzoHFfJfLPdQyaYkTA.jpg"
                                         width="50"/>
                                    <div className="ml-4">
                                        <h1 className="text-lg sm:text-xl font-semibold">
                                            Hi, Arulselvan M
                                        </h1>
                                        <p className="text-gray-400 text-sm sm:text-base">
                                            buymeacoffee.com/arulselvan
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="bg-gray-200 text-black sm:text-white sm:bg-black px-3 py-2 sm:px-4 sm:py-2 rounded-full flex items-center">
                                    <picture>
                                        <source srcSet={shareDark.src} media="(max-width: 640px)"/>
                                        <Image src={shareLight} alt="Share icon" width={25} height={25}
                                               className="mr-1"/>
                                    </picture>
                                    <span className="block sm:hidden">Share</span>
                                    <span className="hidden sm:block">Share page</span>
                                </button>
                            </div>

                            <div
                                className="flex min-w-max justify-center items-center border-b-gray-800 border-b-2 mt-9">
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center">
                                    <h1 className="font-bold text-2xl">Current Earnings</h1>
                                </div>
                                <div className="mt-4 text-4xl font-bold">
                                    $0
                                </div>
                                <div className="mt-4">
                                    <div className="flex flex-wrap items-center mt-2">
                                    <span className="text-yellow-500 mr-4 text-sm sm:text-base">
                                     $0 Supporters
                                    </span>
                                        <span className="text-pink-500 mr-4 text-sm sm:text-base">
                                     $0 Membership
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-full max-w-3xl mt-10">
                        <div className="bg-[#1a1b1b] rounded-lg shadow p-4 sm:p-6  text-center max-w mx-auto">
                            <div className="flex justify-center mb-4">
                                <Image src={heartPng} alt="heart icon" width={60} height={60}/>
                            </div>
                            <h2 className="text-lg font-semibold mb-2">You don't have any supporters
                                yet</h2>
                            <p className="text-gray-400">Share your page with your audience to get started.</p>
                        </div>
                    </div>
                </div>
            </Dashboard>
        </>
    )
}


export default Home;