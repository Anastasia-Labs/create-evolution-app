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
  title: "Lucid Evolution Template",
  description: "A Next.js 15 starter template for Lucid Evolution",
  icons: {
    icon: [{ url: "/lucid-evolution-al-red.svg", type: "image/svg+xml" }],
    apple: [{ url: "/lucid-evolution-al-red.svg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="icon"
          href="/lucid-evolution-al-red.svg"
          type="image/svg+xml"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-200 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
