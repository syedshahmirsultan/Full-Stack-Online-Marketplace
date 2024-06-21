import type { Metadata } from "next";
import "./globals.css";
import TopLevel from "./components/TopLevel";
import NavBar from "./components/NavBar";


export const metadata: Metadata = {
  title: "TopShop - online marketplace",
  description: "Generated by Syed Shahmir Sultan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopLevel/>
        <NavBar/>
        {children}</body>
    </html>
  );
}
