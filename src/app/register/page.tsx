"use client"
import { useState,useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { registerUser } from "@/lib/auth";
  
export default function registerPage(){
    
    const [username, setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [inviteToken, setInviteToken] = useState("");
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");

    const router=useRouter();
    const searchParams=useSearchParams();

    useEffect(() => {
     const token=searchParams.get("token");
     if(!token)
     {
        setError("Invalid url link or missing invite");
        return;
     }
     setInviteToken(token);
    }, [searchParams]);

    
    const handleRegister=async(e:any)=>{
        e.preventDefault();
        setError("");
        setLoading(true);
        try{
            const res=await registerUser(username,email,password,inviteToken);
            alert("Account created successfully");
            router.push("/login");
        }catch(error:any){
            setError(error.message || "Something went wrong");
        }
       
    };

    return (
        <div className="p-6 max-w-sm mx-auto">
                <form onSubmit={handleRegister}  >
                 <h2 className="text-xl font-bold mb-4">Create Account</h2>

                {error && <p className="text-red-500">{error}</p>}

                <input type="text" 
                    placeholder="Name"
                    value={username}
                    onChange={(e)=>setUserName(e.target.value)}
                    className="border p-2 w-full mb-3"
                />
                <input type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="border p-2 w-full mb-3"
                />
                <input type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="border p-2 w-full mb-3"
                />
                <button
                    type="submit"
                    className="bg-green-600 text-white p-2 rounded w-full"
                >
                Register
                </button>
                </form>
        </div>
    );
}
