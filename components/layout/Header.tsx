"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../ThemeToggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === "/") {
      // If we're on the home page, scroll to the section
      const element = document.getElementById("portfolioSection");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      router.push("/#portfolioSection");
    }

    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Portfolio", href: "#portfolioSection", isPortfolio: true },
    { name: "Blog", href: "/blog", isPortfolio: false },
    { name: "About", href: "/about", isPortfolio: false },
    { name: "Contact", href: "/contact", isPortfolio: false },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#1b1b1baa] backdrop-blur">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-[5px]">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Memoji-Hannah.png"
              alt="avatar Hannah"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden sm:block">
            <ul className="flex">
              {navItems.map((item) => (
                <li key={item.name} className="ml-6 text-base relative group">
                  {item.isPortfolio ? (
                    <button
                      onClick={handlePortfolioClick}
                      className="text-eerie-black dark:text-parchment no-underline relative transition-colors duration-300 hover:text-brilliant-rose bg-transparent border-none cursor-pointer"
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-[5px] h-[2px] w-full scale-x-0 opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100 origin-left bg-gradient-to-r from-brilliant-rose to-verdigris"></span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-eerie-black dark:text-parchment no-underline relative transition-colors duration-300 hover:text-brilliant-rose"
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-[5px] h-[2px] w-full scale-x-0 opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100 origin-left bg-gradient-to-r from-brilliant-rose to-verdigris"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="sm:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative">
                <span
                  className={`absolute w-6 h-0.5 bg-eerie-black dark:bg-parchment transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-2" : "top-0"
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-eerie-black dark:bg-parchment transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "top-2"
                  }`}
                />
                <span
                  className={`absolute w-6 h-0.5 bg-eerie-black dark:bg-parchment transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-2" : "top-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden fixed inset-0 top-[50px] bg-white dark:bg-eerie-black z-40"
            style={{ height: "calc(100vh - 50px)" }}
          >
            <nav className="h-full flex items-center justify-center">
              <ul className="flex flex-col items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.isPortfolio ? (
                      <button
                        onClick={handlePortfolioClick}
                        className="text-eerie-black dark:text-parchment text-2xl block py-2 hover:text-brilliant-rose transition-colors duration-300 bg-transparent border-none cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-eerie-black dark:text-parchment text-2xl block py-2 hover:text-brilliant-rose transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
