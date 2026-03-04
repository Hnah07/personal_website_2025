import { createClient } from "@/utils/supabase/server";
import TripsCrudTable from "@/components/admin/TripsCrudTable";
import Header from "@/components/layout/Header";
import Link from "next/link";

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
      <Header />
      {/* add a back link to the admin dashboard */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-20 mb-8">Trips Admin Page</h1>
        <Link
          href="/admin"
          className="ml-4 my-4 flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back to Admin Dashboard
        </Link>
        <TripsCrudTable data={data} />
      </div>
    </main>
  );
}
