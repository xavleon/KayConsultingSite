import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { HomeTools, HomeCta } from "@/components/home-sections";
import { ClientTypes } from "@/components/client-types";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <HomeTools />
      <ClientTypes />
      <Testimonials />
      <HomeCta />
    </div>
  );
}
