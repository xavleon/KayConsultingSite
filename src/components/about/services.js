import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  UserCog,
  Building2,
  Receipt,
  FileSpreadsheet,
  Calculator,
  CreditCard,
  FileText,
  BookOpen,
  Home,
  Search,
  HandshakeIcon as HandShake,
  BarChartIcon as ChartBar,
} from "lucide-react";

const serviceMenu = [
  {
    title: "Bookkeeping Services",
    items: [
      "Monthly financial statements (P&L, balance sheet)",
      "Accounts payable and receivable management",
      "Bank and credit card reconciliation",
      "Payroll processing and quarterly tax statements",
      "Tax preparation and planning",
      "QuickBooks setup and training",
    ],
  },
  {
    title: "Real Estate Services",
    items: [
      "Property listing and marketing",
      "Buyer representation",
      "Comparative market analysis (CMA)",
      "Property valuation",
      "Contract negotiation",
      "Transaction coordination",
      "First-time homebuyer guidance",
      "Investment property analysis",
    ],
  },
  {
    title: "Advisory Services",
    items: [
      "Financial analysis and reporting",
      "Budget creation and monitoring",
      "Cash flow forecasting",
      "Business process improvement",
      "Real estate investment strategies",
      "Property management consultation",
    ],
  },
];

const clientTypes = [
  {
    title: "Individuals",
    icon: Users,
    reasons: [
      "Save time and reduce stress managing personal finances",
      "Get expert guidance on financial decisions and real estate investments",
      "Ensure accurate and timely tax preparation",
      "Receive personalized support for buying or selling property",
      "Maintain organized records for both finances and real estate transactions",
      "Benefit from combined expertise in bookkeeping and real estate",
    ],
  },
  {
    title: "Solopreneurs",
    icon: UserCog,
    reasons: [
      "Track business expenses and income effectively",
      "Understand your business's financial health",
      "Maximize tax deductions and credits",
      "Get insights on real estate opportunities for your business",
      "Streamline bookkeeping and property management",
      "Focus on growing your business while we handle the numbers and real estate matters",
    ],
  },
  {
    title: "Small Businesses",
    icon: Building2,
    reasons: [
      "Maintain accurate and timely financial records",
      "Improve cash flow management",
      "Ensure payroll compliance and accuracy",
      "Get expert advice on commercial real estate decisions",
      "Reduce audit risks with proper documentation",
      "Scale your business with confidence, backed by solid financial and real estate strategies",
    ],
  },
];

export function Services() {
  return (
    <section className="py-24" style={{ backgroundColor: "#121827" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Menu Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 text-center">
            A Menu of My Services
          </h2>
          <div className="grid gap-8">
            {serviceMenu.map((category) => (
              <div key={category.title} className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <ul className="grid gap-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Reasons to Choose Kay Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12 text-center">
            Reasons to Choose Kay's Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {clientTypes.map((type) => (
              <Card
                key={type.title}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <type.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {type.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {type.reasons.map((reason) => (
                      <li key={reason} className="flex items-start text-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3 mt-2" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
