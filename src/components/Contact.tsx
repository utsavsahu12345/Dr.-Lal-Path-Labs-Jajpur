import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { CalendarCheck, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { business, services, telHref } from "@/data/site";

type Fields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

const empty: Fields = { name: "", email: "", phone: "", service: "", date: "", message: "" };

// EmailJS config - replace with your actual IDs from emailjs.com dashboard
const EMAILJS_SERVICE_ID = "service_t0zqqr1";
const EMAILJS_TEMPLATE_ID = "template_mxilw55";
const EMAILJS_PUBLIC_KEY = "QFnbNAibhQMJg1Wen";
const RECEIVER_EMAIL = "utsavsahu12345@gmail.com";

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const set = (k: keyof Fields, v: string) => setValues((p) => ({ ...p, [k]: v }));

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) e.email = "Please enter a valid email address.";
    if (!/^[0-9+\s-]{10,15}$/.test(values.phone.trim())) e.phone = "Please enter a valid phone number.";
    if (!values.service) e.service = "Please select a service.";
    if (!values.date) e.date = "Please choose a preferred date.";
    if (values.message.trim().length > 1000) e.message = "Message must be under 1000 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    setSending(true);
    setSendError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: RECEIVER_EMAIL,
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          service: values.service,
          preferred_date: values.date,
          message: values.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setSent(true);
      setValues(empty);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setSendError("Something went wrong while sending your request. Please try again or call us directly.");
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <section id="contact" className="section-y bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Book Your Test / Contact Us"
          subtitle="Share your details and our team will confirm your test or home collection slot."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-4xl border border-border bg-card p-6 shadow-soft sm:p-9">
              {sent ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center animate-scale-in">
                  <CheckCircle2 className="h-16 w-16 text-teal" />
                  <h3 className="text-xl font-bold text-navy">Request Received</h3>
                  <p className="max-w-md text-sm text-muted-foreground">
                    Thank you! Your request has been received. Our team will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-2 rounded-full border border-primary/30 px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                  >
                    Book another test
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">
                      Full Name
                    </label>
                    <input
                      id="name"
                      className={field}
                      maxLength={100}
                      placeholder="Your full name"
                      value={values.name}
                      onChange={(e) => set("name", e.target.value)}
                    />
                    {errors.name ? <p className="mt-1.5 text-xs text-destructive">{errors.name}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={field}
                      maxLength={255}
                      placeholder="you@example.com"
                      value={values.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                    {errors.email ? <p className="mt-1.5 text-xs text-destructive">{errors.email}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={field}
                      maxLength={15}
                      placeholder="+91 90000 00000"
                      value={values.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                    {errors.phone ? <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-semibold text-navy">
                      Select Service
                    </label>
                    <select
                      id="service"
                      className={field}
                      value={values.service}
                      onChange={(e) => set("service", e.target.value)}
                    >
                      <option value="">Choose a service</option>
                      {services.map((s) => (
                        <option key={s.name} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                    {errors.service ? <p className="mt-1.5 text-xs text-destructive">{errors.service}</p> : null}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="date" className="mb-2 block text-sm font-semibold text-navy">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      className={field}
                      value={values.date}
                      onChange={(e) => set("date", e.target.value)}
                    />
                    {errors.date ? <p className="mt-1.5 text-xs text-destructive">{errors.date}</p> : null}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      maxLength={1000}
                      className={field}
                      placeholder="Tell us about the test or care you need"
                      value={values.message}
                      onChange={(e) => set("message", e.target.value)}
                    />
                    {errors.message ? <p className="mt-1.5 text-xs text-destructive">{errors.message}</p> : null}
                  </div>

                  {sendError ? <p className="sm:col-span-2 text-sm text-destructive">{sendError}</p> : null}

                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground shadow-card transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 sm:col-span-2"
                  >
                    <CalendarCheck className="h-4 w-4" />{" "}
                    {sending ? "Sending..." : "Book Now"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="grid h-full gap-5">
              <div className="rounded-3xl bg-secondary/60 p-6">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                  <Phone className="h-4 w-4" /> Call Anytime
                </h3>
                <ul className="mt-4 space-y-2 text-sm font-medium text-navy">
                  {business.phones.map((p) => (
                    <li key={p}>
                      <a href={telHref(p)} className="transition-colors hover:text-primary">
                        {p}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-secondary/60 p-6">
<h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
  <Mail className="h-4 w-4" /> Email
</h3>
<a>
  href={`mailto:${business.email}`}
  className="mt-4 block break-all text-sm font-medium text-navy transition-colors hover:text-primary"
  {business.email}
</a>
              </div>
              <div className="rounded-3xl bg-secondary/60 p-6">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                  <Clock className="h-4 w-4" /> Visiting Hours
                </h3>
                <p className="mt-4 text-sm font-medium text-navy">
                  Monday - Saturday
                  <br />
                  7:00 AM - 10:00 PM
                </p>
              </div>
              <div className="rounded-3xl bg-secondary/60 p-6">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                  <MapPin className="h-4 w-4" /> Address
                </h3>
                <p className="mt-4 text-sm leading-relaxed font-medium text-navy">{business.address}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}