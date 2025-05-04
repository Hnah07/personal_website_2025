"use client";

import { PostForm } from "@/components/PostForm";

export default function NewPostPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
      <PostForm action="new" />
    </div>
  );
}
