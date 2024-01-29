import CarruselProductos from "@/app/Components/CarruselProductos"
import Text from "@/app/Components/Text"
import Link from 'next/link'
export default function layout({children}) {
    return(
        <div>
            {children}
                    <div className="  pb-24 bg-gray-100">
            <div className='justify-start w-full p-5' >
            <Link href={'/Productos'} className='justify-between w-full pt-3  flex ' >
            <Text text='Destacados de origen'/>
            <p className=" text-gray-400 ">Ver todo</p>
        </Link>
        </div>
       <Link href={'/Carrito'}>
       <div  className="h-12 l-0  w-screen fixed bottom-10 flex justify-center">
            <div className="bg-indigo-900 rounded-full p-4 w-3/4 items-center justify-center flex">
           <p className="font-bold text-white ">Agregar al carrito </p>
           </div>
        </div>
       </Link>
        <CarruselProductos params='Guatemala' /> 
        </div>
        </div>
    )
};
