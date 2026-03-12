import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { createClient } from "@/utils/supabase/server";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default async function TripsBlogPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("trips")
    .select(
      "title, slug, year, start_date, end_date, location_name, country, excerpt, hero_image",
    )
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-20">Trips Blog</h1>

        {Object.entries(tripsByYear).map(([year, trips]) => (
          <div key={year}>
            <h2>{year}</h2>
            {trips.map((trip) => (
              <div key={trip.slug}>
                <h3>{trip.title}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
