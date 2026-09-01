import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography",
  description: "Shooting photos of people, places, and everything in between.",
  alternates: {
    canonical: "/photography/",
  },
  openGraph: {
    title: "Hannah Casier | Photographer",
    description:
      "Shooting photos of people, places, and everything in between.",
    url: "/photography/",
    images: [
      {
        url: "/og-image-photographer.png",
        width: 1200,
        height: 627,
        alt: "Hannah Casier, Photographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hannah Casier | Photographer",
    description:
      "Shooting photos of people, places, and everything in between.",
    images: ["/og-image-photographer.png"],
  },
};

export default function PhotographyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
