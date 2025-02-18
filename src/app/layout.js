"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased style-scroll h-screen`}
      >
      {/* NAVIGATION */}
        <nav className="fixed bg-gray-800 h-screen w-[50px] z-10 hover:w-[200px] transition-all duration-500">
            <ul className="flex flex-col">
                <li className="text-white p-4 overflow-hidden text-ellipsis">
                  <Link href="/">Hangman</Link>
                </li>
                <li className="text-white p-4 overflow-hidden text-ellipsis">
                  <Link href="/weather">Weather</Link>
                </li>
            </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
