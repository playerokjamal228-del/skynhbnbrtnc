import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  variant?: "hero" | "floor" | "experience" | "highlight";
  children?: React.ReactNode;
}

const gradients: Record<string, string> = {
  hero: "linear-gradient(160deg, #0a0a0a 0%, #0d1b2a 25%, #1b2838 50%, #162447 75%, #1f4068 100%)",
  floor: "linear-gradient(145deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #1a3a5c 100%)",
  experience: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 30%, #1a1a2e 60%, #0a0a0a 100%)",
  highlight: "linear-gradient(140deg, #1a1a2e 0%, #16213e 50%, #1b3a5c 100%)",
};

export function ImagePlaceholder({
  className,
  variant = "floor",
  children,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ background: gradients[variant] }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-skytree-gold/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-skytree-blue/10 blur-3xl" />
      </div>
      {children}
    </div>
  );
}
