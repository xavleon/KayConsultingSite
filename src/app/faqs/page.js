import { FAQHero } from "@/components/faq/hero";
import { FAQList } from "@/components/faq/faq-list";

export const metadata = {
  title: "FAQs",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-paper pb-28 pt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FAQHero />
        <FAQList />
      </div>
    </main>
  );
}
