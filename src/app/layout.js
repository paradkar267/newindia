import Script from "next/script";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-google-body",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-google-heading",
  display: "swap",
});

export const metadata = {
  title: "New India Export — Connecting Indian Excellence to the World",
  description: "Your trusted partner for dependable global sourcing, premium agricultural exports, and seamless international trade solutions.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth ${inter.variable} ${manrope.variable}`}>
      <body className="bg-[#FBF6EF] text-[#202522] min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
