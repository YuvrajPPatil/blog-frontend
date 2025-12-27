import { apiRequest } from "./api";

export async function loginUser(email:string,password:string) {
    return apiRequest("/api/auth/login","POST",{email,password});
}

export async function registerUser(username:string,email:string,password:string,inviteToken:string) {
    return apiRequest("/api/auth/register","POST",{username,email,password,inviteToken});
}

export async function getProfile(token:string) {
    return apiRequest("/api/user/me","GET",undefined,token);
}

export const logoutUser=()=>{
    if(typeof window!=='undefined'){
        localStorage.removeItem("token");
    }
};