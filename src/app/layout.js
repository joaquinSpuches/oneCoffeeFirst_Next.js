import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/Components/context/cartcontext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "One coffee first",
  description: "ecommerce next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
