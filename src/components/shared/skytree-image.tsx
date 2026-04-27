import Image from "next/image";

interface SkytreeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  variant?: "hero" | "floor" | "experience" | "highlight";
}

export function SkytreeImage({
  src,
  alt,
  fill,
  className,
  sizes,
  priority,
  variant = "floor",
}: SkytreeImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      quality={variant === "hero" ? 88 : 82}
    />
  );
}
