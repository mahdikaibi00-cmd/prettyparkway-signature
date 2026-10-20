import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pretty Parkway | Luxury Speakeasy Spa & Salon Suites | Frisco, TX",
  description: "Frisco's premier speakeasy spa & salon suites founded by dual-licensed lash & esthetics educator Tempest Pierce. Bespoke Eyelash Extensions, Brow Lamination, Custom Facials, Makeup, and Beauty Academy in Frisco, Texas.",
  keywords: [
    "Pretty Parkway",
    "Tempest Pierce",
    "Lash Extensions Frisco",
    "Brow Lamination Frisco TX",
    "Speakeasy Salon Suites Frisco",
    "Facials Frisco TX",
    "Frisco Beauty Academy"
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/logo_alt.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sans.variable} ${serif.variable} font-sans antialiased bg-[#FAFAFA] text-[#2A2A2A]`}
      >
        {children}
      </body>
    </html>
  );
}
