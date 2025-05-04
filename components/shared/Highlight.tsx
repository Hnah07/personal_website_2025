"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HighlightProps {
  children: ReactNode;
  className?: string;
  index: number;
}

const Highlight = ({ children, className = "", index }: HighlightProps) => {
  return (
    <span className="relative inline-flex">
      <motion.span
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.2,
          ease: "easeOut",
        }}
        className={`absolute inset-0 bg-gradient-to-r from-brilliant-rose/20 to-verdigris/20 rounded-md -z-10 ${className}`}
      />
      <span className="relative z-10 px-0.5">{children}</span>
    </span>
  );
};

export default Highlight;
