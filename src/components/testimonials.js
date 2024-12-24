import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Small Business Owner",
    content:
      "Kay Bookkeeping has been instrumental in helping me manage my finances. Their attention to detail and professional service is unmatched.",
  },
  {
    name: "Bob Smith",
    role: "Freelance Designer",
    content:
      "As a freelancer, keeping track of my finances was always a challenge. Thanks to Kay Bookkeeping, I can focus on my work knowing my books are in order.",
  },
  {
    name: "Carol Davis",
    role: "Startup Founder",
    content:
      "The team at Kay Bookkeeping has been a crucial partner in our startup's growth. Their expertise has helped us make informed financial decisions.",
  },
  //   {
  //     name: "David Wilson",
  //     role: "Real Estate Investor",
  //     content:
  //       "Kay's combined knowledge of bookkeeping and real estate has been a game-changer for my investment strategy. They've helped me optimize my property finances and identify great investment opportunities.",
  //   },
  //   {
  //     name: "Emma Thompson",
  //     role: "Restaurant Owner",
  //     content:
  //       "Running a restaurant comes with complex financials. Kay Bookkeeping has simplified everything for me, from daily sales tracking to payroll management. Their service has given me peace of mind.",
  //   },
  //   {
  //     name: "Frank Rodriguez",
  //     role: "Construction Company Owner",
  //     content:
  //       "Kay's expertise in both bookkeeping and real estate has been perfect for my construction business. They've helped me navigate project-based accounting and property development finances with ease.",
  //   },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied
            clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-800 shadow-lg border border-gray-700 flex flex-col"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <QuoteIcon className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
                <p className="text-gray-300 text-center flex-grow">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                  <h3 className="font-semibold text-lg text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-blue-300">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
