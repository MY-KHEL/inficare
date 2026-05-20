import type { Metadata } from "next";
import { Inter , Mona_Sans} from 'next/font/google'
import "./globals.css";
import { NavBar } from "@/components/navBar";



const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-inter",
})

const monaSans = Mona_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mona",
});


export const metadata: Metadata = {
  title: "Infi-Care",
  description: "HealthCare. Anytime. Anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${monaSans.variable} h-full antialiased`}
    >
      
      <body className="bg-[#ecf2fe] min-h-full">
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
