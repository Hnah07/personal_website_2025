import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TripsBlogPage() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-20">Trips Blog</h1>
        <p>Welcome to the Trips Blog page!</p>
      </div>
      <Footer />
    </main>
  );
}
