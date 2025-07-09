import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer";




export const metadata: Metadata = {
  title: "Demo Apps",
  description: "Explore our microSaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Fustat:wght@200..800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "Fustat, Arial, Helvetica, sans-serif" }}>
        <div className="pb-2">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
