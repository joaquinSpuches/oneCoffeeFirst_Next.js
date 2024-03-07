
'use client'

import { useAuthContext } from "@/Components/context/AuthContext"

const ProfileLayout = ({children, login})=>{
 const {user } = useAuthContext()

 return(
    <>
    {
        !user.logged ? children : login
    }
    </>
 )
}

export default ProfileLayout;