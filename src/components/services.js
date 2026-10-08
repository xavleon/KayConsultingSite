import { BookOpen, Home, Workflow } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Bookkeeping",
    description:
      "Monthly books that stay current, so tax season and lending questions are not a scramble.",
    points: [
      "Invoicing and expense tracking",
      "Reconciliations and financial statements",
      "QuickBooks setup and training",
      "Records prepared for your tax preparer",
    ],
    icon: BookOpen,
  },
  {
    title: "Real estate",
    description:
      "Guidance for buying, selling, or thinking through a property with the numbers in view.",
    points: [
      "Home search and offer strategy",
      "Investment and value questions",
      "Coordination through closing",
      "A second look at what you can afford",
    ],
    icon: Home,
  },
  {
    title: "Business automation",
    description:
      "The repetitive admin — invoices, follow-ups, file handoffs — set up so it runs without you.",
    points: [
      "Workflows for billing and paperwork",
      "Fewer manual data entry steps",
      "Clearer handoffs between tools",
      "Time back for client work",
    ],
    icon: Workflow,
  },
];

export function Services() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Three ways I can help
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium text-pine underline-offset-4 hover:underline"
          >
            Full service list
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-3xl border border-stone-200 bg-paper p-7"
            >
              <service.icon className="h-5 w-5 text-pine" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-stone-700">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
