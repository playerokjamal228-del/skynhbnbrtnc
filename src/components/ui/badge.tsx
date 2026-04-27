import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "light";
  className?: string;
}

export function Badge({ children, variant = "gold", className }: BadgeProps) {
  const variants = {
    gold: "bg-skytree-gold/10 text-skytree-gold border border-skytree-gold/30",
    dark: "bg-skytree-dark text-skytree-white border border-skytree-charcoal",
    light: "bg-skytree-light text-skytree-gray border border-skytree-border",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs tracking-wider uppercase font-sans",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
