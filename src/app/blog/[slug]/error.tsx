"use client";
import { useEffect } from "react";

export default function Error({error,reset}:{error:Error;reset:()=>void}){
    useEffect(()=>{
        console.error("Error Loading blog post",error);
    },[error]);

    return(
        <div className="p-4 text-red-600">
            <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
            <p className="mb-4">{error.message}</p>
            <button
                onClick={reset}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
                Try again
            </button>
        </div>
    );
}
