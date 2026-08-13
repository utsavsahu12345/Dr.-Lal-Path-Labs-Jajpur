import { Clock, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { business, navLinks, telHref } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="DR Lal Path Labs Jajpur logo"
              width={48}
              height={48}
              loading="lazy"
              className="h-12 w-12 rounded-xl bg-background p-1 object-contain"
            />
            <span className="text-sm font-extrabold leading-tight">
              DR LAL PATH LABS
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-teal">
                Jajpur
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-brand-foreground/75">
            DR LAL PATH LABS JAJPUR is a trusted diagnostic and healthcare center committed to delivering
            accurate, reliable, and timely pathology services.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-teal">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-brand-foreground/80">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="transition-colors hover:text-teal">
                  {l.label === "Contact" ? "Contact Us" : l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-teal">Visiting Hours</h3>
          <p className="mt-5 flex items-start gap-2 text-sm text-brand-foreground/80">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
            <span>
              Monday - Saturday
              <br />
              6:00 AM - 8:00 PM
            </span>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-teal">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-brand-foreground/80">
            {business.phones.map((p) => (
              <li key={p}>
                <a href={telHref(p)} className="flex items-center gap-2 transition-colors hover:text-teal">
                  <Phone className="h-4 w-4 shrink-0 text-teal" /> {p}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2 break-all transition-colors hover:text-teal"
              >
                <Mail className="h-4 w-4 shrink-0 text-teal" /> {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              <span>{business.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-foreground/15 py-6 text-center text-xs text-brand-foreground/70">
        © 2026 DR LAL PATH LABS JAJPUR. All Rights Reserved.
      </div>
    </footer>
  );
}
