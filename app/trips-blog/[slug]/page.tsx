import { createClient } from "@/utils/supabase/server";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/HeroBanner";
import formatDate from "@/utils/formatDate";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: trip } = await supabase
    .from("trips")
    .select("title, excerpt, hero_image, published_at")
    .eq("slug", slug)
    .single();

  return {
    title: trip?.title,
    description: trip?.excerpt,
    authors: [{ name: "Hannah Casier" }],
    openGraph: {
      title: trip?.title,
      description: trip?.excerpt,
      images: [trip?.hero_image ?? ""],
      type: "article",
      publishedTime: trip?.published_at,
    },
    twitter: {
      card: "summary_large_image",
      title: trip?.title,
      description: trip?.excerpt,
      images: [trip?.hero_image ?? ""],
    },
    alternates: {
      canonical: `https://hannahc.be/trips-blog/${slug}`,
    },
  };
}

export default async function TripView({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: trip, error } = await supabase
    .from("trips")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(error);
    return <p>Something went wrong...</p>;
  }

  return (
    <main className="flex flex-col items-center">
      <Header />
      <HeroBanner trip={trip} />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-20">{trip.title}</h1>
        <p>
          {trip.start_date === trip.end_date
            ? formatDate(trip.start_date.toString(), true)
            : `${formatDate(trip.start_date.toString(), true)} - ${formatDate(trip.end_date!.toString(), true)}`}
        </p>
        <p>This is going to be a trip!</p>
      </div>
      <Footer />
    </main>
  );
}
