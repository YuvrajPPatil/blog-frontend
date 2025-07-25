import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { Metadata } from 'next'


export const metadata={
  title:'My Blog',
  description:'Modern blog designed in next.js',
};
export default function RootLayoyt({children,}: { children: React.ReactNode}){
    return(
        <html lang="en">
            <body className="bg-white text-black">
              <main className="max-w-3xl mx-auto p-4">
                 <Navbar />
                 {children}
                 <Footer />
              </main>
            </body>
        </html>
    );
}