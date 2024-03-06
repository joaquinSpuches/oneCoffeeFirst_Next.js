import Image from "next/image"
import Link from "next/link"

import { Suspense } from "react"
export default function Header(params) {
    return(
        <header className=" backdrop-blur-sm px-5 fixed top-0 flex flex-row items-center justify-between w-full">
      
      
       <Link href='/' ><Image 
       alt='logo'
       src={'/static/logo.svg'} width={100} height={34} priority
       /></Link>
        <Link href='/Perfil'> <Image  alt="perfil"
        src={'/avatar.png'} width={40} height={50} className="p-1" />
     </Link>
        </header>
    )
    
};
