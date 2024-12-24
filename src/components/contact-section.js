import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
              Get in Touch
            </h2>
            <p className="text-lg text-blue-200">
              Have questions or ready to get started? Reach out to us today.
            </p>
          </div>

          <form className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-blue-200 mb-1"
                >
                  First name
                </label>
                <Input
                  id="first-name"
                  name="first-name"
                  type="text"
                  required
                  className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-blue-200 mb-1"
                >
                  Last name
                </label>
                <Input
                  id="last-name"
                  name="last-name"
                  type="text"
                  required
                  className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-blue-200 mb-1"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-blue-200 mb-1"
              >
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-blue-200 mb-1"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
