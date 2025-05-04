"use client";

import { useEffect, useRef } from "react";

const Hero = () => {
  const tiltRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const initTilt = async () => {
      const VanillaTilt = (await import("vanilla-tilt")).default;
      if (tiltRef.current) {
        VanillaTilt.init(tiltRef.current, {
          max: 25,
          speed: 400,
          glare: false,
          "max-glare": 0,
        });
      }
    };

    initTilt();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-brilliant-rose/70 to-verdigris/70 -z-10" />
      <div className="absolute inset-0 bg-[url('/noise_gradient.svg')] bg-repeat opacity-10 mix-blend-multiply dark:opacity-40 dark:mix-blend-soft-light -z-10" />
      <div className="absolute inset-0 bg-[url('/noise_gradient.svg')] bg-repeat opacity-5 mix-blend-overlay dark:opacity-20 dark:mix-blend-overlay -z-10" />

      <h1
        ref={tiltRef}
        className="animate-fade-in-left m-8 text-4xl md:text-4xl lg:text-5xl font-pirata"
      >
        <span className="bg-gradient-to-r from-brilliant-rose to-verdigris bg-clip-text text-transparent">
          Hey, I&apos;m Hannah 🤘
        </span>
      </h1>

      <p className="animate-fade-in-right m-8 text-xl md:text-xl xs:text-center">
        A Full Stack Developer Student
      </p>

      <p className="animate-fade-in-left m-8 text-xl md:text-xl text-brilliant-rose font-extralight">
        📍 Mortsel, Belgium
      </p>
    </div>
  );
};

export default Hero;
