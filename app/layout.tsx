import type { Metadata } from "next";

import { CartProvider } from "@/store/cart.store";

import "./globals.css";

export const metadata: Metadata = {
  title: "KENAKATA",
  description: "Modern e-commerce store",
};

export default function RootLayout({
  children, }: Readonly<{ children: React.ReactNode; }>
) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}