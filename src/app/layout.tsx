import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import TopBar from "@/components/TopBar";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joey's Portfolio",
  description: "Personal portfolio of Joey — developer, builder, creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full font-sans bg-background text-foreground">
        <Sidebar />
        <TopBar />
        <MobileNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
