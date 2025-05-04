import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogPostContent from "@/components/BlogPostContent";
import { createClient } from "@supabase/supabase-js";

// Create Supabase client for server-side operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Mark as server component
export const dynamic = "force-static";

// Fetch all post IDs during build time
export async function generateStaticParams() {
  try {
    const { data: posts, error } = await supabase
      .from("posts")
      .select("id")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
      return [];
    }

    // Return an array of objects with the id parameter for each post
    return posts.map((post) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

// Add metadata export
export const metadata = {
  title: "Blog Post",
  description: "View a blog post",
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 px-4">
        <BlogPostContent postId={params.id} />
      </div>
      <Footer />
    </>
  );
}
