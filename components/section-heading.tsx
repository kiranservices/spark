import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  tone = "default",
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("mb-3 text-xs font-bold uppercase tracking-[0.18em]", isLight ? "text-teal" : "text-corporate")}>
        {eyebrow}
      </p>
      <h2
        className={cn(
          "text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
          isLight ? "text-white" : "text-navy dark:text-white",
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p className={cn("mt-5 text-base leading-8 sm:text-lg", isLight ? "text-white/70" : "text-muted-foreground")}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
