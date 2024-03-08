'use client'
import { useAuthContext } from "./context/AuthContext";
import MiniTitle from "./MiniTitle";

export default function ListaComprados({data}) {
    const {user} = useAuthContext();  
 
    
    const compras = data.filter((e) => e.user === user.uid);      
    console.log(data);
     
    return(
        <ul className="flex flex-col-reverse">
           {compras.map((e,i) => {
            let total = 0;
                // for(let i = 0; i<e.cart.length; i++){
                //     console.log(e.cart[i]);
                // }
            return(
                //le asigno un numero al azar en el id
                <div key={Math.random()} className=" border-y-[1px] border-gray-400"> 
                <MiniTitle text={`Compra ${e.fecha}`} />
                <ul>
                    {e.cart.map((e) => {
                         total += Number(e.item.precio)
                       
                        return(
                            <li key={Math.random()}>
                                {e.item.titulo} - USD {e.item.precio} 
                                </li>
           )})}
                        
                    </ul>
                    <p className=" font-bold ">Total: USD {total.toFixed(2)}</p>
                    </div>
            )
            }
            )}
        </ul>
    )
};
