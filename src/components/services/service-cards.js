import { BookOpen, Cog, Home } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Bookkeeping",
    description:
      "Monthly books, reconciliations, payroll-ready records, and tax preparation kept current for individuals and small businesses.",
    icon: BookOpen,
    action: "Book a consultation",
    href: "/contact",
  },
  {
    title: "Business automation",
    description:
      "Workflows for the repetitive admin: billing, follow-ups, and the handoffs that should not depend on you remembering them.",
    icon: Cog,
    action: "Get a quote",
    href: "http://www.metpro.world",
    external: true,
  },
  {
    title: "Real estate",
    description:
      "Buyer and seller representation, pricing, and a clear read on what a property will actually cost to own.",
    icon: Home,
    action: "Schedule a call",
    href: "/contact?service=realestate",
  },
];

export function ServiceCards() {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {services.map((service) => (
        <article
          key={service.title}
          className="flex flex-col rounded-3xl border border-stone-200 bg-white p-7"
        >
          <service.icon className="h-5 w-5 text-pine" aria-hidden="true" />
          <h2 className="mt-6 text-xl font-semibold text-ink">{service.title}</h2>
          <p className="mt-3 flex-1 text-sm leading-6 text-stone-600">
            {service.description}
          </p>
          <Link
            href={service.href}
            target={service.external ? "_blank" : undefined}
            rel={service.external ? "noopener noreferrer" : undefined}
            className="mt-8 text-sm font-medium text-pine underline-offset-4 hover:underline"
          >
            {service.action}
          </Link>
        </article>
      ))}
    </div>
  );
}
