import AddTripForm from "@/components/admin/AddTripForm";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "Add Trip - Admin",
};

export default function AddTripPage() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-20">Add Trip Page</h1>
        <p>Welcome to the Add Trip page!</p>
        <AddTripForm />
      </div>
    </main>
  );
}
