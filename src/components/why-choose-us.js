import { Shield, Target, Clock } from "lucide-react";

const features = [
  {
    name: "Integrity",
    description:
      "We maintain the highest standards of professional integrity in all our dealings.",
    icon: Shield,
  },
  {
    name: "Attention to Detail",
    description:
      "Our meticulous approach ensures accuracy in every aspect of your bookkeeping.",
    icon: Target,
  },
  {
    name: "Confidentiality",
    description:
      "Your financial information is always kept secure and confidential.",
    icon: Clock,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24" style={{ backgroundColor: "#121827" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-300 mb-16">
            With over 20 years of experience in professional bookkeeping, we are
            a trusted source for those seeking excellence.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative bg-white p-6 rounded-lg shadow-md text-center"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-4 mx-auto w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <feature.icon
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-700">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
