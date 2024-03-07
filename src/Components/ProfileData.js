'use client'
import Image from "next/image"
import MiniTitle from "./MiniTitle"
import Text from "./Text"
import { useAuthContext } from "./context/AuthContext"  



export default function ProfileData(params) {

    const {user} = useAuthContext()


return(
    <div className="flex justify-arround ">
       <div className="self-center mx-2 w-1/6 flex justify-center">
                <Image  alt="perfil"
        src={'https://firebasestorage.googleapis.com/v0/b/onecoffeefirst-5da09.appspot.com/o/Avatar.png?alt=media&token=02cc3d42-f659-4935-8e52-45c28930cc6b'} width={100} height={50} className="p-1" />
                </div>
                <div>
                    <MiniTitle text={user.email} />
                    <Text text={user.email} />
                </div>
                </div>
    )
};
