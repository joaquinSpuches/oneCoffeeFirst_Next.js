import Image from "next/image"
import Link from "next/link"

import { Suspense } from "react"
export default function Header(params) {
    return(
        <header className=" backdrop-blur-sm px-5 fixed top-0 flex flex-row items-center justify-between w-full">
      
      
       <Link href='/' ><Image 
       alt='logo'
       src={'https://firebasestorage.googleapis.com/v0/b/onecoffeefirst-5da09.appspot.com/o/Logo.svg?alt=media&token=c1833c26-9a1a-4566-abea-6db4cbf75235'} width={100} height={34} priority
       /></Link>
        <Link href='/Perfil' className="flex flex-col items-center"> <Image  alt="perfil"
        src={'https://firebasestorage.googleapis.com/v0/b/onecoffeefirst-5da09.appspot.com/o/Avatar.png?alt=media&token=02cc3d42-f659-4935-8e52-45c28930cc6b'} width={25} height={25} className="p-1" /><p className=" text-center text-xs">Perfil</p>
     </Link>
        </header>
    )
    
};
