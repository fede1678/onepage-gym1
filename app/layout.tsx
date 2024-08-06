import { Header } from "@/components/shared/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One page gym",
  description: "One page gym",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-300`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
