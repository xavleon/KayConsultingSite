const testimonials = [
  {
    name: "Alice Johnson",
    role: "Small Business Owner",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Kay Bookkeeping has been instrumental in helping me manage my finances. Their attention to detail and professional service is unmatched. I highly recommend their services to any small business owner looking for reliable bookkeeping.",
  },
  {
    name: "Bob Smith",
    role: "Freelance Designer",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "As a freelancer, keeping track of my finances was always a challenge. Thanks to Kay Bookkeeping, I can focus on my work knowing my books are in order. Their expertise has helped me make better financial decisions for my business.",
  },
  {
    name: "Carol Davis",
    role: "Startup Founder",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The team at Kay Bookkeeping has been a crucial partner in our startup's growth. Their expertise has helped us make informed financial decisions, and their real estate insights have been invaluable as we've expanded our office space.",
  },
  {
    name: "David Wilson",
    role: "Real Estate Investor",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Kay's combined knowledge of bookkeeping and real estate has been a game-changer for my investment strategy. They've helped me optimize my property finances and identify great investment opportunities. I couldn't ask for a better partner.",
  },
  {
    name: "Emma Thompson",
    role: "Restaurant Owner",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Running a restaurant comes with complex financials. Kay Bookkeeping has simplified everything for me, from daily sales tracking to payroll management. Their service has given me peace of mind and more time to focus on growing my business.",
  },
  {
    name: "Frank Rodriguez",
    role: "Construction Company Owner",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Kay's expertise in both bookkeeping and real estate has been perfect for my construction business. They've helped me navigate project-based accounting and property development finances with ease. I highly recommend their services.",
  },
];

export function TestimonialsList() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <figure
          key={testimonial.name}
          className="flex flex-col justify-between rounded-3xl bg-white p-7"
        >
          <blockquote className="text-sm leading-7 text-stone-700">
            “{testimonial.content}”
          </blockquote>
          <figcaption className="mt-8">
            <p className="font-semibold text-ink">{testimonial.name}</p>
            <p className="text-sm text-stone-500">{testimonial.role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
