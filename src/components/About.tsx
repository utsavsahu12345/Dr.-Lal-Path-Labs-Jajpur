import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import banner from "@/assets/banner-doctor-examination.jpeg";
import collection from "@/assets/home-collection.jpg";

export function About() {
  return (
    <section id="about" className="section-y bg-secondary/50">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-4xl shadow-card">
            <img
              src={banner}
              alt="Doctor examining a patient at DR Lal Path Labs Jajpur"
              loading="lazy"
              className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[440px]"
            />
          </div>
          <div className="absolute -bottom-8 -right-2 hidden w-52 overflow-hidden rounded-3xl border-4 border-background shadow-card sm:block">
            <img
              src={collection}
              alt="Home blood sample collection service"
              loading="lazy"
              width={1024}
              height={768}
              className="h-36 w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
            Medical &amp; General Care
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Trusted Diagnostic &amp; Healthcare Services in Jajpur
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              DR LAL PATH LABS JAJPUR is a trusted diagnostic and healthcare center committed to delivering
              accurate, reliable, and timely pathology services.
            </p>
            <p>
              We believe that early detection is the key to better health. Our team uses modern diagnostic
              technology and trusted laboratory services to provide dependable test results and professional
              patient care.
            </p>
            <p>
              Our goal is to make quality healthcare accessible, convenient, and affordable for every patient.
            </p>
          </div>
          <a
            href="#why-us"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-card transition-transform hover:scale-105"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
