import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  light = false,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-12", centered && "text-center", className)}>
      <h2
        className={cn(
          "font-serif text-[2rem] leading-[1.05] md:text-4xl lg:text-5xl tracking-[0.04em] md:tracking-wide",
          light ? "text-skytree-white" : "text-skytree-black"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 text-xs tracking-[0.18em] uppercase md:text-base md:tracking-widest",
            light ? "text-skytree-gold" : "text-skytree-gold"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
