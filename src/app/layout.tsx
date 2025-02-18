import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import QueryClientProviderWrapper from "@/components/querywrapper";


const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chichi Motors | Affordable New & Used Vehicles in Port Harcourt",
  description:
    "Discover a wide range of affordable new and used vehicles at Chichi Motors in Port Harcourt. Quality inspected cars with transparent pricing and flexible financing options.",
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
        <div className="container mx-auto">{children}</div>
          <Footer />
          				</QueryClientProviderWrapper>

      </body>
    </html>
  );
}
