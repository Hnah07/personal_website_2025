import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Badge from "@/components/shared/Badge";
import Image from "next/image";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10 bg-gradient-to-r from-brilliant-rose/20 to-verdigris/20 dark:from-brilliant-rose/15 dark:to-verdigris/15 p-8 rounded-lg shadow-md border border-brilliant-rose/10 dark:border-verdigris/10">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Resonance</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Resonance is a full stack web application designed for music
              lovers who enjoy attending live concerts and want to track their
              experiences. The platform allows users to check in to concerts,
              select which artists they saw, upload photos, and view a timeline
              of their live music journey. It also includes social features such
              as following other users, viewing friends&apos; check-ins, and
              discovering upcoming events nearby. The app is built with a
              Laravel API backend and a Next.js frontend, and supports user
              authentication, geolocation-based filtering, and personalized
              statistics. Resonance combines my passion for music and technology
              into a fully functional, scalable web app.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/resonance-og-image.png"
              alt="Resonance App Screenshot"
              className="rounded-lg shadow-lg max-w-full h-auto w-full"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default WebProjects;
