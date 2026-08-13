import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { stats } from "@/data/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, visible } = useReveal<HTMLParagraphElement>(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);

  return (
    <p ref={ref} className="text-4xl font-extrabold text-brand-foreground sm:text-5xl">
      {n}
      {suffix}
    </p>
  );
}

export function Statistics() {
  return (
    <section className="bg-gradient-brand py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label}>
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-brand-foreground/85">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
