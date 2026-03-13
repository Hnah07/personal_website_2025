import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { createClient } from "@/utils/supabase/server";
import TripCard from "@/components/TripCard";
import HeroBanner from "@/components/HeroBanner";

export default async function TripsBlogPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("trips")
    .select(
      "id, title, slug, year, month, start_date, end_date, location_name, location_type, country, excerpt, hero_image, published, created_at, updated_at",
    )
    .eq("published", true)
    .order("year", { ascending: false });
  if (error) {
    console.error(error);
    return <p>Something went wrong...</p>;
  }

  const tripsByYear = data.reduce(
    (acc, trip) => {
      if (!acc[trip.year]) acc[trip.year] = [];
      acc[trip.year].push(trip);
      return acc;
    },
    {} as Record<number, typeof data>,
  );

  return (
    <main className="flex flex-col items-center">
      <Header />
      <HeroBanner trips={data} />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-16 mb-8">Trips Blog</h1>

        {Object.entries(tripsByYear).map(([year, trips]) => (
          <div key={year}>
            <h2 className="mb-4">{year}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trips.map((trip) => (
                <div key={trip.slug}>
                  <TripCard
                    heroImage={trip.hero_image}
                    title={trip.title}
                    location={trip.location_name}
                    country={trip.country}
                    excerpt={trip.excerpt}
                    startDate={trip.start_date}
                    endDate={trip.end_date}
                    slug={trip.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
