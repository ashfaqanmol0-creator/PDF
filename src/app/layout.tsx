import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iLovePDF | Online PDF tools for PDF lovers",
  description:
    "iLovePDF is an online service to work with PDF files completely free and easy to use. Merge PDF, split PDF, compress PDF, office to PDF, PDF to JPG and more!",
  keywords:
    "Merge PDF, split PDF, combine PDF, compress PDF, convert PDF, Word to PDF, Excel to PDF, PDF to JPG, JPG to PDF",
  authors: [{ name: "iLovePDF Clone" }],
  openGraph: {
    title: "iLovePDF | Online PDF tools for PDF lovers",
    description:
      "Every tool you need to work with PDFs in one place. 100% FREE and easy to use!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
