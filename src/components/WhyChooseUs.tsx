import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { whyChoose } from "@/data/site";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-y bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Why Choose DR LAL PATH LABS JAJPUR?"
          subtitle="Accuracy, privacy and patient comfort guide everything we do."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <article className="group flex h-full gap-5 rounded-3xl bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-brand-foreground">
                  <f.icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-navy">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
