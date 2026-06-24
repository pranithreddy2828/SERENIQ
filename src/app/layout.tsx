import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SERENIQ | Enterprise IT Consulting & Intelligent Software Solutions",
  description: "Delivering world-class custom software development, artificial intelligence, cloud solutions, and digital transformation consulting for leading enterprises.",
  keywords: "IT Consulting, Software Development, Artificial Intelligence, Cloud Solutions, Web Development, Data Engineering, Machine Learning, Digital Transformation, IT Staffing",
  icons: {
    icon: "/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-white text-slate-900 flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900 light-landing-theme">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
