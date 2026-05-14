import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PasswordGate from "@/components/PasswordGate";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://julietterk.com"),
  title: {
    default: "Juliette Reese-Kari - Paediatric Dietitian",
    template: "%s | Juliette Reese-Kari",
  },
  description:
    "Online paediatric dietetic consultations with Juliette Reese-Kari (BSc, RD). HCPC registered, 6+ years NHS specialist experience. Clear, evidence-based advice for infants, children and teens.",
  openGraph: {
    title: "Juliette Reese-Kari - Paediatric Dietitian",
    description:
      "Online paediatric dietetic consultations. HCPC registered, 6+ years NHS specialist experience.",
    url: "https://julietterk.com",
    siteName: "Juliette Reese-Kari",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Juliette Reese-Kari - Paediatric Dietitian" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juliette Reese-Kari - Paediatric Dietitian",
    description: "Online paediatric dietetic consultations. HCPC registered, 6+ years NHS specialist experience.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KESX7HHED3"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KESX7HHED3');
          `}
        </Script>
        <PasswordGate>
          <Nav />
          <main className="pt-[72px]">{children}</main>
          <Footer />
        </PasswordGate>
      </body>
    </html>
  );
}
