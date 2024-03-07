import ListaComprados from '@/Components/ListaComprados';
import { Suspense } from 'react';
import { useAuthContext } from '@/Components/context/AuthContext';
import Title from '@/Components/Title';
export default async function page(params) {
    const data =await   fetch(
        process.env.URL + "api/ventas", {
          cache: "no-store",
        }).then((r) => r.json()).catch((e)=>console.log(e));
    
    return (
        /* FALTA CSS */
        //pagina donde esta el historial de compras
        <div>
            <Title text='Compras realizadas' />
            <ul>
              <Suspense fallback={<h1>Cargando...</h1>}>
              <ListaComprados data={data} />
              </Suspense>

            </ul>
        </div>
    )
};
