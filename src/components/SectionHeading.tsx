import { Reveal } from "./Reveal";

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {badge ? (
        <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
          {badge}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base text-muted-foreground">{subtitle}</p> : null}
    </Reveal>
  );
}
