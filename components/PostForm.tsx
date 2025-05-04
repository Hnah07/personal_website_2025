"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface PostFormProps {
  action: "new" | "edit";
  postId?: number;
}

export function PostForm({ action, postId }: PostFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    if (action === "edit" && postId) {
      fetchPost();
    }
  }, [action, postId]);

  const checkAuth = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
    console.log("Current session:", session);
    if (error) {
      console.error("Auth error:", error);
      router.push("/admin/login");
      return;
    }
    if (!session) {
      console.error("No session found");
      router.push("/admin/login");
      return;
    }
  };

  const fetchPost = async () => {
    try {
      const { data: post, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", postId)
        .single();

      if (error) throw error;
      if (post) {
        setTitle(post.title);
        setContent(post.content);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "blog_preset"
    );
    formData.append(
      "cloud_name",
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!
    );

    console.log("Uploading to Cloudinary with:", {
      uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    });

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("Cloudinary error response:", errorData);
      throw new Error(
        `Cloudinary upload failed: ${response.statusText}${
          errorData ? ` - ${JSON.stringify(errorData)}` : ""
        }`
      );
    }

    const data = await response.json();
    if (!data.secure_url) {
      throw new Error("No secure URL received from Cloudinary");
    }

    return data.secure_url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check authentication before proceeding
      const {
        data: { session },
        error: authError,
      } = await supabase.auth.getSession();
      console.log("Session during submit:", session);

      if (authError) {
        console.error("Auth error during submit:", authError);
        throw new Error("Authentication error");
      }

      if (!session) {
        console.error("No session during submit");
        throw new Error("Not authenticated");
      }

      let imageUrl = "";

      if (image) {
        try {
          imageUrl = await uploadImage(image);
          console.log("Image uploaded successfully:", imageUrl);
        } catch (uploadError) {
          console.error("Image upload error:", uploadError);
          throw new Error(
            `Failed to upload image: ${
              uploadError instanceof Error
                ? uploadError.message
                : "Unknown error"
            }`
          );
        }
      }

      const postData = {
        title,
        content,
        image_url: imageUrl || undefined,
        updated_at: new Date().toISOString(),
        tags: [],
        user_id: session.user.id,
      };

      console.log("Saving post data:", postData);

      if (action === "new") {
        const { data, error } = await supabase
          .from("posts")
          .insert([postData])
          .select()
          .single();

        if (error) {
          console.error("Supabase insert error:", error);
          throw new Error(`Failed to create post: ${error.message}`);
        }
        console.log("Created post:", data);
      } else if (action === "edit" && postId) {
        const { data, error } = await supabase
          .from("posts")
          .update(postData)
          .eq("id", postId)
          .select()
          .single();

        if (error) {
          console.error("Supabase update error:", error);
          throw new Error(`Failed to update post: ${error.message}`);
        }
        console.log("Updated post:", data);
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (error) {
      console.error("Error details:", error);
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      console.error("Error saving post:", errorMessage);
      alert(`Failed to save post: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={10}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Featured Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => router.push("/admin/dashboard")}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {loading
            ? "Saving..."
            : action === "new"
            ? "Create Post"
            : "Update Post"}
        </button>
      </div>
    </form>
  );
}
