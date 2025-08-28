import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AboutMe() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pt-20">About Me</h1>
        <p>
          <i>Greetings earthling!</i>
        </p>
        <p>My name is Hannah and I welcome you to my corner of the internet.</p>
      </div>
      <Footer />
    </main>
  );
}
