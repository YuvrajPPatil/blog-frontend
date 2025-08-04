import blogPosts from "@/data/blog";
import { BlogPost } from "@/types/blog";

export const Metadata={
  title:"BLog-app",
  description:"Read the blogs"
}

export default function getBlogBySlug(slug:string):BlogPost | undefined{
     return blogPosts.find((post=> post.slug===slug));
}