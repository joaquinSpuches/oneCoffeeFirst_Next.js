import Link from "next/link";
import MiniTitle from "../../Components/MiniTitle"
import ProfileData from "../../Components/ProfileData"
import LogoutButton from "@/Components/LogoutButton";

export default function page (params) {
  

    return(
        <div className="mt-12">
      <div className="flex justify-between p-5">
                <ProfileData/>
                <LogoutButton/></div>
            <ul className=" flex flex-col items-center">
              <div className=" sm:w-24 text-center rounded-lg h-fit bg-slate-900 text-blue-100">
              <Link href='/Admin' >
                    <MiniTitle text='Admin' />    
                </Link>

              </div>
            </ul>
        </div>
    )
};
