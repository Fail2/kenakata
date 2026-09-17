import type { Metadata } from "next";

import { CartProvider } from "@/store/cart.store";
import { AuthProvider } from "@/store/auth.store";

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
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}