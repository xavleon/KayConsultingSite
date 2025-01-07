import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="bg-[#121827] text-white rounded-lg shadow-xl w-full p-6 space-y-6">
      <h2 className="text-2xl font-bold">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <p className="text-white">
              Coverage: Five Boroughs and Long Island <br />
              Offices in Queens and Mineola
            </p>
            {/* <p className="text-gray-300">Long Island, NY </p> */}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
          <a href="tel:9177672870" className="text-white">
            (917) 767-2870
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="w-6 h-6 text-blue-400 flex-shrink-0" />
          <p className="text-white">info@kaybookkeeping.com</p>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <p className="text-white">Monday - Friday: 9am - 9pm</p>
            <p className="text-gray-300">Saturday - Sunday: Closed</p>
            <p className="text-gray-300">
              {" "}
              <br /> **Weekend appointments available upon request**
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
