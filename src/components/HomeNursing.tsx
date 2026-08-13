import { PhoneCall } from "lucide-react";
import { Reveal } from "./Reveal";
import nursing from "@/assets/home-nursing.jpg";
import { business, telHref } from "@/data/site";

const points = [
  "Elderly and post-operative patient care",
  "Wound dressing and injections at home",
  "Chronic illness management support",
  "Strict hygiene and safety protocols",
];

export function HomeNursing() {
  return (
    <section id="home-nursing" className="section-y bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
            Care at Your Doorstep
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Home Nursing Services in Jajpur
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              At DR Lal PathLabs Jajpur, we are committed to delivering professional healthcare services at your
              doorstep with reliable and compassionate home nursing services in Jajpur.
            </p>
            <p>
              Our experienced nursing professionals provide personalized medical care for elderly patients,
              post-operative recovery, chronic illness management, wound dressing, medication administration, and
              general patient assistance.
            </p>
            <p>
              We understand that quality healthcare should be accessible and comfortable, allowing patients to
              recover in their own homes while receiving expert medical attention.
            </p>
            <p>
              Our team follows strict hygiene protocols and ensures every patient receives safe, compassionate, and
              personalized care according to their healthcare needs.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm font-medium text-navy">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" />
                {p}
              </li>
            ))}
          </ul>
          <a
            href={telHref(business.phones[1])}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-card transition-transform hover:scale-105"
          >
            <PhoneCall className="h-4 w-4" /> Call for Home Nursing
          </a>
        </Reveal>

        <Reveal delay={120} className="order-first lg:order-last">
          <div className="overflow-hidden rounded-4xl shadow-card">
            <img
              src={nursing}
              alt="Home nurse caring for an elderly patient in Jajpur"
              loading="lazy"
              width={1024}
              height={768}
              className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[480px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
