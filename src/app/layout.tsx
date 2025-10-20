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
  title: "Rowe Tampus - Software Engineer Portfolio",
  description: "Portfolio of Rowe Tampus, a passionate software engineer with expertise in full-stack development, React, Next.js, and modern web technologies.",
  keywords: ["software engineer", "portfolio", "React", "Next.js", "TypeScript", "full-stack developer"],
  authors: [{ name: "Rowe Tampus" }],
  openGraph: {
    title: "Rowe Tampus - Software Engineer Portfolio",
    description: "Portfolio of Rowe Tampus, a passionate software engineer with expertise in full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
