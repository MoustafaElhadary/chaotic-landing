import { ContactForm } from "@/components/contact-form";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Features />
      {/* <Testimonial /> */}
      <FAQ />
      <CTA />
      <ContactForm />
    </main>
  );
}
