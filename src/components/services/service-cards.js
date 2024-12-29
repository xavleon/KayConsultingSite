import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Cog, Home } from "lucide-react";

const services = [
  {
    title: "Bookkeeping Services",
    description:
      "Comprehensive financial management tailored for individuals, entrepreneurs, and small businesses. Our expert bookkeeping services ensure your finances are accurate, up-to-date, and compliant. Gain peace of mind with precise and timely results.",
    icon: BookOpen,
    action: "Book a Consultation",
    href: "/contact",
  },
  {
    title: "Business Automation",
    description:
      "Streamline your operations and boost efficiency with our cutting-edge business automation solutions. We help you identify and implement the right tools to save time and reduce costs. Our tailored solutions maximize productivity and ROI.",
    icon: Cog,
    action: "Get a Quote",
    href: "/contact?service=automation",
  },
  {
    title: "Real Estate Services",
    description:
      "Expert representation for buyers and sellers in the real estate market. Whether you're purchasing your dream home or selling your property, we provide seamless support. Trust us to guide you every step of the way.",
    icon: Home,
    action: "Schedule a Call",
    href: "/contact?service=realestate",
  },
];

export function ServiceCards() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col h-full bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              {/* Card Header */}
              <CardHeader className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="flex-grow">
                <p className="text-gray-600 text-base">{service.description}</p>
              </CardContent>

              {/* Card Footer */}
              <CardFooter className="mt-auto">
                <Button className=" w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <a href={service.href}>{service.action}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
