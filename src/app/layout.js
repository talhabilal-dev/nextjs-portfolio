import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Talha Bilal - Backend Developer Portfolio",
  description: "Showcasing my skills and projects as a backend developer specializing in Node.js, MySQL, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark:bg-[#10002b] bg-white"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Showcasing backend development expertise and projects in Node.js, MySQL, and other technologies." />
        <meta name="keywords" content="Talha Bilal, Backend Developer, Node.js, MySQL, MongoDB, Portfolio" />
        <meta name="author" content="Talha Bilal" />
        <meta property="og:title" content="Talha Bilal - Backend Developer Portfolio" />
        <meta property="og:description" content="Explore my portfolio showcasing backend development projects and skills." />
        <meta property="og:image" content="/images/portfolio-preview.png" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Talha Bilal - Backend Developer Portfolio" />
        <meta name="twitter:description" content="Explore my portfolio showcasing backend development projects and skills." />
        <meta name="twitter:image" content="/images/portfolio-preview.png" />
        <link rel="icon" href="/images/portfolio-logo.png" sizes="32x32" />
        <link rel="icon" href="/images/portfolio-logo.png" sizes="64x64" />
        <link rel="icon" href="/images/portfolio-logo.png" sizes="128x128" />
        <link rel="canonical" href="https://your-portfolio-url.com" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
