import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  target,
  rel,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-sans transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary:
      "bg-skytree-gold text-skytree-black hover:bg-skytree-gold-light",
    secondary:
      "bg-skytree-dark text-skytree-white hover:bg-skytree-charcoal",
    outline:
      "border border-skytree-gold text-skytree-gold hover:bg-skytree-gold hover:text-skytree-black",
    ghost:
      "text-skytree-gray hover:text-skytree-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs tracking-wider uppercase",
    md: "px-6 py-3 text-sm tracking-wider uppercase",
    lg: "px-8 py-4 text-sm tracking-wider uppercase",
  };

  const classes = cn(base, variants[variant], sizes[size], "rounded-sm", className);

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
