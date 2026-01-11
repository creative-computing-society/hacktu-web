import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HackTU - CCS",
  description: "HackTU is an MLH Official annual hackathon hosted in Thapar Institute of Engineering and Technology, Patiala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-[CabinetGrotesk-Variable] antialiased`} style={{
        backgroundColor: "oklch(0.9427 0.0268 242.57)",
        backgroundImage: "linear-gradient(90deg, rgba(128, 128, 128, 0.2) 1px, rgba(0, 0, 0, 0) 0px), linear-gradient(rgba(128, 128, 128, 0.2) 1px, rgba(0, 0, 0, 0) 0px)",
      }}>
        {children}
      </body>
    </html>
  );
}
