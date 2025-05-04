import PostForm from "./PostForm";

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
  return <PostForm params={params} />;
}
