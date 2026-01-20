"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { uploadToCloudinary } from "@/lib/cloudinary";

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
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export default function BlogPostContent({ postId }: { postId: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchPost(postId);
  }, [postId]);

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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !post) return;

    try {
      setUploading(true);
      const imageUrl = await uploadToCloudinary(file);

      const { error } = await supabase
        .from("posts")
        .update({ image_url: imageUrl })
        .eq("id", post.id);

      if (error) throw error;
      setPost({ ...post, image_url: imageUrl });
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to upload image",
      );
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-pirata mb-8 text-eerie-black dark:text-parchment">
          Loading...
        </h1>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-pirata mb-8 text-eerie-black dark:text-parchment">
          Error
        </h1>
        <p className="text-red-500">{error || "Post not found"}</p>
      </div>
    );
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        {post.image_url ? (
          <Image
            src={post.image_url}
            alt={post.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <label className="cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                disabled={uploading}
              />
              <span className="text-gray-500 dark:text-gray-400">
                {uploading ? "Uploading..." : "Click to upload image"}
              </span>
            </label>
          </div>
        )}
      </div>

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
  );
}
