"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User, Briefcase, Heart, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-800 to-blue-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              About Karla Leon
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              I'm Karla Leon, a certified bookkeeper, licensed real estate
              agent, and business consultant with over 20 years of experience in
              the accounting industry. Born in Ecuador and raised in Queens, NY,
              I bring a deep understanding of diverse cultural and business
              landscapes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-blue-50 px-6 py-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">20+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="bg-blue-50 px-6 py-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-sm text-gray-600">Satisfied Clients</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/3] relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Kay-bg_2.jpg"
                alt="Karla Leon - Professional Bookkeeper and Real Estate Agent"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <User className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                Professional Background
              </h2>
            </div>
            <p className="text-gray-600">
              My career began with a passion for numbers and helping people.
              After earning my degree from the Keller Graduate School of
              Business, I honed my skills working with individuals,
              entrepreneurs, and small businesses. I've had the privilege of
              collaborating with one of Long Island's leading firms, The Sanders
              Firm, where I served as both an accountant and consultant.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                What Sets Me Apart
              </h2>
            </div>
            <p className="text-gray-600">
              My comprehensive expertise spans bookkeeping, real estate, and
              business automation, allowing me to provide tailored solutions. I
              pride myself on delivering personalized advice that aligns with
              each client's unique goals. My Ecuadorian roots and Queens
              upbringing give me a unique perspective, blending global
              understanding with a deep commitment to my local community.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">
                Volunteer Work
              </h2>
            </div>
            <p className="text-gray-600">
              Community involvement is a cornerstone of my personal and
              professional life. For years, I've volunteered at Our Lady of
              Fatima Church in Jackson Heights, offering my expertise to support
              local initiatives and help others achieve financial literacy.
              Giving back to the community that shaped me is both an honor and a
              joy.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 group"
            onClick={() => router.push("/contact")}
          >
            Book a Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
