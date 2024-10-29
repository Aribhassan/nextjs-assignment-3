
// import type { Metadata } from "next";
// import localFont from "next/font/local";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../app/component/navbar/page"


export const metadata: Metadata = {
  title: "Pak Wheels",
  description: "Generated by Abdullah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    < Navbar />
          {children}

    {/* <Footer /> */}
    {/* <footer className="grid h-screen w-full bg-slate-500">
                <div className="flex  text-center text-4xl">
                    Created by
                <Link href="https://www.linkedin.com/in/hassan-farid-8541832ba/" className="hover:text-gray-400 text-blue-500">Hassan Farid</Link>
                </div>
    </footer> */}
{/* <footer className="grid mt-80 bg-slate-500">
  <div className="flex items-center gap-2 text-4xl text-center text-white">
    <p>Created by</p>
    <Link 
      href="https://www.linkedin.com/in/hassan-farid-8541832ba/" 
      className="hover:text-gray-400 text-blue-400"
    >
      Hassan Farid
    </Link>
  </div>
</footer> */}

    </body>
  </html>
  );
}
