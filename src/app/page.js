import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ClientTypes } from "@/components/client-types";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <WhyChooseUs />
      <ClientTypes />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </div>
  );
}
