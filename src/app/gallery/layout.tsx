import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Spa Ambience & Suite Gallery — Unique Premium Spa Delhi NCR",
  description:
    "Explore our photo gallery of private luxury spa suites, jacuzzis, aroma relaxation rooms, and 5-star hotel treatment chambers across Delhi NCR.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Luxury Spa Ambience & Suite Gallery — Unique Premium Spa Delhi NCR",
    description:
      "Explore photos of private luxury spa suites, jacuzzis, and 5-star hotel treatment chambers across Delhi NCR.",
    url: "/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
