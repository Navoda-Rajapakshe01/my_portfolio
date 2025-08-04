import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navoda Rajapakshe",
  description: "Software Engineer specializing in full-stack development, hardware projects, and innovative solutions. Explore my projects, achievements, and technical expertise.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "Portfolio", "Navoda Rajapakshe"],
  authors: [{ name: "Navoda Rajapakshe" }],
  creator: "Navoda Rajapakshe",
  publisher: "Navoda Rajapakshe",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Navoda Rajapakshe - Software Engineer Portfolio",
    description: "Software Engineer specializing in full-stack development, hardware projects, and innovative solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navoda Rajapakshe - Software Engineer Portfolio",
    description: "Software Engineer specializing in full-stack development, hardware projects, and innovative solutions.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
