import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/services-data";

export function WhatsAppButton() {
  const href = `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CapitalworkCreations on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-elegant hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-semibold hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
