import { ServicesHero } from "@/components/services/hero";
import { ServiceCards } from "@/components/services/service-cards";

export const metadata = {
  title: "Our Services",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-16">
      <ServicesHero />
      <ServiceCards />
    </main>
  );
}
