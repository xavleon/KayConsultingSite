import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setResponse({ type: "success", message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending message:", error);
      setResponse({
        type: "error",
        message: error.message || "An error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#121827] text-white rounded-lg shadow-xl w-full max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
        Send Me a Message
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm">
              First name
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="w-full bg-white border-0 text-gray-900"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm">
              Last name
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="w-full bg-white border-0 text-gray-900"
              value={formData.lastName}
              onChange={handleInputChange}
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
            value={formData.email}
            onChange={handleInputChange}
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
            value={formData.phone}
            onChange={handleInputChange}
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
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-[#2563eb] hover:bg-[#2357c6] text-white transition-colors duration-200"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
      {response && (
        <div
          className={`mt-4 text-center ${
            response.type === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {response.message}
        </div>
      )}
    </div>
  );
}
