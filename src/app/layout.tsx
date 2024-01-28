import { Navbar } from "@/components/navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import config from "@/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: config.mainTitle,
  description: config.mainDescription,
  openGraph: {
    title: config.mainTitle,
    url: `https://fresh-herbs.vercel.app`,
    content: config.mainDescription,
    description: config.mainDescription,
    images: [
      "https://ecolife.posthemes.com/demo1/img/c/11_thumb.jpg",
      "https://ecolife.posthemes.com/demo1/img/c/12_thumb.jpg",
      "https://ecolife.posthemes.com/demo1/img/c/13_thumb.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
