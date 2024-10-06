import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import Navbar from '@/components/Navbar';

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <div className="bg-black text-white font-sans relative overflow-hidden">
            <div className="neon-circle circle-1">
            </div>
            <div className="neon-circle circle-2">
            </div>
            <div className="neon-circle circle-3">
            </div>

            <Providers>
                <main className="min-h-screen">
                    {children}
                </main>
            </Providers>
        </div>
        </body>
        </html>
    );
}

export default RootLayout;
