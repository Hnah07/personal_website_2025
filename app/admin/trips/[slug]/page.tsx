import { createClient } from "@/utils/supabase/server";
import AddTripForm from "@/components/admin/AddTripForm";

export default async function SingleTripPage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = await createClient();
  const { data, trip, error } = await supabase
    .from("trips")
    .select("*")
    .eq("slug", params.slug)
    .single(); // want anders krijg je een array terug, maar we weten dat er maar 1 trip is met deze slug dus we kunnen .single() gebruiken om direct het object terug te krijgen

  if (error) {
    console.error(error);
    return <p>Something went wrong...</p>;
  }

  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-20">Update this trip</h1>
        <p className="mb-4">
          This is the page for updating the trip with slug: {params.slug}
        </p>
        <AddTripForm trip={trip} />
      </div>
    </main>
  );
}
