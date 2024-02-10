"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function BotonAtras(params) {
  const router = useRouter();
  return (
    <Image
      alt="flecha atras"
      src={
        "https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/49a7b62290d9c4e9956cc3ce58c52d0caa774aba/Front/public/3916909.svg"
      }
      width={15}
      height={3}
      className="h-5"
      onClick={() => router.back()}
    />
  );
}
