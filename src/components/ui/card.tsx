import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
  hover?: boolean;
}

export function Card({ children, className, variant = "light", hover = true }: CardProps) {
  const base = variant === "dark"
    ? "bg-skytree-dark border border-skytree-charcoal"
    : "bg-skytree-white border border-skytree-border";

  const hoverClass = hover
    ? "transition-shadow duration-300 hover:shadow-card-hover"
    : "";

  return (
    <div className={cn(base, hoverClass, className)}>
      {children}
    </div>
  );
}
