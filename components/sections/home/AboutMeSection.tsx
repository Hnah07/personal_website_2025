"use client";

import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";
import Highlight from "@/components/shared/Highlight";
import { motion } from "framer-motion";
import SkillsSection from "./SkillsSection";

const AboutMeSection = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col max-w-3xl"
          id="aboutme"
        >
          <h2>About me</h2>
          <p className="pt-8">
            I&apos;m Hannah Casier, a recently graduated{" "}
            <Highlight index={0}>Full Stack Developer</Highlight> with a deep
            passion for <Highlight index={1}>technology and design</Highlight>.
            I would love to create
            <Highlight index={2}>
              beautiful and accessible websites
            </Highlight>{" "}
            that combine aesthetics with seamless user experiences.
          </p>
          <p>
            Beyond coding, I&apos;m a{" "}
            <Highlight index={3}>casual gamer</Highlight> who enjoys playing on
            her retro handheld on the go or at home, an{" "}
            <Highlight index={4}>avid photography enthusiast</Highlight>
            capturing life&apos;s moments through my lens, a{" "}
            <Highlight index={5}>craft beer aficionado</Highlight>
            always eager to discover unique brews, and I&apos;ve recently
            started playing{" "}
            <Highlight index={6}>competitive table tennis</Highlight>, enjoying
            the challenge and excitement of the game.
          </p>
          <p>
            Currently, I&apos;m looking for my first job as a{" "}
            <Highlight index={7}>Full Stack Developer</Highlight>.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/cv_hannah_casier.pdf">View cv</PrimaryButton>
            <SecondaryButton href="/aboutMe">More about me...</SecondaryButton>
          </div>
        </motion.div>
        <SkillsSection />
      </div>
    </section>
  );
};

export default AboutMeSection;
