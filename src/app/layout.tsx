import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MentorBridge - Bridging the Gap Between Learning and Industry",
  description:
    "MentorBridge is a Not-For-Profit community helping rural students prepare for the IT industry through hands-on training, mentorship, and real-world project experience.",
  keywords:
    "mentorship, rural students, IT training, software development, career guidance, SSMIET",
  authors: [{ name: "MentorBridge Team" }],
  creator: "MentorBridge Team",
  publisher: "MentorBridge",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "https://91qunajyvl11yxyb.public.blob.vercel-storage.com/logo",
  },
  openGraph: {
    title: "MentorBridge",
    description: "Bridging the Gap Between Learning and Industry",
    type: "website",
    locale: "en_US",
    siteName: "MentorBridge",
  },
  twitter: {
    card: "summary_large_image",
    title: "MentorBridge - Bridging the Gap Between Learning and Industry",
    description:
      "MentorBridge is a Not-For-Profit community helping rural students prepare for the IT industry through hands-on training, mentorship, and real-world project experience.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
