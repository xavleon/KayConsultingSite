import { FAQHero } from "@/components/faq/hero";
import { FAQList } from "@/components/faq/faq-list";

export const metadata = {
  title: "FAQs",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-100">
      <FAQHero />
      <FAQList />
    </main>
  );
}
