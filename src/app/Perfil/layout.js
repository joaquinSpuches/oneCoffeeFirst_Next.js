"use client";
import HeaderDetalle from "../../Components/HeaderDetalle";
import { useAuthContext } from "@/Components/context/AuthContext";

export default function AdminLayout({ children, login }) {
  const { user } = useAuthContext();

  return <>{children}</>;
}
