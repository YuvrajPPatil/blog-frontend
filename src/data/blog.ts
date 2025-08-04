 import { BlogPost } from "@/types/blog";

const blogPosts:BlogPost[]=[
    {
        slug:"my-frist-blog",
        title:"string",
         date: "2025-07-19",
        content: "This is the content of my very first post. It's all about setting up Next.js and TailwindCSS.",
        description:"Welcome to first blog", 
        image:"/placeholder.png",  
    },
    {
        slug: "nextjs-routing",
        title: "Understanding Routing in Next.js",
        date: "2025-07-20",
        content: "This article explains how to implement file-based routing using the Next.js App Router.",
         description:"Welcome to nextjs-routing",
          image:"/placeholder.png",     
    },
    {
        slug: "demo",
        title: "demo title",
        date: "2025-07-27",
        content: "Your blog title is the first thing people see.Whether theyre scrolling through the search results or skimming your blog homepage the headline must be strong enough to pique their interest. Make sure your blog title is not only interesting but also accurately describes the articles topic. In my experience, I usually come up with at least five different title options when Im drafting a new blog post. And heres good news for those who are particularly verbose: Research shows that longer is better when it comes to length.",
        description:"Welcome to nextjs-routing",
         image:"/placeholder.png",     
    },
];

export default blogPosts;