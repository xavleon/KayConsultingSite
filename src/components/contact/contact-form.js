"use client";

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
    <div className="rounded-[2rem] border border-stone-200 bg-white p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-ink">Send a message</h2>
      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-stone-700">
              First name
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="h-12 w-full rounded-xl border border-stone-200 bg-white px-3 text-ink outline-none focus:ring-2 focus:ring-pine"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-stone-700">
              Last name
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="h-12 w-full rounded-xl border border-stone-200 bg-white px-3 text-ink outline-none focus:ring-2 focus:ring-pine"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-stone-700">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="h-12 w-full rounded-xl border border-stone-200 bg-white px-3 text-ink outline-none focus:ring-2 focus:ring-pine"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            className="h-12 w-full rounded-xl border border-stone-200 bg-white px-3 text-ink outline-none focus:ring-2 focus:ring-pine"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-stone-700">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            required
            className="h-32 w-full rounded-xl border border-stone-200 bg-white p-3 text-ink outline-none focus:ring-2 focus:ring-pine"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <Button
          type="submit"
          className="h-12 w-full rounded-full bg-pine text-white hover:bg-[#14332f]"
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
