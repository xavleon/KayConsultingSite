"use client";

import { ContactHero } from "@/components/contact/hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-paper pb-28 pt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ContactHero />
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </main>
  );
}
