import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import QueryClientProviderWrapper from "@/components/querywrapper";


const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Affordable New & Used Vehicles | Chichi Motors",
  description:
    "Explore affordable vehicles, both used and brand new, in excellent condition with Chichi Motors. Browse our collection, book a meeting, and find your perfect car today.",
  keywords: [
    "Chichi Motors",
    "affordable vehicles",
    "used cars",
    "new cars",
    "excellent condition vehicles",
    "car showroom",
    "buy a car",
    "vehicle inspection",
    "car dealers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased bg-white`}>
        				<QueryClientProviderWrapper>
        <Navbar/>
        <div className="container mx-auto">{children}</div>
          <Footer />
          				</QueryClientProviderWrapper>

      </body>
    </html>
  );
}
