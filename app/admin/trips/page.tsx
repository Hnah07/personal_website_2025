import { createClient } from "@/utils/supabase/server";
import TripsCrudTable from "@/components/TripsCrudTable";

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
    <main className="flex flex-col">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-20 mb-8">Trips Admin Page</h1>
        <TripsCrudTable data={data} />
      </div>
    </main>
  );
}
