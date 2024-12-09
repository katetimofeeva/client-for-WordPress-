import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "InnoTrack app",
  description: "website for IT consulting company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Navbar />
        <main className="flex-1 px-4 mt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
