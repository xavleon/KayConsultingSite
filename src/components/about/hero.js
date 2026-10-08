"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Heart, User } from "lucide-react";
import { useRouter } from "next/navigation";

const notes = [
  {
    title: "Background",
    icon: User,
    body: "My career started with a love of numbers and of helping people. After Keller Graduate School of Business, I worked with individuals, entrepreneurs, and small businesses, including The Sanders Firm on Long Island, as an accountant and consultant.",
  },
  {
    title: "What I bring",
    icon: Briefcase,
    body: "Bookkeeping, real estate, and automation sit in one practice, so the advice can follow the actual goal. I grew up between Ecuador and Queens, and that still shapes how I work with people here.",
  },
  {
    title: "In the community",
    icon: Heart,
    body: "For years I have volunteered at Our Lady of Fatima Church in Jackson Heights, including help with financial literacy. Giving time back to the community that raised me is part of the work.",
  },
];

export function Hero() {
  const router = useRouter();

  return (
    <section className="bg-paper pb-20 pt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              About
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
              About Karla Leon
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              I&apos;m a certified bookkeeper, licensed real estate agent, and
              business consultant with more than 20 years in accounting. Born
              in Ecuador and raised in Queens, I work with people across Long
              Island and New York City.
            </p>
            <dl className="mt-8 flex flex-wrap gap-8">
              <div>
                <dt className="text-3xl font-semibold text-ink">20+</dt>
                <dd className="text-sm text-stone-600">Years of experience</dd>
              </div>
              <div>
                <dt className="text-3xl font-semibold text-ink">500+</dt>
                <dd className="text-sm text-stone-600">Clients served</dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src="/Kay-bg_2.jpg"
              alt="Karla Leon"
              width={720}
              height={720}
              className="aspect-square w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {notes.map((note) => (
            <article
              key={note.title}
              className="rounded-3xl border border-stone-200 bg-white p-6"
            >
              <note.icon className="h-5 w-5 text-pine" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold text-ink">
                {note.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-600">{note.body}</p>
            </article>
          ))}
        </div>

        <Button
          className="mt-10 h-12 rounded-full bg-pine px-6 text-white hover:bg-[#14332f]"
          onClick={() => router.push("/contact")}
        >
          Book a consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
