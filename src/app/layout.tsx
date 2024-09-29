"use client";

import localFont from "next/font/local";
import "./globals.css";

import {Analytics} from "@vercel/analytics/react"
import {ThemeProvider} from "@/app/components/ThemeProvider";
import Navigation from "@/app/components/Navigation";
import {ClerkProvider} from "@clerk/clerk-react";
import {createContext} from "react";

/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/

const MyContext = createContext(null);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? ""}>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="width-full bg-contrast dark:bg-primary text-primary antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
            {children}
          </div>
        </ThemeProvider>
        <MyContext.Provider value={null}>
            {children}
        </MyContext.Provider>
        <Analytics />
        </body>
        </html>
      </ClerkProvider>
  );
}
