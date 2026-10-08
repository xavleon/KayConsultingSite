import { ServicesHero } from "@/components/services/hero";
import { ServiceCards } from "@/components/services/service-cards";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-paper pb-28 pt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ServicesHero />
        <ServiceCards />
      </div>
    </main>
  );
}
