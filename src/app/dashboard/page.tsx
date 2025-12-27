"use client";
import { useEffect,useState } from "react";
import { getProfile } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router=useRouter();
    const [user, setUser]=useState<any>(null);
  //console.log(user);
  
    useEffect(()=>{
        const token=localStorage.getItem("token");
        
        if(!token){
            router.push("/login");
            return;
        }
        getProfile(token) 
        .then((res)=>{setUser(res);}) 
        .catch(()=>router.push("/login"));

        
    },[]);
 
    if(!user) return <p className="text-center mt-10">Loading...</p>

    return(
        <div className="p-8">
           
             <h1 className="text-3xl font-bold">Welcome, {user.name} </h1>
            <p className="mt-3 text-gray-600">Email: {user.email} </p>
        </div>
    );
}