import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Instant Booking — Unique Premium Spa Delhi NCR",
  description:
    "Book your luxury spa session in Delhi NCR: 24/7 central concierge helpline +91 97188 92869 or WhatsApp. Aerocity, Connaught Place, Gurgaon, Vasant Kunj & NFC.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us & Instant Booking — Unique Premium Spa Delhi NCR",
    description:
      "24/7 central concierge helpline +91 97188 92869 or WhatsApp booking across 7 luxury hotel outlets in Delhi NCR.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
