import { createClient } from "@/utils/supabase/server";

export default async function CRUDPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("trips")
    .select("*")
    .order("year", { ascending: false });

  if (error) {
    console.error(error);
    return <p>Something went wrong...</p>;
  }
  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-20">Trips Admin Page</h1>
        <ul>
          {data.map((trip) => (
            <li key={trip.id}>
              {trip.title} - {trip.year}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
