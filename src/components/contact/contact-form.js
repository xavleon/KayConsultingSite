import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <div className="bg-[#121827] text-white rounded-lg shadow-xl w-full max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
        Send Me a Message
      </h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="first-name" className="block text-sm">
              First name
            </label>
            <Input
              id="first-name"
              name="first-name"
              type="text"
              required
              className="w-full bg-white border-0 text-gray-900"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="block text-sm">
              Last name
            </label>
            <Input
              id="last-name"
              name="last-name"
              type="text"
              required
              className="w-full bg-white border-0 text-gray-900"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-white border-0 text-gray-900"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            className="w-full bg-white border-0 text-gray-900"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full bg-white border-0 text-gray-900"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-[#2563eb] hover:bg-[#2357c6] text-white transition-colors duration-200"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
