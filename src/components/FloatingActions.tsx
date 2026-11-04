import { Phone, Send, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex items-center gap-2 sm:gap-3">
      <a
        href="https://t.me/+EuZUAx-uEB41YjE1"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#229ED9] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Telegram"
      >
        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
      <a
        href="https://wa.me/919718892869"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
      <a
        href="tel:+919718892869"
        className="h-10 sm:h-12 px-4 sm:px-6 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-1.5 sm:gap-2 shadow-xl hover:scale-105 transition-transform"
      >
        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 
        <span className="hidden xs:inline">Book Session</span>
        <span className="xs:hidden">Book</span>
      </a>
    </div>
  );
}
