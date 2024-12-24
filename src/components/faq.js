"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of bookkeeping services including invoicing, monthly bill-paying, financial statement preparation, tax preparation, payroll management, and QuickBooks training.",
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

export function FAQ() {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleAll = () => {
    if (expandedItems.size === faqs.length) {
      setExpandedItems(new Set());
    } else {
      setExpandedItems(new Set(faqs.map((_, index) => index)));
    }
  };

  const toggleItem = (index) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="px-6 py-4 flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {expandedItems.has(index) ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </button>
              {expandedItems.has(index) && (
                <div className="px-6 py-4 bg-gray-50 border border-t-0 border-gray-200 rounded-b-lg">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
