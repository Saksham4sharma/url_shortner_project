import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bitlinks the URL shortener",
  description: "helps you shorten your long links",
};

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
