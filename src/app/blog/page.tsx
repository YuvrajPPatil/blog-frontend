import BlogCard from "@/components/BlogCard";
import getAllBlogs from "@/lib/getAllBlogs";
import { notFound } from "next/navigation";

export const Metadata={
  title:"BLog-app",
  description:"Read the blogs"
}
export default function BlogListPage(){
  const blogs= getAllBlogs();
  return(
         <main className="min-h-screen p-4">
          <h1 className="text-3xl font-bold mb-4">Blog Post</h1>
          <div className="grid gap-4">
            {blogs.map((blog)=>(
              <BlogCard 
                key={blog.slug}
                title={blog.title}
                description={blog.content.slice(0,100)+ '...'}
                date={blog.date}
                content={blog.content}
                slug={blog.slug}
                image={blog.slug}
              /> 
            ))} 
          </div> 
        </main>
  );
}