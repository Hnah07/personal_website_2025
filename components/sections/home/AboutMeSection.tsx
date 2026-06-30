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
          className="flex flex-col max-w-3xl flex-1"
          id="aboutme"
        >
          <h2>About me</h2>
          <p className="pt-8">
            I&apos;m Hannah Casier, curious by nature,{" "}
            <Highlight index={0}>detail-oriented</Highlight> and always
            interested in learning new things. With a background in web
            development and a love for both technology and creativity, I’m
            exploring where my strengths and interests align best.
          </p>
          <p>
            During my free time, I&apos;m a{" "}
            <Highlight index={1}>casual gamer</Highlight> who enjoys playing on
            her retro handheld on the go or at home, an{" "}
            <Highlight index={2}>avid photography enthusiast</Highlight>, a{" "}
            <Highlight index={3}>craft beer aficionado</Highlight>
            always eager to discover unique brews, and a{" "}
            <Highlight index={4}>competitive table tennis</Highlight> player,
            enjoying the challenge and excitement of the game.
          </p>
          <p>
            Currently open to roles where I can combine{" "}
            <Highlight index={5}>analytical thinking</Highlight>,{" "}
            <Highlight index={6}>creativity</Highlight>, and{" "}
            <Highlight index={7}>technology</Highlight>.git
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/cv_hannah_casier.pdf">View cv</PrimaryButton>
            <SecondaryButton href="/aboutMe">More about me...</SecondaryButton>
          </div>
        </motion.div>
        <div className="flex-1">
          <SkillsSection />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
