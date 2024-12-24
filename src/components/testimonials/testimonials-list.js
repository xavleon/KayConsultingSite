import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Small Business Owner",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Kay Bookkeeping has been instrumental in helping me manage my finances. Their attention to detail and professional service is unmatched. I highly recommend their services to any small business owner looking for reliable bookkeeping.",
  },
  {
    name: "Bob Smith",
    role: "Freelance Designer",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "As a freelancer, keeping track of my finances was always a challenge. Thanks to Kay Bookkeeping, I can focus on my work knowing my books are in order. Their expertise has helped me make better financial decisions for my business.",
  },
  {
    name: "Carol Davis",
    role: "Startup Founder",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The team at Kay Bookkeeping has been a crucial partner in our startup's growth. Their expertise has helped us make informed financial decisions, and their real estate insights have been invaluable as we've expanded our office space.",
  },
  {
    name: "David Wilson",
    role: "Real Estate Investor",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Kay's combined knowledge of bookkeeping and real estate has been a game-changer for my investment strategy. They've helped me optimize my property finances and identify great investment opportunities. I couldn't ask for a better partner.",
  },
  {
    name: "Emma Thompson",
    role: "Restaurant Owner",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Running a restaurant comes with complex financials. Kay Bookkeeping has simplified everything for me, from daily sales tracking to payroll management. Their service has given me peace of mind and more time to focus on growing my business.",
  },
  {
    name: "Frank Rodriguez",
    role: "Construction Company Owner",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Kay's expertise in both bookkeeping and real estate has been perfect for my construction business. They've helped me navigate project-based accounting and property development finances with ease. I highly recommend their services.",
  },
];

export function TestimonialsList() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-4 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-blue-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-center italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
