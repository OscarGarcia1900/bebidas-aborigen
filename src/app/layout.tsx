import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aborigen - Bebidas Ancestrales Artesanales | Guarapo, Viche, Vinete",
  description: "Bebidas ancestrales artesanales de Colombia. Guarapo campeón 2024, Viche Curado, Vinete y Aguardiente Nasa. Probióticos naturales, tradición del Pacífico y comunidades indígenas. Envíos en Bogotá.",
  keywords: ["bebidas ancestrales", "guarapo artesanal", "viche curado", "vinete", "aguardiente nasa", "bebidas fermentadas", "probióticos naturales", "bebidas del pacífico", "bebidas colombianas", "guarapo bogotá"],
  authors: [{ name: "Aborigen" }],
  creator: "Aborigen",
  publisher: "Aborigen",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://aborigen.com",
    siteName: "Aborigen - Bebidas Ancestrales",
    title: "Aborigen - Bebidas Ancestrales Artesanales de Colombia",
    description: "Guarapo campeón 2024, Viche Curado del Pacífico, Vinete y más. Tradición, salud y sabor en cada botella.",
    images: [
      {
        url: "/images/guarapo.png",
        width: 800,
        height: 600,
        alt: "Guarapo Aborigen - Campeón Festival 2024",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aborigen - Bebidas Ancestrales de Colombia",
    description: "Guarapo campeón 2024 🏆 | Viche Curado | Vinete | Tradición y salud en cada sorbo",
    images: ["/images/guarapo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          {children}
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
