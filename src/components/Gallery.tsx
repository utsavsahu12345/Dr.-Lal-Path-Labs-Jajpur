import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

import banner from "@/assets/banner-doctor-examination.jpeg";
import catDiabetes from "@/assets/category-fever-infection.jpeg";
import catHair from "@/assets/category-stds.jpeg";
import knee from "@/assets/doctor-knee-examination.jpg";
import portrait from "@/assets/doctor-portrait-confident.jpg";
import pulse from "@/assets/doctor-pulse-checkup.jpg";
import team from "@/assets/medical-team-group.jpg";

import heroLab from "@/assets/hero-lab.jpg";
import collection from "@/assets/home-collection.jpg";
import nursing from "@/assets/home-nursing.jpg";
import tubes from "@/assets/gallery-tubes.jpg";
import reception from "@/assets/gallery-reception.jpg";
import equipment from "@/assets/gallery-equipment.jpg";
import consult from "@/assets/gallery-consult.jpg";

const images = [
  { src: heroLab, alt: "Modern pathology laboratory at DR Lal Path Labs Jajpur" },
  { src: tubes, alt: "Blood sample test tubes ready for analysis" },
  { src: reception, alt: "Diagnostic centre reception area" },
  { src: equipment, alt: "Advanced diagnostic analyser equipment" },
  { src: collection, alt: "Home blood sample collection by a phlebotomist" },
  { src: nursing, alt: "Home nursing care for an elderly patient" },
  { src: consult, alt: "Doctors reviewing a patient health checkup report" },
  { src: banner, alt: "Doctor performing a physical examination" },
  { src: team, alt: "Medical team attending to a patient" },
  { src: portrait, alt: "Healthcare professional performing a skin care procedure" },
  { src: knee, alt: "Doctors and healthcare staff at the diagnostic centre" },
  { src: pulse, alt: "Patient monitoring inside a medical facility" },
  { src: catDiabetes, alt: "Diabetes blood sugar testing with a glucometer" },
  { src: catHair, alt: "Hair and skin care diagnostic consultation" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="section-y bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Gallery"
          title="Our Gallery"
          subtitle="A look inside our laboratory, diagnostic services and patient care in Jajpur."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <Reveal key={img.alt} delay={(i % 4) * 60}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-2xl shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Open image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-100 flex items-center justify-center bg-navy/90 p-4 animate-fade-in"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background text-navy"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={images[active]!.src}
            alt={images[active]!.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-card"
          />
        </div>
      ) : null}
    </section>
  );
}
