import Image from "next/image"
import Link from "next/link"

import { Suspense } from "react"
export default function Header(params) {
    return(
        <header className=" backdrop-blur-sm px-5 fixed top-0 flex flex-row items-center justify-between w-full">
      
      
       <Link href='/' ><Image 
       alt='logo'
       src={'@/public/static/logo.svg'} width={100} height={34} priority
       /></Link>
        <Link href='/Perfil' className="flex flex-col items-center"> <Image  alt="perfil"
        src={'@/public/static/avatar.png'} width={25} height={25} className="p-1" /><p className=" text-center text-xs">Perfil</p>
     </Link>
        </header>
    )
    
};
