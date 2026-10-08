import { Building2, UserCog, Users } from "lucide-react";
import Link from "next/link";

const clientTypes = [
  {
    title: "Entrepreneurs",
    description: "Solo owners who want the books out of their head.",
    features: [
      "A simple monthly close",
      "Profit and loss you can read",
      "Expenses in one place",
    ],
    icon: UserCog,
  },
  {
    title: "Small businesses",
    description: "Teams that have outgrown a spreadsheet and a shoebox.",
    features: [
      "Bookkeeping that keeps up with sales",
      "Payroll-ready records",
      "Reports for planning and taxes",
    ],
    icon: Building2,
  },
  {
    title: "Individuals",
    description: "Personal finances, a home purchase, or both at once.",
    features: [
      "Records organized for tax time",
      "A clearer picture of a mortgage",
      "Goals you can actually track",
    ],
    icon: Users,
  },
];

export function ClientTypes() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Clients
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Who I work with
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {clientTypes.map((type) => (
            <article key={type.title}>
              <type.icon className="h-5 w-5 text-pine" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-ink">
                {type.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                {type.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-stone-700">
                {type.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-12 inline-flex text-sm font-medium text-pine underline-offset-4 hover:underline"
        >
          Start a conversation
        </Link>
      </div>
    </section>
  );
}
