"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { photographyThemes, type PhotographyTheme } from "@/lib/portfolio";

const themeOrder: PhotographyTheme[] = ["beer-food", "events", "travel-nature"];

const socialLinks = [
  {
    href: "https://www.instagram.com/hnah07/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/in/hannah-casier-a254985a/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "https://github.com/Hnah07", label: "GitHub", icon: Github },
];

export default function PhotographyPortfolioPage() {
  const [activeTheme, setActiveTheme] = useState<PhotographyTheme>("beer-food");
  const activeCollection = photographyThemes[activeTheme];

  return (
    <main className="min-h-screen bg-[#f8f7f3] text-eerie-black transition-colors dark:bg-eerie-black dark:text-parchment lg:flex">
      <aside className="flex min-h-0 flex-col border-b border-eerie-black/15 px-6 py-6 dark:border-parchment/15 lg:fixed lg:inset-y-0 lg:w-[22rem] lg:border-b-0 lg:border-r lg:px-8 lg:py-8">
        <div className="flex items-start justify-between gap-4">
          <Link href="/" className="no-underline text-inherit">
            <p className="m-0 font-pirata text-4xl leading-none text-brilliant-rose">
              Hannah Casier
            </p>
            <p className="mt-2 mb-0 text-xs font-medium uppercase tracking-[0.16em] text-verdigris">
              Photography
            </p>
          </Link>
          <div className="mt-1.5">
            <ThemeToggle />
          </div>
        </div>

        <p className="my-8 max-w-xs text-sm leading-6 text-eerie-black/75 dark:text-parchment/75">
          Photos of people, places, and everything in between. <br />
          <br />
          Currently volunteering as photographer for the municipality of{" "}
          <a
            href="https://www.lint.be/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Lint</b>
          </a>
          , and co-founder/photographer of{" "}
          <a
            href="https://beersbites.brussels"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Beers &apos;n&apos; Bites in Brussels</b>
          </a>{" "}
          (a blog about craft beer & food in Brussels).
        </p>

        <nav aria-label="Photography themes">
          <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-3 p-0 lg:flex-col lg:gap-1">
            {themeOrder.map((theme) => {
              const isActive = theme === activeTheme;
              return (
                <li key={theme}>
                  <button
                    type="button"
                    onClick={() => setActiveTheme(theme)}
                    aria-current={isActive ? "page" : undefined}
                    className={`border-b-2 bg-transparent py-1 text-left text-sm transition-colors focus:outline-none ${
                      isActive
                        ? "border-brilliant-rose text-brilliant-rose"
                        : "border-transparent text-eerie-black/70 hover:text-verdigris dark:text-parchment/70"
                    }`}
                  >
                    {photographyThemes[theme].title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-8 lg:mt-auto">
          <Link
            href="/#follow"
            className="inline-flex bg-eerie-black px-4 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-brilliant-rose dark:bg-parchment dark:text-eerie-black dark:hover:bg-verdigris"
          >
            Get in touch
          </Link>
          <div className="mt-6 hidden items-center gap-4 lg:flex">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-eerie-black transition-colors hover:text-brilliant-rose dark:text-parchment"
              >
                <Icon size={19} strokeWidth={1.7} />
              </a>
            ))}
          </div>
          <p className="mb-0 mt-6 hidden text-xs text-eerie-black/55 dark:text-parchment/55 lg:block">
            {new Date().getFullYear()} Hannah Casier
          </p>
        </div>
      </aside>

      <section
        className="min-w-0 lg:ml-[22rem] lg:flex lg:min-h-dvh lg:w-[calc(100%-22rem)] lg:items-center"
        aria-live="polite"
      >
        {activeCollection.photos.length > 0 ? (
          <div className="flex flex-col gap-1 p-1 lg:h-[min(calc((100vw-22rem)/1.5),calc(100dvh-4rem))] lg:flex-row lg:overflow-x-auto lg:overflow-y-hidden lg:p-0 lg:snap-x lg:snap-mandatory">
            {activeCollection.photos.map((photo) => (
              <figure
                key={photo.src}
                className="relative m-0 w-full flex-none overflow-hidden bg-light-grey dark:bg-eerie-black lg:h-full lg:w-auto lg:snap-start"
                style={{ aspectRatio: photo.aspectRatio }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1023px) 100vw, calc(100vw - 22rem)"
                  className="object-contain"
                />
              </figure>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[46svh] items-end p-6 sm:p-10 lg:min-h-screen lg:p-12">
            <div>
              <p className="m-0 text-xs font-medium uppercase tracking-[0.16em] text-verdigris">
                {activeCollection.title}
              </p>
              <h1 className="mt-3 bg-none font-poppins text-3xl font-medium text-eerie-black dark:text-parchment">
                {activeCollection.description}
              </h1>
              <p className="mb-0 max-w-md text-sm text-eerie-black/65 dark:text-parchment/65">
                New images will appear here soon.
              </p>
            </div>
          </div>
        )}
      </section>

      <footer className="px-6 py-8 text-center lg:hidden">
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-eerie-black transition-colors hover:text-brilliant-rose dark:text-parchment"
            >
              <Icon size={19} strokeWidth={1.7} />
            </a>
          ))}
        </div>
        <p className="mb-0 mt-6 text-xs text-eerie-black/55 dark:text-parchment/55">
          {new Date().getFullYear()} Hannah Casier
        </p>
      </footer>
    </main>
  );
}
