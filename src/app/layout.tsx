import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thunder Clothes",
  description: "Las mejores prendas deportivas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
