import { TestimonialsHero } from "@/components/testimonials/hero";
import { TestimonialsList } from "@/components/testimonials/testimonials-list";

export const metadata = {
  title: "Testimonials",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-16 bg-[#101827]">
      <TestimonialsHero />
      <TestimonialsList />
    </main>
  );
}
