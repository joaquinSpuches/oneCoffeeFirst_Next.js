"use client"
import Link from "next/link";
import Title from "../Components/Title";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function HeaderDetalle() {
    const router = useRouter()
    const pathName = usePathname()
    return(
        <header className="flex justify-between items-center h-12">
           
            <img alt="flecha atras" src='https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/49a7b62290d9c4e9956cc3ce58c52d0caa774aba/Front/public/3916909.svg'
            className="h-5"
            onClick={()=>router.back() } />

            {/* <Title text={`${pathName}`} /> */}


            <Link href={'/Carrito'}>
            <img  alt="carrito de compras" src={"https://raw.githubusercontent.com/isbendiyarovanezrin/ShoppingCart/master/images/shopping-cart.png"} className="h-5" />

            </Link>
        </header>
    )
};
