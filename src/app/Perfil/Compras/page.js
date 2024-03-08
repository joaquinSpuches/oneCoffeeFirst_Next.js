import ListaComprados from '@/Components/ListaComprados';
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CarritoCounter from '@/Components/CarritoCounter';

import HeaderDetalle from '@/Components/HeaderDetalle';
import Title from '@/Components/Title';

export default async function page(params) {
    const data =await   fetch(
        process.env.URL + "/api/ventas", {
          cache: "no-store",
        }).then((r) => r.json()).catch((e)=>console.log(e));
    
    return (
        /* FALTA CSS */
        //pagina donde esta el historial de compras
        <div>
           
            <header className="flex justify-between items-center h-12">
      <div className="p-5">
<Link href="/Perfil">
<Image
      alt="flecha atras"
      src={
        "https://raw.githubusercontent.com/joaquinSpuches/oneCoffeeFirst/49a7b62290d9c4e9956cc3ce58c52d0caa774aba/Front/public/3916909.svg"
      }
      width={15}
      height={20}
      className="h-5"
      
    />
</Link>
      </div>
      <Link href="/">
        <Image priority alt="logo" unoptimized src={"https://firebasestorage.googleapis.com/v0/b/onecoffeefirst-5da09.appspot.com/o/Logo.svg?alt=media&token=c1833c26-9a1a-4566-abea-6db4cbf75235"} width={100} height={34} />
      </Link>
      <Link href={"/Carrito"}>
        <div className="p-5">
          <Image
            alt="carrito de compras"
            src={
              "https://raw.githubusercontent.com/isbendiyarovanezrin/ShoppingCart/master/images/shopping-cart.png"
            }
            width={25}
            height={25}
          />
          <CarritoCounter />
        </div>
      </Link>

    </header>
       <div className=' m-5 mt-10'>
       <Title text='Compras realizadas' class />
            <ul>
              <Suspense fallback={<h1>Cargando...</h1>}>
              <ListaComprados data={data} />
              </Suspense>

            </ul>
       </div>
        </div>
    )
};
