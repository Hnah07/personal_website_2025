import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Badge from "@/components/shared/Badge";
import Image from "next/image";
import Link from "next/link";

const WebProjects = () => {
  const technologies = [
    "React, Next.js & TypeScript",
    "Laravel & PHP",
    "Node.js & Express",
    "Database Design",
  ];

  return (
    <>
      <Header />
      <h1 className="text-center pt-20">Full Stack Developer</h1>
      <p className="lg:w-1/2 sm:w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        I craft digital experiences that bridge the gap between beautiful design
        and powerful functionality. Specializing in modern web technologies to
        build scalable, user-focused applications.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {technologies.map((tech) => (
          <Badge key={tech} size="lg">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/webProjects/resonance" className="block cursor-pointer">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10 bg-gradient-to-r from-brilliant-rose/20 to-verdigris/20 dark:from-brilliant-rose/15 dark:to-verdigris/15 p-8 rounded-lg shadow-md border border-brilliant-rose/10 dark:border-verdigris/10 transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] hover:border-brilliant-rose/30 dark:hover:shadow-[0_0_30px_rgba(20,184,166,0.2)] dark:hover:border-verdigris/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-brilliant-rose/0 via-brilliant-rose/3 to-verdigris/0 dark:from-brilliant-rose/0 dark:via-verdigris/3 dark:to-verdigris/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-brilliant-rose/20 via-verdigris/20 to-brilliant-rose/20 bg-[length:200%_200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
            <div className="absolute inset-[2px] rounded-lg bg-gradient-to-r from-brilliant-rose/20 to-verdigris/20 dark:from-brilliant-rose/15 dark:to-verdigris/15"></div>
            <div className="space-y-4 relative z-10">
              <h2 className="text-4xl font-bold">Resonance</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                A full stack web application for music lovers to track their
                live concert experiences. Users can check in to concerts, select
                artists they saw, upload photos, and view their music journey
                timeline. Built as my final project for the one-year Full Stack
                Developer course, featuring social features, geolocation
                filtering, and personalized statistics.
              </p>
              <p className="text-xs text-brilliant-rose font-medium">
                🚧 Currently a Proof of Concept (POC) - Work in Progress 🚧
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>Laravel</Badge>
                <Badge>Next.js</Badge>
                <Badge>Vercel</Badge>
                <Badge>Digital Ocean</Badge>
                <Badge>MariaDB</Badge>
              </div>
            </div>
            <div className="flex justify-center md:justify-end relative z-10">
              <Image
                src="/resonance-og-image.png"
                alt="Resonance App Screenshot"
                className="rounded-lg shadow-lg max-w-full h-auto w-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};
export default WebProjects;
