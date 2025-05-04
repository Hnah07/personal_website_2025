import { ReactNode } from "react";
import Link from "next/link";

interface SecondaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  isExternal?: boolean;
}

const SecondaryButton = ({
  href,
  children,
  className = "",
  isExternal = false,
}: SecondaryButtonProps) => {
  const baseStyles =
    "inline-block text-sm md:text-base px-4 py-2 rounded-full outline outline-2 outline-verdigris -outline-offset-2 text-verdigris dark:text-parchment dark:outline-parchment transition-all duration-300 hover:text-brilliant-rose hover:bg-verdigris hover:outline-brilliant-rose";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseStyles} ${className}`}>
      {children}
    </Link>
  );
};

export default SecondaryButton;
