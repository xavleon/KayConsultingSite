"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of services including bookkeeping, business automation, and real estate representation. Our bookkeeping services cover invoicing, financial statement preparation, tax preparation, and payroll management. Our business automation services help streamline your operations, while our real estate services include property listing, buyer representation, and investment property analysis.",
  },
  {
    question: "How often will you update my books?",
    answer:
      "We typically update books on a monthly basis, but we can accommodate more frequent updates if needed. The frequency can be tailored to your specific business needs.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes, we specialize in working with small businesses, entrepreneurs, and individuals. Our services are scalable to meet the needs of businesses at various stages of growth.",
  },
  {
    question: "What accounting software do you use?",
    answer:
      "We primarily use QuickBooks, which is the industry standard. However, we're familiar with other accounting software and can adapt to your preferred system if needed.",
  },
  {
    question: "How do you ensure the security of my financial information?",
    answer:
      "We take data security very seriously. We use encrypted, cloud-based systems for data storage and transfer. All our staff are bound by strict confidentiality agreements.",
  },
];

export function FAQList() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <section className="mt-12">
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => (
          <article
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-ink">{faq.question}</span>
              {openIndexes.includes(index) ? (
                <ChevronUp className="h-5 w-5 shrink-0 text-pine" />
              ) : (
                <ChevronDown className="h-5 w-5 shrink-0 text-stone-400" />
              )}
            </button>
            {openIndexes.includes(index) && (
              <p className="px-5 pb-5 text-sm leading-6 text-stone-600">
                {faq.answer}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
