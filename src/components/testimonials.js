import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Small Business Owner",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Kay Bookkeeping has been instrumental in helping me manage my finances. Their attention to detail and professional service is unmatched.",
  },
  {
    name: "Bob Smith",
    role: "Freelance Designer",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "As a freelancer, keeping track of my finances was always a challenge. Thanks to Kay Bookkeeping, I can focus on my work knowing my books are in order.",
  },
  {
    name: "Carol Davis",
    role: "Startup Founder",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The team at Kay Bookkeeping has been a crucial partner in our startup's growth. Their expertise has helped us make informed financial decisions.",
  },
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
              className="bg-gray-800 shadow-lg border border-gray-700"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-4 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-blue-500">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-blue-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-center italic">
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
