"use client";

import { PostForm } from "@/components/PostForm";

export function generateStaticParams() {
  return [
    { action: "new" },
    { action: "edit" },
    { action: "1" },
    { action: "2" },
    { action: "3" },
  ].map((params) => ({
    ...params,
    path: `/admin/posts/${params.action}`,
  }));
}

export default function PostFormPage({
  params,
}: {
  params: { action: string };
}) {
  const isNewPost = params.action === "new";
  const postId = isNewPost ? undefined : parseInt(params.action, 10);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">
        {isNewPost ? "Create New Post" : "Edit Post"}
      </h1>
      <PostForm action={isNewPost ? "new" : "edit"} postId={postId} />
    </div>
  );
}
