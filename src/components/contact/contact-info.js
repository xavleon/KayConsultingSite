import { Clock, Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="rounded-[2rem] bg-pine p-6 text-white sm:p-8">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-6 space-y-5 text-sm leading-6">
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#e4d3b4]" />
          <p>
            Five boroughs and Long Island
            <br />
            Offices in Queens and Mineola
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 shrink-0 text-[#e4d3b4]" />
          <a href="tel:9179922528" className="hover:text-[#e4d3b4]">
            (917) 992-2528
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 shrink-0 text-[#e4d3b4]" />
          <a href="mailto:info@keybykay.com" className="hover:text-[#e4d3b4]">
            info@keybykay.com
          </a>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#e4d3b4]" />
          <div>
            <p>Monday–Friday, 9am–9pm</p>
            <p className="text-stone-300">Saturday and Sunday closed</p>
            <p className="mt-2 text-stone-300">
              Weekend appointments are available on request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
