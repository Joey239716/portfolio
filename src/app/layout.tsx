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
  title: "Joey Liu — Software Developer",
  description:
    "Computer Science student at Queen's University with internship experience at CIBC and CanDeal. Building full-stack systems in Python, Go, C++, and TypeScript.",
  openGraph: {
    title: "Joey Liu — Software Developer",
    description:
      "Computer Science student at Queen's University with internship experience at CIBC and CanDeal. Building full-stack systems in Python, Go, C++, and TypeScript.",
    siteName: "Joey Liu",
    images: [{ url: "/avatar.jpg", width: 1200, height: 630, alt: "Joey Liu" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joey Liu — Software Developer",
    description:
      "Computer Science student at Queen's University with internship experience at CIBC and CanDeal. Building full-stack systems in Python, Go, C++, and TypeScript.",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${dmSans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full font-sans bg-background text-foreground">
        <Sidebar />
        <TopBar />
        <MobileNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
