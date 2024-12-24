"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-blue-200 overflow-hidden">
              <CardHeader
                className="cursor-pointer hover:bg-blue-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <CardTitle className="flex justify-between items-center text-lg font-semibold text-gray-900">
                  {faq.question}
                  {openIndexes.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent
                className={`transition-all duration-300 ease-in-out ${
                  openIndexes.includes(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 pt-4">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
