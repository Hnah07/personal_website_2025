import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Resonance = () => {
  return (
    <>
      <Header />
      <h1 className="text-center pt-20">Resonance</h1>
      <p className="lg:w-1/2 sm:w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        Resonance is a full-stack social concert-tracking app that lets you
        check in to live shows, connect with friends, and relive your favorite
        music moments.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="https://github.com/Hnah07/resonance-fe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          <Github size={16} />
          Frontend
        </a>
        <a
          href="https://github.com/Hnah07/resonance-be"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          <Github size={16} />
          Backend
        </a>
        <a
          href="https://resonance-lake.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brilliant-rose text-white px-4 py-2 rounded-lg hover:bg-verdigris transition-colors duration-300"
        >
          Live Site
          <ExternalLink size={16} />
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Resonance;
