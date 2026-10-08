import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const tools = [
  {
    title: "Mortgage calculator",
    description: "Estimate principal and interest with a rate you can edit.",
    href: "/mortgage-calculator",
  },
  {
    title: "Expense tracker",
    description: "Sort spending and see where a little room might be.",
    href: "/expense-tracker",
  },
  {
    title: "Send documents",
    description: "Share files when we are ready to start the work.",
    href: "/document-submission",
  },
];

export function HomeTools() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Tools
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Try a number before we talk
          </h2>
          <p className="mt-4 text-stone-600">
            These are estimates and organizers, not advice. They are useful
            when you want a starting point.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col justify-between rounded-3xl border border-stone-200 bg-white p-6 transition-colors hover:border-pine"
            >
              <div>
                <h3 className="text-lg font-semibold text-ink">{tool.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {tool.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center text-sm font-medium text-pine">
                Open
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeCta() {
  return (
    <section className="bg-pine text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Tell me what you need help with.
          </h2>
          <p className="mt-4 text-stone-200">
            A short conversation is enough to see whether bookkeeping, a home
            search, or a simpler workflow is the right next step.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-pine hover:bg-paper"
        >
          Book a consultation
        </Link>
      </div>
    </section>
  );
}
