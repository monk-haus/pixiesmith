import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const realm = localFont({
  src: [
    {
      path: "../public/fonts/AT-Realm-v08-Thin-UNLICENSED-TRIAL.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/AT-Realm-v08-Thin-Italic-UNLICENSED-TRIAL.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/AT-Realm-v08-Light-UNLICENSED-TRIAL.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/AT-Realm-v08-Light-Italic-UNLICENSED-TRIAL.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/AT-Realm-v08-Regular-UNLICENSED-TRIAL.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AT-Realm-v08-Regular-Italic-UNLICENSED-TRIAL.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/AT-Realm-v08-Medium-UNLICENSED-TRIAL.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/AT-Realm-v08-Medium-Italic-UNLICENSED-TRIAL.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/AT-Realm-v08-Bold-UNLICENSED-TRIAL.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/AT-Realm-v08-Bold-Italic-UNLICENSED-TRIAL.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/AT-Realm-v08-Heavy-UNLICENSED-TRIAL.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/AT-Realm-v08-Heavy-Italic-UNLICENSED-TRIAL.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-realm",
});

export const metadata: Metadata = {
  title: "Pixiesmith",
  description: "Pixiesmith - Ascend your reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${realm.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
