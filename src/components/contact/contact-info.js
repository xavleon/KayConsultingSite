import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="bg-[#121827] text-white rounded-lg shadow-xl w-full p-6 space-y-6">
      <h2 className="text-2xl font-bold">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <p className="text-white">123 Bookkeeping St.</p>
            <p className="text-gray-300">Accountant City, AC 12345</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
          <p className="text-white">(123) 456-7890</p>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-6 h-6 text-blue-400 flex-shrink-0" />
          <p className="text-white">info@kaybookkeeping.com</p>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <p className="text-white">Monday - Friday: 9am - 5pm</p>
            <p className="text-gray-300">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
