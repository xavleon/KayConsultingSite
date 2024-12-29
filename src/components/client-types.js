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
    title: "Entrepreneurs",
    description:
      "I offer personalized solutions designed for solo business owners like you.",
    features: [
      "Simplify your business accounting",
      "Track profit and loss with precision",
      "Manage expenses effortlessly",
      "Plan for sustainable growth",
    ],
    icon: UserCog, // Retained the original icon
  },
  {
    title: "Small Businesses",
    description:
      "I provide comprehensive support to help your business grow and thrive.",
    features: [
      "Streamline your bookkeeping process",
      "Efficient payroll management",
      "Generate detailed financial reports",
      "Ensure tax compliance with ease",
    ],
    icon: Building2, // Retained the original icon
  },
  {
    title: "Individuals",
    description:
      "I make managing your personal finances and taxes stress-free and effective.",
    features: [
      "Organize your personal financial records",
      "Prepare and plan for taxes seamlessly",
      "Optimize your budget for better savings",
      "Set and achieve meaningful financial goals",
    ],
    icon: Users, // Retained the original icon
  },
];

export function ClientTypes() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900">
            Who I Serve
          </h2>
          <p className="text-lg text-gray-700">
            Tailored bookkeeping solutions for every need
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {clientTypes.map((type) => (
            <Card
              key={type.title}
              className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Card Header */}
              <CardHeader className="text-center p-6">
                <div className="mb-4 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                  <type.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {type.title}
                </CardTitle>
                <p className="text-gray-600 mt-2">{type.description}</p>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="flex-1 p-6">
                <ul className="space-y-3">
                  {type.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start text-gray-700"
                    >
                      <span className="inline-block w-3 h-3 rounded-full bg-blue-600 mr-3 mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Card Footer */}
              <CardFooter className="p-6 border-t border-gray-200">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg">
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
