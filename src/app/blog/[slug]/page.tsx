import { Metadata } from 'next';
import getBlogBySlug from '@/lib/getBlogBySlug';
import {notFound} from 'next/navigation';
import { BlogPost } from '@/types/blog';
import Image from 'next/image';

interface PageProps {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogBySlug(params.slug);
  
  return {
    title: post?.title || "Blog Post",
    description: post?.description || "Read our blog post",
  };
}

export default function BlogPostPage({params}: PageProps){
   const post=getBlogBySlug(params.slug);
      

    if (!post) {
       return notFound();
    }
    return(
        <article className="max-w-3xl mx-auto p-6">
             <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{post.date}</p>
           <Image
                    src={post.image || "/placeholder.png"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                    sizes="(max-width: 800px) 100vw, 800px"
                    />
            <article className="prose prose-lg text-gray-800">{post.content}</article>
        </article>
    );
}