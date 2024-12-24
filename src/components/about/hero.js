import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
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
              With over 20 years of experience, I provide professional
              bookkeeping services and real estate expertise to individuals,
              entrepreneurs, and small businesses in Queens, NY.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who I am?</h2>
            <p className="text-gray-600">
              I'm Karla Leon, a certified bookkeeper and licensed real estate
              agent with a passion for helping individuals and businesses
              achieve their financial goals. My unique blend of expertise allows
              me to provide comprehensive services that go beyond traditional
              bookkeeping.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why I do this?
            </h2>
            <p className="text-gray-600">
              My journey began with a desire to empower others through financial
              literacy and smart real estate decisions. I believe that accurate
              bookkeeping and strategic property investments are key to
              long-term success, and I'm committed to guiding my clients towards
              financial stability and growth.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              My Reputation
            </h2>
            <p className="text-gray-600">
              Over the years, I've built a reputation for reliability, accuracy,
              and personalized service. My clients trust me not just for my
              technical skills, but for my ability to explain complex financial
              concepts in simple terms and provide tailored advice that aligns
              with their unique goals.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
