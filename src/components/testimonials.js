const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "Small business owner",
    content:
      "Karla has been steady with my books. I know the numbers are being watched, and I am not guessing at tax time.",
  },
  {
    name: "David Nguyen",
    role: "Freelance designer",
    content:
      "Keeping my own finances was the part of freelancing I kept avoiding. Working with Karla let me stay with the client work.",
  },
  {
    name: "Aisha Patel",
    role: "Startup founder",
    content:
      "Karla helped us read the business instead of just collecting receipts. The decisions got easier once the reports were clear.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Clients
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Notes from people I work with
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-7"
            >
              <blockquote className="text-base leading-7 text-stone-700">
                “{testimonial.content}”
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-semibold text-ink">{testimonial.name}</p>
                <p className="text-sm text-stone-500">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
