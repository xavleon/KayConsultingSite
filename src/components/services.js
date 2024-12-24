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
    description: "Professional invoice management and tracking",
    icon: Receipt,
  },
  {
    title: "Monthly Bill-paying",
    description: "Timely and accurate bill payment services",
    icon: CreditCard,
  },
  {
    title: "Financial Statements",
    description: "Detailed P&L and balance sheet preparation",
    icon: FileSpreadsheet,
  },
  {
    title: "Tax Preparation",
    description: "Annual and quarterly tax statement preparation",
    icon: FileText,
  },
  {
    title: "Payroll Management",
    description: "Complete payroll processing and reporting",
    icon: Calculator,
  },
  {
    title: "QuickBooks Training",
    description: "Expert QuickBooks training and support",
    icon: BookOpen,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive bookkeeping solutions for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-white mx-auto w-full max-w-sm"
            >
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900 text-center">
                  {service.title}
                </CardTitle>
                <div className="!text-gray-700 text-base text-center">
                  {" "}
                  {/* Using !important via ! prefix */}
                  {service.description}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
