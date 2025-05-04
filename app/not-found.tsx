import Header from "@/components/layout/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Header />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
      <p className="text-xl md:text-2xl mb-8">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-brilliant-rose to-verdigris text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </div>
  );
}
