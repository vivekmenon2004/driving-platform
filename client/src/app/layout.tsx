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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: {
    default: "Gothenburg Dynamics — Swedish Driving Theory Platform (B-körkort)",
    template: "%s | Gothenburg Dynamics",
  },
  description:
    "Prepare for your Swedish driving theory test with confidence. Master the official Transportstyrelsen Category B (B-körkort) curriculum, practice 1,500+ realistic questions, learn all Swedish road signs, and pass Trafikverket on your first try.",
  keywords: [
    "Gothenburg Dynamics",
    "Swedish driving theory",
    "B-körkort",
    "Trafikverket",
    "Körkortsteori",
    "Swedish road signs",
    "Transportstyrelsen",
    "Driving license Sweden",
  ],
  authors: [{ name: "Gothenburg Dynamics AB" }],
  creator: "Gothenburg Dynamics AB",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
