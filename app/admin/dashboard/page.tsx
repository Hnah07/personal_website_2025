"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

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

export default function DashboardPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    fetchPosts();
  }, []);

  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      router.push("/admin/login");
    }
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (error) throw error;
      fetchPosts();
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
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
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-pirata text-eerie-black dark:text-parchment">
              Manage Posts
            </h1>
            <div className="space-x-4">
              <Link
                href="/admin/posts/new"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-brilliant-rose to-verdigris text-eerie-black transition-colors duration-300 hover:text-saffron hover:bg-verdigris"
              >
                New Post
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full outline outline-2 outline-verdigris -outline-offset-2 text-verdigris dark:text-parchment dark:outline-parchment transition-all duration-300 hover:text-brilliant-rose hover:bg-verdigris hover:outline-brilliant-rose"
              >
                Logout
              </button>
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg mb-4">
              {error}
            </div>
          )}

          <div className="bg-white dark:bg-eerie-black rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Tags
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-eerie-black dark:text-parchment">
                        {post.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(post.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-verdigris/10 text-verdigris"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="text-verdigris hover:text-brilliant-rose mr-4"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
