import { Calendar } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function StickyCTAs() {
  return (
    <>
      {/* Desktop WhatsApp Floating Button */}
      <a
        href="https://wa.me/919000000000?text=Hi%20SHS%2C%20I%27d%20like%20a%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp consultation"
        className="fixed bottom-8 right-8 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105 md:grid"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>

    </>
  );
}
