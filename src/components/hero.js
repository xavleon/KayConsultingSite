"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const credentials = [
  { value: "20+", label: "Years in accounting" },
  { value: "NYS", label: "Licensed real estate agent" },
  { value: "Certified", label: "Bookkeeper" },
  { value: "NYS", label: "Notary public" },
];

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-paper pt-28 pb-16 sm:pt-32 lg:pb-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Long Island, New York
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-6xl sm:leading-[1.05]">
            Bookkeeping, real estate, and business automation.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
            I&apos;m Karla Leon. I help individuals, entrepreneurs, and small
            businesses keep clean books, make clearer property decisions, and
            spend less time on work that should already be automatic.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="h-12 rounded-full bg-pine px-6 text-white hover:bg-[#14332f]"
              onClick={() => router.push("/contact")}
            >
              Book a consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-stone-300 bg-transparent px-6 text-ink hover:bg-white"
              onClick={() => router.push("/services")}
            >
              See services
            </Button>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-stone-300/70 pt-8 sm:grid-cols-4">
          {credentials.map((item) => (
            <div key={item.label}>
              <dt className="text-2xl font-semibold tracking-tight text-ink">
                {item.value}
              </dt>
              <dd className="mt-1 text-sm text-stone-600">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
