import { CalendarCheck, PhoneCall } from "lucide-react";
import { Reveal } from "./Reveal";
import ctaImage from "@/assets/cta-team.jpg";
import { business, telHref } from "@/data/site";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={ctaImage}
        alt="Medical team of doctors and nurses"
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy/85" />
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-28">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            Your Health Deserves the Best Care
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-brand-foreground/85 sm:text-base">
            Don't wait for symptoms to become serious. Regular health checkups and early diagnosis can help you
            take better care of your health.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary shadow-card transition-transform hover:scale-105"
            >
              <CalendarCheck className="h-4 w-4" /> Book Your Test Today
            </a>
            <a
              href={telHref(business.phones[0])}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-foreground/40 px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-foreground/10"
            >
              <PhoneCall className="h-4 w-4" /> Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
