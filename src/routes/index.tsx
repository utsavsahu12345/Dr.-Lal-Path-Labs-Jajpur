import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { HomeNursing } from "@/components/HomeNursing";
import { Statistics } from "@/components/Statistics";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTA } from "@/components/CTA";
import { Gallery } from "@/components/Gallery";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

const title = "DR LAL PATH LABS JAJPUR | Diagnostic & Healthcare Services in Jajpur";
const description =
  "DR LAL PATH LABS JAJPUR provides reliable diagnostic tests, blood sample collection, home nursing services, health checkups and healthcare services in Jajpur, Odisha.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "DR LAL PATH LABS JAJPUR",
          description,
          email: "drlaljajpur@gmail.com",
          telephone: ["+919998985976", "+919437041372", "+919668788160", "+917873460576"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Unit 8, Jajati Nagar, Behind Bus Stand, Opposite Canara Bank",
            addressLocality: "Jajpur Town",
            addressRegion: "Odisha",
            postalCode: "755001",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 07:00-22:00",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main style={{ paddingTop: '120px', display: 'block' }}>
        <Hero />
        <Services />
        <About />
        <HomeNursing />
        <Statistics />
        <WhyChooseUs />
        <CTA />
        <Gallery />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
