import type { NextPage } from 'next';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home: NextPage = () => {
  return (
      <div className="bg-black text-white relative overflow-hidden">
          <div className="neon-circle circle-1"></div>
          <div className="neon-circle circle-2"></div>
          <div className="neon-circle circle-3"></div>
          <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-16 relative z-10">
              <div className="text-center mb-8 mt-4 md:mt-0">
                  <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 animate-pulse">
                      HamSupportX
                  </h2>
              </div>
              <div className="text-center mt-8 md:mt-12">
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                      Empower Your Creative Journey
                  </h1>
                  <p className="text-gray-400 mb-6 text-sm md:text-lg">
                      Accept Crypto Support, Build Exclusive Memberships, and Launch Your Decentralized Shop with Ease!
                  </p>
                  <button
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300">
                      Sign up for free
                      <i className="fas fa-arrow-right ml-2">
                      </i>
                  </button>
              </div>

              <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl">
                  <div
                      className="bg-gray-800 cursor-pointer p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                      <i className="fas fa-globe text-3xl mb-4 text-purple-500">
                      </i>
                      <h2 className="font-semibold mb-2 text-xl">
                          Decentralized Support
                      </h2>
                      <p className="text-gray-400">
                          Empower creators with <br/>crypto payments and NFT memberships on a fully decentralized platform.
                      </p>
                  </div>
                  <div
                      className="bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                      <i className="fas fa-plane text-3xl mb-4 text-indigo-500">
                      </i>
                      <h2 className="font-semibold mb-2 text-xl">
                          Seamless Integration
                      </h2>
                      <p className="text-gray-400">
                          Accept crypto support and manage memberships without any hassle—straightforward setup.
                      </p>
                  </div>
                  <div
                      className="bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                      <i className="fas fa-arrows-alt text-3xl mb-4 text-green-500">
                      </i>
                      <h2 className="font-semibold mb-2 text-xl">
                          Effortless Scalability
                      </h2>
                      <p className="text-gray-400">
                          Designed to handle growth, your creator-fan interaction scales automatically with your audience.
                      </p>
                  </div>
                  <div
                      className="bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
                      <i className="fas fa-tools text-3xl mb-4 text-red-500">
                      </i>
                      <h2 className="font-semibold mb-2 text-xl">
                          Focus on Content
                      </h2>
                      <p className="text-gray-400">
                          Zero maintenance. Spend your time creating, while we handle the infrastructure for you.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Home;
