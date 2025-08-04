'use client'
import Link from 'next/link'
import { BlogPost } from '@/types/blog'
import Image from 'next/image';
   
 
export default function BlogCard({title,description,date,image,slug}:BlogPost){
    return(
        <Link href={`/blog/${slug}`}>
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300 cursor-pointer">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-sm text-gray-500 mb-2">{date}</p>
                <p className="text-gray-700">{description}</p>
                <p className="text-gray-700">{image}</p>
        </div>
        </Link>
    );
}