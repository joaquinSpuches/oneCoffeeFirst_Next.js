import ListaComprados from '@/Components/ListaComprados';
import { Suspense } from 'react';
import { useAuthContext } from '@/Components/context/AuthContext';
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
          <HeaderDetalle/>
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
