"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

interface BlogPost {
  id: number;
  number: string;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  image_url: string;
  tags: string[];
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function BlogPostPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const postId = params.slug[0];
    fetchPost(postId);
  }, [params.slug]);

  const fetchPost = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-pirata mb-8 text-eerie-black dark:text-parchment">
              Loading...
            </h1>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-pirata mb-8 text-eerie-black dark:text-parchment">
              Error
            </h1>
            <p className="text-red-500">{error || "Post not found"}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-3xl mx-auto">
          <article className="prose dark:prose-invert max-w-none">
            {post.image_url && (
              <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.image_url}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <h1 className="text-4xl font-pirata mb-4 text-eerie-black dark:text-parchment">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-verdigris/10 text-verdigris"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-gray-600 dark:text-light-grey mb-8">
              {new Date(post.created_at).toLocaleDateString()}
            </div>

            <div className="whitespace-pre-wrap">{post.content}</div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}
