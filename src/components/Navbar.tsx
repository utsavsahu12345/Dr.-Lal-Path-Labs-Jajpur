import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { business, navLinks, telHref } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background shadow-soft backdrop-blur" : "bg-background/95 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="DR Lal Path Labs Jajpur logo"
            width={48}
            height={48}
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-extrabold tracking-tight text-navy sm:text-base">
              DR LAL PATH LABS
            </span>
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-primary">
              Jajpur
            </span>
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="relative text-sm font-semibold text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="ml-auto hidden items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-card transition-transform hover:scale-105 lg:ml-6 lg:inline-flex"
        >
          <Phone className="h-4 w-4" /> Book a Test
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border text-navy lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm font-semibold text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex flex-col gap-2 py-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-brand-foreground"
              >
                Book a Test
              </a>
              <a
                href={telHref(business.phones[0])}
                className="rounded-full border border-primary/30 px-5 py-3 text-center text-sm font-semibold text-primary"
              >
                Call {business.phones[0]}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
