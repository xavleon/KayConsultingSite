import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-800 to-blue-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Professional Bookkeeping, Real Estate, <br /> & Business Automation
            Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Expert bookkeeping, real estate, and business consultation services
            tailored for individuals, entrepreneurs, and small businesses. Let
            us handle your finances and property needs while you focus on
            growth.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Book a Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-950"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <div className="relative w-full max-w-xl mx-auto">
            <Image
              src="/Kay-bg_3.jpg"
              alt="Karla Leon - Your Professional Bookkeeper"
              width={500}
              height={600}
              className="rounded-2xl shadow-xl ring-1 ring-gray-400/10 object-cover"
              priority
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-semibold text-gray-900">Karla Leon</p>
              <p className="text-sm text-gray-500">Certified Bookkeeper</p>
              <p className="text-sm text-gray-500">Real Estate Agent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
