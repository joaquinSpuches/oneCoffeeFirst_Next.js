import Link from "next/link";
import MiniTitle from "../../Components/MiniTitle"
import Text from "../../Components/Text";
import Image from "next/image";

export default function (params) {
    
    return(
        <div className="mt-12">
            <div className="flex justify-arround ">
                <div className="self-center mx-2 w-1/6 flex justify-center">
                <Image  alt="perfil"
        src={'/avatar.png'} width={100} height={50} className="p-1" />
                </div>
                <div>
                    <MiniTitle text='Marcos Paredes' />
                    <Text text={'marcos@gmail.com'} />
                </div>
            </div>
            <ul>
              <div className="w-full h-fit bg-gray-100">
              <Link href='/Perfil/Admin' >
                    <MiniTitle text='Admin' />    
                </Link>
              </div>
            </ul>
        </div>
    )
};
