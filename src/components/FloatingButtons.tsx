import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { business, telHref } from "@/data/site";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-8 sm:right-6">
      {showTop ? (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-brand-foreground shadow-card transition-transform hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      ) : null}
      <a
        href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hello, I would like to book a test at DR Lal Path Labs Jajpur.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal text-brand-foreground shadow-card transition-transform hover:scale-110"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={telHref(business.phones[0])}
        aria-label="Call DR Lal Path Labs Jajpur"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground shadow-card transition-transform hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
