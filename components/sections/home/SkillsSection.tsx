"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const skills = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Next.js",
  "PHP",
  "DOM manipulation",
  "CRUD",
  "Laravel",
  "Drupal",
  "SiteManager",
  "Postman",
  "MySQL",
  "MongoDB",
  "SQLite",
  "Postgress",
  "REST APIs",
  "Docker",
  "Vite",
  "Git",
  "GitHub",
  "Agile",
  "Power BI",
  "DAX",
  "Trello",
  "Figma",
  "Penpot",
  "Photoshop",
  "Lightroom",
];

const SkillsSection = () => {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    skillRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 8,
          speed: 300,
          glare: true,
          "max-glare": 0.1,
          scale: 1.02,
        });
      }
    });
  }, []);

  return (
    <motion.div
      id="SkillsSection"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center h-[60vh]"
    >
      <h2>(Acquiring) skills</h2>
      <ul className="pt-8 flex flex-row flex-wrap justify-center cursor-default gap-2">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeOut",
            }}
          >
            <div
              ref={(el) => {
                skillRefs.current[index] = el;
              }}
              className="bg-gradient-to-r from-brilliant-rose/40 to-verdigris/40 dark:from-brilliant-rose/30 dark:to-verdigris/30 px-3 py-1.5 rounded-sm text-eerie-black dark:text-parchment text-sm md:text-base transform-gpu shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {skill}
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillsSection;
