import {NextPage} from "next";
import Dashboard from "@/app/dashboard/page";


const Home : NextPage = () =>{

    return(
        <>
            <Dashboard>
                <div className="w-full max-w-4xl mt-10">
                    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-center justify-between">
                            <div className="flex items-center">
                                <img alt="Profile picture" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                                     height="50"
                                     src="https://storage.googleapis.com/a1aa/image/PC3yCtLwbFrGKZ5InL8un4dVJE4zGPttzoHFfJfLPdQyaYkTA.jpg"
                                     width="50"/>
                                <div className="ml-4">
                                    <h1 className="text-lg sm:text-xl font-semibold">
                                        Hi, Arulselvan M
                                    </h1>
                                    <p className="text-gray-500 text-sm sm:text-base">
                                        buymeacoffee.com/arulselvan
                                    </p>
                                </div>
                            </div>
                            <button
                                className="bg-black text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full flex items-center mt-4 sm:mt-0">
                                <i className="fas fa-share mr-2">
                                </i>
                                Share page
                            </button>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-xl sm:text-2xl font-bold">
                                Earnings
                            </h2>
                            <div className="flex items-center mt-2">
                                <button className="bg-gray-100 text-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-full">
                                    Last 30 days
                                    <i className="fas fa-chevron-down ml-2">
                                    </i>
                                </button>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-3xl sm:text-4xl font-bold">
                                    $0
                                </h3>
                                <div className="flex flex-wrap items-center mt-2">
                                    <span className="text-yellow-500 mr-4 text-sm sm:text-base">
                                     $0 Supporters
                                    </span>
                                    <span className="text-pink-500 mr-4 text-sm sm:text-base">
                                     $0 Membership
                                    </span>
                                    <span className="text-blue-500 text-sm sm:text-base">
                                     $0 Shop
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dashboard>
        </>
)
}


export default Home;