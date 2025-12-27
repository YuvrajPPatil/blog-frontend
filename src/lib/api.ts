const BASE_URL=process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
export async function apiRequest(
    endpoint:string,
    method:string="GET",
    body?:any,
    token?:string,
) {
    const headers: any={
        "Content-type":"application/json",
    };

    if(token){
        headers["Authorization"]=`Bearer ${token}`; 
    }

    const options:RequestInit={
        method,
        headers
    };

    if(body){
        options.body=JSON.stringify(body);
    }
    try {

        const res=await fetch(`${BASE_URL}${endpoint}`,options);
        if(!res.ok){
            const error=await res.json().catch(()=>({}));
            throw new Error(error.message || "Something went wrong");
    }

    return res.json();
    }catch(error:any){
         throw new Error(error.message || "Something went wrong");
    }

}