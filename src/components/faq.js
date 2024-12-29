"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is business automation?",
    answer:
      "Business automation is the use of technology to automate repetitive tasks, such as invoicing, payroll, and expense tracking. It saves time, reduces errors, and allows you to focus on growing your business.",
  },
  {
    question: "What are the benefits of business automation?",
    answer:
      "Business automation increases efficiency, minimizes human errors, and improves accuracy in financial tracking. It also helps you scale operations, save time, and reduce operational costs.",
  },
  {
    question: "What is bookkeeping?",
    answer:
      "Bookkeeping is the process of recording and managing financial transactions for a business or individual. It includes tasks like tracking income and expenses, reconciling accounts, and preparing financial statements.",
  },
  {
    question: "I only have a few clients. Do I need a bookkeeper?",
    answer:
      "Yes, even with a small number of clients, I can ensure that your financial records are accurate and organized. This makes tax preparation easier and helps you make informed decisions about your finances.",
  },
  {
    question:
      "Can I still get approved for a loan even if I have a low credit score?",
    answer:
      "Yes, it’s possible to get approved for a loan with a low credit score. I can help you organize your financial records to demonstrate your ability to repay the loan, which strengthens your application.",
  },
  {
    question: "When is the best time of year to sell my home?",
    answer:
      "The best time to sell your home typically depends on your local real estate market. However, reasearch shows that spring and early summer are often considered ideal due to higher demand and better weather for viewings. I can provide insights specific to your area.",
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
            Find answers to common questions about my services
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
