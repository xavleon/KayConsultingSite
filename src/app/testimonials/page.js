import { TestimonialsHero } from "@/components/testimonials/hero";
import { TestimonialsList } from "@/components/testimonials/testimonials-list";

export const metadata = {
  title: "Testimonials",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-paper pb-28 pt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <TestimonialsHero />
        <TestimonialsList />
      </div>
    </main>
  );
}
