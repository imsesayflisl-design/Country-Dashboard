import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Country Dashboard - Discover Countries' Weather, Currency & More",
  description: "Explore any country's weather conditions, currency exchange rates, and essential details all in one comprehensive dashboard. Powered by REST Countries, Open-Meteo, and Frankfurter APIs.",
  keywords: "country information, weather data, currency exchange, travel information, country details",
  authors: [{ name: "Country Dashboard" }],
  creator: "Country Dashboard",
  openGraph: {
    title: "Country Dashboard",
    description: "Discover any country's weather, currency rates, and essential details — all in one place",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Country Dashboard",
    description: "Discover any country's weather, currency rates, and essential details — all in one place",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
