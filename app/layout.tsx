import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kiosko NextJs - App Router & Prisma",
  description: "Aplicacion de comidas con NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
