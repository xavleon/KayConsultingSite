import { Users, UserCog, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const clientTypes = [
  {
    title: "Individuals",
    description: "Perfect for personal finances and tax preparation",
    features: [
      "Personal financial management",
      "Tax preparation and planning",
      "Budget optimization",
      "Financial goal setting",
    ],
    icon: Users,
  },
  {
    title: "Entrepreneurs",
    description: "Tailored solutions for solo business owners",
    features: [
      "Business accounting",
      "Profit & loss tracking",
      "Expense management",
      "Growth planning",
    ],
    icon: UserCog,
  },
  {
    title: "Small Businesses",
    description: "Comprehensive services for growing companies",
    features: [
      "Full-service bookkeeping",
      "Payroll management",
      "Financial reporting",
      "Tax compliance",
    ],
    icon: Building2,
  },
];

export function ClientTypes() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900">
            Who We Serve
          </h2>
          <p className="text-lg text-gray-700">
            Tailored bookkeeping solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clientTypes.map((type) => (
            <Card key={type.title} className="flex flex-col bg-white">
              <CardHeader className="text-center">
                <div className="mb-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                  <type.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {type.title}
                </CardTitle>
                <p className="text-gray-700 mt-2">{type.description}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
