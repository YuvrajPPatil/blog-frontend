import blogPosts from "@/data/blog";
import { BlogPost } from "@/types/blog"; 

export default function getAllBlogs():BlogPost[]{
    return blogPosts
}