import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-20">Admin Dashboard</h1>
        <p>Welcome to the Admin Dashboard page!</p>
        <Link
          href="/admin/trips"
          className="px-3 bg-gradient-to-r from-brilliant-rose to-verdigris text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Go to Trips Admin Page
        </Link>
      </div>
    </main>
  );
}
