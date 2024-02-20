import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/Components/context/cartcontext";
import { AuthProvider } from "@/Components/context/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "One coffee first",
  description: "ecommerce next",
};

export default function RootLayout({ children }) {
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
