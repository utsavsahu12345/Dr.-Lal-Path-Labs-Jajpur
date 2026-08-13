import { ArrowRight, ShieldCheck, Stethoscope } from "lucide-react";
import heroLab from "@/assets/hero-lab.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero pt-16 pb-16 lg:pt-20 lg:pb-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
            <ShieldCheck className="h-4 w-4" /> Trusted Healthcare &amp; Diagnostic Services
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
            We Always Put <span className="text-primary">Your Health</span> First
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            DR LAL PATH LABS JAJPUR is dedicated to providing accurate, reliable, and timely diagnostic
            healthcare services with advanced technology and compassionate patient care.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-card transition-transform hover:scale-105"
            >
              Book a Test <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-background px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-accent"
            >
              <Stethoscope className="h-4 w-4" /> View All Services
            </a>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              ["18+", "Years"],
              ["24/7", "Support"],
              ["100%", "Confidential"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-2xl font-extrabold text-navy">{v}</dt>
                <dd className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-scale-in">
          <div className="overflow-hidden rounded-4xl shadow-card">
            <img
              src={heroLab}
              alt="Laboratory technician operating diagnostic equipment at DR Lal Path Labs Jajpur"
              width={1280}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 hidden rounded-2xl bg-background px-5 py-4 shadow-card sm:block">
            <p className="text-sm font-bold text-navy">Home Sample Collection</p>
            <p className="text-xs text-muted-foreground">Available across Jajpur &amp; nearby districts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
