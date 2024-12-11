"use client"
import NavBar from "./components/Navbar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = "Calculadora";
  const description = "Calculadora";
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
