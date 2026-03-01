import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default:
      "Truck & Trailer Repair in South Carolina | 24/7 Emergency Service | KM Truck & Trailer",
    template: "%s | KM Truck & Trailer",
  },
  description:
    "Stuck on I-77? K&M offers reliable truck repair and tire service in South Carolina. 24/7 emergency truck repair, DPF cleaning & more. Call (803) 393-4907!",
  keywords: [
    "truck repair South Carolina",
    "trailer repair Columbia SC",
    "DPF cleaning",
    "emergency roadside truck repair",
    "semi truck repair Columbia",
    "24/7 truck repair",
  ],
  openGraph: {
    title: "KM Truck & Trailer Repair | South Carolina",
    description:
      "24/7 emergency truck repair, DPF cleaning, brakes, tires & more in South Carolina. Call (803) 393-4907.",
    type: "website",
    url: "https://kmtrucktrailer.com",
    siteName: "KM Truck & Trailer",
  },
  twitter: {
    card: "summary_large_image",
    title: "KM Truck & Trailer | 24/7 Truck Repair in SC",
    description:
      "Professional truck & trailer repair in South Carolina. Call now!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "KM Truck & Trailer Repair",
              url: "https://kmtrucktrailer.com",
              telephone: "+18033934907",
              email: "repair@kmtrucktrailer.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1278 State Rd S-20-233",
                addressLocality: "Ridgeway",
                addressRegion: "SC",
                postalCode: "29130",
                addressCountry: "US",
              },
              openingHours: "Mo-Su 00:00-23:59",
              priceRange: "$$",
              description:
                "Professional 24/7 truck and trailer repair in South Carolina. DPF cleaning, brakes, tires, emergency roadside and more.",
              foundingDate: "2013",
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
