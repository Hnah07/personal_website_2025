import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

const Badge = ({
  children,
  className = "",
  variant = "default",
  size = "md",
}: BadgeProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full";

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const variantClasses = {
    default:
      "bg-gradient-to-r from-brilliant-rose/40 to-verdigris/40 dark:from-brilliant-rose/30 dark:to-verdigris/30 text-eerie-black dark:text-parchment shadow-sm",
    outline: "border border-brilliant-rose/50 text-brilliant-rose",
  };

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
