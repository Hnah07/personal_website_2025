"use client";

import { PostForm } from "@/components/PostForm";

export default function EditPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
      <PostForm action="edit" postId={params.id} />
    </div>
  );
}
