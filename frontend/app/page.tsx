import type { NextPage } from 'next';
import Image from "next/image";
import rocket_illustration from "@/assets/poster.png";
const Home: NextPage = () => {
  return (
      <main className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
              <div className="lg:w-1/2">
                  <h1 className="text-6xl font-extrabold pb-6 gradient-title">Empower Your Creative Journey</h1>
                  <p className="text-xl text-gray-600 mb-10">Accept Crypto Support, Build Exclusive Memberships, and Launch Your Decentralized Shop with Ease!</p>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-md aspect-square  transform motion-updown">
                    <Image
                        src={rocket_illustration}
                        alt={"rocket illustration"}
                        layout="fill"
                        objectFit="contain"
                        className="rotate-6"
                    />
                  </div>
              </div>
          </div>

      </main>
  );
};

export default Home;
