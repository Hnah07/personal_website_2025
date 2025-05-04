"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  cover_image: string;
  slug: string;
  created_at: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-pirata mb-8 text-eerie-black dark:text-parchment">
            Loading posts...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-pirata mb-8 text-eerie-black dark:text-parchment">
          Blog Posts
        </h1>

        {posts.length === 0 ? (
          <p className="text-eerie-black dark:text-parchment">
            No blog posts found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <article className="bg-white dark:bg-eerie-black rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 text-eerie-black dark:text-parchment group-hover:text-brilliant-rose transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-light-grey mb-4">
                      {post.excerpt}
                    </p>
                    <time className="text-sm text-verdigris">
                      {new Date(post.created_at).toLocaleDateString()}
                    </time>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
