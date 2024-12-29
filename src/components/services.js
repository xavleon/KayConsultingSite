import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  FileSpreadsheet,
  Receipt,
  CreditCard,
  FileText,
  Calculator,
  BookOpen,
} from "lucide-react";

const services = [
  {
    title: "Invoicing",
    description:
      "Streamlined invoice management and tracking for accurate financial records.",
    details: "Stay on top of your finances with precise and timely invoicing.",
    icon: Receipt,
  },
  {
    title: "Real Estate Consulting",
    description: "Expert advice on property investments and maximizing value.",
    details:
      "Get tailored guidance for buying, selling, or managing properties.",
    icon: CreditCard,
  },
  {
    title: "Financial Planning",
    description:
      "Customized financial strategies for personal and business success.",
    details: "We help you plan for long-term success and financial stability.",
    icon: FileSpreadsheet,
  },
  {
    title: "Tax Preparation",
    description:
      "Comprehensive annual and quarterly tax statement preparation.",
    details:
      "Accurate tax preparation to minimize liabilities and ensure compliance.",
    icon: FileText,
  },
  {
    title: "Workflow Automation",
    description: "Automating tasks to enhance productivity and save time.",
    details:
      "Streamline repetitive processes with custom automation solutions.",
    icon: Calculator,
  },
  {
    title: "QuickBooks Training",
    description:
      "Hands-on training for seamless QuickBooks integration and use.",
    details:
      "Master QuickBooks to efficiently manage your finances and reporting.",
    icon: BookOpen,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900">
            My Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored for Bookkeeping, Real Estate, and
            Business Automation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-white shadow-lg rounded-lg mx-auto w-full max-w-sm transition-transform transform hover:scale-105"
            >
              <CardHeader className="p-6">
                {/* Icon Container */}
                <div className="mb-4 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                {/* Card Title */}
                <CardTitle className="text-lg font-semibold text-gray-900 text-center">
                  {service.title}
                </CardTitle>
                {/* Card Description */}
                <p className="text-sm text-gray-600 text-center mt-2">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="p-2  text-gray-700 text-sm  border-t ">
                {service.details}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
