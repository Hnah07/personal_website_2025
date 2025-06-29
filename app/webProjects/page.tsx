import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Badge from "@/components/shared/Badge";

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

      <Footer />
    </>
  );
};
export default WebProjects;
