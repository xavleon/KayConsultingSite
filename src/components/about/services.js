import {
  Users,
  UserCog,
  Building2,
  BookOpen,
  Home,
  Cog,
} from "lucide-react";

const serviceMenu = [
  {
    title: "Bookkeeping",
    icon: BookOpen,
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
    title: "Real Estate",
    icon: Home,
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
    title: "Business Automation",
    icon: Cog,
    items: [
      "Workflow analysis and optimization",
      "Software integration and customization",
      "Process automation implementation",
      "Employee training on automated systems",
      "Ongoing support and system maintenance",
      "Performance monitoring and reporting",
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
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            A menu of the work
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {serviceMenu.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-stone-200 bg-paper p-6"
            >
              <category.icon className="h-5 w-5 text-pine" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-ink">
                {category.title}
              </h3>
              <ul className="mt-5 space-y-2 text-sm text-stone-700">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Who this is for
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {clientTypes.map((type) => (
              <article key={type.title}>
                <type.icon className="h-5 w-5 text-pine" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  {type.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-600">
                  {type.reasons.map((reason) => (
                    <li key={reason}>{reason}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
