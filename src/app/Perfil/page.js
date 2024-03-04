import Link from "next/link";
import MiniTitle from "../../Components/MiniTitle"
import ProfileData from "../../Components/ProfileData"

export default function page (params) {
  

    return(
        <div className="mt-12">
      
                <ProfileData/>
            
            <ul>
              <div className="w-full h-fit bg-gray-100">
              <Link href='/Admin' >
                    <MiniTitle text='Admin' />    
                </Link>
              </div>
            </ul>
        </div>
    )
};
