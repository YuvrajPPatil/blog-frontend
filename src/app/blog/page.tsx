import BlogCard from "@/components/BlogCard";
const posts=[
  {
    titel:"Next.js blog app",
    description:"Learn how to build your first Next.js app using the App Router.",
    date:"July 25, 2025",
  },
  {
    title:"understanding card layout and components",
    description:"Master rendering strategies in Next.js",
    date:"July 25, 2025",
  }
];


export default function BlogPage(){
  return(
        <main className="min-h-screen bg-gray-100 py-10 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-center mb-6">Blog</h1>
          {posts.map((posts,idx)=>(
            <BlogCard key={idx}{...posts} /> 
          ))}
          </div>
        </main>
  );
}