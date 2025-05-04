import { ReactNode } from "react";
import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  isExternal?: boolean;
}

const PrimaryButton = ({
  href,
  children,
  className = "",
  isExternal = false,
}: PrimaryButtonProps) => {
  const baseStyles =
    "inline-block text-sm md:text-base px-4 py-2 rounded-full bg-gradient-to-r from-brilliant-rose to-verdigris text-eerie-black transition-colors duration-300 hover:text-saffron hover:bg-verdigris";

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

export default PrimaryButton;
