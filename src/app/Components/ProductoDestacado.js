import Image from "next/image"
import Precio from "../Components/Precio"
import Link from "next/link"
export default function ProductoDestacado({params}) {
        return(
            <Link href='/Productos/DetalleProducto' className="flex justify-between items-center p-10 bg-white rounded-md mx-6">
            <div>
            <div className="text-2xl font-extrabold">
              <h1> ETIOPIA <br/> ORIGEN <br/> ACACIA  </h1> 
              </div>
                <Precio text='USD 9,99' />
              
            </div>
           <div className="flex justify-center">
           <img 
                alt='producto'
                src={'https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/main/Front/public/Asset%204.png'}     
                className="w-1/2"          
                />
           </div>
            </Link>
        )
};
