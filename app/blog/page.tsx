"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

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

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL");
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Supabase error:", error);
          setError(error.message);
          return;
        }

        setPosts(data || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError(error instanceof Error ? error.message : "An error occurred");
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

  if (error) {
    return (
      <div className="min-h-screen pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-pirata mb-8 text-eerie-black dark:text-parchment">
            Error
          </h1>
          <p className="text-red-500">{error}</p>
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
              <Link href={`/blog/${post.id}`} key={post.id} className="group">
                <article className="bg-white dark:bg-eerie-black rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image_url}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 text-eerie-black dark:text-parchment group-hover:text-brilliant-rose transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-light-grey mb-4 line-clamp-3">
                      {post.content}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-verdigris/10 text-verdigris"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
