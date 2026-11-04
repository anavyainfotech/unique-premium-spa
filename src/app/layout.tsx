import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://uniquepremiumspa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Unique Premium Spa — Massage & Luxury Spa Services Delhi NCR",
    template: "%s | Unique Premium Spa",
  },
  description:
    "Experience bespoke massage therapies across Delhi NCR: Aerocity, Connaught Place, Gurgaon, New Friends Colony & Vasant Kunj. Call +91 97188 92869.",
  keywords: [
    "spa in Delhi NCR",
    "luxury massage spa Delhi",
    "body massage Gurgaon",
    "Aerocity spa",
    "Connaught Place massage",
    "Vasant Kunj spa center",
    "couple massage Delhi",
    "B2B therapy Delhi NCR",
    "full body massage near me",
  ],
  authors: [{ name: "Unique Premium Spa" }],
  creator: "Unique Premium Spa",
  publisher: "Unique Premium Spa",
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Unique Premium Spa — Massage & Luxury Spa Services Delhi NCR",
    description:
      "Premium wellness and authentic body therapies across Aerocity, CP, Gurgaon, Vasant Kunj & NFC. Certified therapists & private suites.",
    url: siteUrl,
    siteName: "Unique Premium Spa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/spa-massage-generated.png",
        width: 1200,
        height: 630,
        alt: "Unique Premium Spa Delhi NCR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unique Premium Spa — Massage & Luxury Spa Services Delhi NCR",
    description:
      "Premium wellness and authentic body therapies across Delhi NCR. Certified therapists & hygienic suites.",
    images: ["/spa-massage-generated.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Unique Premium Spa",
  image: `${siteUrl}/spa-massage-generated.png`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: "+91-9718892869",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hospitality District, Aerocity",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110037",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5529,
    longitude: 77.1213,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "22:30",
    },
  ],
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#e32678] selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
