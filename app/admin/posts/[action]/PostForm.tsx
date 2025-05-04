"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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

export default function PostForm({ params }: { params: { action: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<Partial<BlogPost>>({
    title: "",
    content: "",
    image_url: "",
    tags: [],
  });
  const [tagInput, setTagInput] = useState("");

  const isEdit = params.action !== "new";

  useEffect(() => {
    checkAuth();
    if (isEdit) {
      fetchPost();
    } else {
      setLoading(false);
    }
  }, [params.action]);

  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      router.push("/admin/login");
    }
  };

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", params.action)
        .single();

      if (error) throw error;
      if (data) setPost(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      if (isEdit) {
        const { error } = await supabase
          .from("posts")
          .update({
            ...post,
            updated_at: new Date().toISOString(),
          })
          .eq("id", params.action);

        if (error) throw error;
      } else {
        const { error } = await supabase.from("posts").insert({
          ...post,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });

        if (error) throw error;
      }

      router.push("/admin/dashboard");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setSaving(false);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !post.tags?.includes(tagInput.trim())) {
      setPost({
        ...post,
        tags: [...(post.tags || []), tagInput.trim()],
      });
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setPost({
      ...post,
      tags: post.tags?.filter((tag) => tag !== tagToRemove) || [],
    });
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-24 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-pirata mb-8 text-eerie-black dark:text-parchment">
              Loading...
            </h1>
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
          <h1 className="text-4xl font-pirata mb-8 text-eerie-black dark:text-parchment">
            {isEdit ? "Edit Post" : "New Post"}
          </h1>

          {error && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-eerie-black dark:text-parchment mb-1"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-eerie-black text-eerie-black dark:text-parchment"
                required
              />
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-eerie-black dark:text-parchment mb-1"
              >
                Content
              </label>
              <textarea
                id="content"
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                rows={10}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-eerie-black text-eerie-black dark:text-parchment"
                required
              />
            </div>

            <div>
              <label
                htmlFor="image_url"
                className="block text-sm font-medium text-eerie-black dark:text-parchment mb-1"
              >
                Image URL
              </label>
              <input
                id="image_url"
                type="url"
                value={post.image_url}
                onChange={(e) =>
                  setPost({ ...post, image_url: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-eerie-black text-eerie-black dark:text-parchment"
              />
            </div>

            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-eerie-black dark:text-parchment mb-1"
              >
                Tags
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  id="tags"
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-eerie-black text-eerie-black dark:text-parchment"
                  placeholder="Add a tag"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-4 py-2 rounded-full bg-verdigris text-eerie-black hover:bg-brilliant-rose transition-colors duration-300"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-verdigris/10 text-verdigris flex items-center gap-1"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="text-verdigris hover:text-red-500"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => router.push("/admin/dashboard")}
                className="px-4 py-2 rounded-full outline outline-2 outline-verdigris -outline-offset-2 text-verdigris dark:text-parchment dark:outline-parchment transition-all duration-300 hover:text-brilliant-rose hover:bg-verdigris hover:outline-brilliant-rose"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-brilliant-rose to-verdigris text-eerie-black transition-colors duration-300 hover:text-saffron hover:bg-verdigris disabled:opacity-50"
              >
                {saving ? "Saving..." : isEdit ? "Update Post" : "Create Post"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
