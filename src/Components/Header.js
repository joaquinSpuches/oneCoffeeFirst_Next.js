import Image from "next/image"
import Link from "next/link"
import Menu from './Menu'
export default function Header(params) {
    return(
        <header className=" backdrop-blur-sm px-5 fixed top-0 flex flex-row items-center justify-between w-full">
        <Menu/>
      
       <Link href='/' ><Image 
       alt='logo'
       src={'/logo.svg'} width={100} height={100}
       /></Link>
        <Link href='/Perfil'> <Image  alt="perfil"
        src={'/avatar.png'} width={40} height={50} className="p-1" />
     </Link>
        </header>
    )
    
};
