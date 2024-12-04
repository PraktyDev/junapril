import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBox from "@/components/ChatBox";
import { Toaster } from "@/components/ui/sonner";
import ScrollTop from "@/components/ScrollTop";

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
  icons: {
    icon: '/favicon.ico',
  },
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
        <div className='z-50 fixed bottom-20 right-6'>
          <ScrollTop />
        </div>
        <div className='z-50 fixed bottom-4 right-4 bg-black p-1 rounded-full bg-opacity-20'>
          <ChatBox />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
