"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Web",
      image: "/mockup-resonance.png",
      href: "/webProjects",
    },
    {
      title: "Design",
      image: "/mockup_metal_ipod_wallpaper.jpg",
      href: "#",
    },
    {
      title: "Photography",
      image: "/boottocht.jpg",
      href: "#",
    },
  ];

  return (
    <section id="portfolioSection" className="py-20">
      <div className="flex flex-col items-center">
        <h2 className="mb-8">Portfolio</h2>
        <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative w-[20rem] sm:w-[25rem] md:w-[30rem] h-[20rem] sm:h-[25rem] md:h-[30rem] p-2 rounded-sm group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brilliant-rose via-verdigris to-brilliant-rose rounded-sm"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              />
              <div className="relative w-full h-full bg-white dark:bg-eerie-black rounded-sm overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:grayscale-0"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />
                <Link
                  href={item.href}
                  className="w-full h-full flex flex-col justify-center items-center relative z-10 no-underline"
                >
                  <span className="text-4xl sm:text-5xl font-pirata bg-gradient-to-r from-brilliant-rose to-verdigris bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-300">
                    {item.title}
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
