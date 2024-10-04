import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <Navbar/>
            <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white">

                {children}
            </main>
        </Providers>
        <footer className="bg-blue-100 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
                <p>Made with 💗 by 0xhaider</p>
            </div>
        </footer>
        </body>
        </html>
    );
}

export default RootLayout;
