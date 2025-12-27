"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth";

export default function LoginPage(){
    const router =useRouter();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");

    const handleLogin =async (e:any) => {
        e.preventDefault();
        setLoading(true);
        setError("");
 
        try{
                const res=await loginUser(email,password);

                //save token in local storage
                localStorage.setItem("token",res.token);

                router.push("/dashboard");// redirect after login

        }catch(error:any){
                setError(error.message || "Login Failed");
        }finally{
            setLoading(false);
        }
    };

    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
            onSubmit={handleLogin}
            className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                {error && <p className="text-red-500 mb-3">{error}</p>}

                <input type="mail"
                    placeholder="Email"
                    className="w-full p-3 mb-4 border rounded-lg"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input type="password"
                value={password}
                placeholder="Password"
                className="w-full p-3 mb-4 border rounded-lg"
                onChange={(e)=>setPassword(e.target.value)}
                />
    
                <button
                    disabled={loading} 
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
                >
                    {loading ? 'Loggin in...' : 'Login'}
                </button>
            </form>
        </div>
    );
}