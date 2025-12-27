'use client';
import Link from 'next/link';

export default function Navbar(){
    return(
         <nav className="bg-gray-900 text-white shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-white">
                MyBlog
                </Link>
                <div className="space-x-4">
                <Link href="/" className="text-white hover:text-gray-400">
                    Home
                </Link>
                <Link href="/about" className="text-white hover:text-gray-400">
                    About
                </Link>
                <Link href="/blog" className="text-white hover:text-gray-400">
                    Blog
                </Link>
                
                </div>
            </div>
        </nav>
    );
}
 