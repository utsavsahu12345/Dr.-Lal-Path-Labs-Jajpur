import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { serviceAreas } from "@/data/site";

export function ServiceAreas() {
  return (
    <section className="section-y bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Service Areas"
          title="Diagnostic & Nursing Care Across Odisha"
          subtitle="From Jajpur Town to Cuttack and Bhubaneswar, our team brings pathology and nursing care closer to home."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 80}>
              <article className="h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <a.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
