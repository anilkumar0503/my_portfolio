import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " Anil Kumar Bakkashetti - Product Manager & Technology Leader",
  description: "AI-Powered EdTech Platforms | SaaS Ecosystem Architect | 10 years of experience building scalable educational systems",
  keywords: "Product Manager, EdTech, AI, SaaS, Technology Leader, LMS, ERP, CRM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
