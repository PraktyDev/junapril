import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBox from "@/components/ChatBox";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Junapril Solutions Ltd.",
  description: "Your trusted partner in IT security, consulting, recruitment and eCommerce solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Header />
        {children}
        <Footer />
        <div className='z-50 fixed bottom-8 right-8'>
          <ChatBox />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
